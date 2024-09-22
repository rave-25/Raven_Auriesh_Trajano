"use client";
import { useState } from "react";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "With 3+ years of experience in web development, I’ve built a strong skill set in both front-end and back-end development. My focus is on designing intuitive, visually appealing user experiences while ensuring the back-end is robust and efficient. I’m always eager to take on new challenges and grow my expertise. Collaborative by nature, I’m dedicated to delivering high-quality digital solutions and continuously refining my approach to stay adaptable in an ever-evolving field.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I offer professional UI/UX design services with a focus on creating intuitive, user-centered designs that enhance the digital experience. With expertise in Figma and Photoshop, I craft visually appealing interfaces and use wireframing techniques to optimize user experience. From initial concepts to final designs, I ensure a seamless blend of creativity and functionality, delivering designs that engage and delight users.",
    href: "",
  },
  {
    num: "03",
    title: "Business Analysis",
    description:
      "I provide comprehensive business analysis services to help organizations streamline their processes and achieve strategic goals. With experience in creating detailed documentation for requirement gathering, planning, and analysis, I offer insights that drive effective decision-making and project success. My approach combines thorough analysis with clear, actionable plans, ensuring that every project aligns with your business objectives and delivers measurable results.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I offer expert SEO services designed to enhance your online visibility and drive targeted traffic to your website. With a strategic approach to search engine optimization, I conduct comprehensive audits, keyword research, and on-page and off-page optimization to improve your search engine rankings. My services include optimizing content, improving site structure, and building high-quality backlinks to ensure your website not only attracts visitors but also converts them into loyal customers. Let me help you achieve sustainable growth and reach your digital marketing goals through effective SEO strategies.",
    href: "",
  },
];

const Services = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            const isExpanded = expanded[index];
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/*top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-accent transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-accent group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/*title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/*description */}
                <div
                  className={`transition-all duration-500 ${
                    isExpanded ? "h-auto" : "h-[60px] overflow-hidden"
                  }`}
                >
                  <p className="text-white/60">{service.description}</p>
                  {/* Read More/Read Less Button */}
                </div>
                {/*border */}
                <div className="border-b border-white/20 w-full"></div>
                <div className="flex justify-end">
                  <button
                    className="text-accent group-hover:border-b-2 hover:font-extrabold hover:border-accent"
                    onClick={() => toggleExpand(index)}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
