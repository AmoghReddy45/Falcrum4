import Image from "@/common/component/element/Image";
import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import { FaCode } from "react-icons/fa";
import ComponentTransition from "@/common/component/element/ComponentTransition";

const Card = () => {
  return (
    <div className="py-10 flex gap-10 justify-center flex-row flex-wrap relative">
      <div className="absolute  z-[-9] w-[100%] md:w-[500px] h-[400px]  left-0 "></div>

      <ComponentTransition
        delay={0.1}
        className="w-full  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        {/* <FaCode size={40} /> */}
        <h1 className="text-2xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Systems Visibility
        </h1>
        <p className="text-base text-neutral-700 dark:text-neutral-400 mt-5 md:line-clamp-2 lg:line-clamp-4 line-clamp-3">
        Whether it is graduation feasibility, factory throughput, or customer operations, we illuminate hidden constraints and show where targeted technology actually changes outcomes.
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.2}
        className="w-full h-[250px] md:basis-[65%] overflow-hidden bg-neutral-100 border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
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
        className="w-full h-auto object-cover md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="/solution2.png"
          alt="Policy Simulation"
          width={400}
          height={400}
          loading="lazy"
          className="w-auto h-auto object-cover scale-110"
        />
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        {/* <FaCode size={40} /> */}
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Policy Simulation
        </h1>

        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Test scheduling changes before implementation. See how prime-time limits affect room usage and student success.
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        {/* <FaCode size={40} /> */}
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Resource Alignment
        </h1>
        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Do you have the right rooms? We match seat inventory to actual pedagogical demand across all colleges.
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        {/* <FaCode size={40} /> */}
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Campus Digital Twin
        </h1>

        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Model physical walking constraints. We flag back-to-back classes that are physically impossible for students.
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  px-10 py-5 md:basis-[30%] overflow-hidden dark:bg-[#0a0a0a] border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        {/* <FaCode size={40} /> */}
        <h1 className="text-xl font-bold py-2 text-neutral-800 dark:text-neutral-100">
        Strategic Optimization
        </h1>

        <p className="text-sm text-neutral-700 line-clamp-2 dark:text-neutral-400 mt-3">
        Data-driven insights to optimize course offerings, room assignments, and student pathways.
        </p>
      </ComponentTransition>
      <ComponentTransition
        delay={0.1}
        className="w-full h-[250px]  md:basis-[30%] overflow-hidden  border-[1px] border-neutral-300 dark:border-neutral-700 rounded-3xl"
      >
        <Image
          src="/solution.png"
          alt="Header Image"
          width={400}
          height={400}
          loading="lazy"
          className="w-full h-auto object-cover scale-110"
        />
      </ComponentTransition>
    </div>
  );
};

export default Card;
