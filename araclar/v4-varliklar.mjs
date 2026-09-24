/**
 * V4 ikili varlıkları — build öncesi üretilir, depoda tutulmaz.
 *
 * Neden: /v4'ün fontları (Gambetta tam aile) ve yüksek çözünürlüklü
 * fotoğrafları ikili dosya; depoya bu yoldan girmiyorlar. Bu betik
 * `npm run dev` ve `npm run build` öncesi çalışır (package.json
 * `predev` / `prebuild`), eksik olanı kaynağından indirir ve üretir.
 * Dosya zaten varsa dokunmaz — yerelde ikinci kez çalışması anlık.
 *
 * Çalışma zamanında harici istek YOK: çıktı public/ altına yazılır ve
 * statik dışa aktarımla birlikte self-host edilir.
 *
 *   Fontlar     api.fontshare.com (ITF Free Font License, bkz.
 *               public/fonts/KAYNAK.txt). Eksikse build DURUR —
 *               next/font/local dosyayı derleme anında istiyor.
 *   Fotoğraflar images.pexels.com (Pexels Lisansı, bkz.
 *               public/ev/KAYNAK.txt). 2600px kaynaktan, ortak ton
 *               ayarıyla. Eksik kalırsa uyarı verir, build sürer.
 */
import { existsSync, mkdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const KOK = join(dirname(fileURLToPath(import.meta.url)), "..");
const var_ = (p) => existsSync(p) && statSync(p).size > 1000;

/* ── fontlar ─────────────────────────────────────────────── */
const FONTLAR = [
  { w: "300", s: "normal", dosya: "gambetta-300.woff2" },
  { w: "400", s: "normal", dosya: "gambetta-400.woff2" },
  { w: "500", s: "normal", dosya: "gambetta-500.woff2" },
  { w: "300", s: "italic", dosya: "gambetta-300-italic.woff2" },
  { w: "400", s: "italic", dosya: "gambetta-400-italic.woff2" },
];

async function fontlar() {
  const eksik = FONTLAR.filter((f) => !var_(join(KOK, "public/fonts", f.dosya)));
  if (!eksik.length) return;
  const css = await (
    await fetch("https://api.fontshare.com/v2/css?f[]=gambetta@300,400,500,300i,400i&display=swap")
  ).text();
  const bloklar = css.split("@font-face").slice(1).map((b) => ({
    url: b.match(/url\('(\/\/[^']+\.woff2)'\)/)?.[1],
    w: b.match(/font-weight:\s*(\d+)/)?.[1],
    s: b.match(/font-style:\s*(\w+)/)?.[1],
  }));
  for (const f of eksik) {
    const b = bloklar.find((x) => x.w === f.w && x.s === f.s);
    if (!b?.url) throw new Error(`Fontshare yanıtında ${f.dosya} yok`);
    const r = await fetch("https:" + b.url);
    if (!r.ok) throw new Error(`${f.dosya}: HTTP ${r.status}`);
    writeFileSync(join(KOK, "public/fonts", f.dosya), Buffer.from(await r.arrayBuffer()));
    console.log(`  font  ${f.dosya}`);
  }
}

/* ── fotoğraflar ─────────────────────────────────────────── */
const FOTOLAR = [
  { id: "8894808", ad: "hero", genislik: [2400, 1200] },
  { id: "6267516", ad: "ev-01", genislik: [1200] },
  { id: "16370153", ad: "ev-02", genislik: [1200] },
  { id: "5785100", ad: "ev-03", genislik: [1200] },
  { id: "8031890", ad: "ev-04", genislik: [2400, 1200] },
];

/* Ortak ton ayarı — KAYNAK.txt'teki tarifin birebir karşılığı:
   doygunluk 0,8 · kontrast 1,04 (görüntü ortalamasına göre) ·
   gölgeler #081A2B, ışıklar #F5EDDB yönüne %10 karışım. */
function tonla(buf, kanal) {
  const n = buf.length / kanal;
  let top = 0;
  for (let i = 0; i < buf.length; i += kanal)
    top += 0.299 * buf[i] + 0.587 * buf[i + 1] + 0.114 * buf[i + 2];
  const ort = top / n;
  const SH = [0.03, 0.1, 0.17];
  const HI = [0.96, 0.93, 0.86];
  for (let i = 0; i < buf.length; i += kanal) {
    let r = buf[i], g = buf[i + 1], b = buf[i + 2];
    const gri = 0.299 * r + 0.587 * g + 0.114 * b;
    r = gri + (r - gri) * 0.8; g = gri + (g - gri) * 0.8; b = gri + (b - gri) * 0.8;
    r = ort + (r - ort) * 1.04; g = ort + (g - ort) * 1.04; b = ort + (b - ort) * 1.04;
    r /= 255; g /= 255; b /= 255;
    const l = (r + g + b) / 3;
    const k = [r, g, b].map((c, j) => c * 0.9 + (SH[j] * (1 - l) + HI[j] * l) * 0.1);
    for (let j = 0; j < 3; j++) buf[i + j] = Math.max(0, Math.min(255, Math.round(k[j] * 255)));
  }
  return buf;
}

async function fotolar() {
  const dizin = join(KOK, "public/ev/v4");
  mkdirSync(dizin, { recursive: true });
  const isler = FOTOLAR.filter((f) => f.genislik.some((w) => !var_(join(dizin, `${f.ad}-${w}.jpg`))));
  if (!isler.length) return;

  let sharp = null;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.warn("  uyarı: sharp yok — fotoğraflar ton ayarı olmadan indirilecek");
  }

  for (const f of isler) {
    try {
      for (const w of f.genislik) {
        const hedef = join(dizin, `${f.ad}-${w}.jpg`);
        if (var_(hedef)) continue;
        const kaynakW = sharp ? 2600 : w;
        const r = await fetch(
          `https://images.pexels.com/photos/${f.id}/pexels-photo-${f.id}.jpeg?auto=compress&cs=tinysrgb&w=${kaynakW}`,
        );
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const ham = Buffer.from(await r.arrayBuffer());
        if (!sharp) {
          writeFileSync(hedef, ham);
        } else {
          const { data, info } = await sharp(ham).removeAlpha().raw().toBuffer({ resolveWithObject: true });
          const kalite = w >= 2400 ? 74 : 80;
          await sharp(tonla(data, info.channels), { raw: info })
            .resize({ width: w, withoutEnlargement: true })
            .jpeg({ quality: kalite, progressive: true, mozjpeg: true })
            .toFile(hedef);
        }
        console.log(`  foto  ${f.ad}-${w}.jpg`);
      }
    } catch (e) {
      console.warn(`  uyarı: ${f.ad} üretilemedi (${e.message}) — sayfada bu görsel boş kalır`);
    }
  }
}

console.log("V4 varlıkları denetleniyor…");
await fontlar();
await fotolar();
