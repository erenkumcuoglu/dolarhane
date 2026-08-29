/**
 * Referans tablosu — portföydeki evlerin güncel getirileri.
 *
 * Bilinçli olarak SAYI İDDİA EDİLMİYOR: "üç ev sattık" gibi bir cümle yok,
 * çünkü sayı bugün küçük ve zamanla büyüyecek. Bölüm "bazı evlerimizin
 * getirileri" olarak kuruldu; tabloya satır eklemek başka hiçbir yeri
 * değiştirmiyor.
 *
 * ORNEK true olduğu sürece tablonun üstünde kırmızı "[ÖRNEK VERİ]" damgası
 * durur. Gerçek veri geldiğinde satırlar değiştirilir ve ORNEK false yapılır.
 */
export const ORNEK = true;

/**
 * "Güncel değerleme" kaynaksız gösterilmez: kimin, ne zaman değerlediği
 * yazılmadan bu satır bir iddiadır. Kaynak belli olana kadar
 * DEGERLEME_KAYNAGI boş kalır ve değerleme satırı karttan düşer.
 */
export const DEGERLEME_KAYNAGI = "";

export type Referans = {
  alimTarihi: string;
  alisFiyati: number;
  guncelDegerleme: number;
  guncelKira: number;
  kiraciDurumu: string;
  /** Kimlik vermeyen künye — isim, fotoğraf, şirket adı yazılmaz. */
  alici: string;
};

export const REFERANSLAR: Referans[] = [
  {
    alimTarihi: "Mart 2024",
    alisFiyati: 181_000,
    guncelDegerleme: 196_500,
    guncelKira: 1_840,
    kiraciDurumu: "İlk kiracı, 26 aydır",
    alici: "Ankara, 38 · mühendis",
  },
  {
    alimTarihi: "Ağustos 2024",
    alisFiyati: 164_500,
    guncelDegerleme: 172_000,
    guncelKira: 1_735,
    kiraciDurumu: "İkinci kiracı, 9 aydır",
    alici: "İstanbul, 45 · hekim",
  },
  {
    alimTarihi: "Ocak 2025",
    alisFiyati: 205_000,
    guncelDegerleme: 214_750,
    guncelKira: 2_050,
    kiraciDurumu: "Alımdan beri aynı, 19 ay",
    alici: "İzmir, 41 · yazılımcı",
  },
];

/**
 * Aylık yayınlanacak işletme rakamları. Bunlar finance.ts'ten türetilmiyor —
 * fiili operasyondan gelmeleri gerekiyor; gelene kadar her satır kendi
 * "örnek · gerçek veri değil" etiketini taşıyor.
 */
export const SEFFAFLIK_ORNEK = true;
export const SEFFAFLIK: { k: string; v: string }[] = [
  { k: "Doluluk oranı", v: "%94,8" },
  { k: "Kira tahsilatı", v: "%98,1" },
  { k: "Ortalama net getiri", v: "%6,4" },
  { k: "Ortalama kiracı bulma", v: "31 gün" },
];
