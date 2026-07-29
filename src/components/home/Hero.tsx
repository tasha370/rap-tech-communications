"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero/hero-bg.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-4 text-4xl md:text-4xl font-extrabold uppercase tracking-widest text-blue-300">
          Empowering Communities Through Technology
        </p>

        <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
          Technology, Innovation & Sustainable Development
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
          Rap-Tech Communications is committed to bridging the digital divide by
          expanding internet access, promoting digital transformation,
          supporting renewable energy, and empowering communities through
          technology, innovation, and sustainable development.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/membership"
            className="rounded-xl bg-blue-700 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-800"
          >
            Become a Member
          </Link>

          <Link
            href="/about"
            className="rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-slate-900"
          >
            Learn More
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white">
            <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-white" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}