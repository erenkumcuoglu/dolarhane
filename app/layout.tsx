import type { Metadata } from "next";
import { satoshi, gambetta } from "./fonts";
import "./globals.css";

/**
 * Yön sözleşmesi — üretim çıktısında da durur, denetlenebilir olsun diye.
 * Her düzenlemede önce bu okunur.
 */
const CONTRACT = `<!--
WORLD: v3. Claude Design masaüstü (1180) ve mobil (760) artboard'larından port.
Bir önceki dünya ("Kur Panosu", seed 6e0375e3) BIRAKILDI ve anti-referanstır:
sert kenar / sıfır yarıçap / gölgesizlik kuralları burada geçerli değildir.
THESIS: Manşet aritmetik değil vaattir — "Amerika'da bir eviniz olacak.
Taksitini kiracınız ödeyecek." Oran manşetin kanıtı, manşetin kendisi değil.
OWN-WORLD: Sıcak kırık beyaz zemin #FBFAF8, mürekkep #171A1F, marka amber
#D98314, amber washlar, yuvarlak köşe (6–18px + pill), yumuşak gölge.
Satoshi 400/500/700/900 gövde ve display; Gambetta 400 italik YALNIZ dürüst
vuruş cümlelerinde aksan. Fontlar self-host, harici istek yok.
STORY: Vaat → kanıt (1,92x / 0,28x) → canlı hesap → altı bölümlük Detaylar
(masaüstünde ilerleme rayı, mobilde akordeon) → dört adımlı akış → form.
DATA: Sayfadaki her rakam lib/finance.ts'ten gelir; elle yazılan rakam yok.
Dayanaklar IDDIA-DENETIMI.md. Şeffaflık rakamları ve portföy kartları
ÖRNEKTİR ve damgalıdır; kimlik alanları doldurulmadıkça görünür kalır.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

export const metadata: Metadata = {
  title: "Dolarhane — Amerika'da bir eviniz olacak",
  description:
    "Amerika'nın orta kuşağında müstakil bir ev, ilk günden kiracılı. Kira, kredi taksitinin 1,92 katı. Hesabın tamamı açık — aleyhimize olan notlar dahil.",
  openGraph: {
    title: "Dolarhane — Amerika'da bir eviniz olacak",
    description:
      "Taksitini kiracınız ödeyecek. Hesabın tamamı satır satır açık, aleyhimize olan notlar dahil.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${satoshi.variable} ${gambetta.variable}`}
    >
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: CONTRACT }} />
        <a className="skip" href="#icerik">
          İçeriğe geç
        </a>
        {children}
      </body>
    </html>
  );
}
