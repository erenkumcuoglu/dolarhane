import type { Metadata } from "next";
import { ADRES_VAR } from "@/lib/site";
import { Toc } from "@/components/hesap/Toc";
import { OkumaKabuk4, OkumaBas4 } from "@/components/v4/OkumaKabuk4";
import { Ok4 } from "@/components/v4/isaret";
import "../v2.css";
import "../v4.css";
import "../v4-okuma.css";
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
  /* Kendi canonical'ı olmadığı sürece kök layout'unkini miras alıyordu:
     53 yazıdan link alan bu sayfa kendini ana sayfanın kopyası ilan
     ediyordu. */
  ...(ADRES_VAR ? { alternates: { canonical: "/hesap/" } } : {}),
};

export default function HesapSayfasi() {
  /* V4 okuma kabuğu (2026-09): nav, alt şerit ve başlık dili ana sayfayla
     aynı. Panolar (components/hesap) yeniden yazılmadı; renk, yarıçap ve
     başlık dili v4-okuma.css'ten. Kapanış çağrısı ana sayfanın V4 formuna
     gidiyor (eski #v2-form çapası artık yok). */
  return (
    <OkumaKabuk4>
      <OkumaBas4
        baslik={
          <>
            Hesabın <em>tamamı.</em>
          </>
        }
        oz="Burada sizi ikna etmeye çalışmıyoruz; hesabı denetlemenize izin veriyoruz. Peşin alımın her satırı, tek parça."
      >
        <a className="v4-baglanti v4-baglanti--acik v4-okbas__geri" href="/#v4-hesap">
          Ana sayfadaki hesap aletine dön <Ok4 />
        </a>
      </OkumaBas4>

      <main className="kap hesap" id="icerik">
        <Toc />
        <div className="hesap__govde">
          <Giris />
          <Defter />
          <Senaryolar />
          <Karsilastirma />
        </div>
      </main>

      <section className="v4-kapanis v4-okuma__kapanis">
        <div className="v4-kap v4-kapanis__in">
          <div>
            <h2 className="v4-h2 v4-h2--acik">
              Bu tablo sizin sayılarınızla <em>nasıl görünüyor?</em>
            </h2>
            <p className="v4-kapanis__lede">
              Bütçenizi yazın; portföyümüzden size uygun evleri ve her birinin
              net tablosunu görüşmede birlikte açalım.
            </p>
          </div>
          <div>
            <a className="v4-dugme v4-dugme--tam" href="/#v4-kapanis">
              <span>Görüşme alın</span>
              <Ok4 />
            </a>
          </div>
        </div>
      </section>
    </OkumaKabuk4>
  );
}
