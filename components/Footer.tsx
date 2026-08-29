import { KIMLIK, KONTAK } from "@/lib/kontak";

/**
 * ALT ŞERİT — kimlik.
 * Boş alanlar uydurulmaz; doldurulması gereken alan olarak görünür.
 */
export function Footer() {
  return (
    <footer className="dip">
      <div className="kap">
        <div className="dip__ust">
          <a className="marka" href="/#pano">
            <i aria-hidden="true" />
            <b>DOLARHANE</b>
          </a>
          <p className="sm dip__cumle">
            Amerika&apos;nın orta kuşağında, kiracısı oturan müstakil evler.
            Alım, kredi, yönetim ve beyan tek elden.
          </p>
        </div>

        <dl className="kimlik">
          {KIMLIK.map((k) => (
            <div key={k.etiket}>
              <dt className="xs">{k.etiket}</dt>
              <dd>
                {k.deger ? (
                  k.deger
                ) : (
                  <span className="todo">[{k.etiket.toLocaleUpperCase("tr")}]</span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <p className="xs dip__yasal">
          <span>
            Bu sayfadaki tüm rakamlar örnek hesaplardır; yatırım tavsiyesi
            değildir. Kira, gider ve faiz oranları eve ve zamana göre değişir.
            Geçmiş ya da öngörülen getiri garanti edilmez.
            {KONTAK.eposta ? ` Sorular: ${KONTAK.eposta}` : ""}
          </span>
        </p>
      </div>
    </footer>
  );
}
