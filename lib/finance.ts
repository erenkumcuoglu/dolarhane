/**
 * Dolarhane — tek hesap kaynağı.
 * Sayfadaki her rakam ve üretilecek her sosyal görsel bu modülden gelir.
 * Dayanaklar: IDDIA-DENETIMI.md. Bir sayı sorgulandığında oraya bakılır.
 */

/* ── Kanonik senaryo ── */
export const KANONIK = {
  fiyat: 200_000,
  pesinatOrani: 0.25,
  vadeYil: 30,
} as const;

/* ── Varsayımlar ── */
export const US_YILLIK = 0.0725; // yabancı yatırımcı programı
export const TR_AYLIK = 0.0289; // Türkiye'de bulunabilen en düşük oranlardan biri (piyasa ~%3,7)
export const TR_BRUT_GETIRI = 0.075; // Türkiye brüt kira getirisi
export const TR_VADE_TAVAN_YIL = 10; // fiili azami konut kredisi vadesi
export const KAPANIS_MASRAFI = 0.04; // ~%4
export const USD_TRY = 41; // kanonik TL eşleniği: 200.000 $ ev ≈ 8,2M TL

/* Ürün bandı — bandın dışına ekstrapolasyon yapılmaz */
export const BAND = { min: 150_000, max: 300_000 } as const;

/* İşletme giderleri (peşin alım, yıllık) */
export const GIDER = {
  emlakVergisiOrani: 0.018, // ev değeri üzerinden
  sigortaYillik: 1_400,
  yonetimOrani: 0.09, // brüt kira üzerinden
  boslukOrani: 0.08,
  bakimOrani: 0.08,
} as const;

/* ── Temel ── */

/** Eşit taksitli kredi ödemesi. i dönemsel faiz, n dönem sayısı. */
export function pmt(anapara: number, i: number, n: number): number {
  if (i === 0) return anapara / n;
  return (anapara * i) / (1 - Math.pow(1 + i, -n));
}

/**
 * Portföy kira çapası: 150.000 $ → 1.700 $/ay, 300.000 $ → 2.500 $/ay.
 * Band dışına ÇIKMAZ — iki çapa arasında doğrusal, dışında sabitlenir.
 */
export function usKira(fiyat: number): number {
  const f = Math.max(BAND.min, Math.min(BAND.max, fiyat));
  return 1_700 + ((f - BAND.min) * 800) / (BAND.max - BAND.min);
}

/** Nakitten eve: peşinat + kapanış masrafı kadar nakit gerekir. */
export function nakitOrani(pesinatOrani = KANONIK.pesinatOrani): number {
  return pesinatOrani + KAPANIS_MASRAFI;
}

/** Elindeki nakitle alınabilecek ev — en yakın bine yuvarlanır. */
export function nakittenFiyat(nakit: number, pesinatOrani = KANONIK.pesinatOrani): number {
  return Math.round(nakit / nakitOrani(pesinatOrani) / 1_000) * 1_000;
}

/* ── ABD tarafı ── */

export type UsSonuc = {
  fiyat: number;
  pesinat: number;
  kredi: number;
  vadeYil: number;
  taksit: number;
  kira: number;
  oran: number;
  toplamFaiz: number;
  toplamGeriOdeme: number;
  toplamMaliyet: number;
};

export function us(fiyat: number, pesinatOrani: number, vadeYil: number): UsSonuc {
  const pesinat = fiyat * pesinatOrani;
  const kredi = fiyat - pesinat;
  const n = vadeYil * 12;
  const taksit = pmt(kredi, US_YILLIK / 12, n);
  const kira = usKira(fiyat);
  return {
    fiyat,
    pesinat,
    kredi,
    vadeYil,
    taksit,
    kira,
    oran: kira / taksit,
    toplamFaiz: taksit * n - kredi,
    toplamGeriOdeme: taksit * n,
    toplamMaliyet: taksit * n + pesinat,
  };
}

/* ── Türkiye tarafı ── */

export type TrSonuc = UsSonuc & {
  tavanlandi: boolean;
  gerceklesenVadeYil: number;
  efektifYillik: number;
};

