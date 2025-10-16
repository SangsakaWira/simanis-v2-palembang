import { ArticleProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type OtherArticleCardProps = {
  item: ArticleProps;
};

export function OtherArticleCard({ item }: OtherArticleCardProps) {
  return (
    <div>
      <div className="text-slate-700">
        {item.categories.map((category, id) => (
          <React.Fragment key={id}>
            <Link
              href={`kategori/${category.slug}`}
              className="text-xs font-medium"
            >
              {category.name}
            </Link>
            {id < item.categories.length - 1 && ", "}
          </React.Fragment>
        ))}
      </div>
      <div className="w-full h-52 relative mt-2">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-5 space-y-5">
        <Link href={"/"}>
          <h4 className="text-black text-xl font-semibold">{item.title}</h4>
        </Link>
        <p className="text-slate-700 text-sm">{item.publishedAt}</p>
      </div>
    </div>
  );
}
