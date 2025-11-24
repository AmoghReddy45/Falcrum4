"use client";
import React from "react";
import { BlogContent } from "@/common/constant/BlogContent";
import { usePathname } from "next/navigation";
import Image from "@/common/component/element/Image";
import Rails from "@/common/component/element/Rails";

const BlogDetail = () => {
  const pathname = usePathname();
  // Normalize pathname by removing trailing slash if present
  const normalizedPathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  
  const blog = BlogContent.find((item) => `/blog/${item.slug}` === normalizedPathname);

  if (!blog) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
      </div>
    );
  }

  return (
    <div className="h-auto max-w-[1500px] flex flex-col items-center justify-center mt-20 max-md:px-5 px-10 xl:px-20 pb-10 overflow-hidden">
      <div className="flex justify-center mt-20 relative">
        <h1 className="text-4xl md:text-6xl py-5 leading-tight bg-clip-text dark:bg-gradient-to-r from-white from-50% to-black bg-text  w-[80%] text-transparent font-bold text-center">
          {blog.bigTitle}
        </h1>
        <div className=" absolute w-[170%]  h-[250px] z-[-99] top-[-70px]">
        </div>
      </div>
      <div className="flex mt-32  w-full justify-center items-center flex-col">
      <Image 
      src={blog.img}
      alt={blog.bigTitle}
      width={400}
      height={400}
      priority
      className="md:h-[600px] w-full rounded-3xl"
      />
      </div>
      <div className="py-10 px-10 max-md:px-5 md:px-32 text-justify text-neutral-800 dark:text-neutral-200">
      <h1>
        {blog.desc}
      </h1>
      <div className="mt-10">
        {blog.content}
      </div>
      </div>
    </div>
  );
};

export default BlogDetail;
