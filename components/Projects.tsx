import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Human Resource System",
      category: "Web Application",
      image: "/images/hr/hero-hr.jpg",
      link: "/projects/human-resource-system",
      description:
        "Aplikasi pengelolaan karyawan dengan fitur autentikasi, absensi, dan manajemen data pegawai.",
    },
    {
      title: "CleanApp",
      category: "Web Application",
      image: "/images/cleanapp/cleanup.png",
      link: "/projects/cleanapp",
      description:
        "Platform pelaporan dan pengelolaan kegiatan kebersihan lingkungan.",
    },
    {
      title: "Form & Quiz System",
      category: "Web Application",
      image: "/images/foquz/hero-foquz.jpg",
      link: "/projects/foquz",
      description:
        "Sistem berbasis web yang dikembangkan untuk memfasilitasi pengisian formulir dan pelaksanaan quiz secara online.",
    },
    {
      title: "YOLO Vehicle Detection",
      category: "Deep Learning",
      image: "/images/yolo/yolo.jpg",
      link: "/projects/yolo-vehicle-detection",
      description:
        "Model deep learning untuk mendeteksi kendaraan pickup dan truck.",
    },
  ];

  return (
    <section id="projects" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-5xl font-bold text-blue-900 mb-3">
            Projects
          </h2>

          <p className="text-slate-500 text-lg">
            Some projects that I have developed.
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div
          className="
            flex
            gap-6
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            pb-6
            scrollbar-hide
          "
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group
                min-w-[280px]
                md:min-w-[320px]
                max-w-[320px]
                bg-white
                rounded-[28px]
                overflow-hidden
                border border-slate-200
                shadow-sm
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all duration-500
                snap-center
                shrink-0
              "
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={400}
                  className="
                    w-full
                    h-40
                    object-cover
                    transition duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col min-h-[220px]">

                {/* Category */}
                <span className="text-xs font-medium text-red-700 mb-2">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-6 text-slate-600 flex-grow">
                  {project.description}
                </p>

                {/* Button */}
                <Link
                  href={project.link}
                  className="flex items-center gap-3 mt-6 group/link"
                >
                  <div
                    className="
                      w-9 h-9
                      rounded-xl
                      bg-blue-600
                      text-white
                      flex
                      items-center
                      justify-center
                      shadow-md
                      transition-all
                      duration-300
                      group-hover/link:translate-x-1
                    "
                  >
                    →
                  </div>

                  <span className="text-base font-semibold text-blue-900">
                    Detail
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}