/**
 * Örnek portföy — kart verisi.
 *
 * Fiyatlar iş planının hedef bandında (120–160 bin $, slayt 15 ve 24);
 * kanonik senaryo 140.000 $. Kira ve net getiri BURADA YAZMAZ, çünkü
 * ikisi de fiyatın fonksiyonu ve lib/finance.ts'ten türetiliyor — elle
 * yazılsalardı modelden bağımsız kayabilirlerdi.
 *
 * ORNEK true olduğu sürece kartlar "[ÖRNEK VERİ]" damgasıyla çıkar.
 * Fotoğraflar temsilîdir (public/ev/KAYNAK.txt).
 */
export const ORNEK = true;

export type Ev = {
  /** Bölge künyesi — şehir/eyalet adı yazılmaz (DESIGN.md kural 11). */
  z: string;
  fiyat: number;
  durum: string;
  yil: number;
  oda: string;
  m2: number;
  arsa: number;
  ozellik: string[];
  karakter: string;
  foto: string;
};

export const EVLER: Ev[] = [
  {
    z: "Bölge A · orta kuşak",
    fiyat: 128_000,
    durum: "Kiracılı",
    yil: 1952,
    oda: "3 yatak · 1,5 banyo",
    m2: 112,
    arsa: 510,
    ozellik: ["Ayrık garaj", "Kapalı veranda", "Bodrum"],
    karakter:
      "Aynı kiracı üç yıldır oturuyor; sözleşme geçen yaz 14 ay daha uzatıldı.",
    foto: "/ev/ev-01.jpg",
  },
  {
    z: "Bölge B · orta kuşak",
    fiyat: 139_000,
    durum: "Tadilat bitti",
    yil: 1968,
    oda: "3 yatak · 2 banyo",
    m2: 134,
    arsa: 640,
    ozellik: ["Çatı yenilendi", "Yeni kombi", "İki araçlık garaj"],
    karakter:
      "Alım sonrası tadilatı bitti, kiracı arayışı başladı. Bu bantta bir evin kiracı bulma ortalaması 31 gün.",
    foto: "/ev/ev-02.jpg",
  },
  {
    z: "Bölge A · orta kuşak",
    fiyat: 147_500,
    durum: "Kiracılı",
    yil: 1948,
    oda: "2 yatak · 1 banyo",
    m2: 96,
    arsa: 470,
    ozellik: ["Ahşap cephe", "Arka bahçe", "Çamaşır odası"],
    karakter:
      "Kiracı beş yıldır aynı. Bandın en küçük evi — küçük ev, düşük fiyat, aynı kira talebi.",
    foto: "/ev/ev-03.jpg",
  },
  {
    z: "Bölge C · orta kuşak",
    fiyat: 158_000,
    durum: "Kiracılı",
    yil: 1971,
    oda: "3 yatak · 2 banyo",
    m2: 121,
    arsa: 580,
    ozellik: ["İki araçlık garaj", "Kapalı otopark", "Tam bodrum"],
    karakter:
      "Aile mahallesi; kiracı profili genelde uzun süreli. Bu tip evler boş kalma süresini kısaltıyor.",
    foto: "/ev/ev-04.jpg",
  },
];
