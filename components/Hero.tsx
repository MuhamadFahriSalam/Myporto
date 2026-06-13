export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-blue-500 text-lg mb-2">
          Halo, saya
        </p>

        <h1 className="text-6xl font-bold mb-4">
          Muhamad Fahri Salam
        </h1>

        <h2 className="text-3xl text-slate-400 mb-6">
          Frontend Developer | Mobile Developer
        </h2>

        <p className="max-w-2xl text-slate-300 leading-8 mb-8">
          Saya adalah mahasiswa Teknik Informatika yang tertarik pada
          pengembangan web, mobile, dan Artificial Intelligence.
          Saya memiliki pengalaman menggunakan Laravel, Ionic,
          Angular, Next.js, dan MySQL dalam membangun berbagai proyek.
        </p>

        <div className="flex gap-5">

          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 duration-300">
            Download CV
          </button>

          <button className="border border-blue-500 px-6 py-3 rounded-lg hover:bg-blue-500 duration-300">
            Hubungi Saya
          </button>

        </div>

      </div>
    </section>
  );
}
