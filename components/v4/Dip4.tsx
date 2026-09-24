import { KIMLIK, KONTAK } from "@/lib/kontak";
import { ORTAKLIK_BAGLANTISI } from "@/lib/ortaklik";

/**
 * V4 alt şerit — künye, yasal, ve marka kilit cümlesiyle kapanış.
 * Boş kimlik alanları uydurulmuyor (kural 6); doldurulacak alan olarak
 * görünür kalıyor.
 */
const BAGLANTILAR: [string, string][] = [
  ["#v4-hesap", "Hesap"],
  ["#v4-evler", "Evler"],
  ["#v4-guven", "Güven"],
  ["#v4-surec", "Süreç"],
  ["/blog/", "Blog"],
  ["/hesap/", "Hesabın tamamı"],
  ...ORTAKLIK_BAGLANTISI.map((o) => [o.yol, o.ad] as [string, string]),
];

export function Dip4() {
  return (
    <footer className="v4-dip">
      <div className="v4-kap">
        <p className="v4-dip__kilit" aria-hidden="true">
          Amerika&apos;dan <em>ev al.</em>
        </p>
        <div className="v4-dip__ust">
          <a className="v4-marka" href="#v4-tepe">
            <img src="/logo/svg/09_icon_transparent_gold_gradient.svg" alt="" width={34} height={29} />
            <b>DOLARHANE</b>
          </a>
          <nav className="v4-dip__ler" aria-label="Alt menü">
            {BAGLANTILAR.map(([h, l]) => (
              <a key={h} href={h}>
                {l}
              </a>
            ))}
          </nav>
        </div>
        <dl className="v4-kimlik">
          {KIMLIK.map((k) => (
            <div key={k.etiket}>
              <dt>{k.etiket}</dt>
              <dd>{k.deger ? k.deger : <span className="v4-todo">[{k.etiket.toLocaleUpperCase("tr")}]</span>}</dd>
            </div>
          ))}
        </dl>
        <p className="v4-dip__yasal">
          Bu sayfadaki tüm rakamlar örnek hesaplardır; yatırım tavsiyesi değildir. Portföy
          kartları örnektir. Kira ve gider kalemleri eve ve zamana göre değişir. Geçmiş ya da
          öngörülen getiri garanti edilmez.{KONTAK.eposta ? ` Sorular: ${KONTAK.eposta}` : ""}
        </p>
      </div>
    </footer>
  );
}
