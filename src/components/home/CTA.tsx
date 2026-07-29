"use client";

import { motion } from "framer-motion";
import Container from "@/components/shared/Container";
import PrimaryButton from "@/components/shared/PrimaryButton";
import SecondaryButton from "@/components/shared/SecondaryButton";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900" />

      {/* Decorative circles */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
<div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center text-white"
        >
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold uppercase tracking-widest">
            Join Our Mission
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Together We Can Build a Digitally Connected Future
          </h2>

          <p className="mt-6 text-lg leading-8 text-blue-100">
            Whether you're a student, professional, community leader, partner,
            or organization, there's a place for you at Rap-Tech
            Communications. Join us in advancing technology, digital inclusion,
            innovation, and sustainable development.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton href="/membership">
              Become a Member
            </PrimaryButton>

            <SecondaryButton href="/contact">
              Partner With Us
            </SecondaryButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}