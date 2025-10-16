"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { IoPlay } from "react-icons/io5";

export function VideoSlider() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = [
    {
      id: 1,
      title: "Video 1",
      url: "https://www.youtube.com/embed/2jQrDnvvbNA?si=B4HL7RJIWVoaTjMf",
      thumbnail: "/images/fitur-4.jpg",
    },
    {
      id: 2,
      title: "Video 2",
      url: "https://www.youtube.com/embed/2jQrDnvvbNA?si=B4HL7RJIWVoaTjMf",
      thumbnail: "/images/fitur-5.jpg",
    },
    {
      id: 3,
      title: "Video 3",
      url: "https://www.youtube.com/embed/2jQrDnvvbNA?si=B4HL7RJIWVoaTjMf",
      thumbnail: "/images/fitur-4.jpg",
    },
    {
      id: 3,
      title: "Video 4",
      url: "https://www.youtube.com/embed/2jQrDnvvbNA?si=B4HL7RJIWVoaTjMf",
      thumbnail: "/images/fitur-5.jpg",
    },
    {
      id: 3,
      title: "Video 5",
      url: "https://www.youtube.com/embed/2jQrDnvvbNA?si=B4HL7RJIWVoaTjMf",
      thumbnail: "/images/fitur-4.jpg",
    },
  ];

  return (
    <div className="py-10 relative">
      <Swiper
        modules={[Pagination]}
        slidesPerView={2.2}
        centeredSlides={true}
        spaceBetween={120}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
            spaceBetween: 100,
          },
          1024: {
            spaceBetween: 150
          }
        }}
        className="video-swiper mySwiper !pt-32 lg:!pb-10"
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div
              onClick={() => setSelectedVideo(video.url)}
              className="cursor-pointer bg-gray-800 rounded-md lg:rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform border border-white"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center  transition">
                  <div className="bg-blue-500 w-7 h-7 md:w-10 md:h-10 flex items-center justify-center rounded-full">
                    <span className="text-white text-lg md:text-2xl">
                      <IoPlay />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-[90%] max-w-5xl 2xl:max-w-7xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white text-2xl"
              onClick={() => setSelectedVideo(null)}
            >
              <X />
            </button>
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo}
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .video-swiper .swiper-slide {
          opacity: 0.5;
          transform: scale(0.9);
          transition: all 0.3s ease;
        }
        .video-swiper .swiper-slide-active {
          opacity: 1 !important;
          transform: scale(1.5) !important;
        }
        .video-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 8rem;
          display: flex;
          justify-content: center;
          gap: 1.25rem;
        }
        .video-swiper .swiper-pagination-bullet {
          background: white;
          width: 12px;
          height: 12px;
          opacity: 0.6;
        }
        .video-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }

        @media (max-width: 640px) {
          .video-swiper .swiper-slide {
            transform: scale(1.75);
          }
          .video-swiper .swiper-slide-active {
            transform: scale(1.75) !important;
          }
          .video-swiper .swiper-pagination {
            margin-top: 4rem;
            gap: 0.25rem;
          }
          .video-swiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
          }
        }
      `}</style>
    </div>
  );
}
