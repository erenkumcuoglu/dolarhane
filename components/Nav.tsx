/**
 * v4 nav — masaüstünde iki bağlantı, telefonda ikinci satır.
 *
 * Artboard'da üçüncü bir bağlantı daha vardı: "İş ortaklığı" → /ortaklik.
 * O sayfanın artboard'ı henüz çizilmedi; var olmayan bir sayfaya bağlantı
 * koymuyoruz. Sayfa geldiğinde BOLUMLER'e tek satır eklenir.
 */
const BOLUMLER: [string, string][] = [
  ["/hesap/", "Hesap"],
  ["/#referanslar", "Referanslar"],
];

export function Nav({ aktif }: { aktif?: string }) {
  return (
    <nav className="nav">
      <div className="nav__in">
        <a className="marka" href="/#pano">
          <i aria-hidden="true" />
          <b>DOLARHANE</b>
        </a>
        <div className="nav__ler">
          {BOLUMLER.map(([h, l]) =>
            aktif === l ? (
              <span className="nav__bu" key={h} aria-current="page">
                {l}
              </span>
            ) : (
              <a key={h} href={h}>
                {l}
              </a>
            ),
          )}
        </div>
        <a className="btn" href="/#gorusme">
          Mesaj gönderin
        </a>
      </div>
      {/* telefonda bağlantılar ikinci satıra iner */}
      <div className="nav__mob">
        {BOLUMLER.map(([h, l]) =>
          aktif === l ? (
            <span className="nav__bu" key={h} aria-current="page">
              {l}
            </span>
          ) : (
            <a key={h} href={h}>
              {l}
            </a>
          ),
        )}
      </div>
    </nav>
  );
}
