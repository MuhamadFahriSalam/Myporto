"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section
      id="contact"
      className="bg-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl font-bold text-blue-900 mb-3">
            Contact Me
          </h2>

          <p className="text-slate-500 text-lg">
            Let's connect and collaborate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-5">
              Mari Terhubung
            </h3>

            <p className="text-slate-600 leading-8">
              Saya terbuka untuk peluang kerja, kolaborasi proyek,
              maupun diskusi mengenai pengembangan web, mobile,
              dan Artificial Intelligence.
            </p>
          </motion.div>

          {/* Right */}
          <div className="space-y-5">

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="
                group
                bg-slate-50
                p-5
                rounded-3xl
                border border-slate-200
                shadow-sm
                flex items-center gap-4

                hover:-translate-y-1
                hover:shadow-xl
                hover:border-blue-200

                transition-all duration-300
              "
            >
              <FaEnvelope className="text-blue-900 text-2xl group-hover:scale-110 duration-300" />

              <span className="text-slate-700">
                muhamadfahrisalam74@gmail.com
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="
                group
                bg-slate-50
                p-5
                rounded-3xl
                border border-slate-200
                shadow-sm
                flex items-center gap-4

                hover:-translate-y-1
                hover:shadow-xl
                hover:border-blue-200

                transition-all duration-300
              "
            >
              <FaGithub className="text-blue-900 text-2xl group-hover:scale-110 duration-300" />

              <span className="text-slate-700">
                github.com/MuhamadFahriSalam
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="
                group
                bg-slate-50
                p-5
                rounded-3xl
                border border-slate-200
                shadow-sm
                flex items-center gap-4

                hover:-translate-y-1
                hover:shadow-xl
                hover:border-blue-200

                transition-all duration-300
              "
            >
              <FaLinkedin className="text-blue-900 text-2xl group-hover:scale-110 duration-300" />

              <span className="text-slate-700">
                linkedin.com/in/MuhamadFahriSalam
              </span>
            </motion.div>

            {/* WhatsApp */}
            {/*
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="
                group
                bg-slate-50
                p-5
                rounded-3xl
                border border-slate-200
                shadow-sm
                flex items-center gap-4

                hover:-translate-y-1
                hover:shadow-xl
                hover:border-blue-200

                transition-all duration-300
              "
            >
              <FaWhatsapp className="text-blue-900 text-2xl group-hover:scale-110 duration-300" />

              <span className="text-slate-700">
                08xxxxxxxxxx
              </span>
            </motion.div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}