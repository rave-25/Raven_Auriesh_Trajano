"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtn from "@/components/WorkSliderBtn";

const projects = [
  {
    num: "01",
    category: "backend",
    title: "Binance Investing Dashboard",
    description: "The project is about <span class='highlight'>a one-stop app for all your investing needs</span>. This app connects to the Binance personal API to summarize the necessary details for observing investment actions and determining whether each coin is gaining or losing. It saves data in its own database and uses machine learning to forecast future values, helping users set take-profit and stop-loss points.",
    stack: [{ name: "Python 3" }, { name: "Django" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/rave-25/Finster",
  },
  {
    num: "02",
    category: "frontend",
    title: "Rakuten Landing Page",
    description: "Another example of using vanilla HTML and CSS to fully grasp fundamental concepts in front-end programming.",
    stack: [{ name: "Html" }, { name: "Css" }],
    image: "/assets/work/thumb2.png",
    live: "https://rave-25.github.io/Company-2-Landing-Page/",
    github: "https://github.com/rave-25/Company-2-Landing-Page",
  },
  {
    num: "03",
    category: "frontend",
    title: "Yamato Landing Page",
    description:  "I developed a landing page using pure HTML, CSS, and JavaScript, focusing on <span class='highlight'>traditional coding best practices</span>. The page features a dynamic sliding picture gallery implemented with JavaScript, and it is fully optimized for both mobile and web views, ensuring a seamless user experience across devices.",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "https://rave-25.github.io/Company-1-Landing-Page/",
    github: "https://github.com/rave-25/Company-1-Landing-Page",
  },
  {
    num: "04",
    category: "frontend",
    title: "Pomodoro App",
    description: "A React.js app that allows users to set their focus time, short break, and long break durations in minutes. Users can also add items to their to-do list and set focus time for each item on the list.",
    stack: [{ name: "React Js" }, { name: "Material Ui" }],
    image: "/assets/work/thumb4.png",
    live: "",
    github: "https://github.com/rave-25/promodoro",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <p className="text-white  text-2xl mb-20 text-center">Here are some personal projects I've worked on during my free time.</p>

        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[25px] h-[50%]">
              {/*outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/*project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/*project title */}
              <p className="text-white/60 text-[22px] font-medium">{project.title}</p>
              {/*project description */}
              <p className="text-white/60" dangerouslySetInnerHTML={{ __html: project.description }}></p>
              {/*stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/*remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>

              {/*buttons */}
              <div className="flex items-center gap-4">
                {/*live project button */}
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*github project button */}
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative roup flex justify-center items-center bg-pink-50/20">
                      {/*overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtn
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
