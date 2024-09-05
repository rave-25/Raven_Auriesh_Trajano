"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// About Data
const about = {
  title: "About me",
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Raven Auriesh"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+63)9269440682"
    },
    {
      fieldName: "Email",
      fieldValue: "raven.reyes250@gmail.com"
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years"
    },
    {
      fieldName: "Address",
      fieldValue: "Manila, Philippines"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Fillipino"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Filipino"
    },
  ]
}
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
      duration: "Jul 2023 - Present"
    },
    {
      company: "Algoforce Inc.",
      position: "Software Engineer",
      duration: "Dec 2022 - June 2023"
    },
    {
      company: "Transcosmos Inc.",
      position: "Front End Developer",
      duration: "Oct 2021 - Nov 2022"
    },
    {
      company: "Impact Hub Manila",
      position: "Software Enineer Intern",
      duration: "Aug 2021 - Oct 2021"
    },
  ]
}
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
    }
  ]
}
// Skills Data
const skills = {
  title: "My skills",
  description: 
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "html 5"
    },
    {
      icon: <FaCss3/>,
      name: "css 3"
    },
    {
      icon: <FaJs/>,
      name: "javascript"
    },
    {
      icon: <FaReact/>,
      name: "react.js"
    },
    {
      icon: <SiNextdotjs/>,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwind.css"
    },
    {
      icon: <FaFigma/>,
      name: "figma"
    },
    {
      icon: <FaPython/>,
      name: "python"
    },
  ]
}

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
    <div>Resume</div>
  )
}

export default Resume