"use client";

import { motion } from "framer-motion";
import { statistics } from "@/data/statistics";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

export default function Stats() {
  return (
    <section className="bg-slate-50 py-32">
      <Container>
        <SectionHeading
          badge="Our Impact"
          title="Making a Difference"
          description="Together we are building digitally connected and empowered communities across Uganda."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="rounded-3xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-700" />
                </div>

                <h3 className="mb-2 text-4xl font-bold text-slate-900">
                  {item.value}
                </h3>

                <p className="text-slate-600">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}