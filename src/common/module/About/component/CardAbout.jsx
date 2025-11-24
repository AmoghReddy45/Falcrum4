import Image from "@/common/component/element/Image";
import React from "react";
import { TbDeviceVisionPro } from "react-icons/tb";
import { FaBullseye } from "react-icons/fa6";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import OurTeam from "./OurTeam";

const CardAbout = () => {
  return (
    <div className="py-10 w-full flex gap-10 justify-center flex-row flex-wrap relative">
      <ComponentTransition delay={0.1} className="w-full h-[20%]  md:basis-[60%] overflow-hidden rounded-3xl">
        <div className="w-full md:h-[840px] sm:h-[500px] rounded-3xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1637836375461-197de8876f90?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Header Image"
          width={400}
          height={400}
          priority
          className="w-full object-cover rounded-3xl"
          />
          </div>
        <div className="mt-5 py-5 gap-5 h-full grow">
          <div className="w-full px-10 py-10 h-full bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
            <FaBullseye size={50} />
            {/* <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
              Mission
            </h1> */}
            <p className="text-base text-neutral-800 dark:text-neutral-300 mt-5 ">
            Daniel founded Fulcrum Services after spending years inside systems that were never designed for the pressure they carried. Early work in crypto and digital assets led to an engagement with Ukraine’s Ministry of Digital Transformation, where global donations had to move quickly and safely into real procurement. Work with DeLorean Motor Company focused on giving a legendary brand a modern digital backbone. Collaboration with American Express and Resy exposed the team to the demands of a global payments platform where downtime is not an option. The mission is simple: help organizations that carry real responsibility use modern technology in a grounded, measurable, and honest way. No theater. No buzzwords. Just clear systems that make the next decision easier and safer to take.
            </p>
          </div>
        </div>
      </ComponentTransition>
      <ComponentTransition delay={0.1} className=" py-5 md:basis-[35%] gap-5 h-full grow ">
        <div className="w-full px-10 py-10 h-full grow bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
          <TbDeviceVisionPro size={50} />
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Vision
          </h1>
          <p className="text-base text-neutral-800 dark:text-neutral-300 mt-5 grow">
          Fulcrum Services does not exist to chase every new tool. It exists to help a small number of important teams build the systems that will quietly run the next few decades. The most meaningful part of the Fourth Industrial Revolution is the ability to see your environment as a living system, model it faithfully, and test new futures before you choose one. We imagine a world where a university provost, a mobility operator, a platform executive, or a government minister can sit in front of a clear model of their domain and understand it at a glance. They can explore scenarios, see tradeoffs, and trust that the software respects both the math and the politics. Fulcrum Services exists to build those systems and to teach teams how to live with them.
          </p>
        </div>
        <div className=" overflow-hidden mt-10  bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
        <div className=" rounded-3xl overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1637792566284-67454a001370?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Header Image"
          width={400}
          height={200}
          priority
          className="w-full h-auto object-cover rounded-3xl"
          />
          </div>
        </div>
      </ComponentTransition>
      <OurTeam/>

    </div>
  );
};

export default CardAbout;
