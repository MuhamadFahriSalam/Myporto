export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-blue-900 mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-5">
              Siapa Saya?
            </h3>

            <p className="text-slate-700 leading-8">
              Saya adalah mahasiswa Teknik Informatika yang memiliki
              minat dalam pengembangan Web, Mobile, dan Artificial
              Intelligence. Saya memiliki pengalaman menggunakan
              Laravel, Next.js, Ionic, Angular, dan MySQL dalam
              membangun berbagai proyek.
            </p>
          </div>

          <div className="space-y-5">

            <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-200">
              <h4 className="font-semibold text-blue-900">
                Nama
              </h4>

              <p className="text-slate-600">
                Muhamad Fahri Salam
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-200">
              <h4 className="font-semibold text-blue-900">
                Pendidikan
              </h4>

              <p className="text-slate-600">
                S1 Teknik Informatika
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md border border-slate-200">
              <h4 className="font-semibold text-blue-900">
                Bidang
              </h4>

              <p className="text-slate-600">
                Web Development, Mobile Development, AI
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}