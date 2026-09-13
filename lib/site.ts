/**
 * Sitenin mutlak adresi ve ona bağlı türevler.
 *
 * `KONTAK.siteUrl` boş olduğu sürece mutlak adres gerektiren hiçbir çıktı
 * (canonical, og:image, sitemap, robots'taki Sitemap satırı) YAZILMAZ.
 * Sahibi olmadığımız bir adrese canonical basmak, en iyi ihtimalle
 * yanlış sinyal; en kötüsünde başka birinin sayfasını işaret etmek.
 *
 * Domain kararı: dolarhane.com, ÇIPLAK (www 301'lenecek).
 * SEO-GEO-PLAN.md §11.
 */
import { KONTAK } from "./kontak";

export const SITE_URL: string = KONTAK.siteUrl;
export const ADRES_VAR = SITE_URL.length > 0;

/** Göreli yolu mutlak adrese çevirir. Adres yoksa boş döner — çağıran taraf
 *  bunu kontrol etmek zorunda, sessizce kırık URL üretmiyoruz. */
export const mutlak = (yol: string): string =>
  ADRES_VAR ? new URL(yol, SITE_URL).toString() : "";
