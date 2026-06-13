export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-blue-500 mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Kiri */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Siapa Saya?
            </h3>

            <p className="text-slate-300 leading-8">
              Saya adalah mahasiswa Teknik Informatika yang memiliki
              minat dalam pengembangan Web, Mobile, dan Artificial
              Intelligence. Saya memiliki pengalaman menggunakan
              Laravel, Next.js, Ionic, Angular, dan MySQL dalam
              membangun berbagai proyek.
            </p>
          </div>

          {/* Kanan */}
          <div className="space-y-5">

            <div className="bg-slate-800 p-5 rounded-xl">
              <h4 className="font-semibold text-blue-400">
                Nama
              </h4>

              <p className="text-slate-300">
                Muhamad Fahri Salam
              </p>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl">
              <h4 className="font-semibold text-blue-400">
                Pendidikan
              </h4>

              <p className="text-slate-300">
                S1 Teknik Informatika
              </p>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl">
              <h4 className="font-semibold text-blue-400">
                Bidang
              </h4>

              <p className="text-slate-300">
                Web Development, Mobile Development, AI
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}