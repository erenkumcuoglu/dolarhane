import type { Metadata } from "next";
import { NavYazi } from "@/components/yazi/NavYazi";
import { DipYazi } from "@/components/yazi/DipYazi";
import { Toc } from "@/components/hesap/Toc";
import "../v2.css";
import {
  Giris,
  Defter,
  Senaryolar,
  Karsilastirma,
} from "@/components/hesap/panolar";

export const metadata: Metadata = {
  title: "Hesabın tamamı — Dolarhane",
  description:
    "Peşin alımın tamamı tek parça: giriş bileti, yıllık gider defteri, iki fiyat senaryosu ve Türkiye karşılaştırması. Aleyhimize olan satırlar dahil.",
};

export default function HesapSayfasi() {
  /* Sayfa v2 kabuğuna alındı: nav ve alt şerit bilgi bankasıyla aynı.
     Eskisi birinci iterasyonun Nav/Footer'ıydı ve bağlantıları ana
     sayfanın ESKİ çapalarına gidiyordu (#gorusme, #referanslar, #pano) —
     v2 ana sayfada o id'ler yok, üçü de boşa düşüyordu. Bu sayfaya 53
     yazı sayfasından link veriliyor; ana çağrının ölü olması pahalıydı. */
  return (
    <div className="v2">
      <NavYazi />

      <header className="hbas">
        <div className="kap hbas__in">
          <div>
            <h1 className="h1--hesap">Hesabın tamamı.</h1>
            <p className="lede hbas__lede">
              Burada sizi ikna etmeye çalışmıyoruz; hesabı denetlemenize izin
              veriyoruz. Peşin alımın her satırı, tek parça.
            </p>
          </div>
          <a className="btn btn--sessiz" href="/">
            ← Ana sayfaya dön
          </a>
        </div>
      </header>

      <main className="kap hesap" id="icerik">
        <Toc />
        <div className="hesap__govde">
          <Giris />
          <Defter />
          <Senaryolar />
          <Karsilastirma />
        </div>
      </main>

      <section className="kapanis">
        <div className="kap kapanis__in">
          <div>
            <h2 className="h2 kapanis__h">
              Bu tablo sizin sayılarınızla nasıl görünüyor?
            </h2>
            <p className="lede kapanis__lede">
              45 dakikada üç gerçek ev, üç gerçek net tablo.
            </p>
          </div>
          <a className="btn btn--lg" href="/#v2-form">
            Görüşme alın
          </a>
        </div>
      </section>

      <DipYazi />
    </div>
  );
}
