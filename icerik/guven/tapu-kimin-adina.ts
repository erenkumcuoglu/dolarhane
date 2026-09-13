import type { Blok } from "@/lib/bloklar";

export const tapuKiminAdina: Blok[] = [
  {
    t: "p",
    metin:
      "Tapu kimin adına çıkacaksa **kapanıştan önce** belirlenir ve " +
      "sözleşmeye yazılır. Sonradan değiştirmek yeni bir devir işlemi " +
      "demektir: masraf doğurur, bazı yerlerde devir vergisi tetikler. " +
      "Bu yüzden karar, ev seçilirken verilmelidir.",
  },

  { t: "h", metin: "Üç yol" },
  {
    t: "tablo",
    basliklar: ["Yapı", "Ne sağlar", "Bedeli"],
    satirlar: [
      [
        "Kendi adınıza",
        "En basit ve en ucuz. Tapu doğrudan sizin adınıza tescil edilir",
        "Kişisel sorumluluk mülkle iç içe; ABD veraset vergisi tarafında yabancılar için istisna çok düşük",
      ],
      [
        "LLC üzerinden",
        "Sorumluluk ayrımı; birden fazla mülkte yönetimi kolaylaştırıyor",
        "Kuruluş ve yıllık idame masrafı, ek beyan yükümlülüğü, bazı kredilerde şart değişimi",
      ],
      [
        "Ortak mülkiyet",
        "Birden fazla kişi adına; eş ya da ortakla birlikte",
        "Ortaklık biçimi miras ve satış kararlarını doğrudan etkiliyor; yazılı düzenleme şart",
      ],
    ],
    not:
      "Doğru yapı kişiye göre değişiyor ve vergi tarafıyla iç içe. " +
      "Bu sayfa seçenekleri tanıtıyor; kararı **ABD beyanınızı " +
      "hazırlayacak muhasebeciyle** vermeniz gerekiyor.",
  },
  {
    t: "not",
    baslik: "Sık atlanan nokta",
    metin:
      "ABD'de yabancılar için veraset vergisi istisnası çok düşüktür ve " +
      "ABD'deki gayrimenkul bu vergiye açıkça tabidir. Tapu yapısı bu " +
      "riski doğrudan etkiliyor. Vergi kümesinde ayrıca ele alıyoruz; " +
      "yapı kararı verilmeden önce okunmalı.",
  },

  { t: "h", metin: "Tapunuzu kendiniz doğrulamak" },
  {
    t: "p",
    metin:
      "Amerika'da mülkiyet kaydı kamuya açıktır. Kimsenin size " +
      "göstermesini beklemeniz gerekmiyor:",
  },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "Mülkün bulunduğu ilçenin tapu ya da değerleme ofisinin sitesini açın — çoğu çevrimiçi.",
      "Adres ya da parsel numarasıyla arayın.",
      "Malik adını, tescil tarihini ve varsa şerhleri görün.",
      "Kapanıştan sonra kaydın güncellenmesi birkaç hafta sürebilir; hemen görünmezse bekleyin, sonra tekrar bakın.",
    ],
  },
  {
    t: "p",
    metin:
      "Kapanışta size **tescil edilmiş tapu kopyası** ve **title insurance " +
      "poliçesi** teslim edilmelidir. İkisi de gelmiyorsa isteyin; bu " +
      "standart bir taleptir.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Tapu Türkiye'deki gibi bir belge mi?",
        c:
          "Benzer ama aynı değil. ABD'de asıl olan **kütük kaydıdır**; " +
          "elinizdeki belge o kaydın kopyasıdır. Belgeyi kaybetmek " +
          "mülkiyeti etkilemez, çünkü kayıt ilçede durur.",
      },
      {
        s: "Eşimle ortak alabilir miyim?",
        c:
          "Evet. Ancak ortak mülkiyetin birden fazla biçimi var ve " +
          "aralarındaki fark, taraflardan biri vefat ettiğinde ne olacağını " +
          "belirliyor. Biçimi kapanıştan önce bilerek seçmek gerekiyor.",
      },
      {
        s: "LLC kurmak zorunda mıyım?",
        c:
          "Hayır, zorunlu değil. Tek mülkte çoğu alıcı kendi adına alıyor. " +
          "LLC, mülk sayısı arttıkça ve sorumluluk ayrımı önem kazandıkça " +
          "anlamlı hale geliyor — ve kendi masrafını getiriyor.",
      },
    ],
  },
];
