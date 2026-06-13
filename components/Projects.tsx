export default function Projects() {
  const projects = [
    {
      title: "Human Resource System",
      tech: "Laravel • Ionic • MySQL",
      description:
        "Aplikasi pengelolaan karyawan dengan fitur autentikasi, absensi, dan manajemen data pegawai.",
    },
    {
      title: "CleanApp",
      tech: "Laravel • Mobile App",
      description:
        "Platform pelaporan dan pengelolaan kegiatan kebersihan lingkungan.",
    },
    {
      title: "Bus Ticket Reservation System",
      tech: "PHP • MySQL",
      description:
        "Sistem pemesanan tiket bus berbasis web dengan fitur pemesanan dan pembayaran.",
    },
    {
      title: "YOLO Vehicle Detection",
      tech: "Python • YOLOv8",
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

              <p className="text-blue-900 mb-4">
                {project.tech}
              </p>

              <p className="text-slate-600 leading-7">
                {project.description}
              </p>

              <div className="flex gap-4 mt-6">

                <button className="bg-blue-900 text-white px-5 py-2 rounded-xl hover:bg-blue-800">
                  GitHub
                </button>

                <button className="border border-blue-900 text-blue-900 px-5 py-2 rounded-xl hover:bg-blue-900 hover:text-white">
                  Demo
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}