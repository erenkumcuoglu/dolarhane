"use client";

import { useState } from "react";
import { KONTAK } from "@/lib/kontak";

/**
 * V4 kapanış (mantık Kapanis3 ile birebir; yalnız sunum değişti)
 *
 * V3 kapanış — sessiz kapanış (brief §9): tek başlık, tek cümle, tek
 * birincil eylem. Aciliyet mekaniği, kıtlık, sayaç yok.
 *
 * Form sayfada kalıyor çünkü huninin ilk adımı o: mesaj → konuşma →
 * randevu → görüşme. "Tek eylem" kuralı forma indirgenerek korundu —
 * sayfa boyunca başka hiçbir yerde form yok, bütün çağrılar buraya
 * iniyor.
 *
 * Doğrulama ve dürüstlük kuralları Form2 ile aynı: endpoint boşken
 * uydurma bir "aldık" ekranı GÖSTERİLMEZ ve bilgilerin hiçbir yere
 * gönderilmediği yazılı söylenir.
 *
 * BANTLAR peşin modele göre kuruldu. v2'deki bantlar (44–87 bin $)
 * kaldıraçlı dönemin PEŞİNAT aralıklarıydı; peşin alımda giriş bileti
 * zaten ~150 bin $ ve o liste artık yanlış soruyu soruyor.
 */
type Alan = "ad" | "tel" | "band";
type Hatalar = Partial<Record<Alan | "kvkk", string>>;

const BANTLAR = [
  "120.000 – 150.000 $",
  "150.000 – 200.000 $",
  "200.000 – 300.000 $",
  "300.000 $ üzeri",
  "Henüz netleşmedi",
];

export function Kapanis4() {
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
      document.getElementById(`v4f-${Object.keys(h)[0]}`)?.focus();
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
    <section className="v4-kapanis" id="v4-kapanis">
      <div className="v4-kap v4-kapanis__in">
        <div className="v4-kapanis__soz">
          <p className="v4-kunye v4-kunye--koyu"><span className="v4-kunye__no">08</span><span className="v4-kunye__cizgi" aria-hidden="true" /><span>Görüşme</span></p>
          <h2 className="v4-h1 v4-h2--acik">Kendi tablonuzu <em>konuşalım.</em></h2>
          <p className="v4-kapanis__lede">
            Bütçenizi yazın; 45 dakikada üç gerçek ev ve üç gerçek net tablo
            konuşuyoruz.
          </p>
        </div>

        {bitti ? (
          <div className="v4-kapanis__kutu" role="status">
            <p className="v4-h3 v4-h2--acik">Aldık.</p>
            <p className="v4-kapanis__lede">
              Bir iş günü içinde yazdığınız numaradan dönüyoruz.
            </p>
            {KONTAK.calendly ? (
              <a
                className="v4-dugme v4-dugme--tam"
                href={KONTAK.calendly}
              >
                Takvimden slot seçin
              </a>
            ) : (
              <span className="v4-todo">[CALENDLY LİNKİ]</span>
            )}
          </div>
        ) : (
          <form className="v4-kapanis__kutu" onSubmit={gonder} noValidate>
            <div className="v4-kapanis__ler">
              <div className={`v4-alan${hata.ad ? " v4-alan--hata" : ""}`}>
                <label htmlFor="v4f-ad">Ad soyad</label>
                <input
                  id="v4f-ad"
                  name="ad"
                  value={ad}
                  maxLength={80}
                  autoComplete="name"
                  aria-invalid={hata.ad ? true : undefined}
                  aria-describedby={hata.ad ? "v4e-ad" : undefined}
                  onChange={(e) => setAd(e.target.value)}
                />
                <span className="v4-alan__hata" id="v4e-ad" role="alert">
                  {hata.ad ?? ""}
                </span>
              </div>

              <div className={`v4-alan${hata.tel ? " v4-alan--hata" : ""}`}>
                <label htmlFor="v4f-tel">Telefon</label>
                <input
                  id="v4f-tel"
                  name="tel"
                  type="tel"
                  inputMode="tel"
                  value={tel}
                  maxLength={24}
                  autoComplete="tel"
                  aria-invalid={hata.tel ? true : undefined}
                  aria-describedby={hata.tel ? "v4e-tel" : undefined}
                  onChange={(e) => setTel(e.target.value)}
                />
                <span className="v4-alan__hata" id="v4e-tel" role="alert">
                  {hata.tel ?? ""}
                </span>
              </div>

              <div className={`v4-alan${hata.band ? " v4-alan--hata" : ""}`}>
                <label htmlFor="v4f-band">Değerlendirdiğiniz nakit</label>
                <select
                  id="v4f-band"
                  name="band"
                  value={band}
                  aria-invalid={hata.band ? true : undefined}
                  aria-describedby={hata.band ? "v4e-band" : undefined}
                  onChange={(e) => {
                    setBand(e.target.value);
                    if (hata.band) setHata({ ...hata, band: undefined });
                  }}
                >
                  <option value="">Seçin</option>
                  {BANTLAR.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
                <span className="v4-alan__hata" id="v4e-band" role="alert">
                  {hata.band ?? ""}
                </span>
              </div>
            </div>

            <div className={`v4-alan${hata.kvkk ? " v4-alan--hata" : ""}`}>
              <label className="v4-onay" htmlFor="v4f-kvkk">
                <input
                  id="v4f-kvkk"
                  name="kvkk"
                  type="checkbox"
                  checked={kvkk}
                  aria-invalid={hata.kvkk ? true : undefined}
                  aria-describedby={hata.kvkk ? "v4e-kvkk" : undefined}
                  onChange={(e) => {
                    setKvkk(e.target.checked);
                    if (hata.kvkk) setHata({ ...hata, kvkk: undefined });
                  }}
                />
                <span>
                  Verilerimin yalnızca bu görüşme için işlenmesini kabul
                  ediyorum. Üçüncü tarafla paylaşılmaz.
                </span>
              </label>
              <span className="v4-alan__hata" id="v4e-kvkk" role="alert">
                {hata.kvkk ?? ""}
              </span>
            </div>

            <button
              className="v4-dugme v4-dugme--tam"
              type="submit"
              disabled={gonderiliyor}
            >
              <span>{gonderiliyor ? "Gönderiliyor…" : "Görüşme alın"}</span>
              <svg className="v4-ok" viewBox="0 0 20 12" aria-hidden="true"><path d="M1 6h17M13 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>

            {durum ? (
              <p className="v4-kapanis__durum" role="status">
                {durum}
              </p>
            ) : null}
          </form>
        )}
      </div>
    </section>
  );
}
