# Dolarhane

Türkçe tanıtım sayfası. Next.js 16 App Router, tamamı statik.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3200
```

## Build

```bash
npm run build    # out/ dizinine statik çıktı
```

`output: "export"` ile derlenir; sunucu tarafı çalışma zamanı yoktur.
Netlify yapılandırması `netlify.toml` içinde (`publish = "out"`).

## Yapı

| Yol | İş |
|---|---|
| `app/` | Yerleşim, sayfa, global stiller |
| `components/` | Bölüm bileşenleri |
| `lib/finance.ts` | Sayfadaki her rakamın tek kaynağı |
| `lib/kontak.ts` | İletişim yapılandırması |
| `public/fonts/` | Self-host fontlar |

## Yayına almadan önce

`lib/kontak.ts` içindeki alanlar boş oldukça form gönderim yapmaz ve
doldurulmamış kimlik alanları sayfada görünür kalır. Yayın öncesi
doldurulması gerekenler: form hedefi, WhatsApp, telefon, Calendly, e-posta,
ve kimlik şeridi (ünvan, sicil, adres, emlak lisans no).

Şeffaflık rakamları ve portföy kartları şu an örnektir ve sayfada
"örnek" damgasıyla işaretlidir.