/**
 * Türkiye kolonu kurgusal vade üretmez: 10 yıl üstü istenirse
 * kendi fiili azamisi üzerinden hesaplanır ve `tavanlandi` işaretlenir.
 */
export function tr(fiyat: number, pesinatOrani: number, vadeYil: number): TrSonuc {
  const gerceklesenVadeYil = Math.min(vadeYil, TR_VADE_TAVAN_YIL);
  const pesinat = fiyat * pesinatOrani;
  const kredi = fiyat - pesinat;
  const n = gerceklesenVadeYil * 12;
  const taksit = pmt(kredi, TR_AYLIK, n);
  const kira = (fiyat * TR_BRUT_GETIRI) / 12;
  return {
    fiyat,
    pesinat,
    kredi,
    vadeYil,
    gerceklesenVadeYil,
    tavanlandi: vadeYil > TR_VADE_TAVAN_YIL,
    taksit,
    kira,
    oran: kira / taksit,
    toplamFaiz: taksit * n - kredi,
    toplamGeriOdeme: taksit * n,
    toplamMaliyet: taksit * n + pesinat,
    efektifYillik: Math.pow(1 + TR_AYLIK, 12) - 1,
  };
}

/* ── İşletme gideri ve gerçek nakit akışı ── */

export type Gider = { etiket: string; not?: string; tutarYillik: number };

export function giderler(fiyat: number): Gider[] {
  const brutYillik = usKira(fiyat) * 12;
  return [
    { etiket: "Emlak vergisi", not: "%1,8", tutarYillik: fiyat * GIDER.emlakVergisiOrani },
    { etiket: "Sigorta", tutarYillik: GIDER.sigortaYillik },
    { etiket: "Mülk yönetimi", not: "%9", tutarYillik: brutYillik * GIDER.yonetimOrani },
    { etiket: "Boşluk payı", not: "%8", tutarYillik: brutYillik * GIDER.boslukOrani },
    { etiket: "Bakım ve capex", not: "%8", tutarYillik: brutYillik * GIDER.bakimOrani },
  ];
}

export function isletmeGideriAylik(fiyat: number): number {
  return giderler(fiyat).reduce((t, g) => t + g.tutarYillik, 0) / 12;
}

/** Peşin alımda net nakit akışı ve net getiri. */
export function pesinNet(fiyat: number) {
  const brutYillik = usKira(fiyat) * 12;
  const giderYillik = isletmeGideriAylik(fiyat) * 12;
  const netYillik = brutYillik - giderYillik;
  return { brutYillik, giderYillik, netYillik, netGetiri: netYillik / fiyat };
}

/**
 * Kredili alımda gerçek durum — sayfanın en dürüst rakamı.
 * Oranın tek başına söylenmemesinin sebebi bu: nakit ince, kazanç anaparada.
 */
export function krediliGercek(fiyat: number, pesinatOrani: number, vadeYil: number) {
  const u = us(fiyat, pesinatOrani, vadeYil);
  const isletme = isletmeGideriAylik(fiyat);
  const nakitAkisiAylik = u.kira - isletme - u.taksit;
  return {
    ...u,
    isletmeAylik: isletme,
    nakitAkisiAylik,
    anaparaAylikIlkYil: ilkYilAnaparaAylik(u.kredi, US_YILLIK / 12, vadeYil * 12),
  };
}

/** İlk 12 ayda biriken anaparanın aylık ortalaması. */
export function ilkYilAnaparaAylik(kredi: number, i: number, n: number): number {
  const ay = Math.min(12, n);
  const kalan =
    (kredi * (Math.pow(1 + i, n) - Math.pow(1 + i, ay))) / (Math.pow(1 + i, n) - 1);
  return (kredi - kalan) / ay;
}

/* ── Biçimlendirme — tek yer ── */

const tl = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 });

export const fmtUsd = (n: number) => "$" + tl.format(Math.round(n));
export const fmtTl = (n: number) => tl.format(Math.round(n)) + " TL";
export const fmtYuzde = (n: number, basamak = 1) =>
  "%" + n.toFixed(basamak).replace(/[.,]0$/, "").replace(".", ",");
