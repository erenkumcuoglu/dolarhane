"use client";

import { useEffect, useState } from "react";
import { KONTAK } from "@/lib/kontak";

/**
 * V4 görüşme formu — kapanışta ve ev detay sayfasında aynı bileşen.
 *
 * Huni: form → (başarılıysa) Calendly. Sıra bilinçli: kişi takvimde
 * vazgeçse bile iletişim bilgisi elimizde kalır.
 *
 * Dürüstlük kuralı (Form2/Kapanis3'ten): endpoint boşken uydurma bir
 * "aldık" ekranı GÖSTERİLMEZ; bilgilerin hiçbir yere gönderilmediği
 * yazılı söylenir.
 *
 * `ev` verilirse gizli alan olarak gönderilir — hangi evden geldiği
 * lead'le birlikte düşer. `_gotcha` bal küpü: insan görmez, bot doldurur.
 *
 * `kanal`: kişinin nasıl aranmak istediği — dönüş oranını artırıyor.
 * İz alanları (UTM, gclid/fbclid, giriş sayfası, referrer) gizli gider;
 * sessionStorage'da tutulur ki ziyaretçi ana sayfadan ev detayına
 * geçince de reklam kaynağı kaybolmasın.
 *
 * BANTLAR peşin modele göre: giriş bileti ~150 bin $.
 */
type Alan = "ad" | "soyad" | "eposta" | "tel" | "band";
type Hatalar = Partial<Record<Alan | "kvkk", string>>;

const BANTLAR = [
  "120.000 – 150.000 $",
  "150.000 – 200.000 $",
  "200.000 – 300.000 $",
  "300.000 $ üzeri",
  "Henüz netleşmedi",
];

const KANALLAR = ["WhatsApp", "Telefon", "E-posta"] as const;
const IZ_ANAHTARLARI = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
const IZ_DEPO = "dh-iz";

/** İlk girişteki reklam izini okur, oturum boyunca saklar. */
function izOku(): Record<string, string> {
  let iz: Record<string, string> = {};
  try {
    iz = JSON.parse(sessionStorage.getItem(IZ_DEPO) || "{}");
  } catch {}
  const q = new URLSearchParams(location.search);
  const yeni: Record<string, string> = {};
  for (const k of IZ_ANAHTARLARI) {
    const v = q.get(k);
    if (v) yeni[k] = v.slice(0, 200);
  }
  if (Object.keys(yeni).length || !iz.giris_sayfasi) {
    iz = {
      ...iz,
      ...yeni,
      giris_sayfasi: iz.giris_sayfasi || location.pathname,
      referrer: iz.referrer || document.referrer.slice(0, 200),
    };
    try {
      sessionStorage.setItem(IZ_DEPO, JSON.stringify(iz));
    } catch {}
  }
  return iz;
}

type Props = {
  /** Sayfada iki form aynı anda bulunabildiği için id öneki. */
  onek: string;
  /** İlgilenilen ev (detay sayfasından gelir). */
  ev?: string;
  gonderEtiket?: string;
};

