/**
 * Dolarhane — tek hesap kaynağı.
 * Sayfadaki her rakam bu modülden gelir; hiçbir bileşen elle sayı yazmaz.
 *
 * MODEL: PEŞİN EV SAHİPLİĞİ.
 * İş planı §10: ana ürün peşin alım. §11: kredi yalnızca bizden ev almış
 * müşterilere portföy büyütmek için açılıyor, kamuya açık sayfada yok.
 * Bu yüzden bu modülde kredi, taksit, peşinat ve vade YOKTUR.
 *
 * Bütün katsayılar iş planı slayt 16'daki iki senaryodan çıkarıldı ve
 * o tablonun her satırını birebir üretir:
 *
 *              Senaryo A        Senaryo B
 *   ev fiyatı  140.000 $        200.000 $
 *   kapanış      4.200 $ (%3)     6.000 $ (%3)
 *   hizmet       3.500 $ (%2,5)   5.000 $ (%2,5)
 *   toplam     147.700 $        211.000 $
 *   kira/ay      1.400 $          1.750 $
 *   brüt getiri     %11,4            %10,0
 *   net/yıl      8.416 $         10.190 $
 *   net/ay         701 $            849 $
 *   net getiri       %5,7             %4,8
 *
 * Getiri oranları EV FİYATINA değil, TOPLAM ÇIKIŞA bölünür — slayt 16'nın
 * kendi hesabı böyle ve yatırımcının cebinden çıkan tutar budur.
 */

/* ── Model durumu ──────────────────────────────────────────────
   Slayt 2 ve 9'un dipnotu: "Rakamlar model çalışmasıdır", "Rochester
   bölgesi 140.000 $ senaryosu esas alınmıştır; veriyle doğrulanacaktır."
   Partnerden gerçek rakamlar gelene kadar sayfa bunu damgayla söyler. */
export const MODEL_DOGRULANDI = false;

/* ── Kanonik senaryo — slayt 16 Senaryo A ── */
export const KANONIK = { fiyat: 140_000 } as const;

/* ÜRÜN BANDI. Tatlı nokta 120–160 bin; üst uç 200 bin çünkü asıl
   mesaj fiyat yükseldikçe verimin DÜŞMESİ (slayt 16 notu). */
export const BAND = { min: 120_000, max: 200_000 } as const;
export const TATLI_NOKTA = { min: 120_000, max: 160_000 } as const;

/* HESAP KAPSAMI — kaydırıcının gidebildiği yer, ürün bandı değil.
   Üçüncü iterasyonun hesabı 400 bine kadar açılıyor; ürün bandı yine
   120–200 bin ve ikinci iterasyonun kaydırıcısı orada kalıyor.

   DİKKAT — 200 bin üstü EKSTRAPOLASYONDUR. kira() ve sigorta() slayt
   16'nın İKİ senaryosu (140k ve 200k) arasından geçen doğrular; bandın
   üstünde o doğru uzatılarak okunuyor. Slaytın kendi notu kiranın
   fiyatla alt-doğrusal gittiğini söylüyor, yani 200 bin üstünde bu
   model kirayı ve dolayısıyla getiriyi YÜKSEK tahmin ediyor olabilir.
   Bu yüzden kapsamın üst yarısını gösteren her yüzey durumu damgayla
   söylemek zorunda (bkz. components/v3/Hesap3.tsx). */
export const KAPSAM = { min: 120_000, max: 400_000 } as const;

/* ── Giriş maliyeti kalemleri ── */
export const KAPANIS_ORANI = 0.03; // slayt 16: 4.200/140.000 = 6.000/200.000
export const HIZMET_ORANI = 0.025; // slayt 16: 3.500/140.000 = 5.000/200.000

/* ── Yıllık işletme giderleri ── */
export const GIDER = {
  /* Rochester metro efektif oranı (slayt 15). Şehir adı sayfaya YAZILMAZ
     (DESIGN.md kural 11); oran yazılır. */
  emlakVergisiOrani: 0.0182, // ev fiyatı üzerinden
  yonetimOrani: 0.09, // brüt kira üzerinden
  boslukOrani: 0.08,
  bakimOrani: 0.1,
} as const;

