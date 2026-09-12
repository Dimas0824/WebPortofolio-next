/**
 * Portfolio items extracted from Laravel app portfolio controller.
 * Source: PortoLanding (app/Http/Controllers/PortfolioController.php)
 * Extraction date: 2026-01-15
 */
import type { PortfolioItem } from './types';

export default [
    {
        title: "MAGNET — Sistem Informasi Magang",
        description: "Sistem informasi manajemen magang berbasis web yang dilengkapi algoritma rekomendasi cerdas untuk penempatan mahasiswa secara optimal. Mengimplementasikan metode ROC dan MULTIMOORA untuk optimasi multi-kriteria, sehingga proses pemetaan peserta magang menjadi lebih objektif dan efisien.",
        tech: ["Laravel 10", "Livewire", "Flux UI", "Livewire Volt", "MySQL"],
        link: "https://github.com/Dimas0824/MAGNET-Magang-Network-And-Tracking",
        category: "Laravel 10",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "IHSG LSTM Forecasting",
        description: "Model deep learning time series forecasting untuk memprediksi pergerakan Indeks Harga Saham Gabungan (IHSG) menggunakan arsitektur LSTM. Model dioptimalkan hingga mencapai akurasi tinggi dengan nilai MAPE 1.33%, dilengkapi pipeline preprocessing, visualisasi hasil, dan evaluasi performa.",
        tech: ["Python", "TensorFlow", "Keras"],
        link: "https://github.com/Dimas0824/IHSG-LSTM_Forecasting",
        category: "Python",
        image: "https://images.unsplash.com/photo-161197478985-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Streamlytics Netflix — User Segmentation",
        description: "Proyek unsupervised machine learning untuk menganalisis dan mengelompokkan perilaku pengguna Netflix berdasarkan data tontonan dan preferensi genre. Menggunakan algoritma K-Means dan DBSCAN untuk menemukan pola tersembunyi yang mendukung strategi rekomendasi konten.",
        tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        link: "https://github.com/Dimas0824/streamlytics-netflix",
        category: "Python",
        image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "DiscipLink — Sistem Informasi Tata Tertib",
        description: "Sistem informasi berbasis web untuk digitalisasi tata tertib dan regulasi kampus di Politeknik Negeri Malang. Berperan sebagai Database Engineer & Administrator, Backend Developer (secondary), serta Project Manager yang memastikan alur kolaborasi dan integrasi fitur berjalan efektif.",
        tech: ["PHP Native", "MySQL", "Git", "Project Management"],
        link: "https://github.com/VarizkyNaldiba/TataTertibMhs",
        category: "PHP Native",
        image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "DiscipLink V2 — Secure MVC Refactor",
        description: "Refactor arsitektur DiscipLink dengan pola MVC + Central Router untuk memisahkan alur halaman, aksi, dan akses data. Fokus hardening keamanan: tokenisasi ID sensitif dengan session binding, idle timeout, dan whitelist upload/download.",
        tech: ["PHP Native", "PDO", "MySQL", "MVC", "Vanilla JS", "Security"],
        link: "https://github.com/Dimas0824/TataTertibMhsV2.git",
        category: "Security",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Oi!Kerjain — Daily Task Scheduler",
        description: "Aplikasi task scheduler harian dengan UI neuromorphic untuk membantu pengguna tetap terorganisir dan konsisten menyelesaikan tugas. Menyediakan manajemen tugas cepat, history 14 hari, serta local notification dengan escalation reminder dan quick actions.",
        tech: ["Flutter", "Dart", "Local Notification", "Task Management", "Neuromorphic UI"],
        link: "https://github.com/Dimas0824/Oi-Kerjain.git",
        category: "Flutter",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Sistem Kasir Cafe (CASS)",
        description: "Aplikasi Point of Sale (POS) berbasis Command-Line Interface (CLI) untuk membantu operasional kafe, meliputi manajemen menu, stok inventori, dan laporan penjualan secara terstruktur.",
        tech: ["Java", "CLI"],
        link: "https://github.com/HaikalMuhammadRafli/Sistem-Kasir_kel01",
        category: "Java",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Simple TikTok Post Text Mining",
        description: "Analisis sentimen publik terhadap kebijakan pemerintah Indonesia mengenai diskon listrik 50% menggunakan pendekatan lexicon-based sentiment analysis. Melibatkan preprocessing teks dan representasi fitur TF-IDF untuk klasifikasi opini positif dan negatif.",
        tech: ["Python", "Scikit-learn", "NLTK", "TF-IDF", "WordCloud"],
        link: "https://github.com/FarrelAD/Simple-TikTok-Post-Text-Mining",
        category: "Python",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80"
    },
    {
        title: "Uninformed Search Algorithms Comparison",
        description: "Eksperimen implementasi dan analisis performa berbagai algoritma pencarian uninformed seperti BFS, DFS, UCS, dan DLS. Berfokus pada evaluasi efisiensi dan kompleksitas waktu untuk menemukan solusi pada ruang pencarian tanpa heuristik.",
        tech: ["Python", "Algorithms", "BFS", "DFS", "UCS", "DLS"],
        link: "https://github.com/FarrelAD/Uninformed-Search-Algorithms-Comparison",
        category: "Algorithms",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80"
    }
] as PortfolioItem[];
