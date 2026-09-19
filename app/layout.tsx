import type { Metadata } from "next";
import { KONTAK } from "@/lib/kontak";
import { satoshi, gambetta } from "./fonts";
import "./globals.css";

/**
 * Yön sözleşmesi — üretim çıktısında da durur, denetlenebilir olsun diye.
 * Her düzenlemede önce bu okunur.
 */
const CONTRACT = `<!--
WORLD: v3 kompozisyon (Claude Design 1180/760 artboard'larından port),
Dolarhane Brand Kit v2 paletiyle. Bir önceki dünya ("Kur Panosu", seed
6e0375e3) BIRAKILDI ve anti-referanstır: sert kenar / sıfır yarıçap /
gölgesizlik kuralları burada geçerli değildir.
THESIS: Model PEŞİN ev sahipliği (iş planı §10). Kaldıraç kamuya açık
üründen ÇIKTI (§11) — "Amerika'da bir eviniz olacak / Taksitini kiracınız
ödeyecek" tagline'ı ve kira/taksit oranı iddiası bırakıldı. Manşet artık
slayt 7'nin üç sloganı, 4 saniyede bir dönüyor (lib/sloganlar.ts).
OWN-WORLD: Beyaz zemin #FFFFFF, sıcak krem #F5F1E8 washlar, lacivert
mürekkep #071A2B (kit NAVY), marka altını #C9A45C.
Altın YALNIZ dolgu/çizgi/ikon ve koyu zeminde metin: beyazda 2,35:1.
Açık zeminde büyük metin #AC8539, küçük metin #785D28. Yuvarlak köşe
(6–18px + pill), yumuşak gölge. Satoshi 400/500/700/900 gövde ve display;
Gambetta 400 italik YALNIZ dürüst vuruş cümlelerinde aksan. Fontlar
self-host, harici istek yok.
STORY: Dönen vaat → canlı hesap → Türkiye karşılaştırması → gerekçe →
portföy → referans → biz kimiz → süreç → riskler → form.
DATA: Sayfadaki her rakam lib/finance.ts'ten gelir; elle yazılan rakam yok.
Dayanaklar IDDIA-DENETIMI.md. Şeffaflık rakamları ve portföy kartları
ÖRNEKTİR ve damgalıdır; kimlik alanları doldurulmadıkça görünür kalır.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

/* 2026-09 strateji: "Amerika'da bir eviniz olacak / Taksitini kiracınız
   ödeyecek" tagline'ı BIRAKILDI ve kaldıraç kamuya açık üründen çıktı
   (iş planı §11). Sayfanın kendisi temizlendi ama bu blok atlanmıştı:
   Google başlığı, WhatsApp önizlemesi ve og:description hâlâ o tagline'ı
   ve "kredi taksitinin 1,92 katı" iddiasını taşıyordu — ikisi de artık
   lib/finance.ts'te karşılığı olmayan bir modelin sözü. */
const BASLIK = "Dolarhane — Amerika'dan kiracılı ev al";
const OZET =
  "Peşin alınan müstakil ev, ilk günden kiracılı, kirası dolar cinsinden. Hesabın tamamı satır satır açık.";

/**
 * Mutlak adres gerektiren alanlar (metadataBase, og:image, canonical) yalnız
 * KONTAK.siteUrl doluyken yazılır. Uydurma bir adres, WhatsApp'ta kırık
 * önizleme demek — bu sayfanın ilk teması çoğu zaman o önizleme.
 */
export const metadata: Metadata = {
  title: BASLIK,
  description:
    "Amerika'nın orta kuşağında müstakil bir ev, peşin ve ilk günden kiracılı. Tapu sizin adınıza, yönetim bizde. Hesabın tamamı açık — aleyhimize olan satırlar dahil.",
  /* KÖK LAYOUT'TA CANONICAL YOK. Buraya yazılan canonical, kendi
     `alternates` alanını tanımlamayan HER sayfaya miras kalıyordu:
     `/hesap/` ve `/ortaklik/` kendilerini ana sayfanın kopyası ilan
     ediyordu. Canonical sayfaya ait bir beyandır, kabuğa değil — her
     sayfa kendi yolunu yazıyor. */
  ...(KONTAK.siteUrl ? { metadataBase: new URL(KONTAK.siteUrl) } : {}),
  openGraph: {
    title: BASLIK,
    description: OZET,
    locale: "tr_TR",
    type: "website",
    ...(KONTAK.siteUrl
      ? {
          url: KONTAK.siteUrl,
          siteName: "Dolarhane",
          images: [
            {
              url: "/og.png",
              width: 1200,
              height: 630,
              alt: "Dolarhane — Amerika'dan kiracılı ev al",
            },
          ],
        }
      : {}),
  },
  ...(KONTAK.siteUrl
    ? {
        twitter: {
          card: "summary_large_image" as const,
          title: BASLIK,
          description: OZET,
          images: ["/og.png"],
        },
      }
    : {}),
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
