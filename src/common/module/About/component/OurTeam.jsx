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
              <h2 className="text-md font-medium text-neutral-700 dark:text-neutral-300">Founder</h2>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 ">Daniel Bron is the founder of Fulcrum Services, a systems and applied AI studio that lives at the intersection of messy real world operations and clean decision making. Daniel has led work for DeLorean Motor Company, where his team designed operational digital twins and ownership rails that keep vehicles, customers, and internal programs in sync from reservation to resale. He worked with Ukraine's Ministry of Digital Transformation on crypto based payment rails that turned global digital donations into auditable, real world procurement under wartime conditions. His team has also contributed backend services to the Resy platform inside American Express, where reliability and volume are non negotiable. Beyond those flagship projects, Daniel and Fulcrum have helped reinvent internal intelligence for long standing businesses such as Sajiun Electric Contracting, turning paper, spreadsheets, and gut feel into live job and bidding insight. In the legal space he co built Solidity Law's internal systems as a true tech forward firm, and has designed crypto infrastructure and smart contract controls that have safely supported hundreds of millions in on chain volume. Informally, he has served as a sounding board to executives at luxury and automotive brands such as Lamborghini and Chrome Hearts on digital experience and next generation customer programs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
