export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Laravel",
    "Next.js",
    "React",
    "Ionic",
    "Angular",
    "MySQL",
    "Git",
    "GitHub",
  ];

  return (
    <section
      id="skills"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-50 rounded-2xl p-6 text-center shadow-md border border-slate-200 hover:-translate-y-2 hover:bg-blue-900 hover:text-white duration-300"
            >
              <h3 className="text-xl font-semibold">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}