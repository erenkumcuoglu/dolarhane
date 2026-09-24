import { CANLI, MODEL_DOGRULANDI, getiri } from "@/lib/finance";
import { EVLER } from "@/lib/portfoy";
import { fmtUsd } from "@/lib/finance";
import { Slogan4 } from "./Slogan4";
import { Sayi4 } from "./Sayi4";
import { Ok4 } from "./isaret";

/**
 * V4 karşılama — sinematik, tam ekran.
 *
 * Fotoğraf kenardan kenara ve yavaşça yaklaşıyor (CSS, 9 sn); üstünde
 * soldan ve alttan lacivert perde. Manşet ince Gambetta, çok büyük —
 * sayfanın sesi burada kuruluyor: bağırmayan ama emin.
 *
 * Sağ altta cam künye kartı ÖRNEK portföyden okunuyor ve "örnek"
 * damgası taşıyor. Alt kenarda dört rakamlı defter şeridi: lib/finance.ts
 * CANLI değerleri, görüş alanına girince sayıyor.
 */
const EV = EVLER[3];
const EV_G = getiri(EV.fiyat);

export function Hero4() {
  const g = CANLI.getiri;
  const k = CANLI.karsilastirma;
  return (
    <header className="v4-hero" id="v4-tepe">
      <div className="v4-hero__foto" aria-hidden="true">
        <img
          src="/ev/v4/hero-2400.jpg"
          srcSet="/ev/v4/hero-1200.jpg 1200w, /ev/v4/hero-2400.jpg 2400w"
          sizes="100vw"
          width={2400}
          height={1600}
          alt=""
          fetchPriority="high"
        />
      </div>
      <span className="v4-rozet v4-hero__rozet">temsilî fotoğraf</span>

      <div className="v4-kap v4-hero__in">
        <p className="v4-hero__ust" data-r>
          <span className="v4-nokta" aria-hidden="true" />
          Kiracısı içinde · ilk aydan dolar kira
        </p>

        <Slogan4 />

        <div className="v4-hero__alt">
          <div className="v4-hero__soz" data-r>
            <p className="v4-hero__lede">
              Amerika&apos;nın orta kuşağında, peşin alınan müstakil bir ev. Tapu sizin
              adınıza, yönetim bizde. Hesabın tamamı satır satır açık — aleyhimize olan
              notlar dahil.
            </p>
            <div className="v4-hero__eylem">
              <a className="v4-dugme" href="#v4-hesap">
                <span>Yatırımınızı hesaplayın</span>
                <Ok4 />
              </a>
              <a className="v4-baglanti v4-baglanti--acik" href="#v4-evler">
                Evleri görün
              </a>
            </div>
          </div>

          <aside className="v4-cam" data-r aria-label="Örnek ev künyesi">
            <p className="v4-cam__ust">
              <span className="v4-damga-kucuk">örnek</span>
              <span>{EV.z}</span>
            </p>
            <p className="v4-cam__fiyat v4-num">{fmtUsd(EV.fiyat)}</p>
            <p className="v4-cam__kunye">
              {EV.oda} · {EV.m2} m² · {EV.yil}
            </p>
            <div className="v4-cam__kira">
              <span>beklenen kira</span>
              <b className="v4-num">{fmtUsd(EV_G.kiraAylik)} / ay</b>
            </div>
          </aside>
        </div>
      </div>

      <div className="v4-defter">
        <div className="v4-kap v4-defter__in">
          {[
            { d: g.giris.toplam, b: "usd" as const, k: "Giriş bileti", a: "kapanış ve hizmet dahil" },
            { d: g.nakitAylik, b: "usd" as const, k: "Aylık eline geçen", a: "vergi, sigorta, yönetim sonrası" },
            { d: g.nakitGetiri * 100, b: "yuzde1" as const, k: "Nakit getiri", a: "brüt değil · toplam çıkış üzerinden" },
            { d: k.usEv, b: "adet" as const, k: `${fmtUsd(k.butce)} ile`, a: "Türkiye'de aynı parayla 1 ev" },
          ].map((x, i) => (
            <div className="v4-defter__h" key={x.k} data-r style={{ ["--d" as string]: `${i * 90}ms` }}>
              <p className="v4-defter__k">{x.k}</p>
              <Sayi4 className="v4-defter__v v4-num" deger={x.d} bicim={x.b} />
              <p className="v4-defter__a">{x.a}</p>
            </div>
          ))}
        </div>
        {!MODEL_DOGRULANDI ? (
          <p className="v4-kap v4-defter__not">
            Model çalışması · rakamlar partner verisiyle doğrulanmayı bekliyor, taahhüt değildir.
          </p>
        ) : null}
      </div>
    </header>
  );
}
