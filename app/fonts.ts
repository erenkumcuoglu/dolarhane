import localFont from "next/font/local";

/**
 * Fontshare — self-host.
 *
 * Artboard'lar fontları api.fontshare.com'dan çekiyordu; burada self-host
 * ediyoruz: harici istek yok, marka taahhüdü (Google Fonts yasağı) zaten
 * Fontshare'le karşılanıyor ama CDN bağımlılığı da istemiyoruz.
 *
 * Satoshi'nin statik seti 400/500/700/900. Artboard'larda geçen 600 ve 800
 * ağırlıkları burada YOK; portta 600→700, 800→900 olarak normalize ediliyor,
 * böylece yazdığımız ağırlık render edilenle aynı oluyor.
 */

export const satoshi = localFont({
  src: [
    { path: "../public/fonts/satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/satoshi-700.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/satoshi-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
});

/** Gambetta yalnız italik ve yalnız aksan için: dürüst vuruş cümleleri. */
export const gambetta = localFont({
  src: [
    {
      path: "../public/fonts/gambetta-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-gambetta",
  display: "swap",
  fallback: ["Georgia", "serif"],
});
