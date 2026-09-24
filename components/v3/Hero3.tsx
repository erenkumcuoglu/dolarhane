/**
 * V3 karşılama — tek odak: sahiplik.
 *
 * Brief §2 kompozisyonu: büyük manşet, kısa destek cümlesi, İKİ ölçülü
 * eylem, sağda tek güçlü ev fotoğrafı. v2'deki üç ikonlu özellik satırı
 * BURADA YOK — brief hero'da ikon satırı + stat modülü + mülk kartı +
 * promo yığmayı açıkça yasaklıyor; üçünden en zayıfı ikon satırıydı
 * (içeriği zaten "Neden Amerika"da geçiyor).
 *
 * Mülk kartı kaldı ama KÜNYE ölçüsüne indi: fotoğrafın üstünde bölge,
 * fiyat ve beklenen kira. Tam mülk-detay arayüzü değil (brief §2).
 *
 * Dört rakamlı bant da kaldı ve karşılamanın altına, kendi sessiz
 * şeridine çekildi — sözün içinde değil, sözden sonra.
 */
import { CANLI, fmtAdet, fmtUsd, fmtYuzde, getiri } from "@/lib/finance";
import { EVLER } from "@/lib/portfoy";
import { Slogan3 } from "./Slogan3";

/* Künye verisi örnek portföyden; elle yazılmadı. */
const EV = EVLER[3];
const EV_GETIRI = getiri(EV.fiyat);

export function Hero3() {
  return (
    <header className="v3-hero" id="v3-tepe">
      <div className="v3-kap v3-hero__in">
        <div className="v3-hero__soz">
          {/* Pill kalktı: satır artık altındaki kılcal çizgiyle
              ayrılıyor. Zemin etiketi değil, manşetin üst satırı. */}
          <p className="v3-ust">Kiracısı içinde · ilk aydan kira</p>

          <Slogan3 />

          <p className="v3-hero__lede">
            Amerika&apos;nın orta kuşağında, peşin alınan bir ev. Tapu sizin
            adınıza, yönetim bizde. Hesabın tamamı satır satır ve şeffaf bir
            şekilde açık. Kimsenin size söylemediği notlar dahil.
          </p>

          <div className="v3-hero__eylem">
            <a className="v3-btn v3-btn--dolu v3-btn--lg" href="#v3-hesap">
              Yatırımınızı hesaplayın
            </a>
            <a className="v3-btn v3-btn--hat v3-btn--lg" href="#v3-evler">
              Evleri keşfedin
            </a>
          </div>
        </div>

        <figure className="v3-hero__foto">
          <img
            src="/ev/hero.jpg"
            width={860}
            height={1075}
            alt="Temsilî fotoğraf: Amerika'nın orta kuşağında, bahçeli müstakil bir ev"
          />
          <span className="v3-temsili">temsilî</span>
          <figcaption className="v3-kunye">
            <span className="v3-kunye__damga">örnek</span>
            <span className="v3-kunye__z">{EV.z}</span>
            <span className="v3-kunye__ler">
              <b className="v3-num">{fmtUsd(EV.fiyat)}</b>
              <i>
                {EV.oda} · {EV.m2} m²
              </i>
            </span>
            <span className="v3-kunye__kira">
              beklenen kira{" "}
              <b className="v3-num">{fmtUsd(EV_GETIRI.kiraAylik)}/ay</b>
            </span>
          </figcaption>
        </figure>
      </div>

      <div className="v3-band">
        <div className="v3-kap v3-band__in">
          {[
            {
              v: fmtUsd(CANLI.getiri.giris.toplam),
              k: "giriş bileti · her şey dahil",
            },
            {
              v: fmtUsd(CANLI.getiri.nakitAylik),
              k: "aylık eline geçen · ev başına",
            },
            {
              v: fmtYuzde(CANLI.getiri.nakitGetiri * 100, 1),
              k: "nakit getiri · brüt değil",
              altin: true,
            },
            {
              v: fmtAdet(CANLI.karsilastirma.usEv),
              k: `${fmtUsd(CANLI.karsilastirma.butce)} ile · Türkiye'de 1`,
            },
          ].map((x) => (
            <div key={x.k}>
              <p className={`v3-band__v v3-num${x.altin ? " v3-altin" : ""}`}>
                {x.v}
              </p>
              <p className="v3-band__k">{x.k}</p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
