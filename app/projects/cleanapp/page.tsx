import Image from "next/image";
import Link from "next/link";

export default function CleanApp() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium">
                Featured Project
              </span>

              <h1 className="text-5xl font-bold text-slate-900 mt-6 mb-5">
                CleanApp
              </h1>

              <p className="text-slate-600 leading-8">
                CleanApp merupakan platform berbasis web yang bertujuan
                untuk meningkatkan kepedulian masyarakat terhadap
                lingkungan melalui fitur donasi, kampanye kebersihan,
                dan kegiatan relawan.
              </p>

              <div className="mt-8">
                <Link
                  href="/"
                  className="px-6 py-3 bg-green-700 text-white rounded-xl font-medium shadow-md hover:bg-green-600 transition"
                >
                  ← Back to Home
                </Link>
              </div>

            </div>

            <div>
              <Image
                src="/images/cleanapp/cleanup.png"
                alt="CleanApp"
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

          <h2 className="text-4xl font-bold text-green-700 mb-10">
            Project Overview
          </h2>

          <p className="text-slate-600 leading-8">
            CleanApp merupakan aplikasi yang dikembangkan untuk
            mendukung kegiatan pelestarian lingkungan. Sistem
            menyediakan fitur donasi, pengajuan kampanye,
            pemetaan lokasi kegiatan, serta perekrutan relawan
            untuk berpartisipasi dalam aksi kebersihan.
          </p>
        </div>
      </section>

    {/* Main Features */}
    <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">

            <h2 className="text-4xl font-bold text-green-700 mb-12">
            Main Features
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

            {/* CleanFund */}
            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 border border-slate-100 hover:shadow-lg transition duration-300">
                <div className="bg-green-100 p-3 rounded-2xl text-xl">
                💰
                </div>

                <div>
                <h3 className="font-semibold text-slate-900">
                    CleanFund
                </h3>

                <p className="text-sm text-slate-500">
                    Donation platform for environmental campaigns.
                </p>
                </div>
            </div>

            {/* CleanUp */}
            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 border border-slate-100 hover:shadow-lg transition duration-300">
                <div className="bg-green-100 p-3 rounded-2xl text-xl">
                🗺️
                </div>

                <div>
                <h3 className="font-semibold text-slate-900">
                    CleanUp
                </h3>

                <p className="text-sm text-slate-500">
                    Manage and organize cleanup activities.
                </p>
                </div>
            </div>

            {/* CleanAct */}
            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 border border-slate-100 hover:shadow-lg transition duration-300">
                <div className="bg-green-100 p-3 rounded-2xl text-xl">
                🌱
                </div>

                <div>
                <h3 className="font-semibold text-slate-900">
                    CleanAct
                </h3>

                <p className="text-sm text-slate-500">
                    Environmental action and awareness programs.
                </p>
                </div>
            </div>

            {/* Campaign Mapping */}
            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 border border-slate-100 hover:shadow-lg transition duration-300">
                <div className="bg-green-100 p-3 rounded-2xl text-xl">
                📍
                </div>

                <div>
                <h3 className="font-semibold text-slate-900">
                    Campaign Mapping
                </h3>

                <p className="text-sm text-slate-500">
                    View campaign locations through maps.
                </p>
                </div>
            </div>

            {/* Volunteer Registration */}
            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 border border-slate-100 hover:shadow-lg transition duration-300">
                <div className="bg-green-100 p-3 rounded-2xl text-xl">
                🙋
                </div>

                <div>
                <h3 className="font-semibold text-slate-900">
                    Volunteer Registration
                </h3>

                <p className="text-sm text-slate-500">
                    Register volunteers for environmental activities.
                </p>
                </div>
            </div>

            {/* Campaign Submission */}
            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4 border border-slate-100 hover:shadow-lg transition duration-300">
                <div className="bg-green-100 p-3 rounded-2xl text-xl">
                📢
                </div>

                <div>
                <h3 className="font-semibold text-slate-900">
                    Campaign Submission
                </h3>

                <p className="text-sm text-slate-500">
                    Submit and publish environmental campaigns.
                </p>
                </div>
            </div>

            </div>

        </div>
    </section>

      {/* Application Screenshots */}
      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-green-700 mb-3">
            Application Pages
          </h2>

          <p className="text-slate-600 mb-12">
            Several interfaces from the CleanApp platform.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* CleanFund */}
            <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-slate-200">

              <Image
                src="/images/cleanapp/cleanfund.png"
                alt="CleanFund"
                width={1200}
                height={700}
                className="w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  CleanFund
                </h3>

                <p className="text-slate-600 leading-7">
                  Fitur donasi yang memungkinkan pengguna
                  memberikan kontribusi untuk mendukung
                  kampanye lingkungan.
                </p>

              </div>

            </div>

            {/* CleanUp */}
            <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-slate-200">

              <Image
                src="/images/cleanapp/cleanup.png"
                alt="CleanUp"
                width={1200}
                height={700}
                className="w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  CleanUp
                </h3>

                <p className="text-slate-600 leading-7">
                  Menampilkan peta lokasi kampanye kebersihan
                  yang dapat diikuti oleh masyarakat.
                </p>

              </div>

            </div>

            {/* CleanAct */}
            <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-slate-200">

              <Image
                src="/images/cleanapp/cleanact.png"
                alt="CleanAct"
                width={1200}
                height={700}
                className="w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  CleanAct
                </h3>

                <p className="text-slate-600 leading-7">
                  Halaman pendaftaran relawan untuk berpartisipasi
                  dalam kegiatan pembersihan lingkungan.
                </p>

              </div>

            </div>

            {/* Add Campaign */}
            <div className="bg-white rounded-3xl shadow-md overflow-hidden border border-slate-200">

              <Image
                src="/images/cleanapp/add-campaign.png"
                alt="Add Campaign"
                width={1200}
                height={700}
                className="w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Add Campaign
                </h3>

                <p className="text-slate-600 leading-7">
                  Form untuk membuat kampanye baru dan menentukan
                  lokasi kegiatan kebersihan.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}