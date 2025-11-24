import Image from "@/common/component/element/Image";
import React from "react";
import { BlogContent } from "@/common/constant/BlogContent";
import Link from "next/link";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { HiArrowUpRight } from "react-icons/hi2";

const BlogList = () => {
  return (
    <div className="py-10 grid gap-10 md:grid-cols-2">
      {BlogContent?.map((item, index) => (
        <ComponentTransition
          key={item.slug}
          delay={index * 0.1}
          className="h-full"
        >
          <article className="group h-full overflow-hidden rounded-3xl border border-neutral-300 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/60 backdrop-blur flex flex-col shadow-[0_20px_60px_-35px_rgba(15,23,42,0.6)]">
            <div className="relative h-60 overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={400}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {item.tag && (
                <span className="absolute top-5 left-5 rounded-full bg-white/80 dark:bg-neutral-900/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-800 dark:text-neutral-100">
                  {item.tag}
                </span>
              )}
            </div>
            <div className="flex h-full flex-col gap-4 p-6">
              <Link href={`/blog/${item.slug}`}>
                <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white transition-colors duration-200 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                  {item.title}
                </h1>
              </Link>
              <p className="text-base text-neutral-600 dark:text-neutral-300 line-clamp-3">
                {item.desc}
              </p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {item.tag || "Insight"}
                </span>
                <Link
                  href={`/blog/${item.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white transition-all duration-200 group-hover:gap-3"
                >
                  Learn More
                  <HiArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        </ComponentTransition>
      ))}
    </div>
  );
};

export default BlogList;
