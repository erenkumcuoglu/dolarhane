"use client";

import { useState } from "react";
import { KONTAK } from "@/lib/kontak";

/**
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

export function Kapanis3() {
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
      document.getElementById(`v3f-${Object.keys(h)[0]}`)?.focus();
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
    <section className="v3-kapanis" id="v3-kapanis">
      <div className="v3-kap v3-kapanis__in">
        <div className="v3-kapanis__soz">
          <h2 className="v3-h2">Kendi tablonuzu konuşalım.</h2>
          <p className="v3-kapanis__lede">
            Bütçenizi yazın; 45 dakikada üç gerçek ev ve üç gerçek net tablo
            konuşuyoruz.
          </p>
        </div>

        {bitti ? (
          <div className="v3-kapanis__kutu" role="status">
            <p className="v3-h3">Aldık.</p>
            <p className="v3-kapanis__lede">
              Bir iş günü içinde yazdığınız numaradan dönüyoruz.
            </p>
            {KONTAK.calendly ? (
              <a
                className="v3-btn v3-btn--altin v3-btn--lg"
                href={KONTAK.calendly}
              >
                Takvimden slot seçin
              </a>
            ) : (
              <span className="v3-todo">[CALENDLY LİNKİ]</span>
            )}
          </div>
        ) : (
          <form className="v3-kapanis__kutu" onSubmit={gonder} noValidate>
            <div className="v3-kapanis__ler">
              <div className={`v3-alan${hata.ad ? " v3-alan--hata" : ""}`}>
                <label htmlFor="v3f-ad">Ad soyad</label>
                <input
                  id="v3f-ad"
                  name="ad"
                  value={ad}
                  maxLength={80}
                  autoComplete="name"
                  aria-invalid={hata.ad ? true : undefined}
                  aria-describedby={hata.ad ? "v3e-ad" : undefined}
                  onChange={(e) => setAd(e.target.value)}
                />
                <span className="v3-alan__hata" id="v3e-ad" role="alert">
                  {hata.ad ?? ""}
                </span>
              </div>

              <div className={`v3-alan${hata.tel ? " v3-alan--hata" : ""}`}>
                <label htmlFor="v3f-tel">Telefon</label>
                <input
                  id="v3f-tel"
                  name="tel"
                  type="tel"
                  inputMode="tel"
                  value={tel}
                  maxLength={24}
                  autoComplete="tel"
                  aria-invalid={hata.tel ? true : undefined}
                  aria-describedby={hata.tel ? "v3e-tel" : undefined}
                  onChange={(e) => setTel(e.target.value)}
                />
                <span className="v3-alan__hata" id="v3e-tel" role="alert">
                  {hata.tel ?? ""}
                </span>
              </div>

              <div className={`v3-alan${hata.band ? " v3-alan--hata" : ""}`}>
                <label htmlFor="v3f-band">Değerlendirdiğiniz nakit</label>
                <select
                  id="v3f-band"
                  name="band"
                  value={band}
                  aria-invalid={hata.band ? true : undefined}
                  aria-describedby={hata.band ? "v3e-band" : undefined}
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
                <span className="v3-alan__hata" id="v3e-band" role="alert">
                  {hata.band ?? ""}
                </span>
              </div>
            </div>

            <div className={`v3-alan${hata.kvkk ? " v3-alan--hata" : ""}`}>
              <label className="v3-onay" htmlFor="v3f-kvkk">
                <input
                  id="v3f-kvkk"
                  name="kvkk"
                  type="checkbox"
                  checked={kvkk}
                  aria-invalid={hata.kvkk ? true : undefined}
                  aria-describedby={hata.kvkk ? "v3e-kvkk" : undefined}
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
              <span className="v3-alan__hata" id="v3e-kvkk" role="alert">
                {hata.kvkk ?? ""}
              </span>
            </div>

            <button
              className="v3-btn v3-btn--altin v3-btn--lg"
              type="submit"
              disabled={gonderiliyor}
            >
              {gonderiliyor ? "Gönderiliyor…" : "Görüşme alın"}
            </button>

            {durum ? (
              <p className="v3-kapanis__durum" role="status">
                {durum}
              </p>
            ) : null}
          </form>
        )}
      </div>
    </section>
  );
}
