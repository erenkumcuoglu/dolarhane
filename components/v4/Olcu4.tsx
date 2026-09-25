"use client";

import { useState } from "react";
import {
  BAND,
  GIDER,
  HIZMET_ORANI,
  KANONIK,
  KAPANIS_ORANI,
  KAPSAM,
  TATLI_NOKTA,
  TR,
  fmtUsd,
  fmtYuzde,
  getiri,
  giderler,
  karsiliklar,
  sigorta,
} from "@/lib/finance";
import { Cizim4, type Anahtar } from "./Cizim4";
import { Ok4 } from "./isaret";

/**
 * V4 ÖLÇÜ ALETİ — hesap + Türkiye karşılaştırması, TEK durum.
 *
 * Tek değişken ev fiyatı (V3 ile aynı karar). Kaydırıcı bir cetvel:
 * 10 binde bir çentik, ürün bandı (120–200 bin) altın hatla işaretli,
 * bandın üstü taralı ve "ekstrapolasyon" yazılı — lib/finance.ts KAPSAM
 * notundaki beyan artık bir dipnot değil, cetvelin kendisi.
 *
 * Sonuç iki yüzeyde okunuyor: solda evin şematik cephesi (para nereden
 * girip nereden çıkıyor), sağda basılı bir ekstre gibi dizilmiş defter.
 * Defterin satırına gelince çizimdeki hat öne çıkıyor.
 *
 * Türkiye bölümü aynı fiyatı okuyor: kaydırıcı oynadıkça "bu evin
 * getirisini Türkiye'de kaç dolarlık ev getirir" canlı değişiyor.
 *
 * Rakamların hepsi lib/finance.ts'ten; bu dosyada elle yazılmış para
 * ya da oran yok.
 */
/* Türkiye tarafının (TR.*) derlendiği ay — kur oynadıkça eskir, veri
   güncellenince burası da güncellenir. */
const TR_VERI_TARIHI = "Eylül 2026";
const grupla = new Intl.NumberFormat("tr-TR").format;
const rakamlar = (v: string) => Number(v.replace(/\D/g, "")) || 0;
const yuzdeKonum = (f: number) => ((f - KAPSAM.min) / (KAPSAM.max - KAPSAM.min)) * 100;
const bin = (n: number) => `${n / 1000}`;

