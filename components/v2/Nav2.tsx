/**
 * v2 nav — lacivert şerit, referans tasarımdaki gibi yapışkan.
 *
 * WhatsApp düğmesi referansta var ama KONTAK.wa boş olduğu sürece
 * BASILMIYOR (DESIGN.md §3 kural 6: boş iletişim alanı uydurulmaz).
 * Numara girildiği an düğme kendiliğinden görünür.
 */
import { KONTAK } from "@/lib/kontak";
import { ORTAKLIK_BAGLANTISI } from "@/lib/ortaklik";

/* Sayfa içi çapalar alıcının sırası; iş ortaklığı ayrı bir sayfa ve ayrı
   bir kitle (emlakçı, yönlendiren), o yüzden en sonda duruyor ve alıcı
   akışının sırasını bozmuyor. Hukuki onay yokken hiç basılmaz. */
const BOLUMLER: [string, string][] = [
  ["#v2-firsatlar", "Evler"],
  ["#v2-nasil", "Nasıl çalışır"],
  ["#v2-hesap", "Yatırım hesabı"],
  ["#v2-neden", "Neden Amerika"],
  ["#v2-riskler", "Riskler"],
  ...ORTAKLIK_BAGLANTISI.map(
    (o) => [o.yol, o.ad] as [string, string],
  ),
];

export function Nav2() {
  return (
    <nav className="v2-nav">
      <div className="v2-kap v2-nav__in">
        <a className="v2-marka" href="#v2-tepe">
          <img src="/logo/amblem.png" alt="" width={30} height={30} />
          <span>
            <b>DOLARHANE</b>
            <i>Amerika&apos;dan ev al</i>
          </span>
        </a>

        <div className="v2-nav__ler">
          {BOLUMLER.map(([h, l]) => (
            <a key={h} href={h}>
              {l}
            </a>
          ))}
        </div>

        <div className="v2-nav__sag">
          <a className="v2-btn v2-btn--altin" href="#v2-form">
            Portföyü keşfet
          </a>
          {KONTAK.wa ? (
            <a className="v2-btn v2-btn--hat" href={`https://wa.me/${KONTAK.wa}`}>
              WhatsApp
            </a>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
