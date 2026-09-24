import { Kunye4 } from "./isaret";

/**
 * V4 "biz kimiz" — fotoğraf kenara kanıyor, metin kâğıtta.
 *
 * Stok portre KONMUYOR (kural 16): kurucu yuvasındaki yabancı yüz uydurma
 * kanıt olur. Yer tutucu, sayfanın başka hiçbir yerinde kullanılmayan
 * temsilî ev fotoğrafı ve "temsilî · yer tutucu" rozeti. Gerçek ekip
 * fotoğrafı gelince yalnız src ve rozet değişir.
 */
export function Hikaye4() {
  return (
    <section className="v4-hikaye" id="v4-biz" aria-labelledby="v4-biz-bas">
      <figure className="v4-hikaye__foto">
        <img
          src="/ev/v4/ev-04-2400.jpg"
          srcSet="/ev/v4/ev-04-1200.jpg 1200w, /ev/v4/ev-04-2400.jpg 2400w"
          sizes="(max-width: 900px) 100vw, 50vw"
          width={2400}
          height={1600}
          loading="lazy"
          alt="Temsilî fotoğraf: orta kuşakta bahçeli, tek katlı müstakil bir ev"
        />
        <span className="v4-rozet">temsilî · yer tutucu</span>
      </figure>
      <div className="v4-hikaye__soz">
        <Kunye4 no="07" ad="Biz" />
        <h2 className="v4-h2" id="v4-biz-bas" data-r>
          Bu işe <em>müşteri olarak</em> başladık.
        </h2>
        <p className="v4-p" data-r>
          50 yıldır Amerika&apos;dayız. Hangi eyalette ev sahibinin hakkı korunuyor,
          tapu kimin adına çıkmalı, hangi masraf nerede saklı — hepsini oradaki
          tecrübemizle biliyoruz.
        </p>
        <blockquote className="v4-alinti" data-r>
          <p>
            Portföydeki evlerin aynısından kendimiz de alıyoruz. Kötü bir mahalleyi
            satmaktansa hiç girmemeyi tercih ediyoruz.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
