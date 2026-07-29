"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { programs } from "@/data/programs";

export default function Programs() {
  return (
    <section className="bg-white py-32">
      <Container>
        <SectionHeading
          badge="Featured Initiatives"
          title="Transforming Communities Through Technology"
          description="Our initiatives focus on expanding digital opportunities, promoting innovation, and creating sustainable impact across communities."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.article
              key={program.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                />

                <span className="absolute left-5 top-5 rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white">
                  {program.category}
                </span>
              </div>

              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {program.title}
                </h3>

                <p className="mb-6 leading-7 text-slate-600">
                  {program.description}
                </p>

                <button className="inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:gap-3">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}