import Link from "next/link";
export default function Projects() {
  const projects = [
    {
      title: "Human Resource System",
      link: "/projects/human-resource-system",
      description:
        "Aplikasi pengelolaan karyawan dengan fitur autentikasi, absensi, dan manajemen data pegawai.",
    },
    {
      title: "CleanApp",
      link: "/projects/cleanapp",
      description:
        "Platform pelaporan dan pengelolaan kegiatan kebersihan lingkungan.",
    },
    {
      title: "Form & Quiz System",
      link: "/projects/foquz",
      description:
        "Sistem berbasis web yang dikembangkan untuk memfasilitasi pengisian formulir dan pelaksanaan quiz secara online, dilengkapi dengan fitur validasi data dan evaluasi hasil secara otomatis.",
    },
    {
      title: "YOLO Vehicle Detection",
      link: "/projects/yolo-vehicle-detection",
      description:
        "Model deep learning untuk mendeteksi kendaraan pickup dan truck.",
    },
  ];

  return (
    <section id="projects" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white p-8 rounded-3xl shadow-md border border-slate-200 hover:-translate-y-2 duration-300"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {project.title}
              </h3>

              <p className="text-slate-600 leading-7">
                {project.description}
              </p>
             
              {/* Tombol Detail */}
              <div className="flex gap-4 mt-6">
                <Link
                  href={project.link}
                  className="
                    border
                    border-blue-900
                    text-blue-900
                    px-5
                    py-2
                    rounded-xl
                    hover:bg-blue-900
                    hover:text-white
                    duration-300
                  "
                >
                  Detail Project
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}