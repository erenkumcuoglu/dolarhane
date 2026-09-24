/** Bölüm künyesi — "02 — Hesap". Her bölümün sol üstünde aynı yerde. */
export function Kunye4({ no, ad, koyu }: { no: string; ad: string; koyu?: boolean }) {
  return (
    <p className={`v4-kunye${koyu ? " v4-kunye--koyu" : ""}`} data-r>
      <span className="v4-kunye__no">{no}</span>
      <span className="v4-kunye__cizgi" aria-hidden="true" />
      <span>{ad}</span>
    </p>
  );
}

/** İnce ok — düğme ve bağlantılarda. */
export function Ok4() {
  return (
    <svg className="v4-ok" viewBox="0 0 20 12" aria-hidden="true">
      <path d="M1 6h17M13 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
