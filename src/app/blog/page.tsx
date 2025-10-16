"use client";
import React from "react";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { ArticleCard } from "../components/parts/ArticleCard";
import { OtherArticleCard } from "../components/parts/OtherArticleCard";
import { blogPosts } from "@/constants";

export default function BlogPage() {
  // const data = [
  //   {
  //     id: 1,
  //     categories: [
  //       {
  //         name: "Smart Mobility",
  //         slug: "smart-mobility",
  //       },
  //     ],
  //     date: "04 Sep 2025",
  //     title: "Gampang ke Stasiun Cikini, Sekarang Ada Pelican Crossing!",
  //     description:
  //       "Kamu penumpang Stasiun Cikini? Intip pelican crossing yang baru, bikin kamu gampang menyeberang!",
  //     image: "/images/fitur-4.jpg",
  //   },
  //   {
  //     id: 2,
  //     categories: [
  //       {
  //         name: "Smart Mobility",
  //         slug: "smart-mobility",
  //       },
  //     ],
  //     date: "04 Sep 2025",
  //     title: "Jalan-jalan ke Ancol? Yuk, Cek Rute Transjakarta 1W",
  //     description:
  //       "Wisata ke Ancol makin mudah dengan Transjakarta 1W dari Blok M, lewat spot ikonik seperti Masjid Agung. Simak rute dan tipsnya di artikel ini!",
  //     image: "/images/fitur-5.jpg",
  //   },
  //   {
  //     id: 3,
  //     categories: [
  //       {
  //         name: "Smart Mobility",
  //         slug: "smart-mobility",
  //       },
  //       {
  //         name: "Wisata",
  //         slug: "wisata",
  //       },
  //     ],
  //     date: "04 Sep 2025",
  //     title: "Intip Suksesnya Pengolahan Sampah Negara Lain",
  //     description:
  //       "Mari belajar cara mengolah sampah dari negara-negara seperti Jerman dan Korea Selatan! Adakah solusi yang tepat untuk Jakarta?",
  //     image: "/images/fitur-4.jpg",
  //   },
  //   {
  //     id: 4,
  //     categories: [
  //       {
  //         name: "Smart Mobility",
  //         slug: "smart-mobility",
  //       },
  //     ],
  //     date: "04 Sep 2025",
  //     title: "Akses Cepat Layanan Lewat Banner dan Fitur Pintasan JAKI",
  //     description:
  //       "Akses layanan publik digital kini makin mudah. Dari banner Satu Data hingga pintasan info properti, semuanya bisa diakses lewat JAKI.",
  //     image: "/images/fitur-5.jpg",
  //   },
  //   {
  //     id: 5,
  //     categories: [
  //       {
  //         name: "Smart Mobility",
  //         slug: "smart-mobility",
  //       },
  //     ],
  //     date: "04 Sep 2025",
  //     title: "Langkah-langkah Pemprov DKI",
  //     description:
  //       "Fasilitas umum yang mengalami kerusakan masih terus diperbaiki demi #JagaJakarta. Baca upaya Pemprov selengkapnya di sini.",
  //     image: "/images/fitur-4.jpg",
  //   },
  // ];

  const categories = [
    {
      label: "jaki",
      link: "/jaki",
    },
    {
      label: "smart people",
      link: "/smart-people",
    },
    {
      label: "smart mobility",
      link: "/smart-mobility",
    },
    {
      label: "smart governance",
      link: "/smart-governance",
    },
    {
      label: "smart living",
      link: "/smart-living",
    },
    {
      label: "events",
      link: "/events",
    },
    {
      label: "smart environment",
      link: "/smart-environment",
    },
    {
      label: "smart governance",
      link: "/smart-governance",
    },
    {
      label: "smart living",
      link: "/smart-living",
    },
    {
      label: "smart people",
      link: "/smart-people",
    },
    {
      label: "smart mobility",
      link: "/smart-mobility",
    },
  ];
  return (
    <>
      <section className="min-h-[600px] w-full relative overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
            el: ".hero-pagination",
          }}
          navigation={{
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
          }}
          modules={[Pagination, Navigation]}
          className="hero-swiper h-[600px]"
        >
          {blogPosts.map((item, id) => (
            <SwiperSlide
              key={id}
              className={`relative w-full h-[600px] bg-cover flex flex-col place-content-end pb-20`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="bg-black/60 absolute inset-0" />
              <div className="container">
                <div className="relative z-[2] max-w-2xl space-y-3">
                  {item.categories.map((category, id) => (
                    <React.Fragment key={id}>
                      <Link href={`kategori/${category.slug}`} className="font-medium">
                        {category.name}
                      </Link>
                      {id < item.categories.length - 1 && ", "}
                    </React.Fragment>
                  ))}
                  <h2 className="text-5xl font-bold leading-tight">
                    {item.title}
                  </h2>
                  <p className="font-semibold">{item.description}</p>
                  <Link href={"/"} className="flex items-center gap-x-2">
                    Lihat Selengkapnya <ArrowRightIcon size={18} />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute right-20 bottom-10 flex items-center gap-3 z-10">
          <button className="hero-prev p-3 rounded-full bg-white/80 hover:bg-white shadow">
            <ChevronLeftIcon className="w-5 h-5 text-black" />
          </button>

          <button className="hero-next p-3 rounded-full bg-white/80 hover:bg-white shadow">
            <ChevronRightIcon className="w-5 h-5 text-black" />
          </button>
        </div>

        <div className="absolute !w-auto !left-auto !right-0 !mr-20 !top-1/2 !-translate-y-1/2 hero-pagination flex flex-col gap-3 z-10" />
      </section>

      <div className="bg-[#0062e0] w-full py-5">
        <div className="container relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={{
              nextEl: ".category-next",
              prevEl: ".category-prev",
            }}
            modules={[Navigation]}
            className="categories-swiper relative"
          >
            <SwiperSlide className="flex items-center justify-between">
              {categories.slice(0, 6).map((item, id) => (
                <div
                  key={id}
                  className="px-5 uppercase font-semibold text-center"
                >
                  <Link href={item.link}>{item.label}</Link>
                </div>
              ))}
            </SwiperSlide>
            <SwiperSlide className="flex items-center justify-between">
              {categories.slice(6, 12).map((item, id) => (
                <div
                  key={id}
                  className="px-5 uppercase font-semibold text-center"
                >
                  <Link href={item.link}>{item.label}</Link>
                </div>
              ))}
            </SwiperSlide>
          </Swiper>

          <button className="category-prev absolute left-0 top-1/2 -translate-y-1/2">
            <ChevronLeftIcon className="w-5 h-5 text-white" />
          </button>

          <button className="category-next absolute right-0 top-1/2 -translate-y-1/2">
            <ChevronRightIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <section className="py-20">
        <div className="container">
          <div className="w-full border-b-2 border-b-slate-800 mb-10 pb-3">
            <h2 className="text-black text-3xl font-semibold">
              Terbaru dari JSC
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-16 mb-20">
            <div className="col-span-2 space-y-16">
              {blogPosts.slice(0, 2).map((item, id) => (
                <ArticleCard key={id} item={item} type="large" />
              ))}
            </div>
            <div className="col-span-1 space-y-16">
              {blogPosts.slice(2, 5).map((item, id) => (
                <ArticleCard key={id} item={item} />
              ))}
            </div>
          </div>

          <div className="w-full border-b-2 border-b-slate-800 mb-10 pb-3">
            <h2 className="text-black text-3xl font-semibold">
              Artikel Lainnya
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-x-4 gap-y-10">
            {blogPosts.map((item, id) => (
              <OtherArticleCard key={id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .hero-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.6;
          transition: transform 0.2s;
        }
        .hero-pagination .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
          background: #fff;
        }
      `}</style>
    </>
  );
}
