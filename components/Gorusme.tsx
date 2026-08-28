"use client";

import { useState } from "react";
import { KONTAK } from "@/lib/kontak";

/**
 * GÖRÜŞME — v3 artboard'undan port.
 *
 * Form dürüstlüğü v1'den korunuyor: formEndpoint boşken uydurma bir
 * "aldık" ekranı gösterilmez, bilgilerin hiçbir yere gönderilmediği
 * yazılı olarak söylenir. Kanal düğmeleri de doldurulmadıkça .todo
 * olarak görünür — uydurma numara basılmaz.
 */

type Alan = "ad" | "tel" | "band";
type Hatalar = Partial<Record<Alan | "kvkk", string>>;

const BANDLAR = [
  "44.000 – 58.000 $",
  "58.000 – 72.000 $",
  "72.000 – 87.000 $",
  "87.000 $ üzeri",
  "Peşin almayı düşünüyorum",
];

const GUVENCELER: [string, string][] = [
  [
    "Para bize gelmiyor",
    "Transfer, bağımsız bir escrow şirketinin hesabına yapılır. Tapu doğrudan sizin ya da sizin şirketinizin adına çıkar.",
  ],
  [
    "Görüşme satış görüşmesi değil",
    "45 dakikada bütçenize göre üç gerçek ev ve üç gerçek net tablo. Sayılar tutmuyorsa bunu size biz söylüyoruz.",
  ],
  [
    "Bu aşamada hiçbir taahhüt yok",
    "Ne ödeme, ne imza, ne rezervasyon. İlerlemek istemezseniz kayıt talebiniz silinir.",
  ],
];