export const fmtOran = (n: number) => n.toFixed(2).replace(".", ",") + "x";

/** Basamak basamak yerine oturan pano rakamı için: karakter dizisi. */
export function basamaklar(metin: string): string[] {
  return metin.split("");
}

/* ── Kanonik sonuç: sayfanın her yerinde aynı sayı ── */
export const CANLI = (() => {
  const u = krediliGercek(KANONIK.fiyat, KANONIK.pesinatOrani, KANONIK.vadeYil);
  const t = tr(KANONIK.fiyat, KANONIK.pesinatOrani, KANONIK.vadeYil);
  return { us: u, tr: t, net: pesinNet(KANONIK.fiyat) };
})();

/* ═══ ZAMAN ÇİZGİSİ ══════════════════════════════════════════
   Tez bir oran değil, bir süreç: kiracı her ay krediyi biraz daha
   kapatıyor. Bu fonksiyon o süreci yıl yıl açıyor.

   Kira SABİT tutuluyor — 30 yıl boyunca artmayacağı varsayımı
   gerçekçi değil, aleyhimize. Artış varsaymak uydurma iddia olurdu.
   ═══════════════════════════════════════════════════════════ */

export type Kilometre = {
  yil: number;
  kalanKredi: number;
  kapananAnapara: number; // kiracının bugüne kadar kapattığı anapara
  odenenFaiz: number;
  toplananKira: number;
  odenenIsletme: number;
  ozkaynakOrani: number; // kapanan anapara / kredi
};

/** Kredinin Y yıl sonundaki kalan bakiyesi. */
export function kalanBakiye(kredi: number, i: number, n: number, gecenAy: number): number {
  const a = Math.min(gecenAy, n);
  return (
    (kredi * (Math.pow(1 + i, n) - Math.pow(1 + i, a))) / (Math.pow(1 + i, n) - 1)
  );
}

export function zamanCizgisi(
  fiyat = KANONIK.fiyat,
  pesinatOrani = KANONIK.pesinatOrani,
  vadeYil = KANONIK.vadeYil,
  yillar: number[] = [1, 5, 10, 20, 30],
): Kilometre[] {
  const u = us(fiyat, pesinatOrani, vadeYil);
  const i = US_YILLIK / 12;
  const n = vadeYil * 12;
  const isletme = isletmeGideriAylik(fiyat);

  return yillar
    .filter((y) => y <= vadeYil)
    .map((yil) => {
      const ay = yil * 12;
      const kalan = kalanBakiye(u.kredi, i, n, ay);
      const kapanan = u.kredi - kalan;
      return {
        yil,
        kalanKredi: kalan,
        kapananAnapara: kapanan,
        odenenFaiz: u.taksit * ay - kapanan,
        toplananKira: u.kira * ay,
        odenenIsletme: isletme * ay,
        ozkaynakOrani: kapanan / u.kredi,
      };
    });
}

/** Vadenin sonundaki durum — sayfanın duygusal varış noktası. */
export function vadeSonu(
  fiyat = KANONIK.fiyat,
  pesinatOrani = KANONIK.pesinatOrani,
  vadeYil = KANONIK.vadeYil,
) {
  const u = us(fiyat, pesinatOrani, vadeYil);
  const n = vadeYil * 12;
  const isletme = isletmeGideriAylik(fiyat);
  const kapanisMasrafi = fiyat * KAPANIS_MASRAFI;
  return {
    vadeYil,
    /* Alıcının kendi cebinden koyduğu tek para */
    sizinKoydugunuz: u.pesinat + kapanisMasrafi,
    /* Kiracının finanse ettiği kredi geri ödemesi */
    kiracininKapattigi: u.taksit * n,
    anapara: u.kredi,
    faiz: u.taksit * n - u.kredi,
    toplananKira: u.kira * n,
    odenenIsletme: isletme * n,
    /* Borçsuz ev. Değer artışı VARSAYILMIYOR — riskler bölümü bunu
       açıkça reddediyor, o yüzden bugünkü fiyatla yazılıyor. */
    borcsuzEv: fiyat,
  };
}
