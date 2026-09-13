import type { Blok } from "@/lib/bloklar";

/** İşlem mekaniği. Evergreen. */
export const escrowNedir: Blok[] = [
  {
    t: "p",
    metin:
      "Escrow, alıcı ile satıcı arasında duran **tarafsız bir üçüncü " +
      "taraftır.** Para ve belgeler işlem tamamlanana kadar onda bekler; " +
      "şartlar yerine gelince aynı anda el değiştirir. Türkiye'de doğrudan " +
      "karşılığı olmayan bu yapı, Amerika'da alıcının en güçlü korumasıdır.",
  },
  {
    t: "p",
    metin:
      "Çözdüğü sorun şu: alıcı parayı önce verirse satıcıya, satıcı tapuyu " +
      "önce verirse alıcıya güvenmek zorunda kalır. Escrow ikisini de " +
      "ortadan kaldırır — **kimse diğerine güvenmek zorunda değildir.**",
  },

  { t: "h", metin: "Nasıl işliyor" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "Sözleşme imzalanır ve alıcı **kapora**yı (earnest money) escrow hesabına yatırır. Bu para satıcıya gitmez.",
      "Escrow talimatları yazılır: hangi şartlar sağlanınca para serbest kalacak.",
      "İnceleme, değerleme ve tapu araştırması yapılır; şartlar tek tek kapanır.",
      "Alıcı kalan tutarı havale eder.",
      "Escrow aynı anda parayı satıcıya, tapuyu alıcıya geçirir ve tescili başlatır.",
    ],
  },
  {
    t: "not",
    baslik: "Kapora yanar mı",
    metin:
      "Sözleşmedeki şartlar sağlanmadığı için çekilirseniz kapora " +
      "genellikle size iade edilir — inceleme kötü çıktı, kredi çıkmadı, " +
      "tapuda sorun bulundu gibi. Şartsız çekilirseniz kapora satıcıda " +
      "kalabilir. **Şartların sözleşmeye yazılmış olması bu yüzden " +
      "önemlidir** (bkz. evi görmeden ev almak).",
  },

  { t: "h", metin: "Kim yürütüyor" },
  {
    t: "p",
    metin:
      "Bu iş eyalete göre farklı kurumlarca yapılıyor: bazı eyaletlerde " +
      "bağımsız escrow ya da title şirketleri, bazılarında avukatlar. " +
      "İkisi de aynı işlevi görür; fark isimde ve düzenlemede.",
  },
  {
    t: "p",
    metin:
      "Kritik nokta kurumun kim olduğu değil, **tarafsız** olması. Escrow " +
      "şirketini satıcı seçiyorsa bunu sorgulamak hakkınızdır; alıcı olarak " +
      "kendi tercihinizi öne sürebilirsiniz.",
  },
  {
    t: "tablo",
    basliklar: ["Kim", "Neyi tutar", "Kime karşı sorumlu"],
    satirlar: [
      ["Escrow / kapanış şirketi", "Para ve belgeler", "Her iki tarafa eşit mesafede"],
      ["Emlakçı", "Hiçbiri", "Kendi müvekkiline"],
      ["Yönetim şirketi", "Kapanışta rolü yok", "Size, kapanıştan sonra"],
    ],
    not:
      "Emlakçı ve yönetim şirketi kapanış parasını **tutmaz.** Para " +
      "escrow dışında bir yere isteniyorsa durun ve sorun.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Escrow ücreti ne kadar?",
        c:
          "Kapanış masraflarının bir kalemidir ve işlem büyüklüğüne göre " +
          "değişir. Genelde alıcı ve satıcı arasında paylaşılır; paylaşım " +
          "bölgesel teamüle ve pazarlığa bağlıdır.",
      },
      {
        s: "Kapora ne kadar olur?",
        c:
          "Fiyatın küçük bir yüzdesi olarak belirlenir ve pazarlığa " +
          "açıktır. Rekabetin yüksek olduğu piyasalarda alıcılar teklifi " +
          "güçlendirmek için yüksek kapora koyuyor — ama yüksek kapora, " +
          "şartlarınız zayıfsa daha çok riske attığınız para demektir.",
      },
      {
        s: "Escrow süreci ne kadar sürer?",
        c:
          "Nakit alımda birkaç haftaya inebiliyor; kredili alımda banka " +
          "süreci belirleyici oluyor ve daha uzun sürüyor.",
      },
    ],
  },
];
