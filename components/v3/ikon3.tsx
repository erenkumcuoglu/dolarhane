/**
 * V3 ikon seti — amblemin dilinden türetildi.
 *
 * Amblem: lacivert yuvarlak kare karo + altın geometrik işaret; ev
 * motifi (beşik çatı + dört bölmeli pencere), orta kalınlıkta çizgi,
 * yuvarlak uç ve birleşim. Bu set aynı üç kuralı tutuyor:
 *   - 24×24 kutu, 1,8 kalınlık, yuvarlak uç/birleşim
 *   - dolgu yok, renk `currentColor` — karo rengi ikonun rengini verir
 *   - gradyan yok (marka kiti §07; amblemdeki gradyan takip edilmiyor,
 *     kitin kendi kuralıyla çelişen yer DESIGN.md'de yazılı)
 *
 * IkonEv3'ün penceresi amblemin penceresiyle aynı bölmede — set ile
 * logo arasındaki bağ oradan kuruluyor.
 */
type P = { className?: string };

const ortak = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Sözleşme ve mühür — "kira sözleşmesi bir hak". Darphane çağrışımı. */
export function IkonMuhur({ className }: P) {
  return (
    <svg {...ortak} className={className}>
      <path d="M13.4 2.9H6.3a1.6 1.6 0 0 0-1.6 1.6v15a1.6 1.6 0 0 0 1.6 1.6h4.3" />
      <path d="M13.4 2.9 19.3 8.8v3.1" />
      <path d="M8 9h3M8 12.3h5.4" />
      <circle cx="16.9" cy="16.9" r="3.9" />
      <path d="m15.3 16.9 1.2 1.2 2.1-2.4" />
    </svg>
  );
}

/** Sikke ve dolar — "gelir dolar, gider dolar". */
export function IkonSikke({ className }: P) {
  return (
    <svg {...ortak} className={className}>
      <circle cx="12" cy="12" r="8.9" />
      <path d="M12 6.4v11.2" />
      <path d="M14.7 9.3c-.5-.9-1.5-1.5-2.7-1.5-1.6 0-2.8 1-2.8 2.3s1 1.9 2.8 2.3c1.9.4 3 1 3 2.4s-1.2 2.4-3 2.4c-1.3 0-2.4-.6-2.9-1.6" />
    </svg>
  );
}

/** Ev — amblemin çatısı ve dört bölmeli penceresi. */
export function IkonEv3({ className }: P) {
  return (
    <svg {...ortak} className={className}>
      <path d="M3.5 10.5 12 3.6l8.5 6.9" />
      <path d="M5.7 12.2v8.2h12.6v-8.2" />
      <path d="M9.4 13.9h5.2v5.2H9.4z" />
      <path d="M12 13.9v5.2M9.4 16.5h5.2" />
    </svg>
  );
}

/** Zarf — "bir mesaj gönderin". */
export function IkonZarf({ className }: P) {
  return (
    <svg {...ortak} className={className}>
      <rect x="2.9" y="5.2" width="18.2" height="13.6" rx="2.2" />
      <path d="M4.6 7.6 12 13l7.4-5.4" />
    </svg>
  );
}

/** Konuşma balonu — "hedefinizi konuşalım". */
export function IkonKonusma({ className }: P) {
  return (
    <svg {...ortak} className={className}>
      <path d="M20.3 13.4a2 2 0 0 1-2 2H9.7L6 18.4v-3H5.7a2 2 0 0 1-2-2V5.9a2 2 0 0 1 2-2h12.6a2 2 0 0 1 2 2z" />
      <path d="M8 7.9h8M8 11.2h5" />
    </svg>
  );
}

/** Takvim — "takvimden randevu". */
export function IkonTakvim({ className }: P) {
  return (
    <svg {...ortak} className={className}>
      <rect x="3.4" y="5.2" width="17.2" height="15.4" rx="2.2" />
      <path d="M3.4 9.7h17.2" />
      <path d="M8.2 3.4v3.5M15.8 3.4v3.5" />
      <path d="M7.7 12.8h3.1v2.9H7.7z" />
    </svg>
  );
}

/** Ekran ve kamera — "birebir görüşme", tamamı online. */
export function IkonGorusme({ className }: P) {
  return (
    <svg {...ortak} className={className}>
      <rect x="2.9" y="5.6" width="13.1" height="12.8" rx="2.2" />
      <path d="M16 10.3l5.1-2.8v9l-5.1-2.8z" />
    </svg>
  );
}

/* ── Küme ikonları ───────────────────────────────────────────
   Blog kartlarının kapağında kategori işareti olarak kullanılıyor.
   Aynı üç kural: 24×24, 1,8 kalınlık, dolgu yok. */

/** Pusula — "Süreç ve uzaktan sahiplik". */
export function IkonPusula({ className }: P) {
  return (
    <svg {...ortak} className={className}>
      <circle cx="12" cy="12" r="8.9" />
      <path d="m15.6 8.4-2 5.2-5.2 2 2-5.2z" />
    </svg>
  );
}

/** Kalkan — "Güven ve şüphe". */
export function IkonKalkan({ className }: P) {
  return (
    <svg {...ortak} className={className}>
      <path d="M12 3.1 19.6 6v6.1c0 4.2-3 7.3-7.6 8.8-4.6-1.5-7.6-4.6-7.6-8.8V6z" />
      <path d="m9.1 12.1 2 2 3.8-4.2" />
    </svg>
  );
}

/** Terazi — "Destinasyon karşılaştırması". */
export function IkonTerazi({ className }: P) {
  return (
    <svg {...ortak} className={className}>
      <path d="M12 4.6v15.8M7 20.4h10M4.6 7.6h14.8" />
      <path d="M4.6 7.6 2.2 13.4a2.9 2.9 0 0 0 4.8 0zM19.4 7.6 17 13.4a2.9 2.9 0 0 0 4.8 0z" />
      <circle cx="12" cy="5" r="1.4" />
    </svg>
  );
}

/** Hesap makinesi — "Hesaplayıcılar". */
export function IkonHesapMak({ className }: P) {
  return (
    <svg {...ortak} className={className}>
      <rect x="4.4" y="2.9" width="15.2" height="18.2" rx="2.4" />
      <path d="M7.7 6.6h8.6v3.2H7.7z" />
      <path d="M8.2 13.4h.01M12 13.4h.01M15.8 13.4h.01M8.2 17.2h.01M12 17.2h.01M15.8 17.2h.01" />
    </svg>
  );
}

/** Seri — "Canlı veri". */
export function IkonSeri({ className }: P) {
  return (
    <svg {...ortak} className={className}>
      <path d="M3.6 20.4h16.8" />
      <path d="m4.8 15.8 4.4-4.8 3.6 3 6.4-6.8" />
      <path d="M15.6 7.2h3.6v3.6" />
    </svg>
  );
}
