import Image from "next/image";
import Link from "next/link";
import {
  Search,
  UserPlus,
  FileText,
  BarChart3,
  Brain,
  Bell,
} from "lucide-react";

export default function HumanResourceSystem() {
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
                Human Resource System
              </h1>

              <p className="text-slate-600 leading-8">
                Sistem recruitment berbasis web yang dikembangkan
                selama kegiatan magang di PT AISIN Indonesia
                Automotive. Sistem ini membantu proses perekrutan
                pelamar mulai dari publikasi lowongan hingga
                monitoring status seleksi.
              </p>

                {/* Button */}
                <div className="flex gap-4 mt-8">
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
                src="/images/hr/hero-hr.jpg"
                alt="Human Resource System"
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
            Human Resource System merupakan sistem recruitment
            berbasis web yang bertujuan untuk mempermudah
            proses seleksi calon karyawan. Sistem menyediakan
            fitur pencarian lowongan, registrasi pelamar,
            upload dokumen, pelaksanaan quiz online,
            dan monitoring status seleksi secara real-time.
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
                🔍
                </div>

                <div>
                <h3 className="font-semibold text-slate-900">
                    Search Job Vacancies
                </h3>
                <p className="text-sm text-slate-500">
                    Browse available job positions.
                </p>
                </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 hover:shadow-lg transition">
                <div className="bg-blue-100 p-3 rounded-2xl text-xl">
                📝
                </div>

                <div>
                <h3 className="font-semibold text-slate-900">
                    Candidate Registration
                </h3>
                <p className="text-sm text-slate-500">
                    Register and create candidate accounts.
                </p>
                </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 hover:shadow-lg transition">
                <div className="bg-blue-100 p-3 rounded-2xl text-xl">
                📄
                </div>

                <div>
                <h3 className="font-semibold text-slate-900">
                    Upload Documents
                </h3>
                <p className="text-sm text-slate-500">
                    Upload CV and supporting documents.
                </p>
                </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 hover:shadow-lg transition">
                <div className="bg-blue-100 p-3 rounded-2xl text-xl">
                📊
                </div>

                <div>
                <h3 className="font-semibold text-slate-900">
                    Recruitment Status Monitoring
                </h3>
                <p className="text-sm text-slate-500">
                    Track recruitment progress in real time.
                </p>
                </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 hover:shadow-lg transition">
                <div className="bg-blue-100 p-3 rounded-2xl text-xl">
                🧠
                </div>

                <div>
                <h3 className="font-semibold text-slate-900">
                    Online Quiz
                </h3>
                <p className="text-sm text-slate-500">
                    Conduct psychotest and online assessments.
                </p>
                </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 hover:shadow-lg transition">
                <div className="bg-blue-100 p-3 rounded-2xl text-xl">
                📧
                </div>

                <div>
                <h3 className="font-semibold text-slate-900">
                    Notification System
                </h3>
                <p className="text-sm text-slate-500">
                    Receive recruitment updates automatically.
                </p>
                </div>
            </div>

            </div>
        </div>
    </section>


    {/* Application Screenshots */}
    <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-8">

            <h2 className="text-4xl font-bold text-blue-900 mb-3">
            Application Screenshots
            </h2>

            <p className="text-slate-600 mb-12">
            Several interfaces of the Human Resource System developed during the internship.
            </p>

            <div className="grid lg:grid-cols-2 gap-10">

            {/* Halaman Lowongan */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200">
                <Image
                src="/images/hr/lowongan-user.png"
                alt="Job Vacancy Page"
                width={1200}
                height={700}
                className="w-full object-cover"
                />

                <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    Job Vacancy Page
                </h3>

                <p className="text-slate-600 leading-7">
                    Halaman yang digunakan pelamar untuk melihat daftar lowongan,
                    melakukan pencarian posisi, serta mengakses detail lowongan.
                </p>
                </div>
            </div>

            {/* Landing Page */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200">
                <Image
                src="/images/hr/hero-hr.jpg"
                alt="Landing Page"
                width={1200}
                height={700}
                className="w-full object-cover"
                />

                <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    Landing Page
                </h3>

                <p className="text-slate-600 leading-7">
                    Halaman utama sistem recruitment yang menampilkan informasi
                    perusahaan dan proses pendaftaran pelamar.
                </p>
                </div>
            </div>

            {/* Administrative Selection */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200">
                <Image
                src="/images/hr/halaman-administrative.png"
                alt="Administrative Selection"
                width={1200}
                height={700}
                className="w-full object-cover"
                />

                <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    Administrative Selection
                </h3>

                <p className="text-slate-600 leading-7">
                    Dashboard HRD untuk melakukan seleksi administrasi terhadap
                    kandidat yang melamar pekerjaan.
                </p>
                </div>
            </div>

            {/* Online Psychotest */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200">
                <Image
                src="/images/hr/pengerjaan-psychotes.png"
                alt="Online Psychotest"
                width={1200}
                height={700}
                className="w-full object-cover"
                />

                <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    Online Psychotest
                </h3>

                <p className="text-slate-600 leading-7">
                    Fitur psychotest online yang memungkinkan pelamar
                    mengerjakan soal secara bertahap dengan batas waktu
                    tertentu.
                </p>
                </div>
            </div>

            </div>

        </div>
    </section>
    </>
  );
}