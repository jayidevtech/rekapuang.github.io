# Rekap Uang Landing Page (Vue SPA)

Landing page resmi Rekap Uang berbasis Vue 3 + TypeScript + Vite, sudah dioptimasi untuk:

- URL bilingual terpisah per bahasa (/id dan /en)
- SEO dinamis per halaman (title, description, OG, Twitter, canonical, hreflang)
- Deploy otomatis ke GitHub Pages dengan custom domain

## Ringkasan Teknologi

- Vue 3
- TypeScript
- Vue Router
- Vite
- Tailwind CSS v4

## Struktur Proyek

```text
rekap-uang-landing-page/
├── .github/workflows/deploy.yml
├── public/
│   ├── 404.html
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   ├── composables/
│   │   ├── useLocale.ts
│   │   ├── useLocalizedRoute.ts
│   │   └── useSeo.ts
│   ├── router/index.ts
│   └── views/
├── index.html
├── CNAME
├── package.json
└── README.md
```

Catatan: file legacy seperti script.js dan styles.css masih ada di root, tetapi aplikasi utama berjalan dari src/ via Vite.

## Routing Bilingual

Route utama saat ini:

- /id
- /en
- /id/privacy-policy
- /en/privacy-policy
- /id/terms-of-service
- /en/terms-of-service
- /id/changelog
- /en/changelog

Route lama tanpa prefix bahasa tetap didukung sebagai redirect:

- /
- /privacy-policy
- /terms-of-service
- /changelog

Redirect memilih bahasa berdasarkan preferensi tersimpan atau bahasa browser (fallback ke en).

## SEO yang Sudah Diimplementasikan

1. SEO dinamis per route melalui useSeo.ts.
2. Canonical URL sesuai route berbahasa.
3. Hreflang:
   - id
   - en
   - x-default
4. OG dan Twitter metadata per halaman, termasuk image yang spesifik halaman.
5. Structured data (JSON-LD) per halaman.
6. Sitemap berisi URL locale-prefixed.
7. robots.txt sudah mengarah ke sitemap.
8. public/404.html diberi noindex dan SPA fallback redirect untuk GitHub Pages.

## Setup Lokal

Prasyarat:

- Node.js 20+ (direkomendasikan)
- npm

Install dependency:

```bash
npm ci
```

Jalankan mode development:

```bash
npm run dev
```

Build produksi:

```bash
npm run build
```

Preview hasil build:

```bash
npm run preview
```

## Deployment GitHub Pages

Deploy otomatis dikonfigurasi di .github/workflows/deploy.yml.

Alur deployment:

1. Push ke branch main.
2. GitHub Action akan:
   - npm ci
   - npm run build
   - publish dist ke GitHub Pages memakai peaceiris/actions-gh-pages
3. Custom domain dikonfigurasi ke rekapuang.jayidev.tech.

## Domain dan Indexing

- CNAME: rekapuang.jayidev.tech
- Sitemap: https://rekapuang.jayidev.tech/sitemap.xml
- Robots: https://rekapuang.jayidev.tech/robots.txt

## Catatan Pengembangan Konten

Saat menambah halaman baru, pastikan update bagian berikut agar SEO tetap konsisten:

1. Tambah route bilingual di src/router/index.ts.
2. Tambah konfigurasi metadata di src/composables/useSeo.ts.
3. Tambah URL ke public/sitemap.xml.
4. Pastikan link internal menggunakan helper dari useLocalizedRoute.ts.

## Script NPM

- npm run dev: menjalankan dev server Vite
- npm run build: type-check + build produksi
- npm run preview: preview build lokal

## Support

Jika ada pertanyaan atau issue:

- Email: jayidevtech@gmail.com
- 🐛 Report bugs via contact form
- 💡 Kirim feedback untuk improvements

---

**Made with ❤️ for financial freedom**

Rekap Uang - Kelola Keuangan dengan Mudah, Cerdas, dan Aman 💰
