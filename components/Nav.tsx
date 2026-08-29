/* Kök işaretli adresler: ana sayfada aynı belge içi kaydırma, 404'te önce
   ana sayfaya götürür. Çıplak "#cetvel" 404'te hiçbir şey yapmıyordu. */
const BOLUMLER = [
  ["/#cetvel", "Hesap"],
  ["/#detay", "Detaylar"],
  ["/#gorusme", "Görüşme"],
];

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav__in">
        <a className="marka" href="/#pano">
          <i aria-hidden="true" />
          <b>DOLARHANE</b>
        </a>
        <div className="nav__ler">
          {BOLUMLER.map(([h, l]) => (
            <a key={h} href={h}>
              {l}
            </a>
          ))}
        </div>
        <a className="btn" href="/#gorusme">
          Mesaj gönderin
        </a>
      </div>
    </nav>
  );
}
