import React from "react";

export function Hero() {
  return (
    <section className="h-screen relative flex flex-col place-content-end pb-40">
      <video
        className="absolute -z-20 top-0 left-0 w-full h-full object-cover"
        src="/videos/air.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute -z-10 inset-0 bg-black/40 mt-10"></div>
      <div className="container">
        <div className="max-w-2xl mt-[100px]">
          <p>Website Resmi SDA PUPR Kota Palembang</p>
          <h1 className="text-[4rem] md:text-[4.875rem] leading-[1.1] font-semibold text-white">Inovasi Manajemen Sumber Daya Air Modern</h1>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">Pelajari Lebih Lanjut</button>
        </div>
      </div>
    </section>
  );
}
