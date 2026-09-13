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

export const GOVDELER: Record<string, Blok[]> = {
  "getiri/kira-carpani": kiraCarpani,

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
};
