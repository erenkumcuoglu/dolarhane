import type { Blok } from "@/lib/bloklar";
import { CPA_UYARISI } from "./_uyari";

export const itinNasilAlinir: Blok[] = [
  {
    t: "p",
    metin:
      "ITIN, ABD sosyal güvenlik numarası alamayan kişilere verilen " +
      "**vergi kimlik numarası.** ABD'de kira geliri beyan edecek bir " +
      "yabancı için zorunlu: beyan bu numara olmadan verilemiyor.",
  },
  {
    t: "p",
    metin:
      "Oturum, çalışma izni ya da vize ile ilgisi yok. Tek işlevi vergi " +
      "sisteminde kimliklendirilmek.",
  },
  CPA_UYARISI,

  { t: "h", metin: "Süreç" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "**Geçerli bir vergi gerekçesi** oluşur — örneğin ABD kaynaklı kira geliri için beyan verecek olmak. ITIN gerekçesiz verilmiyor.",
      "**W-7 formu** doldurulur.",
      "**Kimlik belgesi** eklenir. Pasaport tek başına yeterli olabiliyor ama aslı ya da usulüne uygun onaylanmış kopyası isteniyor.",
      "Başvuru genellikle **beyanla birlikte** gönderilir.",
      "Numara geldiğinde beyan işlenir.",
    ],
  },
  {
    t: "not",
    baslik: "Pasaportunuzu postalamamanın yolu",
    metin:
      "Aslını göndermek istemiyorsanız — ki istemezsiniz — iki yol var: " +
      "IRS tarafından yetkilendirilmiş bir **onaylayıcı temsilci** " +
      "(Certifying Acceptance Agent) kimliği görüp onaylayabiliyor, ya da " +
      "belge ABD konsolosluğunda onaylatılabiliyor. Türkiye'de bu hizmeti " +
      "veren yetkili temsilciler var.",
  },

  { t: "h", metin: "Süre ve zamanlama" },
  {
    t: "p",
    metin:
      "Süreç haftalar alabiliyor ve yoğun beyan dönemlerinde uzuyor. " +
      "Pratik sonuç: ITIN'i **beyan zamanı gelmeden** başlatmak gerekiyor. " +
      "Kira geliri ilk yılında başlıyorsa, o yılın beyan takvimini geriye " +
      "doğru hesaplayıp başvuruyu ona göre planlamak lazım.",
  },
  {
    t: "not",
    baslik: "ITIN'in ikinci işlevi",
    metin:
      "ABD'de banka hesabı açarken de gündeme gelebiliyor. Kira " +
      "tahsilatı, vergi ve tamir ödemeleri için ABD hesabı pratikte " +
      "gerekli hale geldiğinden, ITIN süreci genellikle bu ikisiyle " +
      "birlikte planlanıyor.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "ITIN'im yoksa ev alamaz mıyım?",
        c:
          "Alabilirsiniz — mülk edinmek için ITIN şart değil. " +
          "Gerekli olduğu an kira gelirini beyan edeceğiniz zaman.",
      },
      {
        s: "ITIN süresi doluyor mu?",
        c:
          "Belirli bir süre kullanılmayan ITIN'ler geçerliliğini " +
          "yitirebiliyor ve yenilenmesi gerekiyor. Düzenli beyan " +
          "veriyorsanız bu sorun çıkmıyor.",
      },
      {
        s: "Eşim için de gerekiyor mu?",
        c:
          "Mülk ortak alınmışsa ve her iki malik de beyanda yer alıyorsa " +
          "ikisi için de gerekebiliyor. Tapu yapısı kararıyla birlikte " +
          "değerlendirilmeli.",
      },
    ],
  },
];
