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
      <FaConnectdevelop
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Executive Briefings",
    desc: "Short, focused sessions that cut through hype and show what AI, data, and infrastructure can really do inside your environment.",
  },
  {
    icon: (
      <ImProfile
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Capability Building",
    desc: "Workshops and working sessions that level up internal teams on digital twins, optimization, product thinking, and data governance so they can build with us.",
  },
  {
    icon: (
      <IoDiamondOutline
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Systems and Technology Audits",
    desc: "An honest map of how systems, data, and processes really work today with clear points of failure, duplication, and leverage.",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Strategy and Roadmapping",
    desc: "Collaborative strategy that turns the audit into a focused blueprint tied to measurable outcomes and sequenced initiatives.",
  },
  {
    icon: (
      <MdAnimation
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Project Delivery & Program Management",
    desc: "Hands-on support to design, build, and launch prototypes, internal tools, production platforms, and the governance around them.",
  },
];

export const ServiceItem = [
  {
    text1: 'Initiate:',
    text2: 'Awareness and Alignment',
    title: 'Executive Briefings',
    Goal: 'Give decision makers a clear view of what is possible in their context, using concrete examples from automotive, government, and platform work.',
    Impact: 'Creates a shared language at the top of the organization and aligns everyone on the problems that matter before money is spent.',
    icon : <FaConnectdevelop className="h-8 w-8 mb-4 dark:text-white text-black place-self-start " />
  },
  {
    text1: 'Empower:',
    text2: 'Targeted Capability Building',
    title: 'Capability Building',
    Goal: `Equip internal teams with the mental models and practical skills needed to participate in AI, data, and systems work.`,
    Impact: 'Builds a core group inside the organization that can carry the work forward and reduces long-term vendor dependency.',
    icon : <ImProfile className="h-8 w-8 mb-4 dark:text-white text-black place-self-start  " />
  },
  {
    text1: 'Strategize:',
    text2: 'Blueprint and Alignment',
    title: 'Strategic Blueprint',
    Goal: `Translate findings into a clear architecture and roadmap with integration patterns and a deliverable sequence.`,
    Impact: 'Replaces scattered initiatives with a single plan leadership can fund and measure against.',
    icon : <IoIosSchool className="h-8 w-8 mb-4 dark:text-white text-black place-self-start  " />
  },
  {
    text1: 'Implement:',
    text2: 'Delivery and Integration',
    title: 'Project Delivery',
    Goal: `Turn the blueprint into running systems, whether a campus capacity model, vehicle twin, or new FastAPI services.`,
    Impact: 'Delivers visible wins that matter to operators and users and proves the value of the strategy.',
    icon : <MdOutlineAutoAwesomeMotion className="h-8 w-8 mb-4 dark:text-white text-black place-self-start  " />
  },
  {
    text1: 'Optimize:',
    text2: 'Continuous Stewardship',
    title: 'Ongoing Stewardship',
    Goal: `Monitor how systems behave, adjust parameters, refine models, and expand usage as the organization evolves.`,
    Impact: 'Prevents new infrastructure from becoming shelfware and keeps teams near the edge of what is possible.',
    icon : <IoDiamondOutline className="h-8 w-8 mb-4 dark:text-white text-black place-self-start  " />
  },
  {
    text1: 'Iterate:',
    text2: 'Feedback and Next Moves',
    title: 'Review and Iterate',
    Goal: `Use feedback from projects and operations to refine the blueprint and select the next high leverage initiatives.`,
    Impact: `Creates a culture of continuous improvement where each cycle compounds knowledge, capability, and advantage.`,
    icon : <MdAnimation className="h-8 w-8 mb-4 dark:text-white text-black place-self-start  " />
  },
];
