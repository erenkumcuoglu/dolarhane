import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Toc } from "@/components/hesap/Toc";
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
  return (
    <>
      <Nav aktif="Hesap" />

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
          <a className="btn btn--lg" href="/#gorusme">
            Görüşme alın
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
