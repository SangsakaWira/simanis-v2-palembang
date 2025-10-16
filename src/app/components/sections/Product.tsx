import React from "react";

export function Product() {
  return (
    <section className="h-screen relative bg-[url('/images/product-img.png')] bg-no-repeat bg-[position:100%_100%]">
      <div className="absolute bottom-0 left-0 w-full h-full bg-[linear-gradient(0deg,rgba(8,22,61,.909),rgba(8,22,61,0))] flex flex-col place-content-end">
        <div className="container">
          <div className=" mb-40 space-y-5 text-white">
            <p className="text-xl md:text-2xl">Produk Kami</p>
            <h4 className="text-4xl md:text-5xl">
              JAKI #BikinGampang Aktivitas di Jakarta
            </h4>
          </div>
        </div>
      </div>
      <div className="shadow-[-3px_-16px_25px_18px_#08163d] absolute bottom-0 left-0 w-full h-[3%] z-[1] bg-[#08163d]" />
    </section>
  );
}
