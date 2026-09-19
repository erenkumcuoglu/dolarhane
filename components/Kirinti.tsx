import Link from "next/link";
import type { Kirinti as KirintiTipi } from "@/lib/icerik";

/**
 * Kırıntı yolu (breadcrumb).
 *
 * İç link politikasının yapısal ayağı — SEO-GEO-PLAN §11.2. Elle link
 * serpiştirmiyoruz; hiyerarşi rotadan türeyip otomatik bağlanıyor.
 * Son halka bağlantı DEĞİL: kullanıcı zaten orada. Küme halkası da,
 * o kümenin sayfası üretilmemişse (tamamı taslaksa) bağlantı değil —
 * yoksa 404'e giderdi.
 */
export function Kirinti({ iz }: { iz: KirintiTipi[] }) {
  return (
    <nav className="kirinti" aria-label="Sayfa yolu">
      <ol>
        {iz.map((k, i) => {
          const sonuncu = i === iz.length - 1;
          const duz = sonuncu || k.var === false;
          return (
            <li key={k.yol}>
              {duz ? (
                <span {...(sonuncu ? { "aria-current": "page" as const } : {})}>
                  {k.ad}
                </span>
              ) : (
                <Link href={k.yol}>{k.ad}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
