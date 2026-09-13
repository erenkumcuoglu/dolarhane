import type { Blok } from "@/lib/bloklar";

/**
 * Bu sayfanın asıl işi havale dolandırıcılığı uyarısı. Türkçe kaynakta
 * neredeyse hiç yazılmıyor ve yurt dışından alan bir alıcının karşılaşacağı
 * en büyük pratik risk bu.
 */
export const uzaktanTapuKapanisi: Blok[] = [
  {
    t: "p",
    metin:
      "Amerika'da kapanış için o ülkede bulunmanız gerekmiyor. İşlem zaten " +
      "çoğu zaman taraflar aynı odada olmadan yürüyor; uzaktan kapanış " +
      "istisna değil, yerleşik bir pratik.",
  },
  {
    t: "p",
    metin:
      "Ama uzaktan kapanışın kendine özgü bir riski var ve bu sayfanın " +
      "asıl konusu o: **paranın yanlış hesaba gitmesi.**",
  },

  { t: "h", metin: "İmza nasıl atılıyor" },
  {
    t: "tablo",
    basliklar: ["Yol", "Nasıl işler", "Dikkat"],
    satirlar: [
      [
        "Posta yoluyla kapanış",
        "Belgeler size gönderilir, imzalanıp noter onayıyla geri döner",
        "Kargo süresi takvime eklenmeli",
      ],
      [
        "Konsolosluk onayı",
        "ABD konsolosluğunda imza ve onay",
        "Randevu süresi işlemi geciktirebilir",
      ],
      [
        "Apostilli Türk noteri",
        "Türkiye'de noter, üzerine apostil",
        "Her eyalet ve her kapanış şirketi kabul etmiyor — önceden sorun",
      ],
      [
        "Vekâlet",
        "ABD'deki bir kişiye sizin adınıza imza yetkisi",
        "En hızlısı ama en geniş yetkiyi veren yol; kapsamı dar yazılmalı",
      ],
      [
        "Uzaktan çevrimiçi noter",
        "Görüntülü görüşmeyle elektronik onay",
        "Her eyalette geçerli değil",
      ],
    ],
    not:
      "Hangi yolun kabul edildiğini **kapanış şirketi** belirler. " +
      "Sözleşme imzalamadan önce sorulacak soru: yurt dışından imza nasıl " +
      "alınacak?",
  },
  {
    t: "not",
    baslik: "Vekâlet verirken",
    metin:
      "Vekâletin kapsamını “bu mülkün alımıyla sınırlı” olacak şekilde dar " +
      "yazdırın ve süresini sınırlayın. Genel vekâlet, işi kolaylaştırdığı " +
      "kadar riski de büyütür.",
  },

  { t: "h", metin: "Havale dolandırıcılığı — en büyük pratik risk" },
  {
    t: "p",
    metin:
      "Kapanışta para, kapanış şirketinin emanet hesabına havale edilir. " +
      "Dolandırıcılığın işleyişi şudur: taraflardan birinin e-postası ele " +
      "geçirilir, kapanış tarihine yakın bir anda **sahte havale talimatı** " +
      "gönderilir, ve para ele geçirilmiş bir hesaba gider.",
  },
  {
    t: "p",
    metin:
      "E-posta gerçek adrese çok benzer, imza bloğu doğrudur, ton doğrudur, " +
      "zamanlama doğrudur. Bu yüzden dikkatli insanlar da kaybediyor. " +
      "Havale geri alınamadığı için kayıp genellikle kalıcıdır.",
  },
  {
    t: "not",
    baslik: "Tek kural: talimatı asla e-postadan doğrulamayın",
    metin:
      "Havale talimatını **önceden bildiğiniz** bir numaradan telefonla " +
      "arayıp teyit edin. E-postadaki numarayı aramayın — o numara da " +
      "dolandırıcıya ait olabilir. Talimat son anda değiştiyse, değişiklik " +
      "tek başına bir alarmdır. Bu kural bizden alsanız da geçerlidir ve " +
      "size kimse bunu atlamayı söylememeli.",
  },
  {
    t: "liste",
    maddeler: [
      "Numarayı **ilk temastan** kaydedin, son e-postadan değil.",
      "İlk küçük bir tutar gönderip hesabın doğruluğunu teyit etmek yaygın bir pratiktir.",
      "Havaleyi gönderdikten sonra alıcıyı arayıp **ulaştığını** doğrulayın.",
      "Bankanıza uluslararası havale yapacağınızı önceden bildirin; bloke gecikme yaratabiliyor.",
    ],
  },

  { t: "h", metin: "Kapanıştan sonra" },
  {
    t: "p",
    metin:
      "İmzalar tamamlanınca tapu ilçe kütüğüne tescil edilir. Tescil edilmiş " +
      "tapunun kopyası size ulaşır ve mülkiyetin kanıtı odur. Aynı dönemde " +
      "sigorta poliçesi başlatılır, varsa mevcut kira sözleşmesi size " +
      "devredilir ve kiracının depozitosu size ya da yönetim şirketine geçer.",
  },
  {
    t: "not",
    baslik: "Kontrol edilecek üç belge",
    metin:
      "Tescil edilmiş tapu kopyası, title insurance poliçesi, ve kapanış " +
      "hesap dökümü. Üçü de size teslim edilmeli; edilmiyorsa isteyin.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Tapu benim adıma mı çıkıyor?",
        c:
          "Alımı kendi adınıza yapıyorsanız evet, tapu sizin adınıza " +
          "tescil edilir ve ilçe kütüğünde kamuya açık biçimde görünür. " +
          "Şirket üzerinden alıyorsanız tapu şirketin adına çıkar; " +
          "hangisinin doğru olduğu vergi ve sorumluluk tarafına bağlıdır.",
      },
      {
        s: "Tapumu nasıl doğrularım?",
        c:
          "İlçe kütüğü kayıtları çoğu yerde çevrimiçi ve kamuya açıktır. " +
          "Mülkün adresiyle arayıp malik adını kendiniz görebilirsiniz. " +
          "Kimsenin size göstermesini beklemeniz gerekmiyor.",
      },
      {
        s: "ABD'de banka hesabım olmadan alabilir miyim?",
        c:
          "Alım için zorunlu değil; havale doğrudan yurt dışından " +
          "yapılabiliyor. Ama sonrasında kira tahsilatı, vergi ve tamir " +
          "ödemeleri için ABD hesabı pratikte gerekli hale geliyor.",
      },
    ],
  },
];
