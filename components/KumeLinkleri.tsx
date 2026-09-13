import Link from "next/link";
import { KUMELER, kumeninYazilari, yaziYolu, type KumeAnahtari } from "@/lib/icerik";

/**
 * "Bu kümedeki diğer yazılar".
 *
 * Otorite dağıtımının bedava kısmı: küme içi bağlar klasörden otomatik
 * kuruluyor, makale başına ek maliyet yok (SEO-GEO-PLAN §11.2).
 * Tek yazılık kümede blok hiç basılmaz — "diğer" diye boş liste göstermeyiz.
 */
export function KumeLinkleri({
  kume,
  haric,
}: {
  kume: KumeAnahtari;
  haric?: string;
}) {
  const digerleri = kumeninYazilari(kume).filter((y) => y.slug !== haric);
  if (digerleri.length === 0) return null;

  return (
    <nav className="kume-linkleri" aria-label={`${KUMELER[kume].ad} kümesi`}>
      <h2>{KUMELER[kume].baslik}</h2>
      <ul>
        {digerleri.map((y) => (
          <li key={y.slug}>
            <Link href={yaziYolu(y)}>{y.baslik}</Link>
            <span>{y.ozet}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
