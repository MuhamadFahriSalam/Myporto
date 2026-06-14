import Image from "next/image";
import Link from "next/link";

export default function FoQuz() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full font-medium">
                Featured Project
              </span>

              <h1 className="text-5xl font-bold text-slate-900 mt-6 mb-5">
                Form & Quiz System
              </h1>

              <p className="text-slate-600 leading-8">
                Sistem berbasis web yang dirancang untuk memudahkan
                pengelolaan formulir, survey, dan quiz secara online.
                Sistem menyediakan fitur manajemen soal, pengisian form,
                serta monitoring hasil secara terintegrasi.
              </p>

              <div className="mt-8">
                <Link
                  href="/"
                  className="px-6 py-3 bg-blue-900 text-white rounded-xl font-medium shadow-md hover:bg-blue-800 transition"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>

            <div>
              <Image
                src="/images/foquz/hero-foquz.jpg"
                alt="FoQuz"
                width={800}
                height={500}
                className="rounded-3xl shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-blue-900 mb-10">
            Project Overview
          </h2>

          <p className="text-slate-600 leading-8">
            Form & Quiz System merupakan sistem berbasis web yang
            digunakan untuk membuat dan mengelola berbagai jenis
            form, survey, dan quiz secara terpusat. Sistem ini
            memudahkan pengguna dalam mengisi form dan membantu
            administrator dalam mengelola data serta memonitor
            hasil pengisian secara real-time.
          </p>

        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-blue-900 mb-12">
            Main Features
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-2xl text-xl">
                📝
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Form Management
                </h3>

                <p className="text-sm text-slate-500">
                  Create and manage digital forms.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-2xl text-xl">
                📋
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Survey Management
                </h3>

                <p className="text-sm text-slate-500">
                  Create surveys and collect responses.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-2xl text-xl">
                🧠
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Quiz Management
                </h3>

                <p className="text-sm text-slate-500">
                  Manage online quizzes and questions.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-2xl text-xl">
                👥
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  User Dashboard
                </h3>

                <p className="text-sm text-slate-500">
                  Access forms and quizzes easily.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-2xl text-xl">
                📊
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Result Monitoring
                </h3>

                <p className="text-sm text-slate-500">
                  Monitor responses and quiz results.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 hover:shadow-lg transition">
              <div className="bg-blue-100 p-3 rounded-2xl text-xl">
                🔒
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Authentication System
                </h3>

                <p className="text-sm text-slate-500">
                  Secure access for users and administrators.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Application Screenshots */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-blue-900 mb-3">
            Application Screenshots
          </h2>

          <p className="text-slate-600 mb-10">
            Several interfaces of the Form & Quiz System.
          </p>

          <div className="grid lg:grid-cols-2 gap-6">

            {/* Landing Page */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition">
              <Image
                src="/images/foquz/hero-foquz.jpg"
                alt="Landing Page"
                width={1200}
                height={700}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Landing Page
                </h3>

                <p className="text-slate-600 text-sm leading-7">
                  Halaman utama yang memperkenalkan platform
                  untuk pengelolaan form dan quiz.
                </p>
              </div>
            </div>

            {/* Dashboard */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition">
              <Image
                src="/images/foquz/pengisian-foquz.png"
                alt="Dashboard"
                width={1200}
                height={700}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  User Dashboard
                </h3>

                <p className="text-slate-600 text-sm leading-7">
                  Dashboard yang menampilkan daftar form
                  dan quiz yang tersedia.
                </p>
              </div>
            </div>

            {/* Form Page */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition">
              <Image
                src="/images/foquz/form.png"
                alt="Form Page"
                width={1200}
                height={700}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Form Page
                </h3>

                <p className="text-slate-600 text-sm leading-7">
                  Halaman pengisian form yang memungkinkan
                  pengguna mengisi data secara terstruktur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}