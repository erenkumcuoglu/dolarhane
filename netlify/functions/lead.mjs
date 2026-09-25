/**
 * LEAD KAPISI — sitedeki bütün formların tek varış noktası (/api/lead).
 *
 * Neden bir kapı: form doğrudan bir üçüncü tarafa gitmiyor. Önce buraya
 * geliyor; burada doğrulanıyor, spam eleniyor, onay kaydı ekleniyor ve
 * iki yere birden yazılıyor:
 *
 *   1. HubSpot (CRM)   — kişi + satış hattında "Yeni lead" aşamasında bir fırsat
 *   2. Google Sheets   — ham kayıt, yedek. CRM değişse de veri Drive'da kalır.
 *
 * Yarın CRM değişirse ya da kendi backend'imiz yazılırsa site DEĞİŞMEZ;
 * yalnız bu dosyanın yazdığı yer değişir.
 *
 * Ortam değişkenleri (Netlify → Site configuration → Environment variables):
 *   HUBSPOT_TOKEN          Private App erişim anahtarı
 *   HUBSPOT_PIPELINE_ID    araclar/lead/hubspot-kurulum.mjs çıktısı
 *   HUBSPOT_STAGE_ID       aynı çıktıdaki "Yeni lead" aşaması
 *   SHEETS_WEBHOOK_URL     Apps Script web uygulaması adresi
 *   SHEETS_SECRET          Apps Script'teki GIZLI ile aynı
 *
 * Hiçbiri tanımlı değilse 503 döner ve form ziyaretçiye verinin hiçbir
 * yere gitmediğini açıkça söyler (dürüstlük kuralı). En az biri yazılırsa
 * 200 döner; biri düşerse hata Netlify loglarına yazılır.
 */

export const config = { path: "/api/lead" };

/* Onay metinlerinin sürümü. Metin değişirse bu da değişir; her kayıt
   hangi metni gördüğünü taşır (ispat yükü bizde). */
const KVKK_SURUM = "kvkk-2026-09-25";
const PAZARLAMA_SURUM = "etk-2026-09-25";

const ALANLAR = [
  "ad", "soyad", "eposta", "tel", "band", "kanal", "ev",
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
  "gclid", "fbclid", "giris_sayfasi", "referrer", "sayfa",
];

const json = (durum, veri) =>
  new Response(JSON.stringify(veri), {
    status: durum,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });

function temizle(v, sinir = 200) {
  return String(v ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, sinir);
}

function dogrula(d) {
  const h = [];
  if (d.ad.length < 2) h.push("ad");
  if (d.soyad.length < 2) h.push("soyad");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.eposta)) h.push("eposta");
  const rakam = d.tel.replace(/\D/g, "");
  if (rakam.length < 10 || rakam.length > 15) h.push("tel");
  if (!d.band) h.push("band");
  if (!d.kvkk) h.push("kvkk");
  return h;
}

/* ── HubSpot ─────────────────────────────────────────────────── */
async function hubspot(d) {
  const token = process.env.HUBSPOT_TOKEN;
  if (!token) return { atlandi: true };
  const bas = { authorization: `Bearer ${token}`, "content-type": "application/json" };

  const ozellik = {
    email: d.eposta,
    firstname: d.ad,
    lastname: d.soyad,
    phone: d.tel,
    dh_butce_bandi: d.band,
    dh_iletisim_kanali: d.kanal,
    dh_ilgilenilen_ev: d.ev,
    dh_pazarlama_izni: d.pazarlama ? "true" : "false",
    dh_onay_kaydi: `${d.zaman} · ${KVKK_SURUM}${d.pazarlama ? ` · ${PAZARLAMA_SURUM}` : ""}`,
    dh_utm_source: d.utm_source,
    dh_utm_medium: d.utm_medium,
    dh_utm_campaign: d.utm_campaign,
    dh_utm_term: d.utm_term,
    dh_utm_content: d.utm_content,
    dh_gclid: d.gclid,
    dh_fbclid: d.fbclid,
    dh_giris_sayfasi: d.giris_sayfasi,
    dh_form_sayfasi: d.sayfa,
    dh_referrer: d.referrer,
  };
  /* Boş alan göndermiyoruz: ikinci formda boş kalan UTM, ilk kayıttakini silmesin. */
  for (const k of Object.keys(ozellik)) if (ozellik[k] === "") delete ozellik[k];

  const k = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert", {
    method: "POST",
    headers: bas,
    body: JSON.stringify({ inputs: [{ idProperty: "email", id: d.eposta, properties: ozellik }] }),
  });
  if (!k.ok) throw new Error(`HubSpot kişi ${k.status}: ${(await k.text()).slice(0, 300)}`);
  const kisiId = (await k.json()).results?.[0]?.id;

  const pipeline = process.env.HUBSPOT_PIPELINE_ID;
  const asama = process.env.HUBSPOT_STAGE_ID;
  if (!pipeline || !asama || !kisiId) return { kisiId };

  const f = await fetch("https://api.hubapi.com/crm/v3/objects/deals", {
    method: "POST",
    headers: bas,
    body: JSON.stringify({
      properties: {
        dealname: `${d.ad} ${d.soyad} · ${d.ev || d.band}`,
        pipeline,
        dealstage: asama,
      },
      associations: [
        { to: { id: kisiId }, types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 3 }] },
      ],
    }),
  });
  if (!f.ok) throw new Error(`HubSpot fırsat ${f.status}: ${(await f.text()).slice(0, 300)}`);
  return { kisiId, firsatId: (await f.json()).id };
}

