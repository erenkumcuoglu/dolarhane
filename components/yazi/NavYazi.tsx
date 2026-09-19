import Link from "next/link";
import { KONTAK } from "@/lib/kontak";
import { doluKumeler, kumeYolu } from "@/lib/icerik";
import { ORTAKLIK_BAGLANTISI } from "@/lib/ortaklik";

/**
 * Bilgi bankası nav'ı — v2'nin görsel dili, bilgi bankasının bağlantıları.
 *
 * `Nav2` yeniden kullanılamadı: onun bağlantıları sayfa içi çapa
 * (`#v2-hesap`) ve makale sayfasında hedefsiz kalıyor; ayrıca `/v2`
 * `noindex`, indekslenen bir sayfadan oraya link vermek yanlış sinyal.
 * Sınıflar birebir aynı (`v2-nav`, `v2-kap`, `v2-marka`, `v2-btn`) —
 * yeni stil yazılmadı, yalnız hedefler değişti.
 *
 * Kümeler kayıt defterinden geliyor: yazısı olmayan küme nav'da görünmez.
 */
export function NavYazi() {
  return (
    <nav className="v2-nav">
      <div className="v2-kap v2-nav__in">
        <Link className="v2-marka" href="/">
          <img src="/logo/amblem.png" alt="" width={30} height={30} />
          <span>
            <b>DOLARHANE</b>
            <i>Amerika&apos;dan ev al</i>
          </span>
        </Link>

        <div className="v2-nav__ler">
          {doluKumeler().map((k) => (
            <Link key={k.slug} href={kumeYolu(k.slug)}>
              {k.ad}
            </Link>
          ))}
          {/* Hukuki onay yokken boş dizi — lib/ortaklik.ts tek anahtar. */}
          {ORTAKLIK_BAGLANTISI.map((o) => (
            <Link key={o.yol} href={o.yol}>
              {o.ad}
            </Link>
          ))}
        </div>

        <div className="v2-nav__sag">
          <Link className="v2-btn v2-btn--altin" href="/hesap/">
            Yatırım hesabı
          </Link>
          {/* KONTAK.wa boşken basılmaz — DESIGN.md kural 6. */}
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
