import React from "react";

export function Hero() {
  return (
    <section className="h-screen relative flex flex-col place-content-end pb-40">
      <img
        className="absolute -z-20 top-0 left-0 w-full h-full object-cover"
        src="/images/background-hero.png"
        alt=""
      />
      <div className="absolute -z-10 inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
      <div className="container grid lg:grid-cols-2 items-end gap-8">
        <div className="max-w-2xl mt-[100px]">
          <p>Website Resmi SDA PUPR Kota Palembang</p>
          <h1 className="text-[4rem] md:text-[4.875rem] leading-[1.1] font-semibold text-white">Inovasi Manajemen Sumber Daya Air Modern</h1>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">Pelajari Lebih Lanjut</button>
        </div>
        <div className="hidden lg:block relative w-full aspect-[3/2]">
          <img
            className="hero-fade absolute inset-0 w-full h-full object-contain object-bottom"
            src="/images/waliwawako.png"
            alt="Drs. H. Ratu Dewa, M.Si., Walikota Palembang dan Prima Salam, S.H. MM, Wakil Walikota Palembang"
          />
          <img
            className="hero-fade hero-fade-delay absolute inset-0 w-full h-full object-contain object-bottom"
            src="/images/kadiskabid.png"
            alt="Yudha Fardyansah, ST., MT., IPM., Kepala Dinas PUPR Palembang dan Dr. Ir. RA Marlina Sylvia, ST., M.Si, Kepala Bidang SDA-IL"
          />
        </div>
      </div>
    </section>
  );
}
