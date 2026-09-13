import Link from "next/link";
import type { Kirinti as KirintiTipi } from "@/lib/icerik";

/**
 * Kırıntı yolu (breadcrumb).
 *
 * İç link politikasının yapısal ayağı — SEO-GEO-PLAN §11.2. Elle link
 * serpiştirmiyoruz; hiyerarşi rotadan türeyip otomatik bağlanıyor.
 * Son halka bağlantı DEĞİL: kullanıcı zaten orada.
 */
export function Kirinti({ iz }: { iz: KirintiTipi[] }) {
  return (
    <nav className="kirinti" aria-label="Sayfa yolu">
      <ol>
        {iz.map((k, i) => {
          const sonuncu = i === iz.length - 1;
          return (
            <li key={k.yol}>
              {sonuncu ? (
                <span aria-current="page">{k.ad}</span>
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
