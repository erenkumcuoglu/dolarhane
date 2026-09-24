"use client";

import { useId, useState } from "react";
import {
  BAND,
  GIDER,
  HIZMET_ORANI,
  KANONIK,
  KAPANIS_ORANI,
  KAPSAM,
  MODEL_DOGRULANDI,
  TATLI_NOKTA,
  TR,
  fmtAdet,
  fmtUsd,
  fmtYuzde,
  getiri,
  giderler,
  karsilastirma,
  karsiliklar,
  sigorta,
} from "@/lib/finance";
import { Cizim4, EvIsaret, type Anahtar } from "./Cizim4";
import { Kunye4, Ok4 } from "./isaret";

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
 * Türkiye bölümü aynı fiyatı okuyor: kaydırıcı oynadıkça "aynı bütçeyle
 * kaç ev" canlı değişiyor ve kesirli ev kesirli çiziliyor — 2,7 ev iki
 * tam ve bir %70'lik ev, yuvarlanmadan.
 *
 * Rakamların hepsi lib/finance.ts'ten; bu dosyada elle yazılmış para
 * ya da oran yok.
 */
const grupla = new Intl.NumberFormat("tr-TR").format;
const rakamlar = (v: string) => Number(v.replace(/\D/g, "")) || 0;
const yuzdeKonum = (f: number) => ((f - KAPSAM.min) / (KAPSAM.max - KAPSAM.min)) * 100;
const bin = (n: number) => `${n / 1000}`;

