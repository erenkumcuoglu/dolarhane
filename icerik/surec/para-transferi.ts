import type { Blok } from "@/lib/bloklar";

/**
 * Süreç kümesinde ve YAYIN — çünkü anlattığı şey bizim kendi
 * işleyişimiz. Türkiye tarafındaki döviz mevzuatı ve beyan soruları
 * BİLİNÇLİ olarak cevaplanmıyor; bankaya ve mali müşavire
 * yönlendiriliyor. Tutar eşiği, bildirim sınırı gibi hiçbir
 * düzenleyici rakam yazılmıyor.
 */
export const paraTransferi: Blok[] = [
  {
    t: "p",
    metin:
      "Para **bize gelmiyor.** Transfer, alıcının kendi bankasından " +
      "bağımsız bir **escrow şirketinin** hesabına yapılıyor; o hesap " +
      "kapanışa kadar parayı tutuyor ve tapu devri gerçekleşmeden " +
      "satıcıya bırakmıyor.",
  },

  { t: "h", metin: "Sıra" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "Teklif kabul edilir ve escrow açılır; escrow şirketi size kendi hesap bilgilerini ve dosya numarasını yazılı olarak gönderir.",
      "Bankanıza gidersiniz. Banka transferin gerekçesini belgelemenizi ister — satış sözleşmesi ve escrow talimatı bu belgelerdir.",
      "Transfer escrow hesabına yapılır. Dosya numarası açıklamaya yazılır; yazılmazsa eşleştirme gecikir.",
      "Escrow şirketi parayı aldığını yazılı olarak teyit eder.",
      "Kapanışta tapu alıcı adına devrolur ve escrow parayı satıcıya bırakır.",
    ],
  },
  {
    t: "not",
    baslik: "Hesap bilgisini yalnız escrow şirketinden alın",
    metin:
      "Gayrimenkul kapanışlarında en yaygın dolandırıcılık biçimi, " +
      "kapanış öncesi gönderilen **sahte havale talimatıdır**: e-posta " +
      "gerçek görünür, IBAN değiştirilmiştir. Kural basit — hesap " +
      "bilgisini escrow şirketini **telefonla arayarak** teyit edin ve " +
      "e-postayla gelen bir değişikliğe asla doğrudan güvenmeyin. Biz " +
      "de bu teyidi sizinle birlikte yapıyoruz.",
  },

  { t: "h", metin: "Bankanızın isteyeceği belgeler" },
  {
    t: "liste",
    maddeler: [
      "Satış sözleşmesi ya da escrow talimatı — transferin gerekçesi.",
      "Escrow şirketinin hesap bilgileri ve dosya numarası.",
      "Kimlik ve gerekiyorsa kaynak beyanı.",
      "Bankanın kendi formu — her banka kendi listesini veriyor.",
    ],
  },
  {
    t: "p",
    metin:
      "Listeyi **bankanız belirliyor**, biz değil. Transferden önce " +
      "şubenize sorup listeyi yazılı almanız en hızlı yol; belge " +
      "eksikliği kapanış takvimini kaydıran en sık sebep.",
  },

  {
    t: "not",
    baslik: "Döviz mevzuatı ve beyan bizim alanımız değil",
    metin:
      "Yurt dışına para transferinde uygulanacak kurallar, bildirim " +
      "yükümlülükleri ve beyan soruları **bankanızın ve mali " +
      "müşavirinizin** alanı. Bu sayfa bilerek eşik, oran ya da limit " +
      "yazmıyor: kurallar değişiyor ve kişinin durumuna göre farklı " +
      "işliyor. Kira geliri tarafındaki beyan yükümlülüğü ayrı bir " +
      "konu ve mali müşavirinizle konuşulmalı.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Parayı Dolarhane'nin hesabına mı gönderiyorum?",
        c:
          "Hayır, hiçbir aşamada. Transfer bağımsız escrow şirketinin " +
          "hesabına yapılıyor. Bizim hizmet bedelimiz ayrı bir kalem ve " +
          "ayrıca faturalanıyor.",
      },
      {
        s: "Tek seferde mi gönderiliyor?",
        c:
          "Genellikle iki adım: teklif kabul edilince kapora (earnest " +
          "money), kapanış öncesinde kalan tutar. İkisi de aynı escrow " +
          "hesabına gidiyor.",
      },
      {
        s: "ABD'de banka hesabım olması gerekiyor mu?",
        c:
          "Alım için şart değil — transfer doğrudan escrow'a yapılıyor. " +
          "Ama kira gelirinin toplanması ve giderlerin ödenmesi için " +
          "sonrasında bir hesap açmak işi kolaylaştırıyor; yönetim " +
          "şirketi ödemeyi oraya yapıyor.",
      },
      {
        s: "Transfer ne kadar sürüyor?",
        c:
          "Uluslararası havale tipik olarak birkaç iş günü. Kapanış " +
          "takvimi buna göre kuruluyor; escrow parayı görmeden kapanış " +
          "yapılmıyor.",
      },
    ],
  },

  {
    t: "kaynak",
    maddeler: [
      {
        metin:
          "Kapanış havalesi dolandırıcılığı (wire fraud) ABD'de emlak kapanışlarının bilinen riskidir; FBI ve sektör kuruluşları telefonla teyit önerir.",
      },
      {
        metin:
          "Transferde istenen belgeler ve uygulanacak mevzuat bankadan bankaya değişir; bağlayıcı bilgi bankanızın kendi yazılı listesidir.",
      },
    ],
  },
];
