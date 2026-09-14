/**
 * Yazı gövdeleri — anahtar `"<kume>/<slug>"`.
 *
 * Kayıt defteri (`lib/icerik.ts`) yazının KÜNYESİNİ tutar; gövdesi burada.
 * Ayrım bilinçli: sitemap, breadcrumb ve küme listeleri gövdeyi yüklemeden
 * künyeden üretilebiliyor.
 *
 * Yeni yazı: `icerik/<kume>/<slug>.ts` dosyasını yaz, buraya bağla,
 * `lib/icerik.ts` YAZILAR dizisine künyeyi ekle.
 */
import type { Blok } from "@/lib/bloklar";
import { kiraCarpani } from "./getiri/kira-carpani";
import { kiraylaKarsilamaOrani } from "./getiri/kirayla-karsilama-orani";
import { getiriVeDegerArtisiTakasi } from "./getiri/getiri-ve-deger-artisi-takasi";
import { capRateNedir } from "./getiri/cap-rate-nedir";
import { dscrNedir } from "./getiri/dscr-nedir";
import { yuzde1Kurali } from "./getiri/yuzde-1-kurali";
import { nakitAkisiNasilHesaplanir } from "./getiri/nakit-akisi-nasil-hesaplanir";
import { getiriTuzaklari } from "./getiri/getiri-tuzaklari";
import { brutVsNetGetiri } from "./getiri/brut-vs-net-getiri";
import { eviGormedenEvAlmak } from "./surec/evi-gormeden-ev-almak";
import { kiraciNasilBulunuyor } from "./surec/kiraci-nasil-bulunuyor";
import { kiraTahsilati } from "./surec/kira-tahsilati";
import { evBosKalirsa } from "./surec/ev-bos-kalirsa";
import { tamirMasrafiniKimOduyor } from "./surec/tamir-masrafini-kim-oduyor";
import { amerikadaTahliyeSureci } from "./surec/amerikada-tahliye-sureci";
import { propertyManagementSozlesmesi } from "./surec/property-management-sozlesmesi";
import { uzaktanTapuKapanisi } from "./surec/uzaktan-tapu-kapanisi";
import { escrowNedir } from "./surec/escrow-nedir";
import { titleInsurance } from "./surec/title-insurance";
import { closingCosts } from "./surec/closing-costs";
import { amerikadanEvAlmakGuvenliMi } from "./guven/amerikadan-ev-almak-guvenli-mi";
import { nedenBizeHenuzGuvenmemelisiniz } from "./guven/neden-bize-henuz-guvenmemelisiniz";
import { dolandiricilikNasilAnlasilir } from "./guven/dolandiricilik-nasil-anlasilir";
import { tapuKiminAdina } from "./guven/tapu-kimin-adina";
import { parayiNasilGonderiyorum } from "./guven/parayi-nasil-gonderiyorum";
import { yurtDisiEvYatirimiRiskleri } from "./guven/yurt-disi-ev-yatirimi-riskleri";
import { oturumMuGetiriMi } from "./karsilastir/oturum-mu-getiri-mi";
import { amerikaMiDubaiMi } from "./karsilastir/amerika-mi-dubai-mi";
import { yunanistanMiAmerikaMi } from "./karsilastir/yunanistan-mi-amerika-mi";
import { dubaiEvYatirimiRiskleri } from "./karsilastir/dubai-ev-yatirimi-riskleri";
import { makettenEvAlmakRiskleri } from "./karsilastir/maketten-ev-almak-riskleri";
import { goldenVisaGercektenGerekliMi } from "./karsilastir/golden-visa-gercekten-gerekli-mi";

export const GOVDELER: Record<string, Blok[]> = {
  "getiri/kira-carpani": kiraCarpani,
  "getiri/kirayla-karsilama-orani": kiraylaKarsilamaOrani,
  "getiri/getiri-ve-deger-artisi-takasi": getiriVeDegerArtisiTakasi,
  "getiri/cap-rate-nedir": capRateNedir,
  "getiri/dscr-nedir": dscrNedir,
  "getiri/yuzde-1-kurali": yuzde1Kurali,
  "getiri/nakit-akisi-nasil-hesaplanir": nakitAkisiNasilHesaplanir,
  "getiri/getiri-tuzaklari": getiriTuzaklari,
  /* taslak — kalibrasyon bekliyor, rota üretmiyor */
  "getiri/brut-vs-net-getiri": brutVsNetGetiri,

  "surec/evi-gormeden-ev-almak": eviGormedenEvAlmak,
  "surec/kiraci-nasil-bulunuyor": kiraciNasilBulunuyor,
  "surec/kira-tahsilati": kiraTahsilati,
  "surec/ev-bos-kalirsa": evBosKalirsa,
  "surec/tamir-masrafini-kim-oduyor": tamirMasrafiniKimOduyor,
  "surec/amerikada-tahliye-sureci": amerikadaTahliyeSureci,
  "surec/property-management-sozlesmesi": propertyManagementSozlesmesi,
  "surec/uzaktan-tapu-kapanisi": uzaktanTapuKapanisi,
  "surec/escrow-nedir": escrowNedir,
  "surec/title-insurance": titleInsurance,
  "surec/closing-costs": closingCosts,

  "guven/amerikadan-ev-almak-guvenli-mi": amerikadanEvAlmakGuvenliMi,
  "guven/neden-bize-henuz-guvenmemelisiniz": nedenBizeHenuzGuvenmemelisiniz,
  "guven/dolandiricilik-nasil-anlasilir": dolandiricilikNasilAnlasilir,
  "guven/tapu-kimin-adina": tapuKiminAdina,
  "guven/parayi-nasil-gonderiyorum": parayiNasilGonderiyorum,
  "guven/yurt-disi-ev-yatirimi-riskleri": yurtDisiEvYatirimiRiskleri,

  "karsilastir/oturum-mu-getiri-mi": oturumMuGetiriMi,
  "karsilastir/amerika-mi-dubai-mi": amerikaMiDubaiMi,
  "karsilastir/yunanistan-mi-amerika-mi": yunanistanMiAmerikaMi,
  "karsilastir/dubai-ev-yatirimi-riskleri": dubaiEvYatirimiRiskleri,
  "karsilastir/maketten-ev-almak-riskleri": makettenEvAlmakRiskleri,
  "karsilastir/golden-visa-gercekten-gerekli-mi": goldenVisaGercektenGerekliMi,
};
