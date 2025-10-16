import { ArticleProps } from "@/types";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleCardProps = {
  item: ArticleProps;
  type?: "default" | "large";
};

export function ArticleCard({ item, type = "default" }: ArticleCardProps) {
  return (
    <div className="text-neutral-600">
      <div className="flex items-center justify-between text-xs mb-3">
        <div>
          {item.categories.map((category, id) => (
            <React.Fragment key={id}>
              <Link href={`/kategori/${category.slug}`}>{category.name}</Link>
              {id < item.categories.length - 1 && ", "}
            </React.Fragment>
          ))}
        </div>
        <p>{item.publishedAt}</p>
      </div>

      <div className={`w-full relative ${type === "large" ? "h-80" : "h-40"}`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-5 mt-4">
        <h4
          className={`${
            type === "large" ? "text-4xl" : "text-2xl"
          } font-semibold text-black`}
        >
          {item.title}
        </h4>

        {type === "large" ? <p>{item.description}</p> : null}

        <Link href={`/blog/${item.slug}`} className="flex items-center gap-x-1">
          Baca Artikel <ArrowRightIcon size={20} />
        </Link>
      </div>
    </div>
  );
}
