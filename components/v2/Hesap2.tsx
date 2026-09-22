"use client";

import { useState } from "react";
import {
  BAND,
  HIZMET_ORANI,
  KANONIK,
  KAPANIS_ORANI,
  MODEL_DOGRULANDI,
  TATLI_NOKTA,
  TR,
  fmtAdet,
  fmtUsd,
  fmtYuzde,
  getiri,
  karsilastirma,
  karsiliklar,
} from "@/lib/finance";
import { IkonGrafik, IkonOk } from "./ikon";

/**
 * v2 hesap — iki kaydırıcı + sonuç tablosu + yan not.
 *
 * PEŞİN model (iş planı §10). Peşinat, taksit ve vade kaydırıcıları
 * kalktı; yerlerine ev fiyatı ve bütçe geldi. Bütçe kaydırıcısı slayt
 * 9'un asıl mesajını canlı kılıyor: aynı parayla kaç ev.
 *
 * Getiri oranları ev fiyatına değil TOPLAM ÇIKIŞA bölünür — yatırımcının
 * cebinden çıkan tutar budur (slayt 16 da böyle hesaplıyor).
 */
export function Hesap2() {
  const [fiyat, setFiyat] = useState<number>(KANONIK.fiyat);
  const [butce, setButce] = useState<number>(TR.girisBileti);

  const u = getiri(fiyat);
  const k = karsilastirma(butce, fiyat);
  const tatli = fiyat >= TATLI_NOKTA.min && fiyat <= TATLI_NOKTA.max;

  const satirlar: { k: string; v: string; not?: string; tur?: string }[] = [
    { k: "Ev fiyatı", v: fmtUsd(u.giris.fiyat) },
    {
      k: "Kapanış masrafı",
      v: fmtUsd(u.giris.kapanis),
      not: fmtYuzde(KAPANIS_ORANI * 100),
    },
    {
      k: "Dolarhane hizmet bedeli",
      v: fmtUsd(u.giris.hizmet),
      not: fmtYuzde(HIZMET_ORANI * 100, 1),
    },
    { k: "Toplam çıkış", v: fmtUsd(u.giris.toplam), tur: "ara" },
    { k: "Beklenen aylık kira", v: fmtUsd(u.kiraAylik) },
    {
      k: "Yıllık brüt kira",
      v: fmtUsd(u.brutYillik),
      not: `brüt getiri ${fmtYuzde(u.brutGetiri * 100, 1)}`,
    },
    {
      k: "İşletme gideri",
      v: "−" + fmtUsd(u.giderYillik),
      not: "emlak vergisi, sigorta, mülk yönetimi",
      tur: "eksi",
    },
    { k: "Yıllık eline geçen", v: fmtUsd(u.nakitYillik), tur: "ara" },
    {
      k: "Aylık eline geçen",
      v: fmtUsd(u.nakitAylik),
      not: "hesabınıza giren para",
      tur: "vurgu",
    },
    {
      k: "Nakit getiri",
      v: fmtYuzde(u.nakitGetiri * 100, 1),
      not: "toplam çıkış üzerinden · brüt değil",
    },
  ];

  /* Karşılık satırları tablonun DIŞINDA, ayrı bir blokta duruyor.
     Sebebi bilinçli: bunlar cepten çıkan gider değil, malikin kendi
     hesabında kalan para. Tabloya "−" ile koymak onları kayıp gibi
     gösterirdi; hiç göstermemek ise üçüncü yıl gelen çatı faturasını
     sürpriz yapardı. İkisi de yanlış — ayrı blok doğrusu. */
  const karsilik = karsiliklar(fiyat);

  return (
    <section className="v2-sect v2-hesap" id="v2-hesap">
      <div className="v2-kap v2-hesap__in">
        <div className="v2-hesap__sol">
          <h2 className="v2-h2">Yatırımınızı hesaplayın.</h2>
          <p className="v2-lede">
            Rakamları değiştirin, senaryo canlı kurulur. Peşin alım — kredi,
            taksit ve vade yok.
          </p>
          {!MODEL_DOGRULANDI ? (
            <p className="v2-damga">
              [MODEL ÇALIŞMASI — partner verisiyle doğrulanacak]
            </p>
          ) : null}

          <div className="v2-kaydir">
            <label htmlFor="v2-fiyat">
              <span className="v2-xs">Hedef ev fiyatı</span>
              <output className="v2-kaydir__v v2-num" htmlFor="v2-fiyat">
                {fmtUsd(fiyat)}
              </output>
            </label>
            <input
              id="v2-fiyat"
              type="range"
              min={BAND.min}
              max={BAND.max}
              step={10_000}
              value={fiyat}
              aria-valuetext={fmtUsd(fiyat)}
              onChange={(e) => setFiyat(Number(e.target.value))}
            />
            <div className="v2-kaydir__uc">
              <span className="v2-mini">{fmtUsd(BAND.min)}</span>
              <span className="v2-mini">{fmtUsd(BAND.max)}</span>
            </div>
          </div>

          <div className="v2-kaydir">
            <label htmlFor="v2-butce">
              <span className="v2-xs">Değerlendirdiğiniz bütçe</span>
              <output className="v2-kaydir__v v2-num" htmlFor="v2-butce">
                {fmtUsd(butce)}
              </output>
            </label>
            <input
              id="v2-butce"
              type="range"
              min={120_000}
              max={600_000}
              step={20_000}
              value={butce}
              aria-valuetext={fmtUsd(butce)}
              onChange={(e) => setButce(Number(e.target.value))}
            />
            <div className="v2-kaydir__uc">
              <span className="v2-mini">{fmtUsd(120_000)}</span>
              <span className="v2-mini">{fmtUsd(600_000)}</span>
            </div>
          </div>

          <p className="v2-mini v2-hesap__not">
            Kaydırıcı ürün bandının dışına çıkmaz: {fmtUsd(BAND.min)} —{" "}
            {fmtUsd(BAND.max)}.{" "}
            {tatli
              ? `Tatlı nokta ${fmtUsd(TATLI_NOKTA.min)}–${fmtUsd(TATLI_NOKTA.max)} bandı; buradasınız.`
              : `Tatlı nokta ${fmtUsd(TATLI_NOKTA.min)}–${fmtUsd(TATLI_NOKTA.max)}. Fiyat yükseldikçe emlak vergisi ve giderler getiriyi aşağı çekiyor.`}
          </p>
        </div>

        <div className="v2-kart v2-tablo" aria-live="polite">
          <p className="v2-tablo__bas">Tahmini sonuçlar</p>
          <dl>
            {satirlar.map((s) => (
              <div
                key={s.k}
                className={`v2-tablo__s${s.tur ? ` v2-tablo__s--${s.tur}` : ""}`}
              >
                <dt>
                  {s.k}
                  {s.not ? <em>{s.not}</em> : null}
                </dt>
                <dd className="v2-num">{s.v}</dd>
              </div>
            ))}
          </dl>

          <div className="v2-karsilik">
            <p className="v2-karsilik__bas">
              Bir de kimsenin söylemediği kalem var.
            </p>
            <p className="v2-sm v2-karsilik__ac">
              Yukarıdaki para her ay hesabınıza giriyor. Ama ev eskiyor:
              çatı, kombi, su ısıtıcı bir gün değişiyor ve kiracı bir gün
              çıkıyor. <strong>
                Bunun için ayda {fmtUsd(u.karsilikAylik)} kenarda tutmanızı
                öneriyoruz.
              </strong> Bu para bize gelmiyor
              — kendi hesabınızda duruyor, harcamazsanız sizde kalıyor.
            </p>
            <dl className="v2-karsilik__ler">
              {karsilik.map((x) => (
                <div key={x.etiket}>
                  <dt className="v2-mini">
                    {x.etiket}
                    {x.not ? <em> {x.not}</em> : null}
                  </dt>
                  <dd className="v2-num">{fmtUsd(x.tutarYillik / 12)}/ay</dd>
                </div>
              ))}
            </dl>
            <p className="v2-mini v2-karsilik__dip">
              Beş yılda {fmtUsd(u.karsilikYillik * 5)} birikiyor. Hiç
              harcanmazsa aylık geliriniz fiilen{" "}
              {fmtUsd(u.nakitAylik)}; her yıl tamamı harcanırsa{" "}
              {fmtUsd(u.netAylik)}. Gerçek, ikisinin arasında bir yerde ve
              evin durumuna bağlı.
            </p>
          </div>
        </div>

        <aside className="v2-hesap__yan">
          <span className="v2-ikon v2-ikon--kutu" aria-hidden="true">
            <IkonGrafik />
          </span>
          <h3 className="v2-h3">
            Aynı bütçe,
            <br />
            kaç ev eder.
          </h3>
          <p className="v2-sm">
            {fmtUsd(butce)} Türkiye&apos;de <strong>bir ev</strong> alıyor ve
            ayda {fmtUsd(k.trAylikNet)} getiriyor. Aynı parayla bu fiyat
            bandında <strong>{fmtAdet(k.usEv)}</strong>, ayda toplam{" "}
            <strong>{fmtUsd(k.usAylikNet)}</strong>.
          </p>
          <a className="v2-baglanti" href="#v2-karsilastirma">
            Karşılaştırmayı görün
            <IkonOk />
          </a>
          {/* Ana sayfa /hesap'a hiç link vermiyordu; oraya yalnız yazı
              sayfalarından geliniyordu. */}
          <a className="v2-baglanti" href="/hesap/">
            Hesabın tamamı — satır satır
            <IkonOk />
          </a>
        </aside>
      </div>
    </section>
  );
}
