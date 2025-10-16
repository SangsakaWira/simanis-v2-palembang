"use client";
import React from "react";
import Tabs from "../parts/Tabs";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VideoSlider } from "../parts/VideoSlider";
import { TabSlider } from "../parts/TabSlider";

export function Ecosystem() {
  const tabItems = [
    {
      id: "tab1",
      label: "Mobile First",
      image: "/images/mobile-first.png",
      content:
        "Semangat integrasi dan akses mudah, kami mengembangkan layanan digital ramah ponsel untuk semua warga. Salah satunya, super-apps Jakarta Kini (JAKI).",
    },
    {
      id: "tab2",
      label: "System and Data Driven",
      image: "/images/analytics.png",
      content:
        "Didukung data, AI, serta sinergi, kami membantu penyusunan kebijakan berbasis data untuk para pengambil keputusan di Pemprov DKI Jakarta.",
    },
    {
      id: "tab3",
      label: "Digital Xperience",
      image: "/images/analytics.png",
      content:
        "Prinsip ini akan menciptakan lingkungan inklusif dan melek digital secara merata, agar kamu bisa menikmati layanan digital serba mudah di Jakarta.",
    },
    {
      id: "tab4",
      label: "Smart Synergy",
      image: "/images/analytics.png",
      content:
        "Sinergi menjadi reaktor inti dalam memajukan Jakarta. Melalui mekanisme sandbox kami, siapa saja bisa terlibat meningkatkan kualitas pelayanan di Jakarta.",
    },
  ];

  return (
    <section className="bg-[#08163d] overflow-hidden">
      <div className="relative min-h-[70vh] flex flex-col place-content-center text-center">
        <div className="container">
          <div className="absolute top-0 lg:top-10 -left-16 2xl:-left-10 w-56 h-56 rounded-full border border-primary" />
          <div className="max-w-6xl mx-auto relative z-[4]">
            <h4 className="text-4xl md:text-6xl text-white">
              Mewujudkan Ekosistem Kota Cerdas 4.0 Jakarta Melalui 4 Prinsip JSC
            </h4>
          </div>
          <div className="absolute w-24 h-24 rounded-full bottom-20 -right-16 2xl:-right-4 border border-white" />
        </div>
      </div>

      <div className="relative h-screen flex flex-col place-content-center">
        <div className="container">
          <div className="hidden md:block absolute bg-[#0c2260] w-[100vh] h-screen rounded-full top-0 -left-[30vh] 2xl:-left-[25vh]" />
          <div className="max-w-6xl mx-auto relative z-[4] hidden lg:block">
            <Tabs items={tabItems} />
          </div>
        </div>
        {/* Mobile */}
        <div className="block lg:hidden">
          <TabSlider data={tabItems} />
        </div>
      </div>

      <div className="h-56 lg:h-screen flex flex-col place-content-center">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex-1 text-center lg:text-left">
              <h4 className="text-4xl md:text-5xl font-semibold">
                Mari bersama mewujudkan Jakarta yang lebih baik!
              </h4>
            </div>
            <div className="flex-1 relative hidden lg:block">
              <Image
                src={"/images/collab-combine.webp"}
                alt="Collab Combine"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[50vh] md:h-screen flex flex-col place-content-center">
        <div className="lg:container">
          <VideoSlider />
        </div>
      </div>
    </section>
  );
}
