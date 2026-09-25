/**
 * HubSpot tek seferlik kurulum — Dolarhane alanları ve satış hattı.
 *
 * Çalıştırma:  HUBSPOT_TOKEN=pat-... node araclar/lead/hubspot-kurulum.mjs
 *
 * Ne yapar (tekrar çalıştırmak güvenli; var olanı atlar):
 *   1. Kişi kartına "Dolarhane" alan grubunu ve lead kapısının yazdığı
 *      alanları ekler (bütçe, kanal, ilgilenilen ev, pazarlama izni,
 *      onay kaydı, UTM/gclid/fbclid, giriş ve form sayfası, referrer).
 *   2. "Dolarhane Satış" fırsat hattını kurar:
 *      Yeni lead → İlk temas yapıldı → Randevu alındı → Görüşme yapıldı →
 *      Teklif gönderildi → Sözleşme aşamasında → Kazanıldı / Kaybedildi
 *   3. Netlify'a girilecek HUBSPOT_PIPELINE_ID ve HUBSPOT_STAGE_ID'yi yazar.
 *
 * Private App kapsamları: crm.objects.contacts.read/write,
 * crm.objects.deals.read/write, crm.schemas.contacts.write.
 */
const TOKEN = process.env.HUBSPOT_TOKEN;
if (!TOKEN) {
  console.error("HUBSPOT_TOKEN tanımlı değil.");
  process.exit(1);
}
const API = "https://api.hubapi.com";
const bas = { authorization: `Bearer ${TOKEN}`, "content-type": "application/json" };

async function istek(yol, yontem = "GET", govde) {
  const r = await fetch(API + yol, { method: yontem, headers: bas, body: govde ? JSON.stringify(govde) : undefined });
  const metin = await r.text();
  return { durum: r.status, veri: metin ? JSON.parse(metin) : null };
}

const BANTLAR = ["120.000 – 150.000 $", "150.000 – 200.000 $", "200.000 – 300.000 $", "300.000 $ üzeri", "Henüz netleşmedi"];
const KANALLAR = ["WhatsApp", "Telefon", "E-posta"];
const secenek = (liste) => liste.map((x, i) => ({ label: x, value: x, displayOrder: i }));
const metin = (name, label) => ({ name, label, type: "string", fieldType: "text" });

const ALANLAR = [
  { name: "dh_butce_bandi", label: "Yatırım tutarı", type: "enumeration", fieldType: "select", options: secenek(BANTLAR) },
  { name: "dh_iletisim_kanali", label: "Tercih edilen kanal", type: "enumeration", fieldType: "select", options: secenek(KANALLAR) },
  metin("dh_ilgilenilen_ev", "İlgilendiği ev"),
  {
    name: "dh_pazarlama_izni",
    label: "Ticari ileti izni (ETK/İYS)",
    type: "bool",
    fieldType: "booleancheckbox",
    options: [
      { label: "Evet", value: "true", displayOrder: 0 },
      { label: "Hayır", value: "false", displayOrder: 1 },
    ],
  },
  metin("dh_onay_kaydi", "Onay kaydı (zaman · metin sürümü)"),
  metin("dh_utm_source", "utm_source"),
  metin("dh_utm_medium", "utm_medium"),
  metin("dh_utm_campaign", "utm_campaign"),
  metin("dh_utm_term", "utm_term"),
  metin("dh_utm_content", "utm_content"),
  metin("dh_gclid", "gclid"),
  metin("dh_fbclid", "fbclid"),
  metin("dh_giris_sayfasi", "Giriş sayfası"),
  metin("dh_form_sayfasi", "Form sayfası"),
  metin("dh_referrer", "Referrer"),
];

const ASAMALAR = [
  ["Yeni lead", "0.05"],
  ["İlk temas yapıldı", "0.1"],
  ["Randevu alındı", "0.2"],
  ["Görüşme yapıldı", "0.4"],
  ["Teklif gönderildi", "0.6"],
  ["Sözleşme aşamasında", "0.8"],
  ["Kazanıldı", "1.0", true],
  ["Kaybedildi", "0.0", true],
];

// 1. alan grubu ve alanlar
const g = await istek("/crm/v3/properties/contacts/groups", "POST", { name: "dolarhane", label: "Dolarhane", displayOrder: -1 });
console.log(g.durum === 201 ? "✓ alan grubu oluşturuldu" : g.durum === 409 ? "· alan grubu zaten var" : `! alan grubu: ${g.durum} ${JSON.stringify(g.veri)}`);

for (const a of ALANLAR) {
  const r = await istek("/crm/v3/properties/contacts", "POST", { ...a, groupName: "dolarhane" });
  console.log(r.durum === 201 ? `✓ ${a.name}` : r.durum === 409 ? `· ${a.name} zaten var` : `! ${a.name}: ${r.durum} ${JSON.stringify(r.veri)}`);
}

// 2. satış hattı
const liste = await istek("/crm/v3/pipelines/deals");
let hat = liste.veri?.results?.find((p) => p.label === "Dolarhane Satış");
if (hat) {
  console.log("· satış hattı zaten var");
} else {
  const r = await istek("/crm/v3/pipelines/deals", "POST", {
    label: "Dolarhane Satış",
    displayOrder: 0,
    stages: ASAMALAR.map(([label, probability, kapali], i) => ({
      label,
      displayOrder: i,
      metadata: kapali ? { probability, isClosed: "true" } : { probability },
    })),
  });
  if (r.durum !== 201) {
    console.error(`! satış hattı: ${r.durum} ${JSON.stringify(r.veri)}`);
    process.exit(1);
  }
  hat = r.veri;
  console.log("✓ satış hattı oluşturuldu");
}

const ilk = hat.stages.find((s) => s.label === "Yeni lead");
console.log("\nNetlify ortam değişkenleri:");
console.log(`  HUBSPOT_PIPELINE_ID=${hat.id}`);
console.log(`  HUBSPOT_STAGE_ID=${ilk?.id}`);
