import Link from "next/link";
import { KIMLIK, KONTAK } from "@/lib/kontak";
import { doluKumeler, kumeYolu } from "@/lib/icerik";
import { ORTAKLIK_BAGLANTISI } from "@/lib/ortaklik";

/**
 * Bilgi bankası alt şeridi — `Dip2` ile aynı sınıflar, bilgi bankası
 * bağlantıları. Kimlik şeridi aynen taşınıyor: YMYL içerikte künye
 * E-E-A-T'nin taşıyıcısı (SEO-GEO-PLAN §7) ve boş alan uydurulmuyor,
 * doldurulacak alan olarak duruyor (DESIGN.md kural 6).
 */
export function DipYazi() {
  return (
    <footer className="v2-dip">
      <div className="v2-kap">
        <div className="v2-dip__ust">
          <Link className="v2-marka" href="/">
            <img src="/logo/amblem.png" alt="" width={30} height={30} />
            <span>
              <b>DOLARHANE</b>
              <i>Amerika&apos;dan ev al</i>
            </span>
          </Link>
          <nav className="v2-dip__ler">
            {doluKumeler().map((k) => (
              <Link key={k.slug} href={kumeYolu(k.slug)}>
                {k.ad}
              </Link>
            ))}
            <Link href="/hesap/">Hesabın tamamı</Link>
            {/* Hukuki onay yokken boş dizi — lib/ortaklik.ts tek anahtar. */}
            {ORTAKLIK_BAGLANTISI.map((o) => (
              <Link key={o.yol} href={o.yol}>
                {o.ad}
              </Link>
            ))}
            <Link href="/">Ana sayfa</Link>
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
          Bu sayfalardaki rakamlar örnek hesaplardır; yatırım tavsiyesi
          değildir. Kira, gider, vergi ve faiz oranları eve, eyalete ve zamana
          göre değişir. Geçmiş ya da öngörülen getiri garanti edilmez.
          {KONTAK.eposta ? ` Sorular: ${KONTAK.eposta}` : ""}
        </p>
      </div>
    </footer>
  );
}