export function Olcu4() {
  const [fiyat, setFiyat] = useState<number>(KANONIK.fiyat);
  const [odak, setOdak] = useState<Anahtar | null>(null);
  const kid = useId().replace(/:/g, "");

  const f = Math.min(KAPSAM.max, Math.max(KAPSAM.min, fiyat));
  const u = getiri(f);
  const gd = giderler(f);
  const k = karsilastirma(TR.girisBileti, f);
  const olcek = 0.84 + (0.28 * (f - KAPSAM.min)) / (KAPSAM.max - KAPSAM.min);

  const bolge =
    f <= TATLI_NOKTA.max
      ? { ad: "Tatlı nokta", not: "verimin en yüksek olduğu bant", tur: "iyi" }
      : f <= BAND.max
        ? { ad: "Ürün bandında", not: "iki doğrulanmış senaryonun arası", tur: "iyi" }
        : { ad: "Bandın üstü", not: "ekstrapolasyon · kirayı yüksek tahmin edebilir", tur: "uyari" };

  const satirlar: { a: Anahtar; no: number; ad: string; alt: string; t: number; isaret: string }[] = [
    { a: "kira", no: 1, ad: "Tahmini aylık kira", alt: "brüt · kiracı içinde", t: u.kiraAylik, isaret: "" },
    { a: "vergi", no: 2, ad: "Emlak vergisi", alt: fmtYuzde(GIDER.emlakVergisiOrani * 100, 2) + " · yıllık, ev fiyatı üzerinden", t: gd[0].tutarYillik / 12, isaret: "−" },
    { a: "sigorta", no: 3, ad: "Ev sahibi sigortası", alt: "yıllık poliçe, aylığa bölünmüş", t: gd[1].tutarYillik / 12, isaret: "−" },
    { a: "yonetim", no: 4, ad: "Mülk yönetimi", alt: fmtYuzde(GIDER.yonetimOrani * 100) + " · brüt kira üzerinden", t: gd[2].tutarYillik / 12, isaret: "−" },
  ];

  const cetvel = [];
  for (let v = KAPSAM.min; v <= KAPSAM.max; v += 10_000) cetvel.push(v);

  const maxGelir = Math.max(k.usAylikNet, k.trAylikNet) * 1.08;
  const tamEv = Math.floor(k.usEv);
  const kesir = k.usEv - tamEv;

  return (
    <>
      <section className="v4-olcu" id="v4-hesap" aria-labelledby="v4-olcu-bas">
        <div className="v4-kap">
          <Kunye4 no="02" ad="Hesap" koyu />
          <div className="v4-olcu__bas">
            <h2 className="v4-h2 v4-h2--acik" id="v4-olcu-bas" data-r>
              Yatırımınızı <em>hesaplayın.</em>
            </h2>
            <p className="v4-p v4-p--acik" data-r>
              Tek değişken ev fiyatı. Kira, vergi, sigorta ve yönetim ondan
              türüyor; hepsinin varsayımı aşağıda açık.
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
                <span>{bolge.not}</span>
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
                <span>ekstrapolasyon</span>
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
                Para evin neresinden girip neresinden çıkıyor. Satırların üzerine
                gelin; çizimdeki hat öne çıkar.
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
                Bunun dışında, boşluk ve büyük onarım için kiradan ayda{" "}
                <b className="v4-num">{fmtUsd(u.karsilikAylik)}</b> ayırmanızı öneriyoruz.
                Bu para gider değil; kendi hesabınızda kalıyor.
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
                        <dt>{g.etiket} · yıllık karşılık</dt>
                        <dd className="v4-num">
                          {fmtUsd(g.tutarYillik)} {g.not ? <em>{g.not}</em> : null}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p>
                    Sigorta {fmtUsd(sigorta(f))}/yıl, emlak vergisi{" "}
                    {fmtYuzde(GIDER.emlakVergisiOrani * 100, 2)} oranıyla ev fiyatı
                    üzerinden. Getiri oranları ev fiyatına değil, cebinizden çıkan{" "}
                    <b>toplam tutara</b> bölünür.
                  </p>
                  <p>
                    {!MODEL_DOGRULANDI
                      ? "Bütün rakamlar tahmindir ve partner verisiyle doğrulanmayı bekleyen bir model çalışmasıdır; taahhüt değildir. "
                      : "Bütün rakamlar tahmindir; taahhüt değildir. "}
                    Kira ve sigorta eğrileri {fmtUsd(BAND.min)}–{fmtUsd(BAND.max)} ürün
                    bandının iki senaryosundan geçiyor; {fmtUsd(BAND.max)} üstü aynı
                    doğrunun uzatılmasıdır ve kirayı yüksek tahmin ediyor olabilir.
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

      {/* ── Türkiye — aynı fiyatı okuyor ── */}
      <section className="v4-kars" id="v4-karsilastirma" aria-labelledby="v4-kars-bas">
        <div className="v4-kap">
          <Kunye4 no="03" ad="Karşılaştırma" />
          <div className="v4-kars__bas">
            <h2 className="v4-h2" id="v4-kars-bas" data-r>
              Aynı <span className="v4-num">{fmtUsd(k.butce)}</span>,
              <br />
              <em>iki ülke.</em>
            </h2>
            <p className="v4-p" data-r>
              İkisi de peşin alım. Türkiye&apos;de bir ev; Amerika&apos;da bu bütçe,
              yukarıda seçtiğiniz <b className="v4-num">{fmtUsd(f)}</b>&apos;lık evden
              kaç tane alıyorsa o kadar.
            </p>
          </div>

          <div className="v4-kars__ler">
            <div className="v4-kars__k v4-kars__k--tr" data-r>
              <p className="v4-kars__ulke">Türkiye&apos;de</p>
              <div className="v4-kars__evler">
                <EvIsaret id={`${kid}-tr`} tur="tr" />
              </div>
              <p className="v4-kars__adet v4-num">{fmtAdet(k.trEv)}</p>
              <div className="v4-kars__gelir">
                <span className="v4-num">{fmtUsd(k.trAylikNet)}</span>
                <em>aylık net getiri</em>
              </div>
            </div>

            <div className="v4-kars__k v4-kars__k--us" data-r style={{ ["--d" as string]: "120ms" }}>
              <p className="v4-kars__ulke">Amerika&apos;da, bu bantta</p>
              <div className="v4-kars__evler">
                {Array.from({ length: tamEv }, (_, i) => (
                  <EvIsaret key={i} id={`${kid}-us${i}`} tur="us" />
                ))}
                {kesir > 0.04 ? <EvIsaret id={`${kid}-usk`} tur="us" oran={kesir} /> : null}
              </div>
              <p className="v4-kars__adet v4-num">{fmtAdet(k.usEv)}</p>
              <div className="v4-kars__gelir">
                <span className="v4-num">{fmtUsd(k.usAylikNet)}</span>
                <em>aylık net · karşılıklar da düşülmüş</em>
              </div>
            </div>
          </div>

          <div className="v4-cubuklar" data-r aria-hidden="true">
            <div className="v4-cubuk">
              <span>Türkiye</span>
              <span className="v4-cubuk__ray"><i style={{ width: `${(k.trAylikNet / maxGelir) * 100}%` }} /></span>
              <b className="v4-num">{fmtUsd(k.trAylikNet)}</b>
            </div>
            <div className="v4-cubuk v4-cubuk--altin">
              <span>Amerika</span>
              <span className="v4-cubuk__ray"><i style={{ width: `${(k.usAylikNet / maxGelir) * 100}%` }} /></span>
              <b className="v4-num">{fmtUsd(k.usAylikNet)}</b>
            </div>
          </div>

          <p className="v4-kars__not" data-r>
            <span className="v4-kars__kat v4-num">
              {k.kat.toFixed(1).replace(".", ",")}×
            </span>
            <span>
              Aylık gelir farkı. Türkiye kolonu bugün bulunabilen <b>en iyi</b> koşulla
              kuruldu — giriş {fmtUsd(TR.girisBileti)}, brüt kira {fmtUsd(TR.kiraAylik)}/ay,
              net getiri {fmtYuzde(TR.netGetiri * 100, 1)}. Bizim kolonumuzdan boşluk ve
              bakım karşılıkları da düşüldü. Karşılaştırmanın tabanı kasten aleyhimize.
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
