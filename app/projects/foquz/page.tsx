"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FoQuz() {
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
 
  const features = [
    {
      icon: "📝",
      title: "Form Management",
      description: "Create and manage digital forms.",
    },
    {
      icon: "📋",
      title: "Survey Management",
      description: "Create surveys and collect responses.",
    },
    {
      icon: "🧠",
      title: "Quiz Management",
      description: "Manage online quizzes and questions.",
    },
    {
      icon: "👥",
      title: "User Dashboard",
      description: "Access forms and quizzes easily.",
    },
    {
      icon: "📊",
      title: "Result Monitoring",
      description: "Monitor responses and quiz results.",
    },
    {
      icon: "🔒",
      title: "Authentication System",
      description: "Secure access for users and administrators.",
    },
  ];

  const screenshots = [
    {
      image: "/images/foquz/hero-foquz.jpg",
      title: "Landing Page",
      description:
        "Halaman utama yang memperkenalkan platform Form & Quiz System dengan tampilan modern dan responsif.",
    },
    {
      image: "/images/foquz/dashboard-admin.png",
      title: "Admin Dashboard",
      description:
        "Dashboard administrator untuk membuat form baru, mengelola quiz, dan memonitor aktivitas pengguna.",
    },
    {
      image: "/images/foquz/pengisian-foquz.png",
      title: "User Dashboard",
      description:
        "Halaman pengguna untuk melihat form yang tersedia dan melakukan pengisian secara online.",
    },
  ];
  
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
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
            </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                }}
              >
              <Image
                src="/images/foquz/hero-foquz.jpg"
                alt="FoQuz"
                width={800}
                height={500}
                className="rounded-3xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

  {/* Overview */}
  <section className="bg-slate-50 py-24">
    <motion.div
      className="max-w-7xl mx-auto px-8"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
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
    </motion.div>
  </section>

  {/* Features */}
  <section className="bg-white py-24">
    <div className="max-w-7xl mx-auto px-8">

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl font-bold text-blue-900 mb-12"
      >
        Main Features
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">

        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            className="
              group
              bg-slate-50
              p-6
              rounded-3xl
              flex items-center gap-4
              border border-slate-200
              shadow-sm

              hover:-translate-y-2
              hover:bg-blue-50
              hover:border-blue-200
              hover:shadow-xl

              transition-all duration-300
            "
          >
            <div
              className="
                bg-blue-100
                w-14 h-14
                rounded-2xl
                flex items-center justify-center
                text-2xl

                group-hover:scale-110
                duration-300
              "
            >
              {feature.icon}
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-1">
                {feature.title}
              </h3>

              <p className="text-sm text-slate-500 leading-6">
                {feature.description}
              </p>
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  </section>

  {/* Application Pages */}
  <section className="bg-slate-50 py-24">
    <div className="max-w-7xl mx-auto px-8">

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl font-bold text-blue-900 mb-3">
          Application Pages
        </h2>

        <p className="text-slate-600">
          Several interfaces of the Form & Quiz System developed for managing
          forms, quizzes, and user participation.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">

        {screenshots.map((item, index) => (
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
              duration: 0.8,
              delay: index * 0.15,
            }}
            className="
              group
              bg-white
              rounded-3xl
              overflow-hidden
              border border-slate-200
              shadow-md

              hover:-translate-y-2
              hover:shadow-2xl

              transition-all duration-500
            "
          >
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={1200}
                height={700}
                className="
                  w-full
                  object-cover
                  transition duration-700
                  group-hover:scale-105
                "
              />
            </div>

            <div className="p-6">

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-7">
                {item.description}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  </section>
    </>
  );
}