/**
 * V3 alt şerit — yalnız künye ve yasal (brief §10: burada ikinci bir
 * satış konuşması yok).
 *
 * Boş kimlik alanları uydurulmuyor, doldurulacak alan olarak duruyor
 * (DESIGN.md kural 6). İş ortaklığı bağlantısı navigasyondan buraya
 * indi — ayrı kitle, alıcının okuma sırasını bölmesin.
 */
import { KIMLIK, KONTAK } from "@/lib/kontak";
import { ORTAKLIK_BAGLANTISI } from "@/lib/ortaklik";

const BAGLANTILAR: [string, string][] = [
  ["#v3-hesap", "Hesap"],
  ["#v3-evler", "Evler"],
  ["#v3-surec", "Nasıl ilerliyor"],
  ["/getiri/", "Blog"],
  ["/hesap/", "Hesabın tamamı"],
  ...ORTAKLIK_BAGLANTISI.map((o) => [o.yol, o.ad] as [string, string]),
];

export function Dip3() {
  return (
    <footer className="v3-dip">
      <div className="v3-kap">
        <div className="v3-dip__ust">
          <a className="v3-marka" href="#v3-tepe">
            <img src="/logo/amblem.png" alt="" width={28} height={28} />
            <b>DOLARHANE</b>
          </a>
          <nav className="v3-dip__ler">
            {BAGLANTILAR.map(([h, l]) => (
              <a key={h} href={h}>
                {l}
              </a>
            ))}
          </nav>
        </div>

        <dl className="v3-kimlik">
          {KIMLIK.map((k) => (
            <div key={k.etiket}>
              <dt>{k.etiket}</dt>
              <dd>
                {k.deger ? (
                  k.deger
                ) : (
                  <span className="v3-todo">
                    [{k.etiket.toLocaleUpperCase("tr")}]
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <p className="v3-dip__yasal">
          Bu sayfadaki tüm rakamlar örnek hesaplardır; yatırım tavsiyesi
          değildir. Portföy kartları örnektir. Kira ve gider kalemleri eve ve
          zamana göre değişir. Geçmiş ya da öngörülen getiri garanti edilmez.
          {KONTAK.eposta ? ` Sorular: ${KONTAK.eposta}` : ""}
        </p>
      </div>
    </footer>
  );
}
