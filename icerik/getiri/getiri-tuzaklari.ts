import type { Blok } from "@/lib/bloklar";

/**
 * Sunum tuzakları — rakamın nasıl gösterildiği. Aritmetik karşılaştırma
 * (C/D vs B) ayrı sayfada; kanibalizasyonu önlemek için bu sayfa
 * HESAPLAMA değil SUNUM hatalarına odaklanıyor.
 */
export const getiriTuzaklari: Blok[] = [
  {
    t: "p",
    metin:
      "Bir getiri rakamı yanlış olmadan da yanıltıcı olabilir. Aşağıdaki " +
      "sunum biçimlerinin hiçbiri yalan söylemiyor — hepsi bir şeyi " +
      "söylemeyerek çalışıyor. Kimden alırsanız alın işinize yarar.",
  },

  { t: "h", metin: "Sekiz sunum tuzağı" },
  {
    t: "tablo",
    basliklar: ["Nasıl sunulur", "Ne söylenmez", "Ne sorulmalı"],
    satirlar: [
      [
        "“%12 getiri”",
        "Brüt mü net mi",
        "Bu rakamda vergi, sigorta, yönetim ve boşluk var mı?",
      ],
      [
        "“Ev kendini 8 yılda amorti eder”",
        "Brüt kira üzerinden hesaplandığı",
        "Net kirayla kaç yıl?",
      ],
      [
        "“Ayda 1.400 dolar kira”",
        "Bunun beklenen mi mevcut mu olduğu",
        "Şu an kiralı mı, sözleşmeyi görebilir miyim?",
      ],
      [
        "“Yatırım 150.000 dolar”",
        "Kapanış ve hazırlık masraflarının dahil olmadığı",
        "Cebimden çıkacak toplam ne?",
      ],
      [
        "“Bölge hızla değerleniyor”",
        "Yüksek getiriyle birlikte gelmediği",
        "Getiri bu kadar yüksekse fiyat neden düşük?",
      ],
      [
        "“Kira garantili”",
        "Garantinin fiyata gömüldüğü ve kimin verdiği",
        "Garantiyi kim, hangi mali güçle veriyor?",
      ],
      [
        "“Benzer evler şu kadar kira alıyor”",
        "Benzerin hangi kriterle seçildiği",
        "İlan edilen kiraları görebilir miyim?",
      ],
      [
        "“Yönetim dahil”",
        "Yerleştirme, yenileme ve tamir payının ayrı olabileceği",
        "Sözleşmedeki bütün ücret kalemleri neler?",
      ],
    ],
    vurgu: [0, 3],
  },
  {
    t: "not",
    baslik: "Vurgulu iki satır en pahalı olanlar",
    metin:
      "Brüt getiriyi net sanmak ve yatırılan sermayeyi eksik saymak. " +
      "İkisi birleştiğinde gerçek getiri, sunulan rakamın yarısının " +
      "altına inebiliyor — hiçbir rakam yalan söylenmeden.",
  },

  { t: "h", metin: "Karşılaştırılamayan iki rakamı karşılaştırmak" },
  {
    t: "p",
    metin:
      "En yaygın hata bu ve genellikle kötü niyet bile gerektirmiyor. " +
      "İki getiri rakamı ancak şu dördü aynıysa karşılaştırılabilir:",
  },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "**Pay aynı mı** — ikisi de brüt mü, ikisi de net mi?",
      "**Payda aynı mı** — ikisi de fiyata mı bölünmüş, ikisi de yatırılan sermayeye mi?",
      "**Kaldıraç aynı mı** — biri peşin biri kredili mi?",
      "**Para birimi ve vergi sonrası mı** — biri vergi öncesi diğeri sonrası mı?",
    ],
  },
  {
    t: "p",
    metin:
      "Bu dördü eşitlenmeden yapılan her karşılaştırma, sayılar doğru " +
      "olsa bile geçersizdir.",
  },

  { t: "h", metin: "Kendinize karşı kurulan tuzak" },
  {
    t: "p",
    metin:
      "Tuzakların hepsi dışarıdan gelmiyor. En sık rastlananı, alıcının " +
      "kendi modelinde iyimser varsayım kullanması: boşluğu düşük, kirayı " +
      "yüksek, capex'i sıfır almak.",
  },
  {
    t: "not",
    baslik: "Basit bir test",
    metin:
      "Modelinizi kurduktan sonra üç değişkeni kötüleştirin: boşluğu " +
      "artırın, kirayı bir miktar düşürün, bir büyük onarım ekleyin. " +
      "Model bu haliyle de ayakta duruyorsa aldığınız karar sağlamdır. " +
      "Yalnız iyi senaryoda çalışan bir model, model değil bir umuttur.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Brüt getiri hiç mi işe yaramaz?",
        c:
          "Hızlı eleme için yarar. Sorun, brüt rakamın net gibi sunulması " +
          "ya da net sanılmasıdır. Brüt diye adlandırıldığı sürece meşru " +
          "bir araçtır.",
      },
      {
        s: "Satıcının verdiği rakamları nasıl doğrularım?",
        c:
          "Üçü kamuya açık: emlak vergisi ilçe kaydında, piyasa kirası " +
          "ilanlarda, mülkün kaydı kütükte. Sigorta için teklif " +
          "alabilirsiniz. Bu dördü doğrulandığında rakamın çoğu " +
          "doğrulanmış olur.",
      },
      {
        s: "Bu sayfa sizin sunumunuz için de geçerli mi?",
        c:
          "Evet. Bu sekiz soruyu bize de sorun. Cevap veremediğimiz bir " +
          "kalem varsa bu, sorunun değil bizim eksiğimizdir.",
      },
    ],
  },
];
