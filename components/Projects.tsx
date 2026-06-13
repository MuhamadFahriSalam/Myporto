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
    <section id="projects" className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-blue-500 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:-translate-y-2 duration-300"
            >
              <h3 className="text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-blue-400 mb-4">
                {project.tech}
              </p>

              <p className="text-slate-300 leading-7">
                {project.description}
              </p>

              <div className="flex gap-4 mt-6">

                <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
                  GitHub
                </button>

                <button className="border border-blue-500 px-5 py-2 rounded-lg hover:bg-blue-500">
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