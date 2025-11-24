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
        <div className="mt-10 mx-auto w-full max-w-5xl rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.6)] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[0.4fr_0.6fr] items-center">
            <div className="flex justify-center">
              <Image
                alt="Daniel Bron - Founder"
                className="overflow-hidden rounded-3xl object-cover object-center w-full max-w-[360px] h-[360px]"
                height={360}
                src="/daniel-bron.jpeg"
                width={360}
                priority
              />
            </div>
            <div className="text-left space-y-2 text-neutral-800 dark:text-neutral-200">
              <h1 className="text-3xl font-bold">Daniel Bron</h1>
              <h2 className="text-lg font-medium text-neutral-600 dark:text-neutral-300">
                Founder
              </h2>
              <p className="text-base leading-relaxed">
                Daniel Bron founded Fulcrum Services to live at the intersection of messy real-world operations and clear decision making. He has led programs for DeLorean Motor Company, building operational twins and ownership rails that keep vehicles, customers, and internal teams in sync from reservation to resale. He worked with Ukraine's Ministry of Digital Transformation on crypto rails that turned global digital donations into auditable procurement during wartime, and contributed core FastAPI services to the Resy platform inside American Express where reliability and volume are non-negotiable.
              </p>
              <p className="text-base leading-relaxed">
                Beyond those flagship projects, Daniel helps long-standing companies such as Sajiun Electric Contracting replace paper-and-spreadsheet operations with live intelligence, co-builds legal operating systems for firms like Solidity Law, and designs crypto infrastructure controls that have safely supported hundreds of millions in on-chain volume. He is a trusted sounding board to leaders across automotive, luxury, and institutional technology who need to move fast without breaking the systems they already rely on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
