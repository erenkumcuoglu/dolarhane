"use client";

import { useState } from "react";
import {
  BAND,
  KANONIK,
  KAPANIS_MASRAFI,
  US_YILLIK,
  fmtOran,
  fmtUsd,
  fmtYuzde,
  isletmeGideriAylik,
  krediliGercek,
  pesinNet,
} from "@/lib/finance";
import { IkonGrafik, IkonOk } from "./ikon";

/**
 * v2 hesap — referans tasarımın iki kaydırıcı + sonuç tablosu + yan not
 * kompozisyonu. Kaydırıcı aralıkları /hesap sayfasındakiyle aynı: fiyat
 * ürün bandının dışına çıkmıyor, peşinat %25–45.
 *
 * Referans tasarımdaki "Aylık nakit akış +$928" satırı BURAYA OLDUĞU GİBİ
 * ALINMADI. Kredili senaryoda kira ile taksit arasındaki fark işletme
 * giderini karşılamıyor; nakit fazlası ince. O yüzden tablo gideri de
 * yazıyor ve vurgulanan satır nakit değil ANAPARA birikimi (DESIGN.md
 * kural 13). Net getiri satırı peşin alımın rakamıdır ve öyle etiketli.
 */
export function Hesap2() {
  const [fiyat, setFiyat] = useState<number>(KANONIK.fiyat);
  const [pesinat, setPesinat] = useState(25);

  const oran = pesinat / 100;
  const g = krediliGercek(fiyat, oran, KANONIK.vadeYil);
  const gider = isletmeGideriAylik(fiyat);
  const net = pesinNet(fiyat);
  /* nakitOrani() imzası kanonik %25'e sabit; burada oran kaydırıcıdan
     geliyor, o yüzden aynı formül yerinde kuruluyor. */
  const giris = fiyat * (oran + KAPANIS_MASRAFI);

  const satirlar: { k: string; v: string; not?: string; tur?: string }[] = [
    { k: "Ev fiyatı", v: fmtUsd(fiyat) },
    { k: "Peşinat", v: fmtUsd(g.pesinat), not: fmtYuzde(pesinat) },
    {
      k: "Kapanış masrafı",
      v: fmtUsd(fiyat * KAPANIS_MASRAFI),
      not: fmtYuzde(KAPANIS_MASRAFI * 100),
    },
    { k: "Gereken nakit", v: fmtUsd(giris), tur: "ara" },
    { k: "Aylık taksit", v: fmtUsd(g.taksit), not: `${KANONIK.vadeYil} yıl sabit` },
    { k: "Beklenen kira", v: fmtUsd(g.kira) },
    { k: "İşletme gideri", v: "−" + fmtUsd(gider), not: "vergi, sigorta, yönetim, boşluk, bakım", tur: "eksi" },
    {
      k: "Aylık nakit fazlası",
      v: (g.nakitAkisiAylik >= 0 ? "+" : "−") + fmtUsd(Math.abs(g.nakitAkisiAylik)),
      not: "ince — reklam kalemi değil",
      tur: "ara",
    },
    {
      k: "Aylık anapara birikimi",
      v: "+" + fmtUsd(g.anaparaAylikIlkYil),
      not: "kiracının kapattığı borç · ilk yıl",
      tur: "vurgu",
    },
    { k: "Kira / taksit", v: fmtOran(g.oran), tur: "ara" },
    {
      k: "Net getiri",
      v: fmtYuzde(net.netGetiri * 100, 2),
      not: "peşin alımda · brüt değil",
    },
  ];

  return (
    <section className="v2-sect v2-hesap" id="v2-hesap">
      <div className="v2-kap v2-hesap__in">
        <div className="v2-hesap__sol">
          <h2 className="v2-h2">Yatırımınızı hesaplayın.</h2>
          <p className="v2-lede">
            Rakamları değiştirin, senaryo canlı kurulur. Faiz yıllık{" "}
            {fmtYuzde(US_YILLIK * 100, 2)}, vade {KANONIK.vadeYil} yıl sabit.
          </p>

          <div className="v2-kaydir">
            <label htmlFor="v2-pesinat">
              <span className="v2-xs">Peşinat oranı</span>
              <output className="v2-kaydir__v v2-num" htmlFor="v2-pesinat">
                {fmtYuzde(pesinat)}
              </output>
            </label>
            <input
              id="v2-pesinat"
              type="range"
              min={25}
              max={45}
              step={5}
              value={pesinat}
              aria-valuetext={`yüzde ${pesinat}`}
              onChange={(e) => setPesinat(Number(e.target.value))}
            />
            <div className="v2-kaydir__uc">
              <span className="v2-mini">%25</span>
              <span className="v2-mini">%45</span>
            </div>
          </div>

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

          <p className="v2-mini v2-hesap__not">
            Kaydırıcı ürün bandının dışına çıkmaz: {fmtUsd(BAND.min)} —{" "}
            {fmtUsd(BAND.max)}. Bandın dışına ekstrapolasyon yapmıyoruz.
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
        </div>

        <aside className="v2-hesap__yan">
          <span className="v2-ikon v2-ikon--kutu" aria-hidden="true">
            <IkonGrafik />
          </span>
          <h3 className="v2-h3">
            Aynı bütçeyle,
            <br />
            daha büyük bir varlık.
          </h3>
          <p className="v2-sm">
            Burada {fmtUsd(giris)} koyup {fmtUsd(fiyat)}&apos;lık bir eve sahip
            oluyorsunuz; kalanını kiracı ödüyor. Türkiye&apos;de kira taksitin
            küçük bir kısmını karşıladığı için kredi fiilen işlemiyor — aynı
            büyüklükte bir varlık için tutarın tamamını koymanız gerekir.
          </p>
          <a className="v2-baglanti" href="#v2-karsilastirma">
            Karşılaştırmayı görün
            <IkonOk />
          </a>
        </aside>
      </div>
    </section>
  );
}
