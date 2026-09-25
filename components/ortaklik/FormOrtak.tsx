"use client";

import { useState } from "react";
import { KONTAK } from "@/lib/kontak";

/**
 * Ortak başvuru formu.
 *
 * Doğrulama ve dürüstlük kuralları Form2 ile birebir aynı: endpoint
 * boşken uydurma "aldık" ekranı gösterilmiyor, bilgilerin hiçbir yere
 * gönderilmediği yazılı söyleniyor. Alanlar farklı: hat, faaliyet
 * bölgesi ve lisans durumu soruluyor.
 */
type Alan = "ad" | "tel" | "hat";
type Hatalar = Partial<Record<Alan | "kvkk", string>>;

const HAT_SECENEK = [
  "Portföyüm var — lisanslı emlakçı / danışman",
  "Portföyüm var — lisansım yok",
  "Tanıdığım var",
];

export function FormOrtak() {
  const [ad, setAd] = useState("");
  const [tel, setTel] = useState("");
  const [hat, setHat] = useState("");
  const [bolge, setBolge] = useState("");
  const [not, setNot] = useState("");
  const [kvkk, setKvkk] = useState(false);
  const [hata, setHata] = useState<Hatalar>({});
  const [durum, setDurum] = useState("");

  function gonder(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const rakam = tel.replace(/\D/g, "");
    const h: Hatalar = {};
    if (ad.trim().length < 3) h.ad = "Adınızı ve soyadınızı yazın.";
    if (rakam.length < 10 || rakam.length > 15)
      h.tel = "Geçerli bir telefon numarası girin.";
    if (!hat) h.hat = "Bir seçenek işaretleyin.";
    if (!kvkk) h.kvkk = "Devam etmek için onaylamanız gerekiyor.";
    setHata(h);
    if (Object.keys(h).length) {
      setDurum("Eksik alanlar var — işaretlediklerimizi tamamlayın.");
      document.getElementById(`ort-${Object.keys(h)[0]}`)?.focus();
      return;
    }
    /* Ortaklık formu lead kapısına (/api/lead) bağlı DEĞİL: alanları farklı
       ve sayfa hukuki onay bekliyor. Bağlanana kadar dürüst mesaj. */
    setDurum(
      "Form henüz bir hedefe bağlanmadı, bu yüzden başvurunuzu kaydedemiyoruz. Bilgileriniz hiçbir yere gönderilmedi.",
    );
  }

  return (
    <section className="v2-form" id="ort-form">
      <div className="v2-kap v2-form__in">
        <div className="v2-form__soz">
          <h2 className="v2-h2">Konuşalım.</h2>
          <p className="v2-sm">
            Başvuru bir taahhüt değil. Önce ne getirebileceğinizi ve
            koşulları konuşuyoruz; rakamlar netleşince yazılı bir anlaşma
            yapıyoruz.
          </p>
        </div>

        <form className="v2-form__kutu" onSubmit={gonder} noValidate>
          <div className="v2-form__ler">
            <div className={`v2-alan${hata.ad ? " v2-alan--hata" : ""}`}>
              <label className="v2-xs" htmlFor="ort-ad">
                Adınız ve soyadınız
              </label>
              <input
                id="ort-ad"
                name="ad"
                value={ad}
                maxLength={80}
                autoComplete="name"
                aria-invalid={hata.ad ? true : undefined}
                onChange={(e) => {
                  setAd(e.target.value);
                  if (hata.ad) setHata({ ...hata, ad: undefined });
                }}
              />
              <span className="v2-alan__hata" role="alert">
                {hata.ad ?? ""}
              </span>
            </div>

            <div className={`v2-alan${hata.tel ? " v2-alan--hata" : ""}`}>
              <label className="v2-xs" htmlFor="ort-tel">
                Telefon
              </label>
              <input
                id="ort-tel"
                name="tel"
                type="tel"
                inputMode="tel"
                placeholder="0532 000 00 00"
                value={tel}
                maxLength={24}
                autoComplete="tel"
                aria-invalid={hata.tel ? true : undefined}
                onChange={(e) => {
                  setTel(e.target.value);
                  if (hata.tel) setHata({ ...hata, tel: undefined });
                }}
              />
              <span className="v2-alan__hata" role="alert">
                {hata.tel ?? ""}
              </span>
            </div>

            <div className={`v2-alan${hata.hat ? " v2-alan--hata" : ""}`}>
              <label className="v2-xs" htmlFor="ort-hat">
                Hangi hat
              </label>
              <select
                id="ort-hat"
                name="hat"
                value={hat}
                aria-invalid={hata.hat ? true : undefined}
                onChange={(e) => {
                  setHat(e.target.value);
                  if (hata.hat) setHata({ ...hata, hat: undefined });
                }}
              >
                <option value="">Seçin</option>
                {HAT_SECENEK.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <span className="v2-alan__hata" role="alert">
                {hata.hat ?? ""}
              </span>
            </div>

            <div className="v2-alan">
              <label className="v2-xs" htmlFor="ort-bolge">
                Faaliyet bölgeniz
              </label>
              <input
                id="ort-bolge"
                name="bolge"
                value={bolge}
                maxLength={80}
                placeholder="şehir ya da ilçe"
                onChange={(e) => setBolge(e.target.value)}
              />
              <span className="v2-alan__hata" />
            </div>

          </div>

          <div className="v2-alan">
            <label className="v2-xs" htmlFor="ort-not">
              Kısa not
            </label>
            <textarea
              id="ort-not"
              name="not"
              rows={3}
              maxLength={600}
              value={not}
              placeholder="Ne getirebilirsiniz, bugün ne yapıyorsunuz?"
              onChange={(e) => setNot(e.target.value)}
            />
          </div>

          <div className={`v2-alan${hata.kvkk ? " v2-alan--hata" : ""}`}>
            <label className="v2-onay" htmlFor="ort-kvkk">
              <input
                id="ort-kvkk"
                name="kvkk"
                type="checkbox"
                checked={kvkk}
                aria-invalid={hata.kvkk ? true : undefined}
                onChange={(e) => {
                  setKvkk(e.target.checked);
                  if (hata.kvkk) setHata({ ...hata, kvkk: undefined });
                }}
              />
              <span className="v2-sm">
                Verilerimin yalnızca bu başvuru için işlenmesini kabul
                ediyorum. Üçüncü tarafla paylaşılmaz.
              </span>
            </label>
            <span className="v2-alan__hata" role="alert">
              {hata.kvkk ?? ""}
            </span>
          </div>

          <button
            className="v2-btn v2-btn--altin v2-btn--lg v2-btn--blok"
            type="submit"
          >
            Başvuruyu gönderin
          </button>

          {durum ? (
            <p className="v2-form__durum" role="status">
              {durum}
            </p>
          ) : null}

          <div className="v2-form__alt">
            {KONTAK.wa ? (
              <>
                <span className="v2-xs">Form yerine doğrudan:</span>
                <a href={`https://wa.me/${KONTAK.wa}`}>WhatsApp</a>
              </>
            ) : (
              <span className="v2-todo">[WHATSAPP / TELEFON]</span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
