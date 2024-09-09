"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// About Data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Raven Auriesh",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+63)9269440682",
    },
    {
      fieldName: "Email",
      fieldValue: "raven.reyes250@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Address",
      fieldValue: "Manila, Philippines",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Fillipino",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Filipino",
    },
  ],
};
// Experience Data
const experience = {
  icon: "",
  title: "My Experience",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus",
  items: [
    {
      company: "Accenture",
      position: "Advanced Application Engineer",
      duration: "Jul 2023 - Present",
    },
    {
      company: "Algoforce Inc.",
      position: "Software Engineer",
      duration: "Dec 2022 - June 2023",
    },
    {
      company: "Transcosmos Inc.",
      position: "Front End Developer",
      duration: "Oct 2021 - Nov 2022",
    },
    {
      company: "Impact Hub Manila",
      position: "Software Enineer Intern",
      duration: "Aug 2021 - Oct 2021",
    },
  ],
};
// Education Data
const education = {
  icon: "",
  title: "My education",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus",
  items: [
    {
      institution: "Adamson University",
      degree: "Bachelor of Science in Chemical Engineering",
      duration: "2015-2023",
    },
  ],
};
// Skills Data
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
  ],
};

//components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: 'easeIn' } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mxauto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/*content */}
          <div className="min-h-[70vh] w-full">
            {/*experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">{experience.items.map((item, index) => {
                  return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                    <span className="text-accent">{item.duration}</span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                    <div className="flex items-center gap-3">
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-white/60">{item.company}</p>
                    </div>
                  </li>
                })}</ul>
                </ScrollArea>
              </div>
            </TabsContent>
             {/*education */}
             <TabsContent value="education" className="w-full">education</TabsContent>
              {/*skills */}
            <TabsContent value="skills" className="w-full">skills</TabsContent>
             {/*about */}
             <TabsContent value="about" className="w-full">about</TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
