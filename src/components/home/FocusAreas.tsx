"use client";

import { motion } from "framer-motion";
import { focusAreas } from "@/data/focusAreas";

export default function FocusAreas() {
  return (
    <section className="bg-slate-50 py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-widest text-blue-700">
            What We Do
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Our Focus Areas
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We leverage technology, innovation, and sustainable solutions to
            create lasting impact for individuals, institutions, and communities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-colors group-hover:bg-blue-700">
                  <Icon className="h-8 w-8 text-blue-700 transition-colors group-hover:text-white" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {area.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}