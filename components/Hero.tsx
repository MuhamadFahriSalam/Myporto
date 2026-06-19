"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
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
    <section className="
        relative
        min-h-screen
        flex items-center
        overflow-hidden

        bg-gradient-to-br
        from-slate-50
        via-blue-50
        to-cyan-50
      ">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Blur kiri atas */}
        <div
          className="
            absolute
            -top-40
            -left-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-300/20
            blur-3xl
          "
        />

        {/* Blur kanan bawah */}
        <div
          className="
            absolute
            bottom-0
            right-0
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-300/20
            blur-3xl
          "
        />

      </div>

      <div className="relative max-w-7xl mx-auto px-8 z-10">

        <div className="grid md:grid-cols-2 items-center gap-16">

          {/* Kiri */}
          <div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-blue-900 text-lg font-medium mb-2"
            >
              Halo, saya
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl font-bold text-slate-900 mb-4"
            >
              Muhamad Fahri Salam
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl text-slate-600 mb-6"
            >
              Frontend Developer | Mobile Developer
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl text-slate-600 leading-8 mb-8"
            >
              Saya adalah mahasiswa Teknik Informatika yang tertarik pada
              pengembangan web, mobile, dan Artificial Intelligence.
              Saya memiliki pengalaman menggunakan Laravel, Ionic,
              Angular, Next.js, dan MySQL dalam membangun berbagai proyek.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-5"
            >

              <button
                className="
                  bg-blue-900
                  text-white
                  px-6
                  py-3
                  rounded-xl
                  hover:bg-blue-800
                  duration-300
                  hover:-translate-y-1
                "
              >
                Download CV
              </button>

              <button
                className="
                  border-2
                  border-blue-900
                  text-blue-900
                  px-6
                  py-3
                  rounded-xl
                  hover:bg-blue-900
                  hover:text-white
                  duration-300
                  hover:-translate-y-1
                "
              >
                Hubungi Saya
              </button>

            </motion.div>

          </div>

          {/* Kanan */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">

              {/* Background Blur */}
              <div className="absolute -inset-6 bg-blue-200/20 rounded-[40px] blur-3xl"></div>

              {/* Foto */}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}