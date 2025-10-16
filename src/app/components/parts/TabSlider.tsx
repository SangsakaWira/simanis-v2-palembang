import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

type TabSliderProps = {
  data: {
    id: string;
    label: string;
    image: string;
    content: React.ReactNode;
  }[];
};

export function TabSlider({ data }: TabSliderProps) {
  return (
    <Swiper modules={[Pagination]} pagination={{ clickable: true }} className="mySwiper">
      {data.map((d) => (
        <SwiperSlide key={d.id}>
          <div>
            <Image
              src={d.image}
              alt={d.label}
              width={400}
              height={400}
              className="object-contain mx-auto"
            />

            <div className="bg-primary py-2 pl-4 pr-6 absolute left-0 rounded-tr-lg rounded-br-lg">
              <h4 className="text-white font-semibold text-xl">{d.label}</h4>
            </div>

            <div className="container mt-14">
              <p>{d.content}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <style jsx global>{`
        .mySwiper .swiper-pagination {
          position: absolute;
          bottom: 30%;
          z-index: 2;
        }
        .mySwiper .swiper-pagination-bullet {
          background: white;
          width: 10px;
          height: 10px;
          opacity: 0.6;
        }
        .mySwiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </Swiper>
  );
}