export function LeadForm4({ onek, ev, gonderEtiket = "Görüşme alın" }: Props) {
  const [d, setD] = useState({ ad: "", soyad: "", eposta: "", tel: "", band: "" });
  const [kanal, setKanal] = useState<string>(KANALLAR[0]);
  const [iz, setIz] = useState<Record<string, string>>({});
  useEffect(() => setIz(izOku()), []);
  const [kvkk, setKvkk] = useState(false);
  const [hata, setHata] = useState<Hatalar>({});
  const [durum, setDurum] = useState("");
  const [gonderiliyor, setGonderiliyor] = useState(false);
  const [bitti, setBitti] = useState(false);

  const id = (a: string) => `${onek}-${a}`;
  const yaz = (a: Alan) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setD({ ...d, [a]: e.target.value });
    if (hata[a]) setHata({ ...hata, [a]: undefined });
  };

  function dogrula(): Hatalar {
    const h: Hatalar = {};
    if (d.ad.trim().length < 2) h.ad = "Adınızı yazın.";
    if (d.soyad.trim().length < 2) h.soyad = "Soyadınızı yazın.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.eposta.trim()))
      h.eposta = "Geçerli bir e-posta adresi girin.";
    const rakam = d.tel.replace(/\D/g, "");
    if (rakam.length < 10 || rakam.length > 15) h.tel = "Geçerli bir telefon numarası girin.";
    if (!d.band) h.band = "Bir aralık seçin.";
    if (!kvkk) h.kvkk = "Devam etmek için onaylamanız gerekiyor.";
    return h;
  }

  async function gonder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (gonderiliyor) return;
    const form = e.currentTarget;
    if ((form.elements.namedItem("_gotcha") as HTMLInputElement | null)?.value) return;

    const h = dogrula();
    setHata(h);
    if (Object.keys(h).length) {
      setDurum("Eksik alanlar var. İşaretlediklerimizi tamamlayın.");
      document.getElementById(id(Object.keys(h)[0]))?.focus();
      return;
    }

    if (!KONTAK.formEndpoint) {
      setDurum(
        "Form henüz bir hedefe bağlanmadı, bu yüzden talebinizi kaydedemiyoruz. Bilgileriniz hiçbir yere gönderilmedi.",
      );
      return;
    }

    setGonderiliyor(true);
    setDurum("");
    const ac = new AbortController();
    const zaman = setTimeout(() => ac.abort(), 12_000);
    try {
      const res = await fetch(KONTAK.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        signal: ac.signal,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setBitti(true);
    } catch (err) {
      setGonderiliyor(false);
      setDurum(
        err instanceof Error && err.name === "AbortError"
          ? "Bağlantı zaman aşımına uğradı. Tekrar deneyin."
          : "Gönderemedik. Bağlantınızı kontrol edip tekrar deneyin.",
      );
    } finally {
      clearTimeout(zaman);
    }
  }

  if (bitti) {
    return (
      <div className="v4-kapanis__kutu" role="status">
        <p className="v4-h3 v4-h2--acik">Aldık.</p>
        <p className="v4-kapanis__lede">
          Bir iş günü içinde dönüyoruz. Beklemek istemezseniz görüşme saatini şimdi seçin.
        </p>
        {KONTAK.calendly ? (
          <a className="v4-dugme v4-dugme--tam" href={KONTAK.calendly} target="_blank" rel="noopener">
            Takvimden saat seçin
          </a>
        ) : (
          <span className="v4-todo">[CALENDLY LİNKİ]</span>
        )}
      </div>
    );
  }

  const kutu = (a: Alan, etiket: string, girdi: React.ReactNode, genis = false) => (
    <div className={`v4-alan v4-alan--kutu${hata[a] ? " v4-alan--hata" : ""}${genis ? " v4-alan--genis" : ""}`}>
      <label htmlFor={id(a)}>{etiket}</label>
      {girdi}
      <span className="v4-alan__hata" id={id(`e-${a}`)} role="alert">
        {hata[a] ?? ""}
      </span>
    </div>
  );
  const ortak = (a: Alan) => ({
    id: id(a),
    name: a,
    value: d[a],
    onChange: yaz(a),
    "aria-invalid": hata[a] ? true : undefined,
    "aria-describedby": hata[a] ? id(`e-${a}`) : undefined,
  });

  return (
    <form className="v4-kapanis__kutu" onSubmit={gonder} noValidate>
      {ev ? <input type="hidden" name="ev" value={ev} /> : null}
      {Object.entries(iz).map(([k, v]) => (
        <input key={k} type="hidden" name={k} value={v} />
      ))}
      <input className="v4-bal" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="v4-kapanis__ler">
        {kutu("ad", "Ad", <input {...ortak("ad")} maxLength={60} autoComplete="given-name" />)}
        {kutu("soyad", "Soyad", <input {...ortak("soyad")} maxLength={60} autoComplete="family-name" />)}
        {kutu(
          "eposta",
          "E-posta",
          <input {...ortak("eposta")} type="email" inputMode="email" maxLength={120} autoComplete="email" />,
        )}
        {kutu(
          "tel",
          "Telefon",
          <input
            {...ortak("tel")}
            type="tel"
            inputMode="tel"
            maxLength={24}
            autoComplete="tel"
            placeholder="+90 5__ ___ __ __"
          />,
        )}
        {kutu(
          "band",
          "Yatırım tutarı",
          <select {...ortak("band")}>
            <option value="">Seçin</option>
            {BANTLAR.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>,
          true,
        )}
        <fieldset className="v4-kanal v4-alan--genis">
          <legend>Size nasıl ulaşalım?</legend>
          <div>
            {KANALLAR.map((k) => (
              <label key={k} className={kanal === k ? "on" : ""}>
                <input
                  type="radio"
                  name="kanal"
                  value={k}
                  checked={kanal === k}
                  onChange={() => setKanal(k)}
                />
                {k}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div className={`v4-alan${hata.kvkk ? " v4-alan--hata" : ""}`}>
        <label className="v4-onay" htmlFor={id("kvkk")}>
          <input
            id={id("kvkk")}
            name="kvkk"
            type="checkbox"
            checked={kvkk}
            aria-invalid={hata.kvkk ? true : undefined}
            aria-describedby={hata.kvkk ? id("e-kvkk") : undefined}
            onChange={(e) => {
              setKvkk(e.target.checked);
              if (hata.kvkk) setHata({ ...hata, kvkk: undefined });
            }}
          />
          <span>
            Verilerimin yalnızca bu görüşme için işlenmesini kabul ediyorum. Üçüncü tarafla
            paylaşılmaz. <span className="v4-todo">[AYDINLATMA METNİ]</span>
          </span>
        </label>
        <span className="v4-alan__hata" id={id("e-kvkk")} role="alert">
          {hata.kvkk ?? ""}
        </span>
      </div>

      <button className="v4-dugme v4-dugme--tam" type="submit" disabled={gonderiliyor}>
        <span>{gonderiliyor ? "Gönderiliyor…" : gonderEtiket}</span>
        <svg className="v4-ok" viewBox="0 0 20 12" aria-hidden="true">
          <path d="M1 6h17M13 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {durum ? (
        <p className="v4-kapanis__durum" role="status">
          {durum}
        </p>
      ) : null}
    </form>
  );
}
