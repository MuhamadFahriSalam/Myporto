"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  UserPlus,
  FileText,
  BarChart3,
  Brain,
  Bell,
} from "lucide-react";

export default function HumanResourceSystem() {
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
        icon: "🔍",
        title: "Search Job Vacancies",
        description: "Browse available job positions.",
    },
    {
        icon: "📝",
        title: "Candidate Registration",
        description: "Register and create candidate accounts.",
    },
    {
        icon: "📄",
        title: "Upload Documents",
        description: "Upload CV and supporting documents.",
    },
    {
        icon: "📊",
        title: "Recruitment Status Monitoring",
        description: "Track recruitment progress in real time.",
    },
    {
        icon: "🧠",
        title: "Online Quiz",
        description: "Conduct psychotest and online assessments.",
    },
    {
        icon: "📧",
        title: "Notification System",
        description: "Receive recruitment updates automatically.",
    },
    ];

    const screenshots = [
    {
        image: "/images/hr/lowongan-user.png",
        title: "Job Vacancy Page",
        description:
        "Halaman yang digunakan pelamar untuk melihat daftar lowongan, melakukan pencarian posisi, serta mengakses detail lowongan.",
    },
    {
        image: "/images/hr/hero-hr.jpg",
        title: "Landing Page",
        description:
        "Halaman utama sistem recruitment yang menampilkan informasi perusahaan dan proses pendaftaran pelamar.",
    },
    {
        image: "/images/hr/halaman-administrative.png",
        title: "Administrative Selection",
        description:
        "Dashboard HRD untuk melakukan seleksi administrasi terhadap kandidat yang melamar pekerjaan.",
    },
    {
        image: "/images/hr/pengerjaan-psychotes.png",
        title: "Online Psychotest",
        description:
        "Fitur psychotest online yang memungkinkan pelamar mengerjakan soal secara bertahap dengan batas waktu tertentu.",
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
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >

              <Image
                src="/images/hr/hero-hr.jpg"
                alt="Human Resource System"
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
            Human Resource System merupakan sistem recruitment
            berbasis web yang bertujuan untuk mempermudah
            proses seleksi calon karyawan. Sistem menyediakan
            fitur pencarian lowongan, registrasi pelamar,
            upload dokumen, pelaksanaan quiz online,
            dan monitoring status seleksi secara real-time.
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
                    flex items-center
                    gap-4
                    border border-slate-200
                    shadow-sm

                    hover:-translate-y-2
                    hover:bg-blue-50
                    hover:border-blue-200
                    hover:shadow-xl

                    transition-all duration-300
                "
                >
                {/* Icon */}
                <div
                    className="
                    bg-blue-100
                    w-14
                    h-14
                    rounded-2xl
                    flex items-center justify-center
                    text-2xl

                    group-hover:scale-110
                    duration-300
                    "
                >
                    {feature.icon}
                </div>

                {/* Content */}
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

    {/* Application Screenshots */}
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
                Several interfaces of the Human Resource System developed during the internship.
            </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10">

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
                    shadow-lg

                    hover:-translate-y-2
                    hover:shadow-2xl

                    transition-all duration-500
                "
                >
                {/* Image */}
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

                {/* Content */}
                <div className="p-6">

                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">
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