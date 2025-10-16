import { blogPosts } from "@/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiFacebook, SiLinkedin, SiWhatsapp, SiX } from "react-icons/si";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await blogPosts.find((p) => p.slug === params.slug);

  return {
    title: post ? `${post.title} | Jakarta Smart City` : "Post Not Found | Jakarta Smart City",
    description: post?.description || "Blog post detail",
  };
}

export default async function DetailBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <p>Artikel tidak ditemukan</p>;

  return (
    <section className="py-40 text-black">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-2">
            <div className="text-[#0062e2] text-lg">
              {post.categories.map((category, id) => (
                <React.Fragment key={id}>
                  <Link href={category.slug}>{category.name}</Link>
                  {id < post.categories.length - 1 && ", "}
                </React.Fragment>
              ))}
            </div>
            <p>{post.publishedAt}</p>
          </div>

          <h2 className="text-[2.5rem] font-semibold leading-tight">
            {post.title}
          </h2>

          <div className="flex justify-between items-start mt-6">
            <div className="space-y-4">
              <p className="text-sm">
                Oleh: <span className="font-semibold">{post.author.name}</span>
              </p>
              <p className="text-sm">
                Editor:{" "}
                <span className="font-semibold">{post.editor.name}</span>
              </p>
            </div>

            <div className="flex items-center gap-x-3">
              <SiFacebook size={18} />
              <SiX size={18} />
              <SiLinkedin size={18} />
              <SiWhatsapp size={18} />
            </div>
          </div>

          <div
            className="mt-10 text-base"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          ></div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] pt-10 pb-16 mt-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <p className="text-[1.375rem]">Penulis dan Editor</p>

            <div className="mt-5 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={60}
                      height={60}
                      className="w-auto h-auto"
                    />
                  </div>
                  <p className="text-[1.188rem] font-semibold text-[#4b4b4b]">{post.author.name}</p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-black/10" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={post.editor.avatar}
                      alt={post.editor.name}
                      width={60}
                      height={60}
                      className="w-auto h-auto"
                    />
                  </div>
                  <p className="text-[1.188rem] font-semibold text-[#4b4b4b]">{post.editor.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
