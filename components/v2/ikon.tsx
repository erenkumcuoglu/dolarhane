/**
 * v2 iterasyonu — çizgi ikon seti.
 *
 * Emoji, bayrak ve ülke silueti yasak (DESIGN.md §1); referans tasarımdaki
 * yuvarlak altın ikonların yerini bunlar alıyor. Hepsi 24×24 kutuda,
 * 1,6px kontur, `currentColor` — rengi kap veriyor, ikon değil.
 */

type P = { className?: string };

const O = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

export function IkonDolar({ className }: P) {
  return (
    <svg {...O} className={className}>
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 7.2v9.6M14.6 9.4c0-1-1.2-1.7-2.6-1.7s-2.6.7-2.6 1.8c0 1.2 1.1 1.6 2.6 1.9 1.6.3 2.8.7 2.8 2 0 1.2-1.3 1.9-2.8 1.9s-2.8-.7-2.8-1.8" />
    </svg>
  );
}

export function IkonGrafik({ className }: P) {
  return (
    <svg {...O} className={className}>
      <path d="M3.6 20.4h16.8" />
      <path d="M6.6 20.4v-6.2M11 20.4V8.6M15.4 20.4v-8.8M19.8 20.4V4.8" />
    </svg>
  );
}

export function IkonEv({ className }: P) {
  return (
    <svg {...O} className={className}>
      <path d="M3.4 10.6 12 4l8.6 6.6" />
      <path d="M5.6 12.2v8.2h12.8v-8.2" />
      <path d="M10 20.4v-5h4v5" />
    </svg>
  );
}

export function IkonYuzde({ className }: P) {
  return (
    <svg {...O} className={className}>
      <path d="M6 18 18 6" />
      <circle cx="7.6" cy="7.6" r="2.4" />
      <circle cx="16.4" cy="16.4" r="2.4" />
    </svg>
  );
}

export function IkonKilit({ className }: P) {
  return (
    <svg {...O} className={className}>
      <rect x="4.8" y="10.4" width="14.4" height="9.8" rx="2" />
      <path d="M8.4 10.4V7.8a3.6 3.6 0 0 1 7.2 0v2.6" />
    </svg>
  );
}

export function IkonTapu({ className }: P) {
  return (
    <svg {...O} className={className}>
      <path d="M6 3.4h8.4L19 8v12.6H6z" />
      <path d="M14.2 3.6V8H19" />
      <path d="M9 12.4h6M9 16h4.4" />
    </svg>
  );
}

export function IkonKisiler({ className }: P) {
  return (
    <svg {...O} className={className}>
      <circle cx="9.2" cy="8.6" r="3.2" />
      <path d="M3.8 20.2c0-3 2.4-5.4 5.4-5.4s5.4 2.4 5.4 5.4" />
      <path d="M16 6.2a3.2 3.2 0 0 1 0 6M17.6 15.2c1.7.7 2.9 2.4 2.9 4.4" />
    </svg>
  );
}

export function IkonUzak({ className }: P) {
  return (
    <svg {...O} className={className}>
      <rect x="3.2" y="5" width="17.6" height="11.4" rx="1.8" />
      <path d="M8.4 20h7.2M12 16.6V20" />
      <path d="M8.8 10.7h6.4M12 8.1v5.2" />
    </svg>
  );
}

export function IkonOk({ className }: P) {
  return (
    <svg {...O} className={className}>
      <path d="M4.6 12h14.8M13.6 6.4 19.4 12l-5.8 5.6" />
    </svg>
  );
}

export function IkonYatak({ className }: P) {
  return (
    <svg {...O} className={className}>
      <path d="M3 19.4v-8.2h13.4a4.6 4.6 0 0 1 4.6 4.6v3.6" />
      <path d="M3 15.6h18" />
      <circle cx="7.2" cy="8.6" r="2" />
    </svg>
  );
}

export function IkonBanyo({ className }: P) {
  return (
    <svg {...O} className={className}>
      <path d="M4 12.4h16v2.4a4.4 4.4 0 0 1-4.4 4.4H8.4A4.4 4.4 0 0 1 4 14.8z" />
      <path d="M7.4 12.4V6.8a2.4 2.4 0 0 1 4.8 0" />
      <path d="M6.4 19.4 5.4 21M17.6 19.4l1 1.6" />
    </svg>
  );
}

export function IkonAlan({ className }: P) {
  return (
    <svg {...O} className={className}>
      <rect x="4" y="4" width="16" height="16" rx="1.6" />
      <path d="M8.4 4v3M15.6 4v3M4 8.4h3M4 15.6h3" />
    </svg>
  );
}
