import { LeadForm4 } from "./LeadForm4";

/**
 * V4 kapanış. Form mantığı LeadForm4'te (ev detay sayfası da aynısını kullanıyor).
 *
 * V3 kapanış — sessiz kapanış (brief §9): tek başlık, tek cümle, tek
 * birincil eylem. Aciliyet mekaniği, kıtlık, sayaç yok.
 *
 * Form sayfada kalıyor çünkü huninin ilk adımı o: mesaj → konuşma →
 * randevu → görüşme. Ana sayfada tek form burası; bütün çağrılar buraya
 * iniyor. Ev detay sayfasındaki form aynı bileşen, eve bağlı.
 *
 * Doğrulama ve dürüstlük kuralları Form2 ile aynı: endpoint boşken
 * uydurma bir "aldık" ekranı GÖSTERİLMEZ ve bilgilerin hiçbir yere
 * gönderilmediği yazılı söylenir.
 *
 * BANTLAR peşin modele göre kuruldu. v2'deki bantlar (44–87 bin $)
 * kaldıraçlı dönemin PEŞİNAT aralıklarıydı; peşin alımda giriş bileti
 * zaten ~150 bin $ ve o liste artık yanlış soruyu soruyor.
 */
export function Kapanis4() {
  return (
    <section className="v4-kapanis" id="v4-kapanis">
      <div className="v4-kap v4-kapanis__in">
        <div className="v4-kapanis__soz">
          <h2 className="v4-h1 v4-h2--acik">Sizin yatırımınızı <em>konuşalım.</em></h2>
          <p className="v4-kapanis__lede">
            Bize bilgilerinizi bırakın, en kısa zamanda portföyümüzde bütçenize
            en uygun seçenekleri sizlere sunalım ve aklınıza takılan tüm detayları
            konuşalım.
          </p>
        </div>

        <LeadForm4 onek="v4f" />
      </div>
    </section>
  );
}