export function Olcu4() {
  const [fiyat, setFiyat] = useState<number>(KANONIK.fiyat);
  const [odak, setOdak] = useState<Anahtar | null>(null);

  const f = Math.min(KAPSAM.max, Math.max(KAPSAM.min, fiyat));
  const u = getiri(f);
  const gd = giderler(f);
  const olcek = 0.84 + (0.28 * (f - KAPSAM.min)) / (KAPSAM.max - KAPSAM.min);

  const bolge =
    f <= TATLI_NOKTA.max
      ? { ad: "En yüksek verim bandı", not: "", tur: "iyi" }
      : f <= BAND.max
        ? { ad: "Ürün bandında", not: "iki doğrulanmış senaryonun arası", tur: "iyi" }
        : { ad: "Bandın üstü", not: "doğrulanmış senaryo yok · kira gerçekte daha düşük çıkabilir", tur: "uyari" };

  const satirlar: { a: Anahtar; no: number; ad: string; alt: string; t: number; isaret: string }[] = [
    { a: "kira", no: 1, ad: "Tahmini aylık kira", alt: "brüt · kiracı içinde", t: u.kiraAylik, isaret: "" },
    { a: "vergi", no: 2, ad: "Emlak vergisi", alt: fmtYuzde(GIDER.emlakVergisiOrani * 100, 2) + " · yıllık, ev fiyatı üzerinden", t: gd[0].tutarYillik / 12, isaret: "−" },
    { a: "sigorta", no: 3, ad: "Ev sahibi sigortası", alt: "yıllık poliçe, aylığa bölünmüş", t: gd[1].tutarYillik / 12, isaret: "−" },
    { a: "yonetim", no: 4, ad: "Mülk yönetimi", alt: fmtYuzde(GIDER.yonetimOrani * 100) + " · brüt kira üzerinden", t: gd[2].tutarYillik / 12, isaret: "−" },
  ];

  const cetvel = [];
  for (let v = KAPSAM.min; v <= KAPSAM.max; v += 10_000) cetvel.push(v);

  /* Türkiye'de aynı aylık geliri getiren ev fiyatı, 5 bine yuvarlı. */
  const yuvarla = (n: number) => Math.round(n / 5_000) * 5_000;
  const trGerekli = yuvarla(u.nakitYillik / TR.netGetiri);
  const trGerekliNet = yuvarla(u.netYillik / TR.netGetiri);
  const kat = trGerekli / u.giris.toplam;
  const katNet = trGerekliNet / u.giris.toplam;

  return (
    <>
      <section className="v4-olcu" id="v4-hesap" aria-labelledby="v4-olcu-bas">
        <div className="v4-kap">
          <div className="v4-olcu__bas">
            <h2 className="v4-h2 v4-h2--acik" id="v4-olcu-bas" data-r>
              Yatırımınızı <em>hesaplayın.</em>
            </h2>
            <p className="v4-p v4-p--acik v4-p--yonerge" data-r>
              Yatırım yapacağınız tutarı ve potansiyel getirisini anında
              hesaplayın. Vergi, sigorta, yönetim gideri gibi masrafları da
              açıkça görün.
            </p>
          </div>

          {/* ── fiyat ve cetvel ── */}
          <div className="v4-fiyat" data-r>
            <div className="v4-fiyat__ust">
              <label className="v4-fiyat__etiket" htmlFor="v4-fiyat-kutu">
                Hedef ev fiyatı
              </label>
              <p className={`v4-bolge v4-bolge--${bolge.tur}`} aria-live="polite">
                <b>{bolge.ad}</b>
                {bolge.not ? <span>{bolge.not}</span> : null}
              </p>
            </div>
            <div className="v4-fiyat__kutu">
              <span aria-hidden="true">$</span>
              <input
                id="v4-fiyat-kutu"
                className="v4-num"
                type="text"
                inputMode="numeric"
                value={grupla(fiyat)}
                size={7}
                onChange={(e) => setFiyat(rakamlar(e.target.value))}
                onBlur={() => setFiyat(f)}
              />
            </div>

            <div className="v4-cetvel" style={{ ["--konum" as string]: `${yuzdeKonum(f)}%` }}>
              <div className="v4-cetvel__bant" style={{ width: `${yuzdeKonum(BAND.max)}%` }}>
                <span>ürün bandı</span>
              </div>
              <div className="v4-cetvel__tarama" style={{ left: `${yuzdeKonum(BAND.max)}%` }}>
                <span>tahmini bölge · veriler farklılık gösterebilir</span>
              </div>
              <div className="v4-cetvel__centik" aria-hidden="true">
                {cetvel.map((v) => (
                  <i key={v} className={(v - KAPSAM.min) % 40_000 === 0 ? "b" : ""} style={{ left: `${yuzdeKonum(v)}%` }}>
                    {(v - KAPSAM.min) % 40_000 === 0 ? <em>{bin(v)}</em> : null}
                  </i>
                ))}
              </div>
              <span className="v4-cetvel__ibre" aria-hidden="true" />
              <input
                className="v4-cetvel__girdi"
                type="range"
                min={KAPSAM.min}
                max={KAPSAM.max}
                step={5_000}
                value={f}
                aria-label="Hedef ev fiyatı"
                aria-valuetext={fmtUsd(f)}
                onChange={(e) => setFiyat(Number(e.target.value))}
              />
              <p className="v4-cetvel__birim" aria-hidden="true">bin $</p>
            </div>
          </div>

          {/* ── çizim + defter ── */}
          <div className="v4-olcu__gov">
            <figure className="v4-olcu__cizim" data-r>
              <Cizim4
                olcek={olcek}
                kira={u.kiraAylik}
                vergi={gd[0].tutarYillik / 12}
                sigorta={gd[1].tutarYillik / 12}
                yonetim={gd[2].tutarYillik / 12}
                net={u.nakitAylik}
                odak={odak}
              />
              <figcaption>
                Ev sahipliği güzel, ama masraflarını görmezden gelmenizi
                istemiyoruz. Tecrübemize dayanarak kira gelirinizin yanında
                ileride oluşabilecek masrafları da açık açık gösteriyoruz. Bu
                gördüğünüz en kötü senaryo. Yaşanmazsa kiranız size kalır.
              </figcaption>
            </figure>

            <div className="v4-ekstre" data-r aria-live="polite">
              <div className="v4-ekstre__bas">
                <p>Tahmini aylık tablo</p>
                <p className="v4-num">{fmtUsd(f)} · peşin</p>
              </div>
              <ul className="v4-ekstre__ler">
                {satirlar.map((s) => (
                  <li
                    key={s.a}
                    className={odak === s.a ? "on" : ""}
                    onMouseEnter={() => setOdak(s.a)}
                    onMouseLeave={() => setOdak(null)}
                  >
                    <span className="v4-ekstre__no" aria-hidden="true">{s.no}</span>
                    <span className="v4-ekstre__ad">
                      {s.ad}
                      <em>{s.alt}</em>
                    </span>
                    <span className="v4-ekstre__nokta" aria-hidden="true" />
                    <span className="v4-ekstre__t v4-num">
                      {s.isaret}
                      {fmtUsd(s.t)}
                    </span>
                  </li>
                ))}
              </ul>
              <div
                className={`v4-ekstre__net${odak === "net" ? " on" : ""}`}
                onMouseEnter={() => setOdak("net")}
                onMouseLeave={() => setOdak(null)}
              >
                <p>
                  <span className="v4-ekstre__no" aria-hidden="true">5</span>
                  Aylık eline geçen
                  <em>hesabınıza giren para</em>
                </p>
                <p className="v4-ekstre__buyuk v4-num">{fmtUsd(u.nakitAylik)}</p>
              </div>
              <div className="v4-ekstre__oran">
                <div>
                  <p className="v4-num">{fmtYuzde(u.nakitGetiri * 100, 1)}</p>
                  <p>nakit getiri · toplam çıkış üzerinden</p>
                </div>
                <div>
                  <p className="v4-num">{fmtUsd(u.giris.toplam)}</p>
                  <p>giriş bileti · kapanış ve hizmet dahil</p>
                </div>
              </div>
              <p className="v4-ekstre__karsilik">
                Bunun dışında, evin kiracısız kalabileceği aylar ve büyük onarımlar için kiradan ayda{" "}
                <b className="v4-num">{fmtUsd(u.karsilikAylik)}</b> ayırmanızı öneriyoruz.
                Masraflar için hesabınızda biriktirebilirsiniz.
              </p>

              <details className="v4-dokum">
                <summary>
                  <span>Varsayımlar ve hesabın dökümü</span>
                  <i aria-hidden="true" />
                </summary>
                <div className="v4-dokum__gov">
                  <dl>
                    <div>
                      <dt>Kapanış masrafı</dt>
                      <dd className="v4-num">
                        {fmtUsd(u.giris.kapanis)} <em>{fmtYuzde(KAPANIS_ORANI * 100)}</em>
                      </dd>
                    </div>
                    <div>
                      <dt>Dolarhane hizmet bedeli</dt>
                      <dd className="v4-num">
                        {fmtUsd(u.giris.hizmet)} <em>{fmtYuzde(HIZMET_ORANI * 100, 1)}</em>
                      </dd>
                    </div>
                    {gd.map((g) => (
                      <div key={g.etiket}>
                        <dt>{g.etiket} · yıllık</dt>
                        <dd className="v4-num">
                          {fmtUsd(g.tutarYillik)} {g.not ? <em>{g.not}</em> : null}
                        </dd>
                      </div>
                    ))}
                    {karsiliklar(f).map((g) => (
                      <div key={g.etiket}>
                        <dt>
                          {g.etiket === "Boşluk karşılığı" ? "Kiracısız boş dönem" : g.etiket} ·
                          yıllık
                        </dt>
                        <dd className="v4-num">
                          {fmtUsd(g.tutarYillik)} {g.not ? <em>{g.not}</em> : null}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p>
                    Sigorta {fmtUsd(sigorta(f))}/yıl, emlak vergisi{" "}
                    {fmtYuzde(GIDER.emlakVergisiOrani * 100, 2)} oranıyla ev fiyatı
                    üzerinden hesaplanır. Getiri oranları ev fiyatına değil, cebinizden çıkan{" "}
                    <b>toplam tutara</b> bölünür.
                  </p>
                  <p>
                    Bütün rakamlar tahmindir ve kesin bir taahhüt değildir. Piyasa
                    koşullarını yansıtmak ve fikir vermek açısından üretilmiştir.
                    Nihai hesap evlerin durumuna göre netlik kazanır.
                  </p>
                </div>
              </details>

              <a className="v4-baglanti v4-ekstre__tam" href="/hesap/">
                Hesabın tamamı <Ok4 />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Türkiye — aynı kirayı getiren ev ──────────────────────
          Soru ters çevrildi (Eren, 2026-09-24): "aynı 400 bin dolarla
          kaç ev" değil, "Amerika'daki bu evin getirisini Türkiye'de kaç
          liralık — kaç dolarlık — ev getirir". Giriş bileti büyük harfle
          400 bin gibi okunmasın diye sayfanın başındaki bütçe (seçilen
          ev) çıpa; Türkiye tarafı ondan türüyor.
          Eşitleme "eline geçen nakit" üzerinden (hesap aletinin öne
          çıkan rakamı) ve Türkiye'nin NET getirisiyle. Karşılıklar da
          düşülünce çıkan daha muhafazakâr kat, dipnotta açıkça yazılı. */}
      <section className="v4-kars" id="v4-karsilastirma" aria-labelledby="v4-kars-bas">
        <div className="v4-kap">
          <div className="v4-kars__bas">
            <h2 className="v4-h2" id="v4-kars-bas" data-r>
              Aynı kira için Türkiye&apos;de{" "}
              <em>
                <span className="v4-num">{kat.toFixed(1).replace(".", ",")}</span> kat
              </em>{" "}
              para.
            </h2>
            <p className="v4-p" data-r>
              Türkiye&apos;de bu bütçeyle tatmin edici kira getiren bir ev yok.
              Amerika&apos;da <b className="v4-num">{fmtUsd(u.giris.toplam)}</b> ile
              alınan evin ayda bıraktığı parayı Türkiye&apos;de ancak ortalama{" "}
              <b className="v4-num">{fmtUsd(trGerekli)}</b>&apos;lık bir ev getiriyor.
            </p>
          </div>

          <div className="v4-kars__ler">
            <div className="v4-kars__k v4-kars__k--us" data-r>
              <p className="v4-kars__ulke">Amerika&apos;da · peşin, kiracılı</p>
              <p className="v4-kars__adet v4-num">{fmtUsd(u.giris.toplam)}</p>
              <dl className="v4-kars__dl">
                <div>
                  <dt>Aylık eline geçen</dt>
                  <dd className="v4-num">{fmtUsd(u.nakitAylik)}</dd>
                </div>
                <div>
                  <dt>Yıllık getiri</dt>
                  <dd className="v4-num">{fmtYuzde(u.nakitGetiri * 100, 1)}</dd>
                </div>
              </dl>
            </div>

            <div className="v4-kars__k v4-kars__k--tr" data-r style={{ ["--d" as string]: "120ms" }}>
              <p className="v4-kars__ulke">Türkiye&apos;de aynı geliri getiren ev</p>
              <p className="v4-kars__adet v4-num">≈ {fmtUsd(trGerekli)}</p>
              <dl className="v4-kars__dl">
                <div>
                  <dt>Aylık net kira</dt>
                  <dd className="v4-num">{fmtUsd(u.nakitAylik)}</dd>
                </div>
                <div>
                  <dt>Yıllık getiri</dt>
                  <dd className="v4-num">{fmtYuzde(TR.netGetiri * 100, 1)}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="v4-cubuklar" data-r aria-hidden="true">
            <p className="v4-cubuklar__bas">Aynı aylık gelir için gereken para</p>
            <div className="v4-cubuk v4-cubuk--altin">
              <span>Amerika</span>
              <span className="v4-cubuk__ray"><i style={{ width: `${(u.giris.toplam / trGerekli) * 100}%` }} /></span>
              <b className="v4-num">{fmtUsd(u.giris.toplam)}</b>
            </div>
            <div className="v4-cubuk">
              <span>Türkiye</span>
              <span className="v4-cubuk__ray"><i style={{ width: "100%" }} /></span>
              <b className="v4-num">{fmtUsd(trGerekli)}</b>
            </div>
          </div>

          <p className="v4-kars__not" data-r>
            <span className="v4-kars__kat v4-num">
              {kat.toFixed(1).replace(".", ",")}×
            </span>
            <span>
              Türkiye tarafı bugün bulunabilen <b>en iyi</b> koşulla hesaplandı:
              net kira getirisi {fmtYuzde(TR.netGetiri * 100, 1)} (
              {fmtUsd(TR.girisBileti)}&apos;lık evde aylık brüt kira{" "}
              {fmtUsd(TR.kiraAylik)}). Amerika tarafından kiracısız dönem ve bakım
              karşılıklarını da düşersek aynı gelir için Türkiye&apos;de ≈{" "}
              {fmtUsd(trGerekliNet)} gerekir; fark yine{" "}
              {katNet.toFixed(1).replace(".", ",")} kat.{" "}
              <em className="v4-kars__tarih">
                Türkiye verileri {TR_VERI_TARIHI} itibarıyla güncel piyasa koşullarına
                göre hesaplandı.
              </em>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
