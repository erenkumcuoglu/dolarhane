/**
 * V3 "biz kimiz" — kısa, insani, tek görsel (brief §7).
 *
 * v2'deki üç ikonlu güvence kümesi (escrow · tapu · yerel ekip) ÇIKTI:
 * brief bu bölümü kısaltmak ve ikinci bir hero'ya dönüştürmemek istiyor.
 * İçindeki iki maddi bilgi kaybolmadı, tek satıra indi — kümenin
 * kendisi tekrar eden bir kart ritmiydi, bilgi değil.
 *
 * Görsel yuvası yer tutucu: stok portre KONMUYOR. Kurucu yuvasındaki
 * yabancı yüz "bunlar bizim ekibimiz" demek olur, yani uydurma kanıt.
 * Gerçek ekip fotoğrafı gelince FOTO ve rozet değişir, başka yer
 * değişmez.
 */
const FOTO = "/ev/hero.jpg";

export function Hikaye3() {
  return (
    <section className="v3-hikaye" id="v3-biz">
      <div className="v3-kap v3-hikaye__in">
        <figure className="v3-hikaye__gorsel">
          <img
            src={FOTO}
            width={860}
            height={1075}
            loading="lazy"
            alt="Temsilî fotoğraf: orta kuşakta bahçeli müstakil bir evin girişi"
          />
          <span className="v3-temsili">temsilî · yer tutucu</span>
        </figure>

        <div className="v3-hikaye__soz">
          <h2 className="v3-h2">Bu işe müşteri olarak başladık.</h2>
          <p className="v3-hikaye__gov">
            50 yıldır Amerika&apos;dayız. Hangi eyalette ev sahibinin hakkı
            korunuyor, tapu kimin adına çıkmalı, hangi masraf nerede saklı —
            hepsini oradaki 50 yıllık tecrübemizle biliyoruz.
          </p>
          <p className="v3-vurus">
            Portföydeki evlerin aynısından kendimiz de alıyoruz. Amacımız iyi
            bir yatırım sunarak uzun süreli bir ilişki yaratmak. Dolayısıyla
            kötü bir mahalleyi satmaktansa hiç girmemeyi tercih ediyoruz.
          </p>
          <p className="v3-hikaye__dip">
            Ödemeleriniz bağımsız bir escrow şirketinin hesabına gidiyor, tapu
            doğrudan sizin adınıza çıkıyor, biz de süreç boyunca yönetimini
            yaparız.
          </p>
        </div>
      </div>
    </section>
  );
}