/* ── Türkiye karşılaştırması — slayt 9, peşin alım ── */
export const TR = {
  girisBileti: 400_000,
  kiraAylik: 1_150,
  brutGetiri: 0.0345, // 13.800 / 400.000
  netGetiri: 0.028, // slaytta "~%2,8"; aylık karşılığı ~933 $ (slaytta ~920 olarak yuvarlanmış)
} as const;

/* ── Eğriler ───────────────────────────────────────────────────
   İki senaryo arası doğrusal. Ürün bandının (200 bin) üstünde aynı
   doğru uzatılıyor; bu bir ekstrapolasyondur ve KAPSAM'ın notunda
   yazdığı gibi kirayı yüksek tahmin ediyor olabilir. */

const kenetle = (fiyat: number) =>
  Math.max(KAPSAM.min, Math.min(KAPSAM.max, fiyat));

/** Beklenen aylık kira. 140k → 1.400 $, 200k → 1.750 $. */
export function kira(fiyat: number): number {
  return 1_400 + ((kenetle(fiyat) - 140_000) * 350) / 60_000;
}

/** Yıllık ev sahibi sigortası. 140k → 1.300 $, 200k → 1.500 $. */
export function sigorta(fiyat: number): number {
  return 1_300 + ((kenetle(fiyat) - 140_000) * 200) / 60_000;
}

/* ── Giriş maliyeti ── */

export type Giris = {
  fiyat: number;
  kapanis: number;
  hizmet: number;
  /** Yatırımcının cebinden çıkan toplam — getiri oranlarının paydası. */
  toplam: number;
};

export function giris(fiyat: number = KANONIK.fiyat): Giris {
  const f = kenetle(fiyat);
  const kapanis = f * KAPANIS_ORANI;
  const hizmet = f * HIZMET_ORANI;
  return { fiyat: f, kapanis, hizmet, toplam: f + kapanis + hizmet };
}

/* ── Gider defteri ── */

export type Gider = { etiket: string; not?: string; tutarYillik: number };

/* ── İKİ AYRI KALEM TÜRÜ ──────────────────────────────────────
   Bu ayrım hesabın tamamının omurgası; birleştirilmemeli.

   GİDER  — para MALİKİN ELİNDEN ÇIKAR. İlçeye, sigortacıya, yönetim
            şirketine gider ve geri gelmez. Opsiyonel değil.

   KARŞILIK — para MALİKİN KENDİ ABD HESABINDA KALIR. Boşluk ve büyük
            onarım her ay olmuyor; yıla yayılmış bir olasılık. Malik
            isterse kenara koyar, istemezse koymaz — parayı biz
            almıyoruz ve harcandığı ay gelene kadar onun.

   Sayfada öne çıkan rakam GİDERLER düşülmüş "eline geçen nakit"tir;
   karşılık ayrıca ve açıkça gösterilir, ama o rakamdan düşülmez.
   Gerekçe: düşmek, malikin kendi hesabında duran parayı kayıp gibi
   göstermek olurdu. Saklamak da olmaz — üçüncü yıl gelen çatı
   faturası, modellenmemişse güven kaybıdır. Çözüm ikisi de değil:
   göster, ama doğru adlandır. */

/** Cepten çıkan, geri gelmeyen kalemler. */
export function giderler(fiyat: number = KANONIK.fiyat): Gider[] {
  const f = kenetle(fiyat);
  const brut = kira(f) * 12;
  return [
    {
      etiket: "Emlak vergisi",
      not: fmtYuzde(GIDER.emlakVergisiOrani * 100, 2),
      tutarYillik: f * GIDER.emlakVergisiOrani,
    },
    { etiket: "Sigorta", tutarYillik: sigorta(f) },
    {
      etiket: "Mülk yönetimi",
      not: fmtYuzde(GIDER.yonetimOrani * 100),
      tutarYillik: brut * GIDER.yonetimOrani,
    },
  ];
}

/** Malikin kendi hesabında kalan, zamana yayılmış karşılıklar. */
export function karsiliklar(fiyat: number = KANONIK.fiyat): Gider[] {
  const brut = kira(kenetle(fiyat)) * 12;
  return [
    {
      etiket: "Boşluk karşılığı",
      not: fmtYuzde(GIDER.boslukOrani * 100),
      tutarYillik: brut * GIDER.boslukOrani,
    },
    {
      etiket: "Bakım ve büyük onarım",
      not: fmtYuzde(GIDER.bakimOrani * 100),
      tutarYillik: brut * GIDER.bakimOrani,
    },
  ];
}

