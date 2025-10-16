import { ArticleProps } from "@/types";

export const menus = [
  {
    label: "Tentang Kami",
    subMenu: [
      {
        label: "Profil",
        link: "/profile",
      },
      {
        label: "Persona",
        link: "/persona",
      },
      {
        label: "Sejarah",
        link: "/sejarah",
      },
    ],
  },
  {
    label: "Aplikasi",
    subMenu: [
      {
        label: "Simanis",
        link: "/simanis",
      },
      {
        label: "Sitajir",
        link: "/sitajir",
      },
      {
        label: "Pantau Banjir",
        link: "/pantau-banjir",
      },
       {
        label: "IPAL Online",
        link: "/ipal-online",
      },
    ],
  },
  {
    label: "Publikasi",
    subMenu: [
      {
        label: "Dokumen",
        link: "/dokumen",
      },
      {
        label: "Blog",
        link: "/blog",
      },
      {
        label: "Jurnal",
        link: "/jurnal",
      },
    ],
  },
  {
    label: "Digitalisasi",
    link: "/digitalisasi",
  },
  {
    label: "Kunjungan",
    link: "/kunjungan",
  },
  {
    label: "Portal",
    link: "/portal",
  },
   {
    label: "Laporan",
    link: "/laporan",
  },
];


export const features = [
  {
    feature: "Intip Suksesnya Pengolahan Sampah Negara Lain",
    image: '/images/fitur-4.jpg'
  },
  {
    feature: "Akses Cepat Layanan Lewat Banner",
    image: '/images/fitur-5.jpg'
  },
  {
    feature: "Langkah-Langkah Pemprov DKI",
    image: '/images/fitur-4.jpg'
  },
  {
    feature: "Jaga Jakarta Bareng",
    image: '/images/fitur-4.jpg'
  },
  {
    feature: "5 Upaya Pemprov Atasi Kepadatan TB Simatupang",
    image: '/images/fitur-5.jpg'
  },
]

