import{d as b,c as s,a,t as i,b as r,F as d,r as u,e as v,w as D,u as o,R as S,f as A,g as l,o as n,n as C,h as P}from"./index-axdrUMky.js";const _={class:"pt-4 pb-16 min-h-screen bg-slate-50"},j={class:"max-w-4xl mx-auto px-6 lg:px-8"},G={class:"py-12 text-center"},E={class:"text-3xl md:text-4xl font-bold text-slate-900 mb-3",style:{"font-family":"'Inter', sans-serif"}},I={class:"text-slate-500"},K={class:"policy-content space-y-2"},O=["innerHTML"],L={class:"bg-white rounded-2xl p-8 border border-slate-200"},T={class:"grid grid-cols-2 md:grid-cols-4 gap-4 mt-4"},w={class:"font-bold text-slate-800 text-sm",style:{"font-family":"'Inter', sans-serif"}},B={class:"text-slate-500 text-xs mt-1"},F={class:"mt-8 text-center"},Y=b({__name:"PrivacyPolicyView",setup(R){const{t:f,isEnglish:t}=P(),{homePath:m}=A(),p=l(()=>t.value?[{id:"intro",emoji:"📌",title:"Introduction",content:`<p>At <strong>JAYIDEVTECH</strong>, we take your privacy and data security seriously. This Privacy Policy explains how we collect, use, and protect your information when using the Rekap Uang app.</p>
        <p><strong>Our Core Principle:</strong> Your data belongs to you. We do not collect, store, or share your personal financial data without explicit consent.</p>`},{id:"data-collection",emoji:"📊",title:"Data Collection",content:`<h3>Data We DO NOT Collect</h3>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> Your transaction history</li>
          <li><i class="fas fa-check text-emerald-500"></i> Bank account information</li>
          <li><i class="fas fa-check text-emerald-500"></i> Personal spending details</li>
          <li><i class="fas fa-check text-emerald-500"></i> Transaction metadata</li>
          <li><i class="fas fa-check text-emerald-500"></i> Your location or GPS</li>
          <li><i class="fas fa-check text-emerald-500"></i> Personal identity (full name, ID number)</li>
        </ul>
        <h3>Data We Collect (Minimal)</h3>
        <h4>🔐 Local Data (Stored on Your Device)</h4>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> App preferences (language, theme, currency)</li>
          <li><i class="fas fa-check text-emerald-500"></i> Notification settings</li>
          <li><i class="fas fa-check text-emerald-500"></i> Backup data you create (encrypted)</li>
        </ul>
        <h4>☁️ Cloud Data (Optional - Only If You Enable It)</h4>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> Google Drive backup files (if enabled)</li>
          <li><i class="fas fa-check text-emerald-500"></i> Google Sign-In credentials (for Drive access)</li>
        </ul>
        <h4>📱 Diagnostic Data (Optional)</h4>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> Firebase Crashlytics (for app stability)</li>
          <li><i class="fas fa-check text-emerald-500"></i> Error logs (without your financial data)</li>
        </ul>`},{id:"storage",emoji:"💾",title:"Data Storage",content:`<h3>Local Storage (On Your Device)</h3>
        <p>All your transaction data is stored <strong>100% locally</strong> on your device using SQLite database. We DO NOT have server access to this data.</p>
        <h3>Google Drive Backup (Optional)</h3>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> Backup files are encrypted with AES-CBC 256-bit (bank-grade)</li>
          <li><i class="fas fa-check text-emerald-500"></i> Backup files can only be decrypted by your device</li>
          <li><i class="fas fa-check text-emerald-500"></i> Encryption keys stay local, not in the cloud</li>
          <li><i class="fas fa-check text-emerald-500"></i> Google only stores encrypted files (cannot read content)</li>
        </ul>
        <h3>Firebase Services</h3>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> <strong>Firebase Auth:</strong> For optional Google Sign-In</li>
          <li><i class="fas fa-check text-emerald-500"></i> <strong>Firebase Crashlytics:</strong> For error monitoring (no sensitive data)</li>
        </ul>`},{id:"security",emoji:"🔒",title:"Data Security",content:`<h3>Encryption</h3>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> AES-CBC 256-bit backup file encryption</li>
          <li><i class="fas fa-check text-emerald-500"></i> TLS/SSL for cloud communication (if used)</li>
          <li><i class="fas fa-check text-emerald-500"></i> Secure key management for encryption keys</li>
        </ul>
        <h3>Access Control</h3>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> Only you can access your backup files</li>
          <li><i class="fas fa-check text-emerald-500"></i> Google Sign-In uses OAuth 2.0 (industry standard)</li>
          <li><i class="fas fa-check text-emerald-500"></i> No master key or backdoor access</li>
        </ul>`},{id:"third-party",emoji:"🔗",title:"Third-Party Services",content:`<h3>Google Services</h3>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> <strong>Google ML Kit:</strong> OCR text recognition (offline)</li>
          <li><i class="fas fa-check text-emerald-500"></i> <strong>Google Drive:</strong> Optional cloud backup</li>
          <li><i class="fas fa-check text-emerald-500"></i> <strong>Google Sign-In:</strong> Optional authentication</li>
        </ul>
        <p><strong>Privacy Note:</strong> Google Drive has its own Privacy Policy. We are not responsible for Google's privacy practices for data stored there.</p>`},{id:"rights",emoji:"👤",title:"Your Rights",content:`<h3>Right to Access</h3>
        <p>You have full access to your data through the app. Data is stored on your device, not on our servers.</p>
        <h3>Right to Export</h3>
        <p>You can export data in PDF, CSV (for spreadsheet), and Excel (.xlsx) formats.</p>
        <h3>Right to Delete</h3>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> Delete individual transactions from the app</li>
          <li><i class="fas fa-check text-emerald-500"></i> Clear all local data from Settings > Clear Data</li>
          <li><i class="fas fa-check text-emerald-500"></i> Delete backups from Google Drive anytime</li>
        </ul>`},{id:"contact",emoji:"📞",title:"Contact Us",content:`<p>If you have questions about this Privacy Policy or our privacy practices:</p>
        <ul>
          <li><i class="fas fa-envelope text-blue-500"></i> Email: <strong>privacy@jayidev.tech</strong></li>
          <li><i class="fas fa-globe text-blue-500"></i> Website: <strong>jayidevtech.github.io</strong></li>
          <li><i class="fas fa-comment text-blue-500"></i> In-App Support: Settings > Contact Support</li>
        </ul>
        <p>We will respond to your privacy request within <strong>30 business days</strong>.</p>`}]:[{id:"intro",emoji:"📌",title:"Pendahuluan",content:`<p>Kami di <strong>JAYIDEVTECH</strong> sangat serius tentang privasi dan keamanan data Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda ketika menggunakan aplikasi Rekap Uang.</p>
        <p><strong>Prinsip Utama Kami:</strong> Data Anda adalah milik Anda. Kami tidak mengumpulkan, menyimpan, atau membagikan data keuangan pribadi Anda tanpa persetujuan eksplisit.</p>`},{id:"data-collection",emoji:"📊",title:"Pengumpulan Data",content:`<h3>Data yang TIDAK Kami Kumpulkan</h3>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> Riwayat transaksi Anda</li>
          <li><i class="fas fa-check text-emerald-500"></i> Informasi rekening bank</li>
          <li><i class="fas fa-check text-emerald-500"></i> Data pengeluaran pribadi</li>
          <li><i class="fas fa-check text-emerald-500"></i> Metadata transaksi</li>
          <li><i class="fas fa-check text-emerald-500"></i> Lokasi atau GPS Anda</li>
          <li><i class="fas fa-check text-emerald-500"></i> Identitas pribadi (nama lengkap, nomor ID)</li>
        </ul>
        <h3>Data yang Kami Kumpulkan (Minimal)</h3>
        <h4>🔐 Data Lokal (Disimpan di Device Anda)</h4>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> Preferensi aplikasi (bahasa, tema, currency)</li>
          <li><i class="fas fa-check text-emerald-500"></i> Pengaturan notifikasi</li>
          <li><i class="fas fa-check text-emerald-500"></i> Data backup yang Anda buat (terenkripsi)</li>
        </ul>
        <h4>☁️ Data Cloud (Opsional - Hanya Jika Anda Memilih)</h4>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> Google Drive Backup (jika Anda aktifkan)</li>
          <li><i class="fas fa-check text-emerald-500"></i> Google Sign-In credentials (untuk akses Google Drive)</li>
        </ul>
        <h4>📱 Diagnostic Data (Opsional)</h4>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> Firebase Crashlytics (untuk stabilitas aplikasi)</li>
          <li><i class="fas fa-check text-emerald-500"></i> Error logs (tanpa data keuangan Anda)</li>
        </ul>`},{id:"storage",emoji:"💾",title:"Penyimpanan Data",content:`<h3>Local Storage (Device Anda)</h3>
        <p>Semua data transaksi Anda disimpan <strong>100% lokal</strong> di perangkat Anda menggunakan SQLite database. Kami TIDAK memiliki akses ke data ini melalui server.</p>
        <h3>Google Drive Backup (Opsional)</h3>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> Backup file dienkripsi dengan AES-CBC 256-bit (standar bank)</li>
          <li><i class="fas fa-check text-emerald-500"></i> File backup hanya bisa di-decrypt dengan device Anda</li>
          <li><i class="fas fa-check text-emerald-500"></i> Encryption key tersimpan lokal, bukan di cloud</li>
          <li><i class="fas fa-check text-emerald-500"></i> Google hanya menyimpan file terenkripsi (tidak bisa baca isi)</li>
        </ul>
        <h3>Firebase Services</h3>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> <strong>Firebase Auth:</strong> Untuk Google Sign-In (optional)</li>
          <li><i class="fas fa-check text-emerald-500"></i> <strong>Firebase Crashlytics:</strong> Untuk error monitoring (tanpa data sensitif)</li>
        </ul>`},{id:"security",emoji:"🔒",title:"Keamanan Data",content:`<h3>Enkripsi</h3>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> AES-CBC 256-bit untuk backup file encryption</li>
          <li><i class="fas fa-check text-emerald-500"></i> TLS/SSL untuk komunikasi cloud (jika ada)</li>
          <li><i class="fas fa-check text-emerald-500"></i> Secure key management untuk encryption keys</li>
        </ul>
        <h3>Access Control</h3>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> Hanya Anda yang bisa akses backup file Anda</li>
          <li><i class="fas fa-check text-emerald-500"></i> Google Sign-In menggunakan OAuth 2.0 (standar industri)</li>
          <li><i class="fas fa-check text-emerald-500"></i> Tidak ada master key atau backdoor</li>
        </ul>`},{id:"third-party",emoji:"🔗",title:"Layanan Pihak Ketiga",content:`<h3>Google Services</h3>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> <strong>Google ML Kit:</strong> Text Recognition untuk OCR struk (offline)</li>
          <li><i class="fas fa-check text-emerald-500"></i> <strong>Google Drive:</strong> Cloud backup (optional)</li>
          <li><i class="fas fa-check text-emerald-500"></i> <strong>Google Sign-In:</strong> Authentication (optional)</li>
        </ul>
        <p><strong>Privacy Note:</strong> Google Drive memiliki Privacy Policy sendiri. Kami tidak bertanggung jawab atas praktik privasi Google untuk data di sana.</p>`},{id:"rights",emoji:"👤",title:"Hak Anda",content:`<h3>Right to Access</h3>
        <p>Anda punya akses penuh ke semua data Anda melalui aplikasi. Data tersimpan di device Anda, bukan di server kami.</p>
        <h3>Right to Export</h3>
        <p>Anda bisa export data dalam format: PDF, CSV (untuk Excel/spreadsheet), Excel (.xlsx).</p>
        <h3>Right to Delete</h3>
        <ul>
          <li><i class="fas fa-check text-emerald-500"></i> Hapus transaksi individual dari aplikasi</li>
          <li><i class="fas fa-check text-emerald-500"></i> Clear semua data lokal dari Settings > Clear Data</li>
          <li><i class="fas fa-check text-emerald-500"></i> Hapus backup dari Google Drive kapan saja</li>
        </ul>`},{id:"contact",emoji:"📞",title:"Hubungi Kami",content:`<p>Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau praktik privasi kami:</p>
        <ul>
          <li><i class="fas fa-envelope text-blue-500"></i> Email: <strong>privacy@jayidev.tech</strong></li>
          <li><i class="fas fa-globe text-blue-500"></i> Website: <strong>jayidevtech.github.io</strong></li>
          <li><i class="fas fa-comment text-blue-500"></i> In-App Support: Settings > Contact Support</li>
        </ul>
        <p>Kami akan merespons permintaan privasi Anda dalam <strong>30 hari kerja</strong>.</p>`}]),h=l(()=>t.value?[{icon:"fas fa-lock",title:"100% Private",desc:"Data stored locally on your device"},{icon:"fas fa-ban",title:"No Tracking",desc:"No analytics or tracking tools"},{icon:"fas fa-shield-alt",title:"Encrypted",desc:"AES-CBC 256-bit encryption"},{icon:"fas fa-code",title:"Open Source",desc:"Code available for public review"}]:[{icon:"fas fa-lock",title:"100% Private",desc:"Data tersimpan lokal di device Anda"},{icon:"fas fa-ban",title:"No Tracking",desc:"Tidak ada analytics atau tracking tools"},{icon:"fas fa-shield-alt",title:"Encrypted",desc:"AES-CBC 256-bit encryption"},{icon:"fas fa-code",title:"Open Source",desc:"Kode tersedia untuk review publik"}]),k=l(()=>t.value?"💜 Privacy Policy":"💜 Kebijakan Privasi (Privacy Policy)"),g=l(()=>t.value?"Last updated: ":"Terakhir diperbarui: "),y=l(()=>t.value?"28 February 2026":"28 Februari 2026"),x=l(()=>t.value?"✅ Summary of Our Privacy Commitments":"✅ Ringkasan Komitmen Privacy Kami");return(N,c)=>(n(),s("div",_,[a("div",j,[a("div",G,[a("h1",E,i(k.value),1),a("p",I,[r(i(g.value),1),a("strong",null,i(y.value),1)])]),a("div",K,[(n(!0),s(d,null,u(p.value,e=>(n(),s("div",{key:e.id,class:"bg-white rounded-2xl p-8 border border-slate-200"},[a("h2",null,i(e.emoji)+" "+i(e.title),1),a("div",{innerHTML:e.content},null,8,O)]))),128)),a("div",L,[a("h2",null,i(x.value),1),a("div",T,[(n(!0),s(d,null,u(h.value,e=>(n(),s("div",{key:e.title,class:"text-center p-4 bg-blue-50 rounded-xl"},[a("i",{class:C(`${e.icon} text-2xl text-blue-600 mb-2 block`)},null,2),a("h4",w,i(e.title),1),a("p",B,i(e.desc),1)]))),128))])])]),a("div",F,[v(o(S),{to:o(m),class:"inline-flex items-center gap-2 text-blue-600 hover:underline font-medium"},{default:D(()=>[c[0]||(c[0]=a("i",{class:"fas fa-arrow-left"},null,-1)),r(" "+i(o(f)("common.backHome")),1)]),_:1},8,["to"])])])]))}});export{Y as default};
