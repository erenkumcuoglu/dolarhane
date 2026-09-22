/**
 * v2 hero — referans tasarımın kompozisyonu: lacivert sol panel, sağda
 * kenara kanayan fotoğraf, fotoğrafın üstüne binen beyaz mülk kartı,
 * altta üç çizgi ikon.
 *
 * İki sapma bilinçli:
 *  - Referanstaki konum etiketi ("Orlando, FL") YAZILMIYOR. Şehir ve eyalet
 *    sayfada geçmez (DESIGN.md §3 kural 11); yerine bölge künyesi var.
 *  - Kartın verisi örnek portföyden geliyor ve "örnek · temsilî" damgalı
 *    (kural 9 ve 16). Fotoğraf da bizim mülkümüz değil.
 */
import { CANLI, fmtAdet, fmtUsd, fmtYuzde, getiri } from "@/lib/finance";
import { EVLER } from "@/lib/portfoy";
import { IkonDolar, IkonGrafik, IkonUzak, IkonYatak, IkonBanyo, IkonAlan } from "./ikon";
import { Slogan2 } from "./Slogan2";

const OZELLIK = [
  { I: IkonDolar, b: "Gelir dolar, gider dolar", a: "Kur riski taşımıyorsunuz; kurun içindesiniz." },
  /* Eski madde "30 yıl sabit faiz" idi — doğrudan kaldıraç özelliği ve
     kaldıraç kamuya açık ürün değil (iş planı §11). Yerine §10'un peşin
     alım gerekçesi; rakam içermiyor, finance.ts'i bağlamıyor. */
  { I: IkonGrafik, b: "Peşin alım, hızlı kapanış", a: "Kredi onayına bağlı bekleme ve iptal riski yok." },
  { I: IkonUzak, b: "Uzaktan alım ve yönetim", a: "Süreç tamamen online, imzalar elektronik." },
];

/* Kart verisi örnek portföyün dördüncü evi — elle yazılmadı. */
const EV = EVLER[3];
/* Kira ve net getiri EVLER'de yazmaz; fiyattan türetilir. */
const EV_GETIRI = getiri(EV.fiyat);

export function Hero2() {
  return (
    <header className="v2-hero" id="v2-tepe">
      <div className="v2-hero__foto">
        <img
          src="/ev/hero.jpg"
          width={860}
          height={1075}
          alt="Temsilî fotoğraf: Amerika'nın orta kuşağında, bahçeli müstakil bir ev"
        />
        <span className="v2-hero__perde" aria-hidden="true" />
      </div>

      <div className="v2-kap v2-hero__in">
        <div className="v2-hero__soz">
          {/* Eski rozet "Kira, taksitin 1,92x katı" idi — kaldıraç iddiası,
              ve kaldıraç artık kamuya açık ürün değil (iş planı §11).
              Yerine slayt 2'nin kendi ölçüsü: kira akışı ilk ay başlıyor. */}
          <p className="v2-rozet">
            <i aria-hidden="true" />
            Kiracısı içinde · ilk aydan kira
          </p>

          <Slogan2 />

          <p className="v2-hero__lede">
            Orta kuşakta müstakil bir ev, ilk günden kiracılı. Tapu sizin
            adınıza, yönetim bizde. Hesabın tamamı satır satır açık —
            aleyhimize olan notlar dahil.
          </p>

          <div className="v2-hero__eylem">
            <a className="v2-btn v2-btn--altin v2-btn--lg" href="#v2-form">
              Görüşme alın
            </a>
            <a className="v2-btn v2-btn--hat v2-btn--lg" href="#v2-hesap">
              Yatırımınızı hesaplayın
            </a>
          </div>

          <ul className="v2-hero__oz">
            {OZELLIK.map((o) => (
              <li key={o.b}>
                <span className="v2-ikon" aria-hidden="true">
                  <o.I />
                </span>
                <span>
                  <b>{o.b}</b>
                  <i>{o.a}</i>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="v2-hero__sag">
          <article className="v2-kart v2-mulk">
            <p className="v2-mulk__damga">örnek · temsilî</p>
            <p className="v2-mulk__z">{EV.z}</p>
            <p className="v2-mulk__p v2-num">{fmtUsd(EV.fiyat)}</p>
            <ul className="v2-mulk__ler">
              <li>
                <span className="v2-mulk__i" aria-hidden="true">
                  <IkonYatak />
                </span>
                {EV.oda.split(" · ")[0]}
              </li>
              <li>
                <span className="v2-mulk__i" aria-hidden="true">
                  <IkonBanyo />
                </span>
                {EV.oda.split(" · ")[1]}
              </li>
              <li>
                <span className="v2-mulk__i" aria-hidden="true">
                  <IkonAlan />
                </span>
                {EV.m2} m² kullanım
              </li>
            </ul>
            <div className="v2-mulk__alt">
              <div>
                <p className="v2-xs">Beklenen aylık kira</p>
                <p className="v2-mulk__kira v2-num">{fmtUsd(EV_GETIRI.kiraAylik)} / ay</p>
              </div>
              <div>
                <p className="v2-xs">Nakit getiri</p>
                <p className="v2-mulk__kira v2-num">
                  {fmtYuzde(EV_GETIRI.nakitGetiri * 100, 1)}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="v2-kap v2-hero__band">
        {/* Bant peşin modelin dört ölçüsü: eskiden kira/taksit oranı ve
            30 yıllık vade vardı, ikisi de kaldıraç ölçüsüydü. */}
        {[
          { v: fmtUsd(CANLI.getiri.giris.toplam), k: "giriş bileti · her şey dahil" },
          { v: fmtUsd(CANLI.getiri.nakitAylik), k: "aylık eline geçen · ev başına" },
          { v: fmtYuzde(CANLI.getiri.nakitGetiri * 100, 1), k: "nakit getiri · brüt değil", altin: true },
          { v: fmtAdet(CANLI.karsilastirma.usEv), k: `${fmtUsd(CANLI.karsilastirma.butce)} ile · Türkiye'de 1` },
        ].map((x) => (
          <div key={x.k}>
            <p className={`v2-hero__bandV v2-num${x.altin ? " v2-altin" : ""}`}>{x.v}</p>
            <p className="v2-xs">{x.k}</p>
          </div>
        ))}
      </div>
    </header>
  );
}
