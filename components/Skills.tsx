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
      icon: <FaHtml5 size={40} className="text-orange-500" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt size={40} className="text-blue-500" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs size={40} className="text-yellow-400" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={40} className="text-blue-600" />,
    },
    {
      name: "PHP",
      icon: <FaPhp size={40} className="text-indigo-500" />,
    },
    {
      name: "Laravel",
      icon: <SiLaravel size={40} className="text-red-500" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={40} className="text-black" />,
    },
    {
      name: "React",
      icon: <FaReact size={40} className="text-cyan-500" />,
    },
    {
      name: "Ionic",
      icon: <SiIonic size={40} className="text-blue-600" />,
    },
    {
      name: "Angular",
      icon: <SiAngular size={40} className="text-red-600" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql size={40} className="text-sky-600" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt size={40} className="text-orange-600" />,
    },
    {
      name: "GitHub",
      icon: <FaGithub size={40} className="text-slate-800" />,
    },
  ];

  return (
    <section id="skills" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-blue-900 mb-3">
          Skills
        </h2>

        <p className="text-slate-500 mb-12">
          Technologies and tools that I frequently use.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                bg-white
                rounded-2xl
                p-8
                border
                border-slate-200
                shadow-sm
                flex
                flex-col
                items-center
                gap-4
                hover:-translate-y-2
                hover:shadow-xl
                duration-300
              "
            >
              {skill.icon}

              <h3 className="text-lg font-semibold text-slate-700">
                {skill.name}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}