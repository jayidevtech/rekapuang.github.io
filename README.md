# 💰 Rekap Uang - Landing Page

Landing page modern dan responsif untuk aplikasi manajemen keuangan pribadi **Rekap Uang** yang dibangun dengan Flutter.

## 📦 Struktur File

```
rekap-uang-landing-page/
├── index.html          # Halaman utama (HTML)
├── styles.css          # Stylesheet (CSS modern & responsive)
├── script.js           # JavaScript untuk interaktivitas
├── Fitur.md            # Dokumentasi fitur aplikasi
└── README.md           # File ini
```

## ✨ Fitur Landing Page

### 🎨 Desain & UX
- ✅ **Modern Design** - Material Design 3 dengan gradient menarik
- ✅ **Fully Responsive** - Sempurna di desktop, tablet, dan mobile
- ✅ **Dark Mode Ready** - Support untuk light/dark theme di masa depan
- ✅ **Fast Loading** - Optimized performance & lightweight
- ✅ **Smooth Animations** - Scroll animations & transitions

### 📱 Sections

1. **Navigation Bar** - Sticky navbar dengan mobile hamburger menu
2. **Hero Section** - Headline menarik dengan phone mockup & CTA buttons
3. **Features Grid** - 8+ fitur unggulan dengan cards interaktif
4. **Benefits Section** - Keunggulan kompetitif yang jelas
5. **Comparison Table** - Perbandingan vs kompetitor
6. **Testimonials** - Review pengguna dengan rating stars
7. **Download Section** - CTA untuk Android & iOS
8. **FAQ Accordion** - Pertanyaan umum dengan accordion interaktif
9. **Contact Form** - Form kontak dengan validasi
10. **Footer** - Footer lengkap dengan links & social media

### 🔧 Fitur Interaktif

- **Mobile Menu** - Hamburger menu yang responsif
- **Smooth Scroll** - Navigasi halus ke sections
- **Back to Top Button** - Tombol scroll ke atas otomatis
- **FAQ Accordion** - Buka/tutup FAQ dengan smooth animation
- **Form Validation** - Validasi form kontak real-time
- **Scroll Animations** - Fade in animations saat scroll
- **Notification System** - Toast notifications untuk feedback

## 🚀 Cara Menggunakan

### Opsi 1: Buka Langsung di Browser
```bash
# Cukup buka file index.html di browser favorit Anda
open index.html
# atau double-click index.html
```

### Opsi 2: Menggunakan Live Server (VS Code)
1. Install extension "Live Server" di VS Code
2. Right-click pada `index.html`
3. Pilih "Open with Live Server"
4. Browser akan membuka otomatis di `http://localhost:5500`

### Opsi 3: Menggunakan Python
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```
Kemudian buka `http://localhost:8000` di browser.

### Opsi 4: Menggunakan Node.js
```bash
# Install http-server global
npm install -g http-server

# Jalankan di folder project
http-server
```

## 🎨 Customization

### Mengubah Warna Brand
Edit di `styles.css` section `:root`:
```css
:root {
    --primary: #2563eb;        /* Warna utama */
    --primary-light: #3b82f6;  /* Warna terang */
    --primary-dark: #1e40af;   /* Warna gelap */
    /* ... */
}
```

### Mengubah Font
Edit import font di `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```
Kemudian ubah di `styles.css`:
```css
--font-primary: 'YourFont', sans-serif;
```

### Mengubah Content
1. Edit text di `index.html` sections
2. Ganti links untuk download Android/iOS
3. Update email & contact info di footer
4. Ubah social media links

### Menambah Fitur
Setiap section menggunakan class yang mudah diidentifikasi:
- `.feature-card` - Card fitur
- `.benefit-item` - Benefit item
- `.faq-item` - FAQ accordion
- `.testimonial-card` - Testimonial

## 📱 Responsive Breakpoints

```css
Desktop:   > 1024px  (Default layout)
Tablet:    768px - 1024px
Mobile:    < 768px
Small:     < 480px
```

Landing page fully responsive pada semua ukuran!

## 🔐 SEO & Performance

- ✅ Semantic HTML5 tags
- ✅ Meta descriptions & OG tags
- ✅ Mobile-friendly design
- ✅ Fast loading (no heavy libraries)
- ✅ Accessibility ready (ARIA labels)

## 📞 Update Contact Information

### Email Support
File: `index.html` (search for `jayidevtech@gmail.com`)
```html
<a href="mailto:jayidevtech@gmail.com">jayidevtech@gmail.com</a>
```

### Download Links
Update untuk Play Store & App Store di section "Download":
```html
<a href="https://play.google.com/apps/testing/com.jayidevtech.rekapuang">
<a href="https://apps.apple.com/app/id123456789">
```

### Website Link
Update di footer:
```html
<a href="https://jayidevtech.github.io">jayidevtech.github.io</a>
```

## 🚀 Deployment

### Deploy ke Netlify (Free)
1. Push repository ke GitHub
2. Buka [netlify.com](https://netlify.com)
3. Connect repository GitHub
4. Auto-deploy setiap push!

### Deploy ke Vercel (Free)
1. Push ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import project
4. Deploy otomatis!

### Deploy ke GitHub Pages (Free)
1. Push ke GitHub
2. Settings > Pages > Main branch
3. Akses di `username.github.io/repo-name`

## 🛠️ Development Tips

### Browser DevTools
- Gunakan F12 untuk inspect elements
- Test responsive di Device Toggle (Ctrl+Shift+M)
- Check console untuk debug messages

### Form Backend Integration
Edit `script.js` dalam `initContactForm()`:
```javascript
// Uncomment dan setup endpoint API Anda
// fetch('/api/contact', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name, email, message })
// })
```

### Add Analytics
Tambahkan Google Analytics di akhir `<body>` sebelum `</body>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📊 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Optimization Checklist

- [ ] Update semua links (download, email, website)
- [ ] Optimize images (compress PNG/JPG)
- [ ] Setup analytics
- [ ] Setup contact form backend
- [ ] Test di mobile devices
- [ ] Test di berbagai browsers
- [ ] Setup DNS custom domain
- [ ] Add SSL certificate
- [ ] Monitor performance dengan Lighthouse
- [ ] Setup CDN untuk faster delivery

## 📈 Performance Metrics

Gunakan [Google PageSpeed Insights](https://pagespeed.web.dev) untuk check:
- Lighthouse Score
- Core Web Vitals
- Mobile Usability
- SEO Score

## 🐛 Troubleshooting

### Menu tidak muncul di mobile
- Clear browser cache (Ctrl+Shift+Delete)
- Check console untuk JavaScript errors
- Verify viewport meta tag ada di `<head>`

### Form tidak bekerja
- Check browser console untuk errors
- Verify backend endpoint dan CORS settings
- Test dengan form yang di-hardcode

### Styling tidak muncul
- Clear browser cache
- Verify `styles.css` path benar
- Check untuk CSS syntax errors di browser DevTools

## 📝 License

Project ini dibuat oleh JAYIDEVTECH. Bebas untuk digunakan dan dimodifikasi sesuai kebutuhan.

## 🤝 Support

Jika ada pertanyaan atau issue:
- 📧 Email: jayidevtech@gmail.com
- 🐛 Report bugs via contact form
- 💡 Kirim feedback untuk improvements

---

**Made with ❤️ for financial freedom**

Rekap Uang - Kelola Keuangan dengan Mudah, Cerdas, dan Aman 💰
