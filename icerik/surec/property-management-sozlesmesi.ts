import type { Blok } from "@/lib/bloklar";

/** Uzaktan sahipliğin en belirleyici tek belgesi. Evergreen. */
export const propertyManagementSozlesmesi: Blok[] = [
  {
    t: "p",
    metin:
      "Uzaktan ev sahipliğinde getirinizi belirleyen tek belge tapu değil, " +
      "**yönetim sözleşmesidir.** Evi seçerken haftalar harcayıp bu " +
      "sözleşmeyi okumadan imzalamak, yaygın ve pahalı bir hatadır.",
  },
  {
    t: "p",
    metin:
      "Aşağıdaki maddeler sektörde standarttır; değişen şey içlerine " +
      "yazılan rakamlar ve kimin lehine yazıldıklarıdır.",
  },

  { t: "h", metin: "Ücret yapısı" },
  {
    t: "tablo",
    basliklar: ["Ücret", "Yaygın aralık", "Dikkat"],
    satirlar: [
      [
        "Aylık yönetim",
        "Kiranın %8–10'u",
        "**Tahsil edilen** kira üzerinden mi, **sözleşmedeki** kira üzerinden mi — aradaki fark büyük",
      ],
      [
        "Yerleştirme",
        "Bir aylık kiranın yarısı ile tamamı arası",
        "[Her kiracı değişiminde](/surec/kiraci-nasil-bulunuyor/) yeniden doğar",
      ],
      [
        "Yenileme",
        "Sabit küçük tutar ya da kiranın bir yüzdesi",
        "Mevcut kiracı kalırsa alınır; bazı şirketlerde hiç yok",
      ],
      [
        "Tamir yönlendirme payı",
        "Fatura üzerine yüzde",
        "Her sözleşmede yok; **açıkça sorulmalı**",
      ],
      [
        "Boşluk ücreti",
        "Aylık sabit",
        "[Ev boşken](/surec/ev-bos-kalirsa/) de ücret alan şirketler var; teşviki ters çeviriyor",
      ],
    ],
    vurgu: [0],
    not:
      "Vurgulu satır en kritik ayrımdır. Ücret **tahsil edilen** kira " +
      "üzerinden hesaplanıyorsa, kiracı ödemediğinde şirket de kazanmaz — " +
      "teşvikler hizalanır. **Sözleşmedeki** kira üzerinden hesaplanıyorsa " +
      "şirket, siz para almasanız da ücretini alır.",
  },

  { t: "h", metin: "Okumadan imzalanmayacak altı madde" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "**Onay eşiği.** Hangi tutarın üstündeki [tamir](/surec/tamir-masrafini-kim-oduyor/) size sorulur. Rakamla yazılmalı.",
      "**Emanet hesap.** [Kira ve depozito](/surec/kira-tahsilati/) şirketin kendi parasından ayrı hesapta mı tutuluyor.",
      "**Raporlama.** Aylık rapor hangi gün yayınlanır, faturalar ekli mi, aktarım hangi gün yapılır.",
      "**Fesih.** Sözleşmeden nasıl çıkılır, ihbar süresi ne, çıkış cezası var mı. **Cezalı ve uzun süreli bağlayan sözleşmeden kaçının.**",
      "**Tahliye masrafları.** [Kim öder](/surec/amerikada-tahliye-sureci/), avukat seçimini kim yapar.",
      "**Bağlı taraf.** Şirket tamiri kendi iştirakine mi yaptırıyor; belirli tutarın üstünde birden fazla teklif şartı var mı.",
    ],
  },
  {
    t: "not",
    baslik: "Teşvik testi",
    metin:
      "Bir sözleşmeyi değerlendirmenin en hızlı yolu şu soruyu sormaktır: " +
      "**şirket ne zaman para kazanır?** Kiracı ödediğinde kazanıyorsa " +
      "çıkarınız ortaktır. Kiracı değiştiğinde, tamir yapıldığında ya da ev " +
      "boş kaldığında kazanıyorsa, sizin kaybettiğiniz yerde kazanıyor " +
      "demektir. Bu sorunun cevabı sözleşmenin tamamını özetler.",
  },

  { t: "h", metin: "Sözleşmeye eklettirmeye değer üç şey" },
  {
    t: "liste",
    maddeler: [
      "Belirli tutarın üstündeki işlerde **iki ayrı teklif** şartı.",
      "Giriş ve çıkışta **fotoğraflı durum tutanağı** zorunluluğu — depozito tartışmalarını baştan bitiriyor.",
      "Kiracı eleme kriterlerinin **yazılı ek** olarak sözleşmeye bağlanması.",
    ],
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Yönetim şirketini sonradan değiştirebilir miyim?",
        c:
          "Evet, ama fesih maddesine bağlı. İhbar süresi ve varsa çıkış " +
          "cezası burada yazar. Geçişte kiracı sözleşmesi, depozito ve " +
          "anahtarlar devredilir; bu devrin nasıl yapılacağı da sözleşmede " +
          "olmalı.",
      },
      {
        s: "Kendim yönetebilir miyim?",
        c:
          "Teknik olarak mümkün ama yurt dışından pratik değil: kiracı " +
          "elemesi, tamir koordinasyonu, yasal ihbarların doğru biçimde " +
          "verilmesi ve acil müdahale yerel varlık istiyor. Yönetim ücreti " +
          "bir gider değil, uzaktan sahipliğin bedelidir.",
      },
      {
        s: "Ücret pazarlık edilebilir mi?",
        c:
          "Yüzde genelde az esner, ama yerleştirme ve yenileme ücretleri " +
          "ile onay eşiği çoğu zaman konuşulabilir. Birden fazla ev " +
          "veriyorsanız pazarlık gücünüz artar.",
      },
    ],
  },
];
