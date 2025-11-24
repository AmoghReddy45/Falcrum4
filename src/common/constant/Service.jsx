import { CiShop } from "react-icons/ci";
import { FaConnectdevelop, FaPager, FaPiedPiper } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoIosSchool } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { MdAnimation } from "react-icons/md";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";

const size = 35

export const Services = [
  {
    icon: (
      <IoIosSchool
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
        
      />
    ),
    title: "Graduation Feasibility Analysis",
    desc: "Analyze historical schedules and program requirements to ensure students can graduate in 4 years without impossible conflicts.",
  },
  {
    icon: (
      <MdAnimation
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Policy Experiments & Simulation",
    desc: "Simulate policy changes, such as prime-time limits, to measure their impact on student bottlenecks and graduation rates.",
  },
  {
    icon: (
      <FaConnectdevelop
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Campus Logistics Digital Twin",
    desc: "A comprehensive digital model of programs, schedules, rooms, and buildings to visualize and optimize campus operations.",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Classroom & Resource Alignment",
    desc: "Assess if schools have the right seats in the right buildings, and determine where reassignment or central management is needed.",
  },
  {
    icon: (
      <IoDiamondOutline
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Physical Walking Constraints",
    desc: "Model building locations and travel times to identify and prevent physically impossible back-to-back class schedules.",
  },
];

export const ServiceItem = [
  {
    text1: 'Model:',
    text2: 'Digital Twin Creation',
    title: 'Campus Digital Twin',
    Goal: 'Create a high-fidelity digital replica of your campus, including buildings, rooms, and course schedules.',
    Impact: 'Provides a foundational data layer for accurate simulation and analysis of campus logistics.',
    icon : <FaConnectdevelop className="h-8 w-8 mb-4 dark:text-white text-black place-self-start " />
  },
  {
    text1: 'Analyze:',
    text2: 'Feasibility Assessment',
    title: 'Graduation Feasibility',
    Goal: `Determine if students can realistically meet degree requirements under current scheduling constraints.`,
    Impact: 'Identifies systemic conflicts preventing on-time graduation, allowing for targeted intervention.',
    icon : <IoIosSchool className="h-8 w-8 mb-4 dark:text-white text-black place-self-start  " />
  },
  {
    text1: 'Simulate:',
    text2: 'Policy Experimentation',
    title: 'Scheduling Simulations',
    Goal: `Test hypothetical scheduling policies (e.g., prime-time restrictions) before implementation.`,
    Impact: 'Reduces risk by predicting the outcomes of policy changes on student access and resource utilization.',
    icon : <MdAnimation className="h-8 w-8 mb-4 dark:text-white text-black place-self-start  " />
  },
  {
    text1: 'Optimize:',
    text2: 'Resource Allocation',
    title: 'Classroom Alignment',
    Goal: `Match physical resources (seats, rooms) to actual academic demand across departments.`,
    Impact: 'Maximizes space utilization and ensures that room assignments support pedagogical needs.',
    icon : <MdOutlineAutoAwesomeMotion className="h-8 w-8 mb-4 dark:text-white text-black place-self-start  " />
  },
  {
    text1: 'Refine:',
    text2: 'Physical Constraints',
    title: 'Logistics Modeling',
    Goal: `Incorporate travel times and physical distances into schedule validation.`,
    Impact: 'Eliminates "impossible" schedules where students cannot physically travel between classes in time.',
    icon : <IoDiamondOutline className="h-8 w-8 mb-4 dark:text-white text-black place-self-start  " />
  },
  {
    text1: 'Evolve:',
    text2: 'Continuous Improvement',
    title: 'Adaptive Operations',
    Goal: `Use the digital twin to continuously adapt to changing enrollment numbers and program requirements.`,
    Impact: `Ensures that campus logistics remain efficient and student-centric as the institution grows and changes.`,
    icon : <ImProfile className="h-8 w-8 mb-4 dark:text-white text-black place-self-start  " />
  },
  

];
