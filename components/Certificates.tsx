"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Certificates() {
  const certificates = [
    {
      title: "Laravel Web Development",
      issuer: "Dicoding",
      year: "2025",
      image: "/images/certificates/laravel.jpg",
      link: "/images/certificates/laravel.jpg",
    },
    {
      title: "React Developer",
      issuer: "Dicoding",
      year: "2025",
      image: "/images/certificates/react.jpg",
      link: "/images/certificates/react.jpg",
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "Coursera",
      year: "2024",
      image: "/images/certificates/ml.jpg",
      link: "/images/certificates/ml.jpg",
    },
  ];

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
      id="certificates"
      className="
        py-24
        bg-gradient-to-br
        from-white
        via-blue-50
        to-slate-100
      "
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-5xl font-bold text-blue-900 mb-3">
            Certificates
          </h2>

          <p className="text-slate-500 text-lg">
            Certifications and achievements that support my skills and experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="
                group
                bg-white
                rounded-3xl
                overflow-hidden
                border border-slate-200
                shadow-sm
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all duration-500
              "
            >
              <div className="overflow-hidden">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={1000}
                  height={700}
                  className="
                    w-full
                    h-56
                    object-cover
                    group-hover:scale-105
                    transition duration-700
                  "
                />
              </div>

              <div className="p-6">

                <p className="text-sm text-red-600 mb-2">
                  {certificate.issuer} • {certificate.year}
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-6">
                  {certificate.title}
                </h3>

                <a
                  href={certificate.link}
                  target="_blank"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    px-5
                    py-3
                    rounded-xl
                    bg-blue-600
                    text-white
                    hover:bg-blue-700
                    transition
                  "
                >
                  View Certificate →
                </a>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}