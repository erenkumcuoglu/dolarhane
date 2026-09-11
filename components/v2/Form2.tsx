"use client";

import { useState } from "react";
import { KONTAK } from "@/lib/kontak";

/**
 * v2 form — referans tasarımdaki yatay lacivert bant.
 *
 * Doğrulama ve dürüstlük kuralları Gorusme.tsx ile birebir aynı: endpoint
 * boşken uydurma bir "aldık" ekranı GÖSTERİLMEZ, bilgilerin hiçbir yere
 * gönderilmediği yazılı olarak söylenir; WhatsApp/telefon doldurulmadıkça
 * kırmızı [alan] olarak görünür.
 *
 * v2 kendi kopyasını taşıyor: eski sayfa dokunulmadan duracak, iki iterasyon
 * birbirini kilitlemesin. Biri seçildiğinde diğeri silinir.
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

export function Form2() {
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
      document.getElementById(`v2f-${Object.keys(h)[0]}`)?.focus();
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
    <section className="v2-form" id="v2-form">
      <div className="v2-kap v2-form__in">
        <div className="v2-form__soz">
          <h2 className="v2-h2">Size uygun evleri bulalım.</h2>
          <p className="v2-sm">
            Bütçenizi ve hedefinizi iletin; 45 dakikada üç gerçek ev, üç gerçek
            net tablo konuşuyoruz. Satış konuşması değil, hesap.
          </p>
        </div>

        {bitti ? (
          <div className="v2-kart v2-form__kart" role="status">
            <p className="v2-h3">Aldık.</p>
            <p className="v2-sm">
              Bir iş günü içinde yazdığınız numaradan size dönüyoruz. Beklemek
              istemiyorsanız randevuyu şimdi kendiniz seçebilirsiniz.
            </p>
            {KONTAK.calendly ? (
              <a className="v2-btn v2-btn--altin v2-btn--lg" href={KONTAK.calendly}>
                Takvimden slot seçin
              </a>
            ) : (
              <span className="v2-todo">[CALENDLY LİNKİ]</span>
            )}
          </div>
        ) : (
          <form className="v2-form__kutu" onSubmit={gonder} noValidate>
            <div className="v2-form__ler">
              <div className={`v2-alan${hata.ad ? " v2-alan--hata" : ""}`}>
                <label className="v2-xs" htmlFor="v2f-ad">
                  Ad soyad
                </label>
                <input
                  id="v2f-ad"
                  name="ad"
                  value={ad}
                  maxLength={80}
                  autoComplete="name"
                  placeholder="Adınız"
                  aria-invalid={hata.ad ? true : undefined}
                  aria-describedby={hata.ad ? "v2e-ad" : undefined}
                  onChange={(e) => setAd(e.target.value)}
                />
                <span className="v2-alan__hata" id="v2e-ad" role="alert">
                  {hata.ad ?? ""}
                </span>
              </div>

              <div className={`v2-alan${hata.tel ? " v2-alan--hata" : ""}`}>
                <label className="v2-xs" htmlFor="v2f-tel">
                  Telefon
                </label>
                <input
                  id="v2f-tel"
                  name="tel"
                  type="tel"
                  inputMode="tel"
                  value={tel}
                  maxLength={24}
                  autoComplete="tel"
                  placeholder="0532 000 00 00"
                  aria-invalid={hata.tel ? true : undefined}
                  aria-describedby={hata.tel ? "v2e-tel" : undefined}
                  onChange={(e) => setTel(e.target.value)}
                />
                <span className="v2-alan__hata" id="v2e-tel" role="alert">
                  {hata.tel ?? ""}
                </span>
              </div>

              <div className={`v2-alan${hata.band ? " v2-alan--hata" : ""}`}>
                <label className="v2-xs" htmlFor="v2f-band">
                  Değerlendirdiğiniz nakit
                </label>
                <select
                  id="v2f-band"
                  name="band"
                  value={band}
                  aria-invalid={hata.band ? true : undefined}
                  aria-describedby={hata.band ? "v2e-band" : undefined}
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
                <span className="v2-alan__hata" id="v2e-band" role="alert">
                  {hata.band ?? ""}
                </span>
              </div>

              <button
                className="v2-btn v2-btn--altin v2-btn--lg"
                type="submit"
                disabled={gonderiliyor}
              >
                {gonderiliyor ? "Gönderiliyor…" : "Mesajı gönderin"}
              </button>
            </div>

            <div className={`v2-alan${hata.kvkk ? " v2-alan--hata" : ""}`}>
              <label className="v2-onay" htmlFor="v2f-kvkk">
                <input
                  id="v2f-kvkk"
                  name="kvkk"
                  type="checkbox"
                  checked={kvkk}
                  aria-invalid={hata.kvkk ? true : undefined}
                  aria-describedby={hata.kvkk ? "v2e-kvkk" : undefined}
                  onChange={(e) => {
                    setKvkk(e.target.checked);
                    if (hata.kvkk) setHata({ ...hata, kvkk: undefined });
                  }}
                />
                <span className="v2-sm">
                  Verilerimin yalnızca bu görüşme için işlenmesini kabul
                  ediyorum. Üçüncü tarafla paylaşılmaz.
                </span>
              </label>
              <span className="v2-alan__hata" id="v2e-kvkk" role="alert">
                {hata.kvkk ?? ""}
              </span>
            </div>

            {durum ? (
              <p className="v2-form__durum" role="status">
                {durum}
              </p>
            ) : null}

            <div className="v2-form__alt">
              {KONTAK.wa || KONTAK.tel ? (
                <>
                  <span className="v2-xs">Form yerine doğrudan:</span>
                  {KONTAK.wa ? (
                    <a href={`https://wa.me/${KONTAK.wa}`}>WhatsApp</a>
                  ) : null}
                  {KONTAK.tel ? (
                    <a href={`tel:${KONTAK.tel}`}>{KONTAK.telGorunen || KONTAK.tel}</a>
                  ) : null}
                </>
              ) : (
                <span className="v2-todo">[WHATSAPP / TELEFON]</span>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
