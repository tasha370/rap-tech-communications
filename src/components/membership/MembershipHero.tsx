import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MembershipHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 py-28 text-white">

      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-20 top-20 h-56 w-56 rounded-full bg-orange-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-20 h-72 w-72 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        <span className="rounded-full bg-blue-700/30 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-200">
          Join Our Community
        </span>

        <h1 className="mt-8 max-w-3xl text-5xl font-black leading-tight md:text-6xl">
          Become a Member of
          <span className="text-orange-400"> Rap-Tech Communications</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
          Become part of a growing network of innovators, students,
          professionals, entrepreneurs and community leaders working together
          to bridge the digital divide and create sustainable technological
          solutions across Uganda.
        </p>

        <div className="mt-12 flex flex-wrap gap-5">

          <Link
            href="#categories"
            className="rounded-full bg-orange-500 px-8 py-4 font-semibold transition hover:bg-orange-600"
          >
            Explore Membership
          </Link>

          <Link
            href="#apply"
            className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-900"
          >
            Apply Now
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}