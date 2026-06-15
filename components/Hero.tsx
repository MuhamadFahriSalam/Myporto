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

              {/* Background Blur */}
              <div className="absolute -inset-6 bg-blue-200/20 rounded-[40px] blur-3xl"></div>

              {/* Profile Image */}
              <div className="relative overflow-hidden rounded-[32px] shadow-2xl border-4 border-white">

                <Image
                  src="/images/profile2.jpg"
                  alt="Muhamad Fahri Salam"
                  width={430}
                  height={620}
                  priority
                  className="
                    w-[320px]
                    md:w-[420px]
                    h-auto
                    object-cover
                    hover:scale-105
                    duration-500
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}