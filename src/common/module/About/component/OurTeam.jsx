import Image from "@/common/component/element/Image";
import React from "react";

export default function OurTeam() {
  return (
    <section className="w-full flex justify-center items-center py-12 md:py-24 lg:py-32 lg:px-10 px-5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Meet the Founder
            </h2>
            <p className="max-w-[900px] text-neutral-700 dark:text-neutral-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
            We&rsquo;re a team of designers, developers, and creatives who are passionate about building Amazing products.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div className="group max-w-md">
            <Image
              alt="Daniel Bron - CEO"
              className="overflow-hidden rounded-3xl object-cover object-center w-[200px] h-[200px] group-hover:scale-105 transition-transform"
              height={200}
              src="/daniel-bron.jpeg"
              width={200}
              priority
            />
            <div className="mt-4 text-left">
              <h1 className="text-lg font-bold">Daniel Bron</h1>
              <h2 className="text-md font-medium text-neutral-700 dark:text-neutral-300">CEO</h2>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 ">At just 12, Daniel Bron built his first computer, laying the groundwork for his path from tech prodigy to CEO & Founder of Fulcrum Services and a renowned author. His book, "4th Industrial Revolution: Redefining Frameworks for Startups & Creatives," reflects his belief that technologies like AI, blockchain, and IoT are reshaping society. Daniel's ability to transform visionary tech into strategic action has led to successful collaborations with the Delorean Motor Company, Chrome Hearts, and advisory roles for governments in Ukraine and Libya. Under his leadership, Fulcrum Services is not merely navigating but shaping the future, demonstrating that 4IR technologies are catalysts for a new societal paradigm.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
