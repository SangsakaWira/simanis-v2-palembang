import Image from "next/image";
import React from "react";
import { blogPosts } from "../../../constants";
import Link from "next/link";

export function Latest() {
  return (
    <section className="bg-white">
      <div className="container mt-10">
        <h2 className="text-4xl text-black">Daftar Inovasi SDAIL PUPR Kota Palembang</h2>
      </div>

      <div className="flex flex-col md:flex-row mt-8">
        <Link href={`/blog/${blogPosts[0].slug}`} className="w-full md:w-[40%] relative group overflow-hidden cursor-pointer">
          <Image
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            width={500}
            height={500}
            className="w-full h-full object-fill transition-transform duration-300 group-hover:scale-105"
            />
          <div className="absolute inset-0 bg-black/50" />
          <h4 className="absolute z-[2] lg:max-w-[80%] text-white text-lg lg:text-2xl left-5 right-5 bottom-5">{blogPosts[0].title}</h4>
        </Link>
        <div className="w-full md:w-[60%] grid grid-cols-1 md:grid-cols-2">
          {blogPosts.slice(1, 5).map((feature, id) => (
            <Link href={`/blog/${feature.slug}`} className="relative group overflow-hidden cursor-pointer" key={id}>
              <Image
                src={feature.image}
                alt={feature.title}
                width={500}
                height={500}
                className="w-full h-full object-fill transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50" />
              <h4 className="absolute z-[2] lg:max-w-[80%] text-white text-base lg:text-xl left-5 right-5 bottom-5">{feature.title}</h4>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
