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
          Simulation / Analytics / Digital Twins / Optimization
        </p>
      </div>
      <div className="py-10 mt-20 flex gap-10 justify-center flex-row flex-wrap relative">
        <div className="absolute  z-[-9] glowbg w-[100%] md:w-[500px] h-[400px]  left-0 "></div>
        <ComponentTransition className="w-full overflow-hidden px-10 py-5 md:basis-[30%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
          <WiDayCloudy size={50} />
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Graduation Feasibility
          </h1>
          <h2 className="text-sm text-neutral-800 dark:text-neutral-300">
            Student Success First
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-4">
            Ensure every major has a clear path to graduation. We analyze course offerings against degree requirements to find and fix impossible conflicts.
          </p>
        </ComponentTransition>
        <ComponentTransition
          delay={0.2}
          className="w-full h-auto md:h-[300px] md:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="/solution1.png"
            alt="Graduation Feasibility"
            width={400}
            height={400}
            loading="lazy"
            className="w-full object-cover scale-110"
          />
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="/solution2.png"
            alt="Policy Simulation"
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-[280px] object-cover scale-110"
          />
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-neutral-950 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <FaCode size={40} />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Policy Simulation
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            Test Before You Deploy
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
            Simulate the impact of scheduling changes like prime-time limits on room usage and student bottlenecks.
          </p>
        </ComponentTransition>

        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  px-10 py-5 md:basis-[30%] relative overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <div className="absolute  glowbg inset-0  left-0 "></div>
          <FaCode size={40} />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Resource Alignment
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            Optimize Space
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
            Match classroom inventory to actual pedagogical needs across all colleges and departments.
          </p>
        </ComponentTransition>
        <ComponentTransition
          delay={0.2}
          className="w-full h-auto md:h-[300px] md:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="/solution.png"
            alt="Resource Alignment"
            width={400}
            height={400}
            loading="lazy"
            className="w-full object-cover scale-110"
          />
        </ComponentTransition>
        <ComponentTransition className="w-full overflow-hidden px-10 py-5 md:basis-[30%] h-[300px] bg-neutral-100 dark:bg-neutral-950/50 backdrop-blur-sm border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl">
          <WiDayCloudy size={50} />
          <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Physical Constraints
          </h1>
          <h2 className="text-sm text-neutral-800 dark:text-neutral-300">
            Campus Digital Twin
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-4">
            Model walking times between buildings to ensure back-to-back classes are physically feasible for students.
          </p>
        </ComponentTransition>

      
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <Image
            src="/img.png"
            alt="Header Image"
            width={400}
            height={400}
            loading="lazy"
            className="w-full h-[280px] object-cover scale-110"
          />
        </ComponentTransition>
        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-neutral-950 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <FaCode size={40} />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Data Analytics
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            Actionable Insights
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
            Transform complex campus data into clear, actionable strategies for growth.
          </p>
        </ComponentTransition>

        <ComponentTransition
          delay={0.1}
          className="w-full h-[250px]  px-10 py-5 md:basis-[30%] relative overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
        >
          <div className="absolute  glowbg inset-0  left-0 "></div>
          <FaCode size={40} />
          <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
            Digital Twin Platform
          </h1>
          <h2 className="text-sm text-neutral-700 dark:text-neutral-300">
            Campus Simulation
          </h2>
          <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
            A comprehensive digital model of programs, schedules, rooms, and buildings.
          </p>
        </ComponentTransition>


        <Feedback className='!px-0' />
      </div>
      <CardOffer title='Ready To Get Started!' className="!px-0" />
    </ComponentTransition>
  );
}
