import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import Rails from "@/common/component/element/Rails";
import React from "react";
import { FaCode } from "react-icons/fa6";
import { WiDayCloudy } from "react-icons/wi";
import Feedback from "../../Feedback";
import CardOffer from "@/common/component/element/CardOffer";

export default function ServicePage() {
  return (
    <ComponentTransition className="h-auto max-w-[1500px] px-10 xl:px-20 pb-20">
      <div className="flex justify-center py-5 ">
        <div className="flex justify-center mt-20 relative ">
          <h1 className="text-4xl md:text-7xl py-5 px-10 text-center dark:bg-gradient-to-r from-white from-50% to-[#979797] bg-text bg-clip-text  text-transparent font-bold">
            Service & Expertise
          </h1>
          <div className=" absolute w-[80%] h-[250px] z-[-99] top-[-70px]">
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="text-base md:text-2xl text-neutral-500 md:w-[70%] text-center">
          Systems Architecture / AI & Data / Digital Twins / Product Delivery
        </p>
      </div>
      <div className="py-10 mt-20 flex gap-10 justify-center flex-row flex-wrap relative">
        <div className="absolute  z-[-9] glowbg w-[100%] md:w-[500px] h-[400px]  left-0 "></div>
        <ComponentTransition className="w-full overflow-hidden px-10 py-5 md:basis-[45%] h-[320px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
          <WiDayCloudy size={50} />
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Systems and Strategy
          </h1>
          <h2 className="text-sm text-neutral-800 dark:text-neutral-300">
            Architecture and Roadmaps
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-4">
            We help you see the full landscape you operate in, then design the architectures, interfaces, and sequencing needed to move from scattered tools to a coherent system.
          </p>
        </ComponentTransition>
        <ComponentTransition
          delay={0.2}
          className="w-full overflow-hidden px-10 py-5 md:basis-[45%] h-[320px] dark:bg-neutral-950 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl bg-neutral-100"
        >
          <FaCode size={40} />
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Custom Platforms and Applications
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            Internal Tools and Twins
          </h2>
          <p className="text-base text-neutral-700 line-clamp-4 dark:text-neutral-400 mt-3">
            We design and build the software that ties your data and workflows together—internal consoles, digital twins, and web applications that teams and customers rely on every day.
          </p>
        </ComponentTransition>


        <Feedback className='!px-0' />
      </div>
      <CardOffer title='Ready To Get Started!' className="!px-0" />
    </ComponentTransition>
  );
}
