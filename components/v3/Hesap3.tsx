"use client";

import { useState } from "react";
import {
  BAND,
  GIDER,
  HIZMET_ORANI,
  KANONIK,
  KAPANIS_ORANI,
  KAPSAM,
  MODEL_DOGRULANDI,
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

/**
 * V3 HESAP — sayfanın hâkim bölümü.
 *
 * Brief §3 ve "Calculator UX": karşılamadan hemen sonra, tam genişlik,
 * solda girdiler / sağda kalın sonuç alanı, sonuç hiyerarşisi ilk
 * bakışta taranabilir, varsayımlar kademeli açılıyor.
 *
 * TEK GİRDİ: ev fiyatı. Bütçe kaydırıcısı ve altındaki bant notu
 * çıkarıldı; kaydırıcı ürün bandının (120–200 bin) üstüne, 400 bine
 * kadar açıldı. Üst yarı ekstrapolasyon olduğu için damgalı.
 *
 * MODEL PEŞİN (iş planı §10–11). Brief'in üç sonucu kredili bir modelin
 * sonuçları — "aylık kredi ödemesi" ve "aylık fark" bu üründe YOK.
 * Hiyerarşi korunarak peşin modelin karşılıklarıyla kuruldu:
 *   1. Tahmini aylık kira
 *   2. Aylık işletme gideri
 *   3. Aylık eline geçen        ← en büyük rakam
 * Altında iki destek oranı: nakit getiri ve giriş bileti.
 *
 * Türkiye karşılaştırması artık AYRI BÖLÜM DEĞİL (brief "Türkiye
 * benchmark"): sonuç kolonunun içinde, ölçülü bir iç panel. v2'deki tam
 * genişlik karşılaştırma tablosu bu yüzden V3'te yok.
 *
 * Karşılık satırı görünür kalıyor — brief sadeleştirme istiyor ama bu
 * kalem gizlenirse üçüncü yıl gelen çatı faturası sürpriz olur. Tek
 * satır özet üstte, dökümü varsayımlarda.
 */
/* Kutudaki rakam sayfanın geri kalanıyla aynı biçimde okunmalı:
   140.000, 140000 değil. `type="number"` binlik ayracı taşıyamadığı
   için metin kutusu + rakam klavyesi kullanılıyor; yazarken rakam
   dışındaki her şey düşüyor, odak çıkınca değer banda kenetleniyor. */
const grupla = new Intl.NumberFormat("tr-TR").format;
const rakamlar = (v: string) => Number(v.replace(/\D/g, ""));

export function Hesap3() {
  const [fiyat, setFiyat] = useState<number>(KANONIK.fiyat);
  const [acik, setAcik] = useState(false);

  const u = getiri(fiyat);
  /* Türkiye karşılaştırmasının bütçesi artık kullanıcı girdisi değil,
     slayt 9'un kendi giriş bileti. Bütçe kaydırıcısı kalktı: hesabın
     tek değişkeni ev fiyatı, panel yine canlı — aynı parayla kaç ev
     sığdığı fiyatla değişiyor. */
  const k = karsilastirma(TR.girisBileti, fiyat);
  /* Ürün bandının üstü ekstrapolasyon. Kırmızı damga kaldırıldı
     (Eren, 2026-09-23); beyan kayboldu değil, "Varsayımlar ve hesabın
     dökümü" bloğunda duruyor ve fiyat banda çıkınca cümle sertleşiyor.
     Gerekçe lib/finance.ts KAPSAM notunda. */
  const bandUstu = fiyat > BAND.max;

  return (
    <section className="v3-hesap" id="v3-hesap">
      <div className="v3-kap v3-hesap__in">
        {/* ── girdiler ── */}
        <div className="v3-hesap__sol">
          <h2 className="v3-h2">Yatırımınızı hesaplayın.</h2>
          <p className="v3-hesap__lede">
            Ev fiyatını değiştirin, senaryo canlı kurulur. Peşin alım —
            kredi, taksit ve vade yok.
          </p>

          <div className="v3-kaydir">
            <div className="v3-kaydir__bas">
              <label htmlFor="v3-fiyat">Hedef ev fiyatı</label>
              <span className="v3-kaydir__kutu">
                <i aria-hidden="true">$</i>
                <input
                  className="v3-num"
                  type="text"
                  inputMode="numeric"
                  value={grupla(fiyat)}
                  aria-label="Hedef ev fiyatı, dolar"
                  onChange={(e) => setFiyat(rakamlar(e.target.value))}
                  onBlur={() =>
                    setFiyat(Math.min(KAPSAM.max, Math.max(KAPSAM.min, fiyat)))
                  }
                />
              </span>
            </div>
            <input
              id="v3-fiyat"
              className="v3-ray"
              type="range"
              min={KAPSAM.min}
              max={KAPSAM.max}
              step={5_000}
              value={fiyat}
              aria-valuetext={fmtUsd(fiyat)}
              onChange={(e) => setFiyat(Number(e.target.value))}
            />
            <div className="v3-kaydir__uc">
              <span>{fmtUsd(KAPSAM.min)}</span>
              <span>{fmtUsd(KAPSAM.max)}</span>
            </div>
          </div>
        </div>

        {/* ── sonuç ── */}
        <div className="v3-hesap__sag">
          <div className="v3-sonuc" aria-live="polite">
          <p className="v3-sonuc__bas">Tahmini aylık tablo</p>

          <dl className="v3-sonuc__ler">
            <div className="v3-sonuc__s">
              <dt>
                Tahmini aylık kira
                <em>brüt · kiracı içinde</em>
              </dt>
              <dd className="v3-num">{fmtUsd(u.kiraAylik)}</dd>
            </div>
            <div className="v3-sonuc__s">
              <dt>
                Aylık işletme gideri
                <em>emlak vergisi, sigorta, mülk yönetimi</em>
              </dt>
              <dd className="v3-num">−{fmtUsd(u.giderYillik / 12)}</dd>
            </div>
            <div className="v3-sonuc__s v3-sonuc__s--vurgu">
              <dt>
                Aylık eline geçen
                <em>hesabınıza giren para</em>
              </dt>
              <dd className="v3-num">{fmtUsd(u.nakitAylik)}</dd>
            </div>
          </dl>

          <div className="v3-oran">
            <div>
              <p className="v3-oran__v v3-num">
                {fmtYuzde(u.nakitGetiri * 100, 1)}
              </p>
              <p className="v3-oran__k">nakit getiri · toplam çıkış üzerinden</p>
            </div>
            <div>
              <p className="v3-oran__v v3-num">{fmtUsd(u.giris.toplam)}</p>
              <p className="v3-oran__k">giriş bileti · kapanış ve hizmet dahil</p>
            </div>
          </div>

          <p className="v3-sonuc__karsilik">
            Beklenmedik bakım giderlerini karşılaması için kiranızdan ayda{" "}
            <b className="v3-num">{fmtUsd(u.karsilikAylik)}</b> biriktirmenizi
            öneririz.
          </p>

          <details
            className="v3-varsayim"
            open={acik}
            onToggle={(e) => setAcik((e.target as HTMLDetailsElement).open)}
          >
            <summary>Varsayımlar ve hesabın dökümü</summary>
            <div className="v3-varsayim__gov">
              <dl>
                <div>
                  <dt>Kapanış masrafı</dt>
                  <dd className="v3-num">
                    {fmtUsd(u.giris.kapanis)}
                    <em>{fmtYuzde(KAPANIS_ORANI * 100)}</em>
                  </dd>
                </div>
                <div>
                  <dt>Dolarhane hizmet bedeli</dt>
                  <dd className="v3-num">
                    {fmtUsd(u.giris.hizmet)}
                    <em>{fmtYuzde(HIZMET_ORANI * 100, 1)}</em>
                  </dd>
                </div>
                {giderler(fiyat).map((g) => (
                  <div key={g.etiket}>
                    <dt>{g.etiket} · yıllık</dt>
                    <dd className="v3-num">
                      {fmtUsd(g.tutarYillik)}
                      {g.not ? <em>{g.not}</em> : null}
                    </dd>
                  </div>
                ))}
                {karsiliklar(fiyat).map((g) => (
                  <div key={g.etiket}>
                    <dt>{g.etiket} · yıllık karşılık</dt>
                    <dd className="v3-num">
                      {fmtUsd(g.tutarYillik)}
                      {g.not ? <em>{g.not}</em> : null}
                    </dd>
                  </div>
                ))}
              </dl>
              <p>
                Sigorta {fmtUsd(sigorta(fiyat))}/yıl, emlak vergisi{" "}
                {fmtYuzde(GIDER.emlakVergisiOrani * 100, 2)} oranıyla ev fiyatı
                üzerinden. Getiri oranları ev fiyatına değil, cebinizden çıkan{" "}
                <b>toplam tutara</b> bölünür. Türkiye kolonu: giriş bileti{" "}
                {fmtUsd(TR.girisBileti)}, aylık brüt kira {fmtUsd(TR.kiraAylik)},
                tahmini net getiri {fmtYuzde(TR.netGetiri * 100, 1)}. İki taraf
                da peşin alım; Türkiye kolonu bugün bulunabilen{" "}
                <b>en iyi</b> koşulla kuruldu — piyasa ortalaması daha kötü —
                ve bizim kolonumuz bakım payı da düşülmüş rakamla, yani
                karşılaştırmanın tabanı kasten aleyhimize.
              </p>
              <p>
                {!MODEL_DOGRULANDI
                  ? "Bütün rakamlar tahmindir ve partner verisiyle doğrulanmayı bekleyen bir model çalışmasıdır; taahhüt değildir. "
                  : "Bütün rakamlar tahmindir; taahhüt değildir. "}
                Kira ve sigorta eğrileri {fmtUsd(BAND.min)}–{fmtUsd(BAND.max)}{" "}
                ürün bandının iki doğrulanmış senaryosundan geçiyor;{" "}
                {fmtUsd(BAND.max)} üstü aynı doğrunun uzatılmasıdır ve kirayı
                yüksek tahmin ediyor olabilir
                {bandUstu ? " — şu an o bölgedesiniz" : ""}. Satır satır
                dökümü ve dayanakları için{" "}
                <a href="/hesap/">hesabın tamamı</a>.
              </p>
            </div>
          </details>
          </div>

          {/* Türkiye — cetvelin ALTINDA, ayrı bir callout kutusu.
              Destek bağlamı; sonuç panelinin içinde değil ki hesabın
              çıktısıyla aynı ağırlıkta okunmasın (brief "Türkiye
              benchmark"). */}
          <aside className="v3-tr">
            <p className="v3-tr__bas">Aynı bütçe Türkiye&apos;de ne yapar?</p>
            <p className="v3-tr__gov">
              <b className="v3-num">{fmtUsd(k.butce)}</b> Türkiye&apos;de{" "}
              <b>bir ev</b> alıyor ve ayda{" "}
              <b className="v3-num">{fmtUsd(k.trAylikNet)}</b> getiriyor. Aynı
              parayla bu bantta <b>{fmtAdet(k.usEv)}</b>, ayda toplam{" "}
              <b className="v3-num">{fmtUsd(k.usAylikNet)}</b>.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