/* ── Google Sheets (Apps Script web uygulaması) ─────────────── */
async function sheets(d) {
  const url = process.env.SHEETS_WEBHOOK_URL;
  if (!url) return { atlandi: true };
  const r = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      gizli: process.env.SHEETS_SECRET || "",
      kayit: {
        zaman: d.zaman,
        ad: d.ad,
        soyad: d.soyad,
        eposta: d.eposta,
        tel: d.tel,
        band: d.band,
        kanal: d.kanal,
        ev: d.ev,
        kaynak: d.utm_source || (d.gclid ? "google-ads" : d.fbclid ? "meta-ads" : d.referrer ? "yonlendirme" : "dogrudan"),
        utm_source: d.utm_source,
        utm_medium: d.utm_medium,
        utm_campaign: d.utm_campaign,
        utm_term: d.utm_term,
        utm_content: d.utm_content,
        gclid: d.gclid,
        fbclid: d.fbclid,
        giris_sayfasi: d.giris_sayfasi,
        form_sayfasi: d.sayfa,
        referrer: d.referrer,
        kvkk_onayi: `${KVKK_SURUM}`,
        pazarlama_izni: d.pazarlama ? PAZARLAMA_SURUM : "yok",
        asama: "Yeni lead",
      },
    }),
    redirect: "follow",
    signal: AbortSignal.timeout(7000),
  }).catch((e) => {
    /* Apps Script bazen 30 sn'ye kadar yavaşlıyor; Netlify fonksiyonu 10 sn'de
       kesilir. İstek Google'a ulaştıysa betik yine de satırı yazar; bekleme. */
    if (e?.name === "TimeoutError" || e?.name === "AbortError") return null;
    throw e;
  });
  if (!r) {
    console.warn("[lead] sheets: yanıt 7 sn'de gelmedi, satır onaysız");
    return { ok: true, onaysiz: true };
  }
  const metin = await r.text();
  /* Yavaş çalışmada Google'ın yanıt adresi (echo) 404 dönebiliyor; betik
     o sırada satırı zaten yazmış oluyor. Onaysız say, logla. */
  if (r.status === 404 && r.url.includes("googleusercontent.com/macros/echo")) {
    console.warn("[lead] sheets: echo 404, satır onaysız");
    return { ok: true, onaysiz: true };
  }
  if (!r.ok || !metin.includes('"ok":true')) throw new Error(`Sheets ${r.status}: ${metin.slice(0, 200)}`);
  return { ok: true };
}

export default async (req) => {
  if (req.method !== "POST") return json(405, { hata: "yontem" });

  let form;
  try {
    form = await req.formData();
  } catch {
    return json(400, { hata: "bicim" });
  }

  /* Bal küpü dolu: bot. Sessizce "aldık" deyip hiçbir yere yazmıyoruz. */
  if (temizle(form.get("_gotcha"))) return json(200, { ok: true });

  const d = {};
  for (const a of ALANLAR) d[a] = temizle(form.get(a), a === "referrer" ? 300 : 200);
  d.eposta = d.eposta.toLowerCase();
  d.kvkk = form.get("kvkk") === "on" || form.get("kvkk") === "true";
  d.pazarlama = form.get("pazarlama") === "on" || form.get("pazarlama") === "true";
  d.zaman = new Date().toISOString();

  const hatalar = dogrula(d);
  if (hatalar.length) return json(422, { hata: "dogrulama", alanlar: hatalar });

  if (!process.env.HUBSPOT_TOKEN && !process.env.SHEETS_WEBHOOK_URL) {
    return json(503, { hata: "hedef-yok" });
  }

  const [h, s] = await Promise.allSettled([hubspot(d), sheets(d)]);
  const yazildi = [h, s].filter((x) => x.status === "fulfilled" && !x.value?.atlandi).length;
  for (const [ad, x] of [["hubspot", h], ["sheets", s]]) {
    if (x.status === "rejected") console.error(`[lead] ${ad}:`, x.reason?.message || x.reason);
  }

  if (!yazildi) return json(502, { hata: "yazilamadi" });
  return json(200, { ok: true });
};