export function Gorusme() {
  const [ad, setAd] = useState("");
  const [tel, setTel] = useState("");
  const [band, setBand] = useState("");
  const [kvkk, setKvkk] = useState(false);
  const [hata, setHata] = useState<Hatalar>({});
  const [durum, setDurum] = useState("");
  const [gonderiliyor, setGonderiliyor] = useState(false);
  const [bitti, setBitti] = useState(false);

  function dogrula(): Hatalar {
    const h: Hatalar = {};
    if (ad.trim().length < 3) h.ad = "Adınızı ve soyadınızı yazın.";
    const rakam = tel.replace(/\D/g, "");
    if (rakam.length < 10 || rakam.length > 15)
      h.tel = "Geçerli bir telefon numarası girin.";
    if (!band) h.band = "Bir aralık seçin.";
    if (!kvkk) h.kvkk = "Devam etmek için onaylamanız gerekiyor.";
    return h;
  }

  async function gonder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (gonderiliyor) return;

    const h = dogrula();
    setHata(h);
    if (Object.keys(h).length) {
      setDurum("Eksik alanlar var — işaretlediklerimizi tamamlayın.");
      document.getElementById(`f-${Object.keys(h)[0]}`)?.focus();
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
        body: new FormData(e.currentTarget),
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

  return (
    <section className="sect gorusme" id="gorusme">
      <div className="kap gorusme__in">
        <div className="gorusme__sol">
          <p className="rozet">Adım 01 · bugün</p>
          <h2 className="h2 gorusme__h">
            Bir mesaj gönderin,
            <br />
            <span className="amber">konuşmaya hemen başlayalım.</span>
          </h2>
          <p className="lede gorusme__lede">
            Aynı gün dönüş yapıyoruz. Hedefinizi ve bütçenizi anlıyoruz, sonra
            takvimden kendi slotunuzu seçiyorsunuz. Tüm süreç online.
          </p>

          <ul className="guvence">
            {GUVENCELER.map(([b, a]) => (
              <li key={b}>
                <p className="guvence__b">{b}</p>
                <p className="sm">{a}</p>
              </li>
            ))}
          </ul>
        </div>

        {bitti ? (
          <div className="kart form form--bitti" role="status">
            <p className="h3">Aldık.</p>
            <p className="sm">
              Bir iş günü içinde yazdığınız numaradan size dönüyoruz. Beklemek
              istemiyorsanız randevuyu şimdi kendiniz seçebilirsiniz.
            </p>
            {KONTAK.calendly ? (
              <a className="btn btn--lg" href={KONTAK.calendly}>
                Takvimden slot seçin
              </a>
            ) : (
              <span className="todo">[CALENDLY LİNKİ]</span>
            )}
          </div>
        ) : (
          <form className="kart form" onSubmit={gonder} noValidate>
            <Metin
              id="f-ad"
              ad="ad"
              etiket="Adınız ve soyadınız"
              hata={hata.ad}
              deger={ad}
              setDeger={setAd}
              autoComplete="name"
              maxLength={80}
            />
            <Metin
              id="f-tel"
              ad="tel"
              etiket="Telefon"
              hata={hata.tel}
              deger={tel}
              setDeger={setTel}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              maxLength={24}
              placeholder="0532 000 00 00"
            />

            <div className={`alan${hata.band ? " alan--hata" : ""}`}>
              <label className="xs" htmlFor="f-band">
                Değerlendirdiğiniz nakit
              </label>
              <select
                id="f-band"
                name="band"
                value={band}
                aria-invalid={hata.band ? true : undefined}
                aria-describedby={hata.band ? "e-band" : undefined}
                onChange={(e) => {
                  setBand(e.target.value);
                  if (hata.band) setHata({ ...hata, band: undefined });
                }}
              >
                <option value="">Seçin</option>
                {BANDLAR.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
              <span className="alan__hata" id="e-band" role="alert">
                {hata.band ?? ""}
              </span>
            </div>

            <div className={`alan${hata.kvkk ? " alan--hata" : ""}`}>
              <label className="onay" htmlFor="f-kvkk">
                <input
                  id="f-kvkk"
                  name="kvkk"
                  type="checkbox"
                  checked={kvkk}
                  aria-invalid={hata.kvkk ? true : undefined}
                  aria-describedby={hata.kvkk ? "e-kvkk" : undefined}
                  onChange={(e) => {
                    setKvkk(e.target.checked);
                    if (hata.kvkk) setHata({ ...hata, kvkk: undefined });
                  }}
                />
                <span className="sm">
                  Verilerimin yalnızca bu görüşme için işlenmesini kabul
                  ediyorum. Üçüncü tarafla paylaşılmaz.
                </span>
              </label>
              <span className="alan__hata" id="e-kvkk" role="alert">
                {hata.kvkk ?? ""}
              </span>
            </div>

            <button
              className="btn btn--lg btn--blok"
              type="submit"
              disabled={gonderiliyor}
            >
              {gonderiliyor ? "Gönderiliyor…" : "Mesajı gönderin"}
            </button>

            {durum ? (
              <p className="form__durum" role="status">
                {durum}
              </p>
            ) : null}

            <div className="form__alt">
              {KONTAK.wa || KONTAK.tel ? (
                <>
                  <span className="xs">Form yerine doğrudan:</span>
                  {KONTAK.wa ? (
                    <a className="baglanti" href={`https://wa.me/${KONTAK.wa}`}>
                      WhatsApp
                    </a>
                  ) : null}
                  {KONTAK.tel ? (
                    <a className="baglanti" href={`tel:${KONTAK.tel}`}>
                      {KONTAK.telGorunen || KONTAK.tel}
                    </a>
                  ) : null}
                </>
              ) : (
                <span className="todo">[WHATSAPP / TELEFON]</span>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Metin({
  id,
  ad,
  etiket,
  hata,
  deger,
  setDeger,
  ...rest
}: {
  id: string;
  ad: string;
  etiket: string;
  hata?: string;
  deger: string;
  setDeger: (v: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={`alan${hata ? " alan--hata" : ""}`}>
      <label className="xs" htmlFor={id}>
        {etiket}
      </label>
      <input
        id={id}
        name={ad}
        value={deger}
        aria-invalid={hata ? true : undefined}
        aria-describedby={hata ? `e-${ad}` : undefined}
        onChange={(e) => setDeger(e.target.value)}
        {...rest}
      />
      <span className="alan__hata" id={`e-${ad}`} role="alert">
        {hata ?? ""}
      </span>
    </div>
  );
}
