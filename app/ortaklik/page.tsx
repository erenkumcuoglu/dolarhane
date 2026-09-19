import type { Metadata } from "next";
import { NavYazi } from "@/components/yazi/NavYazi";
import { DipYazi } from "@/components/yazi/DipYazi";
import { Ortaklik } from "@/components/ortaklik/Ortaklik";
import { FormOrtak } from "@/components/ortaklik/FormOrtak";
import { HUKUKI_ONAY, ORTAKLIK_YOLU } from "@/lib/ortaklik";
import { ADRES_VAR } from "@/lib/site";
import "../v2.css";

/**
 * /ortaklik — iş ortaklığı ve tanıştırma ağı.
 *
 * İş planı slayt 19 · Kanal 1: Türkiye'deki emlak ofisleri düşük bütçeli
 * müşterilerini yönlendiriyor.
 *
 * HUKUKİ ONAY ALINMADAN YAYINA AÇILMIYOR (bkz. lib/ortaklik.ts):
 * `HUKUKI_ONAY` false olduğu sürece sayfa `noindex, nofollow` basıyor,
 * nav'da ve alt şeritte bağlantısı yok, sitemap'e girmiyor. Sayfa
 * okunabilir — avukata ve ilk ortak adaylarına link gönderilebilsin diye.
 */
export const metadata: Metadata = {
  title: "İş ortaklığı — Dolarhane",
  description:
    "Portföyünüz ya da tanıdığınız var; görüşmeyi, hesabı ve süreci biz yürütüyoruz. Kapanan işlem başına ödeme.",
  /* Onay yokken canonical YAZILMAZ: noindex bir sayfanın canonical'ı
     çelişkili sinyal. Onay varken de kendi yolunu yazıyor — yoksa kök
     layout'un mirası onu ana sayfanın kopyası yapardı. */
  ...(HUKUKI_ONAY
    ? ADRES_VAR
      ? { alternates: { canonical: ORTAKLIK_YOLU } }
      : {}
    : { robots: { index: false, follow: false } }),
};

export default function OrtaklikSayfasi() {
  return (
    <div className="v2">
      <NavYazi />

      <main id="icerik">
        <header className="v2-sect ort-bas">
          <div className="v2-kap">
            {!HUKUKI_ONAY ? (
              <p className="ort-uyari" role="status">
                <strong>Taslak — yayında değil.</strong> Bu sayfa hukuki
                inceleme için açık; arama motorlarına kapalı ve site
                içinden bağlantı verilmiyor. Ödeme koşulları karara
                bağlanmadan yayına alınmayacak.
              </p>
            ) : null}

            <h1 className="v2-hero__t ort-bas__t">
              Portföyünüz ya da tanıdığınız var.
              <br />
              <em>Gerisini biz yapıyoruz.</em>
            </h1>
            <p className="v2-lede ort-bas__lede">
              Amerika&apos;da ev alma sürecinin tamamı bizde: mülk seçimi,
              ekspertiz, escrow, tapu ve yönetim. Sizden istediğimiz tek
              şey, doğru kişiyi ya da doğru evi işaret etmek.
            </p>
          </div>
        </header>

        <Ortaklik />

        <section className="v2-sect ort-seffaf">
          <div className="v2-kap">
            <div className="v2-sect__bas">
              <h2 className="v2-h2">Neye güveneceksiniz.</h2>
              <p className="v2-xs v2-sect__yan">
                Ortaklık teklifleri genelde en şüpheli duran şeydir.
              </p>
            </div>
            <ul className="ort-seffaf__ler">
              <li className="v2-kart">
                <p className="v2-h3">Para bize gelmiyor</p>
                <p className="v2-sm">
                  Alım bağımsız bir escrow şirketi üzerinden kapanıyor,
                  tapu doğrudan alıcının adına çıkıyor. Tanıştırdığınız
                  kişinin parası hiçbir aşamada bizim hesabımıza girmiyor.
                </p>
              </li>
              <li className="v2-kart">
                <p className="v2-h3">İlişkiyi gizlemiyoruz</p>
                <p className="v2-sm">
                  Alıcıya sizin adınızla gidiyoruz. Sizi devre dışı
                  bırakan bir kurgu yok; ikinci alımında da aynı
                  masadasınız.
                </p>
              </li>
              <li className="v2-kart">
                <p className="v2-h3">Aynı hesabı görüyorsunuz</p>
                <p className="v2-sm">
                  Alıcıya gösterdiğimiz tablo, sitede herkese açık olan
                  tablonun aynısı — aleyhimize olan satırlar dahil.{" "}
                  <a href="/hesap/">Hesabın tamamı</a>.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <FormOrtak />
      </main>

      <DipYazi />
    </div>
  );
}
