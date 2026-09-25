import type { ReactNode } from "react";
import Link from "next/link";
import { gambettaV4 } from "@/app/fonts";
import { Hareket4 } from "./Hareket4";
import { Nav4 } from "./Nav4";
import { Dip4 } from "./Dip4";
import { Ok4 } from "./isaret";
import { yaziYolu, type Yazi } from "@/lib/icerik";

/**
 * V4 okuma kabuğu — blog, küme, yazı ve "Hesabın tamamı" sayfaları.
 *
 * Ana sayfayla aynı nav, aynı alt şerit, aynı tipografi. İçerideki eski
 * bileşenler (Icerik, KumeLinkleri, hesap panoları) yeniden yazılmadı:
 * `.v2` sınıfı taban stilleri için duruyor, `v4-okuma.css` onların renk
 * ve yarıçap token'larını V4 paletine çeviriyor, başlıkları Gambetta'ya
 * alıyor. İçerik, adres ve yapısal veri değişmedi.
 */
export function OkumaKabuk4({ children }: { children: ReactNode }) {
  return (
    <div className={`v2 v4 v4-okuma ${gambettaV4.variable}`}>
      <Hareket4 />
      <Nav4 kok="/" />
      {children}
      <Dip4 kok="/" />
    </div>
  );
}

/** Koyu üst bant — ev detay sayfasındaki başlık bandıyla aynı dil. */
export function OkumaBas4({
  ust,
  baslik,
  oz,
  children,
  genis = false,
}: {
  ust?: ReactNode;
  baslik: ReactNode;
  oz?: ReactNode;
  children?: ReactNode;
  genis?: boolean;
}) {
  return (
    <header className="v4-okbas">
      <div className="v4-kap">
        <div className={`v4-okbas__in${genis ? " v4-okbas__in--genis" : ""}`}>
          {ust}
          <h1 className="v4-h1 v4-h2--acik">{baslik}</h1>
          {oz ? <p className="v4-okbas__oz">{oz}</p> : null}
          {children}
        </div>
      </div>
    </header>
  );
}

/** Editoryal yazı listesi — ikon ve kapak yok, kılcal çizgili satırlar. */
export function YaziListesi4({ yazilar }: { yazilar: Yazi[] }) {
  return (
    <ul className="v4-yl">
      {yazilar.map((y) => (
        <li key={y.slug}>
          <Link href={yaziYolu(y)}>
            <b>{y.baslik}</b>
            <span>{y.ozet}</span>
            <Ok4 />
          </Link>
        </li>
      ))}
    </ul>
  );
}
