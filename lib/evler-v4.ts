import { EVLER, type Ev } from "@/lib/portfoy";

/**
 * V4 portföy vitrini — ana sayfadaki kartlar ve /evler/[slug] detay
 * sayfaları aynı listeden beslenir. Rakamlar burada YAZMAZ; kira, gider
 * ve getiri lib/finance.ts'ten fiyatla türetilir.
 *
 * Gerçek portföy gelince: slug'lar kalıcı adres olur (paylaşılan link
 * kırılmasın), satılan ev listeden çıkmaz, `satildi` işaretiyle
 * referanslara geçer.
 */
export type EvV4 = {
  slug: string;
  ev: Ev;
  foto: string;
  w: number;
  h: number;
};

export const EVLER_V4: EvV4[] = [
  { slug: "ev-01", ev: EVLER[0], foto: "/ev/v4/ev-01-1200.jpg", w: 1200, h: 800 },
  { slug: "ev-02", ev: EVLER[1], foto: "/ev/v4/ev-02-1200.jpg", w: 1200, h: 1600 },
  { slug: "ev-03", ev: EVLER[2], foto: "/ev/v4/ev-03-1200.jpg", w: 1200, h: 800 },
];

export const evBul = (slug: string) => EVLER_V4.find((e) => e.slug === slug);
export const evYolu = (slug: string) => `/evler/${slug}`;
/** Gösterimde küsurat yok: en yakın 10 dolara. Hesap tam sayıyla yürür. */
export const onluk = (n: number) => Math.round(n / 10) * 10;
