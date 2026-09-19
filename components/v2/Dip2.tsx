/**
 * v2 alt şerit — lacivert, üç kolon.
 * Boş kimlik alanları uydurulmuyor; doldurulacak alan olarak duruyor
 * (DESIGN.md kural 6). Sosyal hesap ikonu YOK: hesaplar açılmadan simge
 * koymak kırık bağlantı demek.
 */
import { KIMLIK, KONTAK } from "@/lib/kontak";
import { ORTAKLIK_BAGLANTISI } from "@/lib/ortaklik";

const BAGLANTILAR: [string, string][] = [
  ["#v2-firsatlar", "Evler"],
  ["#v2-nasil", "Nasıl çalışır"],
  ["#v2-hesap", "Yatırım hesabı"],
  ["#v2-neden", "Neden Amerika"],
  ["#v2-riskler", "Riskler ve sorular"],
  ["/hesap/", "Hesabın tamamı"],
  /* Hukuki onay yokken boş — lib/ortaklik.ts tek anahtar. */
  ...ORTAKLIK_BAGLANTISI.map((o) => [o.yol, o.ad] as [string, string]),
];

export function Dip2() {
  return (
    <footer className="v2-dip">
      <div className="v2-kap">
        <div className="v2-dip__ust">
          <a className="v2-marka" href="#v2-tepe">
            <img src="/logo/amblem.png" alt="" width={30} height={30} />
            <span>
              <b>DOLARHANE</b>
              <i>Amerika&apos;dan ev al</i>
            </span>
          </a>
          <nav className="v2-dip__ler">
            {BAGLANTILAR.map(([h, l]) => (
              <a key={h} href={h}>
                {l}
              </a>
            ))}
          </nav>
        </div>

        <dl className="v2-kimlik">
          {KIMLIK.map((k) => (
            <div key={k.etiket}>
              <dt className="v2-xs">{k.etiket}</dt>
              <dd>
                {k.deger ? (
                  k.deger
                ) : (
                  <span className="v2-todo v2-todo--koyu">
                    [{k.etiket.toLocaleUpperCase("tr")}]
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <p className="v2-xs v2-dip__yasal">
          Bu sayfadaki tüm rakamlar örnek hesaplardır; yatırım tavsiyesi
          değildir. Portföy ve referans kartları örnektir. Kira, gider ve faiz
          oranları eve ve zamana göre değişir. Geçmiş ya da öngörülen getiri
          garanti edilmez.
          {KONTAK.eposta ? ` Sorular: ${KONTAK.eposta}` : ""}
        </p>
      </div>
    </footer>
  );
}