export const blogPosts: ArticleProps[] = [
  {
    id: 1,
    title: "Tren Fashion 2025: Gaya Futuristik dengan Sentuhan AI",
    slug: "tren-fashion-2025",
    description: "Teknologi AI mulai memengaruhi dunia fashion. Mulai dari desain pakaian hingga pengalaman belanja yang lebih personal.",
    content: `
      <p>
        Industri fashion kini semakin dekat dengan teknologi. 
        <strong>Artificial Intelligence (AI)</strong> membantu desainer 
        dalam membuat pola, memilih material, hingga memprediksi tren warna.
      </p>
      <blockquote>
        "Fashion bukan hanya soal estetika, tapi juga soal data dan teknologi."
      </blockquote>
      <ul>
        <li>AI dalam desain pakaian</li>
        <li>Virtual try-on untuk pembeli online</li>
        <li>Prediksi tren berbasis big data</li>
      </ul>
      <p>
        Dengan ini, <em>fashion di masa depan</em> akan lebih personal, cepat, dan ramah lingkungan.
      </p>
    `,
    categories: [
      { name: "Fashion", slug: "fashion" },
      { name: "Tech", slug: "tech" },
    ],
    author: {
      name: "Tegar Pratama",
      avatar: "/images/person.jpg",
    },
    editor: {
      name: "Dewi Laras",
      avatar: "/images/person.jpg",
    },
    publishedAt: "2025-09-15",
    updatedAt: "2025-09-20",
    image: "/images/fitur-4.jpg",
  },
  {
    id: 2,
    title: "5 Startup Teknologi di Indonesia yang Wajib Dipantau",
    slug: "5-startup-teknologi-indonesia",
    description:
      "Startup Indonesia semakin berkembang pesat dengan fokus pada AI, fintech, dan sustainability.",
    content: `
      <p>
        Indonesia sedang mengalami <strong>ledakan startup</strong> dengan berbagai bidang inovasi, mulai dari 
        <em>fintech</em> hingga <em>edutech</em>.
      </p>
      <ol>
        <li>FinTech untuk akses keuangan inklusif</li>
        <li>HealthTech untuk layanan kesehatan digital</li>
        <li>AgriTech untuk mendukung petani</li>
      </ol>
      <p>
        Para investor global mulai melirik startup lokal karena pertumbuhan pengguna internet yang sangat pesat.
      </p>
      <blockquote>
        "Dalam 5 tahun ke depan, ekosistem startup Indonesia bisa jadi yang terbesar di Asia Tenggara."
      </blockquote>
      <p>
        Dukungan pemerintah dan talenta muda kreatif menjadi kunci perkembangan ini.
      </p>
    `,
    categories: [{ name: "Tech", slug: "tech" }],
    author: {
      name: "Sinta Wijaya",
      avatar: "/images/person.jpg",
    },
    editor: {
      name: "Budi Santoso",
      avatar: "/images/person.jpg",
    },
    publishedAt: "2025-08-30",
    updatedAt: "2025-09-05",
    image: "/images/fitur-5.jpg",
  },
  {
    id: 3,
    title: "Kuliner Nusantara yang Mendunia",
    slug: "kuliner-nusantara-mendunia",
    description:
      "Dari rendang hingga sate, kuliner Indonesia makin dikenal di panggung internasional.",
    content: `
      <p>
        <strong>Rendang</strong> dari Sumatera Barat telah beberapa kali dinobatkan 
        sebagai makanan terenak di dunia versi CNN Travel.
      </p>
      <p>
        Selain rendang, ada juga <em>sate</em>, <em>nasi goreng</em>, dan 
        <em>gado-gado</em> yang sudah dikenal secara global.
      </p>
      <ul>
        <li>Rendang — khas Minangkabau</li>
        <li>Sate — variasi dari berbagai daerah</li>
        <li>Nasi Goreng — comfort food Indonesia</li>
      </ul>
      <blockquote>
        "Kuliner Indonesia adalah kekayaan budaya yang tak ternilai."
      </blockquote>
      <p>
        Promosi kuliner lewat diplomasi budaya membantu Indonesia dikenal lebih luas di dunia internasional.
      </p>
    `,
    categories: [
      { name: "Food", slug: "food" },
      { name: "Culture", slug: "culture" },
    ],
    author: {
      name: "Samuel Aditya",
      avatar: "/images/person.jpg",
    },
    editor: {
      name: "Maya Putri",
      avatar: "/images/person.jpg",
    },
    publishedAt: "2025-09-10",
    updatedAt: "2025-09-12",
    image: "/images/fitur-4.jpg",
  },
  {
    id: 4,
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    slug: "lorem-ipsum",
    description: "Teknologi AI mulai memengaruhi dunia fashion. Mulai dari desain pakaian hingga pengalaman belanja yang lebih personal.",
    content: `
      <p>
        Industri fashion kini semakin dekat dengan teknologi. 
        <strong>Artificial Intelligence (AI)</strong> membantu desainer 
        dalam membuat pola, memilih material, hingga memprediksi tren warna.
      </p>
      <blockquote>
        "Fashion bukan hanya soal estetika, tapi juga soal data dan teknologi."
      </blockquote>
      <ul>
        <li>AI dalam desain pakaian</li>
        <li>Virtual try-on untuk pembeli online</li>
        <li>Prediksi tren berbasis big data</li>
      </ul>
      <p>
        Dengan ini, <em>fashion di masa depan</em> akan lebih personal, cepat, dan ramah lingkungan.
      </p>
    `,
    categories: [
      { name: "Industry", slug: "industry" },
    ],
    author: {
      name: "Tegar Pratama",
      avatar: "/images/person.jpg",
    },
    editor: {
      name: "Dewi Laras",
      avatar: "/images/person.jpg",
    },
    publishedAt: "2025-09-15",
    updatedAt: "2025-09-20",
    image: "/images/fitur-5.jpg",
  },
  {
    id: 5,
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
    slug: "lorem-ipsum-dolor",
    description:
      "Startup Indonesia semakin berkembang pesat dengan fokus pada AI, fintech, dan sustainability.",
    content: `
      <p>
        Indonesia sedang mengalami <strong>ledakan startup</strong> dengan berbagai bidang inovasi, mulai dari 
        <em>fintech</em> hingga <em>edutech</em>.
      </p>
      <ol>
        <li>FinTech untuk akses keuangan inklusif</li>
        <li>HealthTech untuk layanan kesehatan digital</li>
        <li>AgriTech untuk mendukung petani</li>
      </ol>
      <p>
        Para investor global mulai melirik startup lokal karena pertumbuhan pengguna internet yang sangat pesat.
      </p>
      <blockquote>
        "Dalam 5 tahun ke depan, ekosistem startup Indonesia bisa jadi yang terbesar di Asia Tenggara."
      </blockquote>
      <p>
        Dukungan pemerintah dan talenta muda kreatif menjadi kunci perkembangan ini.
      </p>
    `,
    categories: [{ name: "Entertain", slug: "entertain" }],
    author: {
      name: "Sinta Wijaya",
      avatar: "/images/person.jpg",
    },
    editor: {
      name: "Budi Santoso",
      avatar: "/images/person.jpg",
    },
    publishedAt: "2025-08-30",
    updatedAt: "2025-09-05",
    image: "/images/fitur-4.jpg",
  },
];