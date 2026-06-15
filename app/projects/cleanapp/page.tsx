"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CleanApp() {
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
        icon: "💰",
        title: "CleanFund",
        description: "Donation platform for environmental campaigns.",
    },
    {
        icon: "🗺️",
        title: "CleanUp",
        description: "Manage and organize cleanup activities.",
    },
    {
        icon: "🌱",
        title: "CleanAct",
        description: "Environmental action and awareness programs.",
    },
    {
        icon: "📍",
        title: "Campaign Mapping",
        description: "View campaign locations through maps.",
    },
    {
        icon: "🙋",
        title: "Volunteer Registration",
        description: "Register volunteers for environmental activities.",
    },
    {
        icon: "📢",
        title: "Campaign Submission",
        description: "Submit and publish environmental campaigns.",
    },
    ];

    const screenshots = [
    {
        image: "/images/cleanapp/cleanfund.png",
        title: "CleanFund",
        description:
        "Fitur donasi yang memungkinkan pengguna memberikan kontribusi untuk mendukung kampanye lingkungan.",
    },
    {
        image: "/images/cleanapp/cleanup.png",
        title: "CleanUp",
        description:
        "Menampilkan peta lokasi kampanye kebersihan yang dapat diikuti oleh masyarakat.",
    },
    {
        image: "/images/cleanapp/cleanact.png",
        title: "CleanAct",
        description:
        "Halaman pendaftaran relawan untuk berpartisipasi dalam kegiatan pembersihan lingkungan.",
    },
    {
        image: "/images/cleanapp/add-campaign.png",
        title: "Add Campaign",
        description:
        "Form untuk membuat kampanye baru dan menentukan lokasi kegiatan kebersihan.",
    },
    ];
  return (
    <>
    {/* Hero */}
    <section className="bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8">

            <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >

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
                    className="
                    px-6 py-3
                    bg-green-700
                    text-white
                    rounded-xl
                    font-medium
                    shadow-md
                    hover:bg-green-600
                    transition
                    "
                >
                    ← Back to Home
                </Link>
                </div>

            </motion.div>

            {/* Right */}
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
                src="/images/cleanapp/cleanup.png"
                alt="CleanApp"
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

        </motion.div>
    </section>

    {/* Main Features */}
    <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">

            <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-green-700 mb-12"
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
                    hover:bg-green-50
                    hover:border-green-200
                    hover:shadow-xl

                    transition-all duration-300
                "
                >
                <div
                    className="
                    bg-green-100
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
            <h2 className="text-4xl font-bold text-green-700 mb-3">
                Application Pages
            </h2>

            <p className="text-slate-600">
                Several interfaces from the CleanApp platform.
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