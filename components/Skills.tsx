"use client";

import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiLaravel,
  SiNextdotjs,
  SiIonic,
  SiAngular,
  SiMysql,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 size={42} className="text-orange-500" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt size={42} className="text-blue-500" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs size={42} className="text-yellow-400" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={42} className="text-blue-600" />,
    },
    {
      name: "PHP",
      icon: <FaPhp size={42} className="text-indigo-500" />,
    },
    {
      name: "Laravel",
      icon: <SiLaravel size={42} className="text-red-500" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={42} className="text-black" />,
    },
    {
      name: "React",
      icon: <FaReact size={42} className="text-cyan-500" />,
    },
    {
      name: "Ionic",
      icon: <SiIonic size={42} className="text-blue-600" />,
    },
    {
      name: "Angular",
      icon: <SiAngular size={42} className="text-red-600" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql size={42} className="text-sky-600" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt size={42} className="text-orange-600" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub size={42} className="text-slate-800" />,
    },
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="skills"
      className="
        py-24
        overflow-hidden

        bg-gradient-to-br
        from-slate-50
        via-blue-50
        to-slate-100
      "
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl font-bold text-blue-900 mb-3">
            Skills
          </h2>

          <p className="text-slate-500 text-lg">
            Technologies and tools that I frequently use.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative py-5 overflow-hidden"
        >
          {/* Blur kiri */}
          <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent z-10"></div>

          {/* Blur kanan */}
          <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-slate-50 via-slate-50/70 to-transparent z-10"></div>

          <div
            className="
              flex
              items-center
              gap-6
              whitespace-nowrap
              animate-scroll
              will-change-transform
              hover:[animation-play-state:paused]
            "
          >
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="
                  group
                  min-w-[160px]
                  bg-white/80
                  backdrop-blur-sm
                  rounded-3xl
                  border border-slate-200
                  p-7

                  flex
                  flex-col
                  items-center
                  gap-4

                  shadow-sm

                  hover:-translate-y-2
                  hover:bg-blue-50
                  hover:border-blue-200
                  hover:shadow-2xl

                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    transition
                    duration-300
                    group-hover:scale-110
                  "
                >
                  {skill.icon}
                </div>

                <h3 className="text-lg font-semibold text-slate-700">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}