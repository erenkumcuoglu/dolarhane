/**
 * V3 nav — sessiz şerit.
 *
 * Brief §1: kompakt logotip, KÜÇÜK bir çapa seti, TEK birincil eylem.
 * v2'de altı çapa + iki düğme vardı; burada dört çapa + tek düğme.
 * İş ortaklığı bağlantısı navigasyondan çıktı — ayrı kitle, alıcının
 * okuma sırasını bölüyordu; dipnotta duruyor.
 *
 * WhatsApp düğmesi buradan kalktı: brief tek eylem istiyor ve numara
 * zaten girilmemiş (DESIGN.md §3 kural 6 — boş iletişim alanı uydurulmaz).
 */

const BOLUMLER: [string, string][] = [
  ["#v3-hesap", "Hesap"],
  ["#v3-evler", "Evler"],
  ["#v3-surec", "Nasıl ilerliyor"],
  /* "Riskler" bölümü V3'ten çıktı; menüdeki yerini blog aldı. */
  ["/blog/", "Blog"],
];

export function Nav3() {
  return (
    <nav className="v3-nav">
      <div className="v3-kap v3-nav__in">
        <a className="v3-marka" href="#v3-tepe">
          <img src="/logo/amblem.png" alt="" width={28} height={28} />
          <b>DOLARHANE</b>
        </a>

        <div className="v3-nav__ler">
          {BOLUMLER.map(([h, l]) => (
            <a key={h} href={h}>
              {l}
            </a>
          ))}
        </div>

        <a className="v3-btn v3-btn--dolu" href="#v3-kapanis">
          Görüşme alın
        </a>
      </div>
    </nav>
  );
}
