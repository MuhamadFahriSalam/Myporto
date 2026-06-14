import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 items-center gap-16">

          {/* Kiri */}
          <div>

            <p className="text-blue-900 text-lg font-medium mb-2">
              Halo, saya
            </p>

            <h1 className="text-6xl font-bold text-slate-900 mb-4">
              Muhamad Fahri Salam
            </h1>

            <h2 className="text-3xl text-slate-600 mb-6">
              Frontend Developer | Mobile Developer
            </h2>

            <p className="max-w-2xl text-slate-600 leading-8 mb-8">
              Saya adalah mahasiswa Teknik Informatika yang tertarik pada
              pengembangan web, mobile, dan Artificial Intelligence.
              Saya memiliki pengalaman menggunakan Laravel, Ionic,
              Angular, Next.js, dan MySQL dalam membangun berbagai proyek.
            </p>

            <div className="flex gap-5">

              <button className="bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-800 duration-300">
                Download CV
              </button>

              <button className="border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-xl hover:bg-blue-900 hover:text-white duration-300">
                Hubungi Saya
              </button>

            </div>

          </div>

          {/* Kanan */}
          <div className="flex justify-center">

            <div className="relative">

              {/* Background lingkaran */}
              <div className="absolute inset-0 bg-blue-100 rounded-full scale-110"></div>

              {/* Foto */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">

                <Image
                  src="/images/profile.png"
                  alt="Muhamad Fahri Salam"
                  fill
                  className="object-cover"
                  priority
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}