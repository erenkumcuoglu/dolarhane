import { KIMLIK, KONTAK } from "@/lib/kontak";

/**
 * ALT ŞERİT — v4'te koyu zemin.
 *
 * Koyu zemindeki üç renk (--on-dark, --on-dark-mut, --on-dark-amber)
 * yalnız burada kullanılır; açık zeminde hiçbiri geçerli değil.
 * Boş kimlik alanları yine uydurulmuyor, doldurulacak alan olarak duruyor.
 */
const BAGLANTILAR: [string, string][] = [["/hesap/", "Hesap"]];

export function Footer() {
  return (
    <footer className="dip">
      <div className="kap">
        <div className="dip__ler">
          {BAGLANTILAR.map(([h, l]) => (
            <a key={h} href={h}>
              {l}
            </a>
          ))}
        </div>

        <dl className="kimlik">
          {KIMLIK.map((k) => (
            <div key={k.etiket}>
              <dt className="xs">{k.etiket}</dt>
              <dd>
                {k.deger ? (
                  k.deger
                ) : (
                  <span className="todo todo--dark">
                    [{k.etiket.toLocaleUpperCase("tr")}]
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="dip__alt">
          <p className="xs dip__yasal">
            <span>
              Bu sayfadaki tüm rakamlar örnek hesaplardır; yatırım tavsiyesi
              değildir. Portföy ve referans kartları örnektir. Kira, gider ve
              faiz oranları eve ve zamana göre değişir. Geçmiş ya da öngörülen
              getiri garanti edilmez.
              {KONTAK.eposta ? ` Sorular: ${KONTAK.eposta}` : ""}
            </span>
          </p>
          <p className="dip__marka">
            <span className="marka">
              <i aria-hidden="true" />
              <b>DOLARHANE</b>
            </span>
            <span className="xs">Amerika&apos;dan ev al</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
