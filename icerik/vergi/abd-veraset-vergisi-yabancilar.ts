import type { Blok } from "@/lib/bloklar";
import { CPA_UYARISI } from "./_uyari";

/**
 * Kümenin scoop'u. Türkçe'de doğru yazılmamış ve en kritik kalem.
 * TASLAK — CPA imzası şart (SEO-GEO-PLAN §7, §3).
 */
export const abdVeraserVergisiYabancilar: Blok[] = [
  {
    t: "p",
    metin:
      "ABD'de gayrimenkul sahibi olan ve ABD'de ikamet etmeyen bir " +
      "yabancı vefat ettiğinde, mülk **ABD veraset vergisine tabi** " +
      "oluyor. Ve yabancılar için tanınan istisna, ABD'de yerleşik " +
      "kişilere tanınandan **dramatik biçimde düşük.**",
  },
  {
    t: "p",
    metin:
      "Bu, Türkçe kaynaklarda ya hiç yazılmayan ya da gelir vergisi " +
      "anlaşmasıyla karıştırılan bir konu. Portföyü olan herkesin " +
      "bilmesi gereken tek kalem buysa, budur.",
  },
  CPA_UYARISI,

  { t: "h", metin: "Neden bu kadar keskin" },
  {
    t: "tablo",
    basliklar: ["", "ABD'de yerleşik kişi", "ABD'de yerleşik olmayan yabancı"],
    satirlar: [
      [
        "İstisna tutarı",
        "Milyonlarca dolar mertebesinde (yıllık enflasyona göre güncelleniyor)",
        "**60.000 dolar** — çok daha düşük",
      ],
      [
        "Neyin üzerinden",
        "Dünya çapındaki varlıklar",
        "Yalnız ABD'de bulunan varlıklar (US-situs)",
      ],
      [
        "Gayrimenkul",
        "Kapsamda",
        "**Kapsamda ve doğrudan** — ABD'deki taşınmaz US-situs sayılıyor",
      ],
      [
        "Üst oran",
        "Yüksek dilimlere kadar artan yapı",
        "Aynı artan yapı",
      ],
    ],
    vurgu: [0, 2],
    not:
      "Pratik sonuç: 200.000 dolarlık bir ev, istisnanın çok üstünde " +
      "kalıyor ve aşan kısım vergiye tabi oluyor. Mirasçılar mülkü " +
      "devralmak için vergiyi ödemek durumunda kalıyor — bazen mülkü " +
      "satmak zorunda kalarak.",
  },

  { t: "h", metin: "Gelir vergisi anlaşması bunu çözmüyor" },
  {
    t: "p",
    metin:
      "En sık yapılan hata bu. Türkiye ile ABD arasında bir **gelir " +
      "vergisi** anlaşması var ve kira geliriniz için çifte " +
      "vergilendirmeyi önlüyor. Ama **veraset vergisi anlaşması bu " +
      "kapsamda değil.**",
  },
  {
    t: "p",
    metin:
      "Bazı ülkelerin ABD ile ayrı veraset/intikal vergisi anlaşmaları " +
      "bulunuyor ve bu anlaşmalar istisnayı yükseltebiliyor. Türkiye " +
      "tarafında böyle bir koruma olup olmadığı, karar vermeden önce " +
      "uzmana doğrulatılması gereken **en kritik sorudur.**",
  },
  {
    t: "not",
    baslik: "İki farklı anlaşmayı karıştırmayın",
    metin:
      "Gelir vergisi anlaşması = kira geliriniz iki kez vergilenmesin. " +
      "Veraset vergisi anlaşması = vefat halinde istisna ve mahsup. " +
      "Birincisinin varlığı ikincisi hakkında hiçbir şey söylemiyor.",
  },

  { t: "h", metin: "Konuşulan yapılar ve sınırları" },
  {
    t: "p",
    metin:
      "Bu riski yönetmek için kullanılan yaklaşımlar var; hepsinin " +
      "maliyeti ve sınırı da var. Hiçbiri “bir LLC kur, bitti” kadar " +
      "basit değil:",
  },
  {
    t: "tablo",
    basliklar: ["Yaklaşım", "Mantığı", "Sınırı"],
    satirlar: [
      [
        "Tek ortaklı LLC",
        "Mülk şirket adına görünür",
        "**Yetersiz olabiliyor:** tek ortaklı LLC vergi açısından genellikle yok sayılıyor, yani mülk hâlâ doğrudan sizin US-situs varlığınız gibi değerlendirilebiliyor",
      ],
      [
        "Yabancı şirket yapısı",
        "Mülkü ABD dışı bir tüzel kişiliğin altına almak",
        "Kurulum ve idame maliyeti; gelir vergisi tarafında dezavantaj yaratabiliyor",
      ],
      [
        "Ortak mülkiyet",
        "Mülkü paylaştırmak",
        "Ortaklık biçimi ve payların değeri belirleyici; tek başına çözüm değil",
      ],
      [
        "Hayat sigortası",
        "Vergiyi azaltmıyor; ödenmesi için likidite sağlıyor",
        "Prim maliyeti; yaş ve sağlık koşullarına bağlı",
      ],
      [
        "Borçlu yapı",
        "Mülk üzerindeki borç net değeri düşürüyor",
        "Borcun niteliği ve kime ait olduğu konusunda sıkı kurallar var",
      ],
    ],
    not:
      "Tablodaki ilk satır özellikle önemli: **LLC kurmak bu riski " +
      "otomatik olarak çözmüyor** ve çözdüğünü varsaymak yaygın bir " +
      "hata. Yapı kararı yalnız uzmanla verilmeli.",
  },

  { t: "h", metin: "Ne zaman düşünülmeli" },
  {
    t: "p",
    metin:
      "Kapanıştan **önce.** Tapu kimin adına çıkacaksa o kararla birlikte " +
      "verilmesi gereken bir şey; sonradan yapıyı değiştirmek yeni bir " +
      "devir işlemi demek ve masraf doğuruyor.",
  },
  {
    t: "not",
    baslik: "Aleyhimize olan not",
    metin:
      "Bu kalem, ABD'de ev almanın maliyetini artıran bir faktör ve " +
      "getiriyi doğrudan düşürebiliyor. Satıcının gündeme getirmek " +
      "istemeyeceği bir konu olduğu için ayrı bir sayfa açtık: " +
      "**alıcının bunu bizden değil, kendi uzmanından öğrenmeden " +
      "imza atmaması gerekiyor.**",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Bu vergi ne zaman doğuyor?",
        c:
          "Mülk sahibinin vefatı halinde. Hayatta olduğunuz sürece bu " +
          "vergi gündeme gelmiyor; konu miras planlamasıdır.",
      },
      {
        s: "Mirasçılarım Türkiye'de yaşıyorsa da geçerli mi?",
        c:
          "Vergi mülkün bulunduğu ülkeye bağlı, mirasçının ikametine " +
          "değil. ABD'de bulunan mülk için ABD kuralları işliyor.",
      },
      {
        s: "Türkiye'de de veraset vergisi ödenecek mi?",
        c:
          "Türkiye'nin kendi veraset ve intikal vergisi mevzuatı var ve " +
          "yurt dışı varlıkları da kapsayabiliyor. İki tarafın nasıl " +
          "birleştiği ve mahsup imkânı olup olmadığı uzmana " +
          "sorulmalıdır — bu sayfanın cevaplayabileceği bir soru değil.",
      },
    ],
  },
];
