import type { Blok } from "@/lib/bloklar";

/** İşlem mekaniği. Evergreen. */
export const closingCosts: Blok[] = [
  {
    t: "p",
    metin:
      "Kapanış masrafları, evin fiyatının **üstüne** gelen tek seferlik " +
      "kalemlerdir ve getiri hesabında en sık unutulan şeydir. Unutulunca " +
      "ne olur: yatırılan sermaye olduğundan küçük görünür, dolayısıyla " +
      "getiri olduğundan yüksek çıkar.",
  },
  {
    t: "p",
    metin:
      "Doğru hesap şudur: **yatırdığınız para = fiyat + kapanış masrafları " +
      "+ kiraya hazırlık.** Getiriyi bu toplam üzerinden hesaplayın.",
  },

  { t: "h", metin: "Kalemler" },
  {
    t: "tablo",
    basliklar: ["Kalem", "Ne için", "Kim öder"],
    satirlar: [
      ["[Title araştırması ve sigortası](/surec/title-insurance/)", "Tapu riskinin taranması ve sigortalanması", "Bölgesel teamüle göre değişir"],
      ["[Escrow / kapanış hizmeti](/surec/escrow-nedir/)", "Tarafsız üçüncü tarafın ücreti", "Genelde paylaşılır"],
      ["Tescil harcı", "Tapunun ilçe kütüğüne işlenmesi", "Alıcı"],
      ["Devir vergisi", "Mülkiyet devrinden alınan vergi", "Eyalete göre değişir; bazı yerlerde yok"],
      ["Ev incelemesi", "[Bağımsız teknik rapor](/surec/evi-gormeden-ev-almak/)", "Alıcı"],
      ["Değerleme", "Piyasa değeri tespiti", "Alıcı"],
      ["Peşin ödenen emlak vergisi ve sigorta", "Dönemsel paylaşım", "Alıcı"],
      ["Kredi masrafları", "Kredi kullanılıyorsa dosya ve işlem ücretleri", "Alıcı"],
    ],
    not:
      "Kim öder sütunu bölgesel teamüle ve pazarlığa bağlıdır; bazı " +
      "kalemler satıcıya yıkılabilir. Sıcak piyasalarda alıcı, durgun " +
      "piyasalarda satıcı daha çok üstlenir.",
  },
  {
    t: "not",
    baslik: "Nakit alımda daha düşük",
    metin:
      "Kredi masrafları, kredi veren poliçesi ve bankanın istediği " +
      "değerleme, nakit alımda tamamen düşer. Nakit alım kapanış " +
      "masraflarını belirgin biçimde küçültüyor — ama kaldıraçtan " +
      "vazgeçmenin getiriye etkisi ayrı bir hesaptır.",
  },

  { t: "h", metin: "Unutulan ikinci kalem: kiraya hazırlık" },
  {
    t: "p",
    metin:
      "Kapanış masrafları tabloda görünür, çünkü kapanış hesap dökümünde " +
      "yazılıdır. Kiraya hazırlık ise hiçbir dökümde yoktur ve o yüzden " +
      "daha sık unutulur.",
  },
  {
    t: "liste",
    maddeler: [
      "Boya, temizlik, küçük tamirler.",
      "İnceleme raporunda çıkan ve kiracı girmeden yapılması gereken işler.",
      "[İlan ve ilk yerleştirme ücreti](/surec/kiraci-nasil-bulunuyor/).",
      "Ev kiracı bulana kadar geçen sürenin vergisi, sigortası ve faturaları.",
    ],
  },
  {
    t: "not",
    baslik: "Kiralı alırsanız",
    metin:
      "Ev kiracılı satın alınıyorsa hazırlık kalemlerinin çoğu düşer ve " +
      "kira ilk aydan başlar. Bu gerçek bir avantajdır — ama [mevcut kiranın " +
      "piyasa kirası olup olmadığı](/getiri/getiri-tuzaklari/) ayrıca kontrol edilmeli.",
  },

  { t: "h", metin: "Hesabı doğru kurmak" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "Fiyat + kapanış masrafları + hazırlık = **yatırılan sermaye**.",
      "Yıllık brüt kiradan boşluk ve tahsilat kaybını düşün.",
      "[İşletme giderlerini düşün](/getiri/nakit-akisi-nasil-hesaplanir/): vergi, sigorta, yönetim, bakım, capex rezervi.",
      "Kalan net geliri [yatırılan sermayeye](/hesap/) bölün.",
    ],
  },
  {
    t: "p",
    metin:
      "Bu son adım kritik: net geliri eve ödediğiniz fiyata bölerseniz " +
      "getiri olduğundan yüksek çıkar. Bölen, cebinizden çıkan toplam " +
      "olmalıdır.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Kapanış masrafları tipik olarak ne kadar tutar?",
        c:
          "Alıcı tarafında fiyatın birkaç yüzdesi mertebesinde konuşulur, " +
          "ama tutar eyalete, devir vergisinin varlığına ve kredi kullanıp " +
          "kullanmadığınıza göre belirgin biçimde değişir. Tek bir oran " +
          "vermek yanıltıcı olur; kapanış şirketinden **yazılı tahmini " +
          "döküm** isteyin — bu standart bir taleptir.",
      },
      {
        s: "Bu masrafları krediye ekleyebilir miyim?",
        c:
          "Bazı kredi ürünlerinde mümkün, ama maliyeti otuz yıla yayarak " +
          "ödemek demektir. Nakit ödenebiliyorsa genelde daha ucuzdur.",
      },
      {
        s: "Kapanış dökümünü önceden görebilir miyim?",
        c:
          "Evet ve görmelisiniz. Kapanıştan önce tahmini döküm paylaşılır; " +
          "son dökümle karşılaştırıp aradaki farkın sebebini sormak " +
          "hakkınızdır.",
      },
    ],
  },
];
