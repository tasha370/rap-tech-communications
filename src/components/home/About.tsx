"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Affordable Internet Connectivity",
  "Digital Skills & ICT Training",
  "Renewable Energy Solutions",
  "Research & Innovation",
];

export default function About() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <Image
            src="/images/about/about-image.jpg"
            alt="Rap-Tech Communications"
            width={700}
            height={700}
            className="rounded-3xl shadow-2xl object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-semibold uppercase tracking-widest text-blue-700">
            Who We Are
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
            Building Digitally Connected Communities
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Rap-Tech Communications is a Community-Based Organisation dedicated
            to bridging the digital divide through affordable internet access,
            digital transformation, renewable energy, innovation, and
            technology-driven community development across Uganda.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-10 inline-block rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
          >
            Learn More About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}