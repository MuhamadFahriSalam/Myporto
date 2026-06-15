"use client";

import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 50,
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
      id="about"
      className="bg-slate-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-900 mb-10"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Kiri */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
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
          </motion.div>

          {/* Kanan */}
          <div className="space-y-5">

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="
                bg-white
                p-5
                rounded-2xl
                shadow-md
                border
                border-slate-200
                hover:-translate-y-1
                hover:shadow-xl
                duration-300
              "
            >
              <h4 className="font-semibold text-blue-900">
                Nama
              </h4>

              <p className="text-slate-600">
                Muhamad Fahri Salam
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="
                bg-white
                p-5
                rounded-2xl
                shadow-md
                border
                border-slate-200
                hover:-translate-y-1
                hover:shadow-xl
                duration-300
              "
            >
              <h4 className="font-semibold text-blue-900">
                Pendidikan
              </h4>

              <p className="text-slate-600">
                S1 Teknik Informatika
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="
                bg-white
                p-5
                rounded-2xl
                shadow-md
                border
                border-slate-200
                hover:-translate-y-1
                hover:shadow-xl
                duration-300
              "
            >
              <h4 className="font-semibold text-blue-900">
                Bidang
              </h4>

              <p className="text-slate-600">
                Web Development, Mobile Development, Artificial Intelligence
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}