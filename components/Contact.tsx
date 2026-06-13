import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-blue-500 mb-12">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Kiri */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Mari Terhubung 🚀
            </h3>

            <p className="text-slate-300 leading-8">
              Saya terbuka untuk peluang kerja, kolaborasi proyek,
              maupun diskusi mengenai pengembangan web, mobile,
              dan Artificial Intelligence.
            </p>
          </div>

          {/* Kanan */}
          <div className="space-y-5">

            <div className="bg-slate-800 p-5 rounded-xl flex items-center gap-4">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <span>email@gmail.com</span>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl flex items-center gap-4">
              <FaGithub className="text-blue-500 text-2xl" />
              <span>github.com/username</span>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl flex items-center gap-4">
              <FaLinkedin className="text-blue-500 text-2xl" />
              <span>linkedin.com/in/username</span>
            </div>

            <div className="bg-slate-800 p-5 rounded-xl flex items-center gap-4">
              <FaWhatsapp className="text-blue-500 text-2xl" />
              <span>08xxxxxxxxxx</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}