export function isletmeGideriAylik(fiyat: number = KANONIK.fiyat): number {
  return giderler(fiyat).reduce((t, g) => t + g.tutarYillik, 0) / 12;
}

/* ── Getiri ── */

export type Getiri = {
  giris: Giris;
  kiraAylik: number;
  brutYillik: number;
  brutGetiri: number;
  /** Cepten çıkan giderler — vergi, sigorta, yönetim. */
  giderYillik: number;
  /** ELİNE GEÇEN NAKİT: brüt − giderler. Sayfada öne çıkan rakam.
   *  "Net getiri" DEĞİLDİR ve öyle adlandırılmamalı — sektörde net,
   *  karşılıklar da düşülmüş rakamı anlatıyor. */
  nakitYillik: number;
  nakitAylik: number;
  nakitGetiri: number;
  /** Malikin kendi hesabında tutması önerilen pay. */
  karsilikYillik: number;
  karsilikAylik: number;
  /** Karşılıklar da ayrıldıktan sonra. Karşılaştırmalarda ve
   *  muhafazakâr okumada kullanılan taban. */
  netYillik: number;
  netAylik: number;
  netGetiri: number;
};

export function getiri(fiyat: number = KANONIK.fiyat): Getiri {
  const g = giris(fiyat);
  const kiraAylik = kira(g.fiyat);
  const brutYillik = kiraAylik * 12;
  const giderYillik = giderler(g.fiyat).reduce((t, x) => t + x.tutarYillik, 0);
  const karsilikYillik = karsiliklar(g.fiyat).reduce((t, x) => t + x.tutarYillik, 0);
  const nakitYillik = brutYillik - giderYillik;
  const netYillik = nakitYillik - karsilikYillik;
  return {
    giris: g,
    kiraAylik,
    brutYillik,
    brutGetiri: brutYillik / g.toplam,
    giderYillik,
    nakitYillik,
    nakitAylik: nakitYillik / 12,
    nakitGetiri: nakitYillik / g.toplam,
    karsilikYillik,
    karsilikAylik: karsilikYillik / 12,
    netYillik,
    netAylik: netYillik / 12,
    netGetiri: netYillik / g.toplam,
  };
}

/* ── Türkiye ile karşılaştırma — slayt 9 ──────────────────────
   Aynı bütçe Türkiye'de bir ev alır; bizde birden fazla.
   Kredi karşılaştırması YOK: iki taraf da peşin. */

export type Karsilastirma = {
  butce: number;
  trEv: number;
  trAylikNet: number;
  usEv: number;
  usAylikNet: number;
  /** Aylık net gelirin kaç katına çıktığı. */
  kat: number;
};

export function karsilastirma(
  butce: number = TR.girisBileti,
  fiyat: number = KANONIK.fiyat,
): Karsilastirma {
  const u = getiri(fiyat);
  const trAylikNet = (butce * TR.netGetiri) / 12;
  const usEv = butce / u.giris.toplam;
  const usAylikNet = usEv * u.netAylik;
  return {
    butce,
    trEv: 1,
    trAylikNet,
    usEv,
    usAylikNet,
    kat: usAylikNet / trAylikNet,
  };
}

/* ── Biçimlendirme ── */

const tr0 = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 });

export const fmtUsd = (n: number) => "$" + tr0.format(Math.round(n));
export const fmtYuzde = (n: number, basamak = 1) =>
  "%" + n.toFixed(basamak).replace(/[.,]0+$/, "").replace(".", ",");
export const fmtOran = (n: number) => n.toFixed(2).replace(".", ",") + "x";
/** "2,7 ev" gibi — tam sayı değilse tek basamak. */
export const fmtAdet = (n: number) =>
  (Number.isInteger(n) ? n.toString() : n.toFixed(1).replace(".", ",")) + " ev";

/* ── Canlı kanonik değerler ── */

export const CANLI = (() => {
  const g = getiri(KANONIK.fiyat);
  return { giris: g.giris, getiri: g, tr: TR, karsilastirma: karsilastirma() };
})();
