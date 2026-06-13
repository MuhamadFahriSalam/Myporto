import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-5">
              Mari Terhubung
            </h3>

            <p className="text-slate-600 leading-8">
              Saya terbuka untuk peluang kerja, kolaborasi proyek,
              maupun diskusi mengenai pengembangan web, mobile,
              dan Artificial Intelligence.
            </p>
          </div>

          <div className="space-y-5">

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <FaEnvelope className="text-blue-900 text-2xl" />
              <span className="text-slate-700">muhamadfahrisalam74@gmail.com</span>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <FaGithub className="text-blue-900 text-2xl" />
              <span className="text-slate-700">github.com/MuhamadFahriSalam</span>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <FaLinkedin className="text-blue-900 text-2xl" />
              <span className="text-slate-700">linkedin.com/in/MuhamadFahriSalam</span>
            </div>

            {/* <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <FaWhatsapp className="text-blue-900 text-2xl" />
              <span className="text-slate-700">08xxxxxxxxxx</span>
            </div> */}

          </div>

        </div>

      </div>
    </section>
  );
}