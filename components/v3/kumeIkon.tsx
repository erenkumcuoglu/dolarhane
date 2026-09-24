/**
 * Küme → ikon eşlemesi.
 *
 * Ayrı dosyada çünkü hem blog kartı hem küme başlığı kullanıyor ve
 * eşleme bir SUNUM kararı: lib/icerik.ts bilgi mimarisinin kaynağı,
 * oraya ikon girmiyor.
 */
import type { KumeAnahtari } from "@/lib/icerik";
import {
  IkonSikke,
  IkonMuhur,
  IkonPusula,
  IkonKalkan,
  IkonTerazi,
  IkonHesapMak,
  IkonSeri,
} from "./ikon3";

export const KUME_IKONU: Record<
  KumeAnahtari,
  (p: { className?: string }) => React.ReactElement
> = {
  getiri: IkonSikke,
  vergi: IkonMuhur,
  surec: IkonPusula,
  guven: IkonKalkan,
  karsilastir: IkonTerazi,
  araclar: IkonHesapMak,
  endeks: IkonSeri,
};
