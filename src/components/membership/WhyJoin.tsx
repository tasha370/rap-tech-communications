import {
  Users,
  GraduationCap,
  Lightbulb,
  Globe,
  Briefcase,
  Trophy,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Networking Opportunities",
    description:
      "Connect with students, professionals, innovators, entrepreneurs, and organizations that share a passion for technology and community development.",
  },
  {
    icon: GraduationCap,
    title: "Digital Skills Training",
    description:
      "Gain practical skills through workshops, seminars, mentorship programs, and hands-on technology projects.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Entrepreneurship",
    description:
      "Turn creative ideas into impactful projects through collaboration, mentorship, and innovation challenges.",
  },
  {
    icon: Globe,
    title: "Community Impact",
    description:
      "Participate in initiatives that improve digital inclusion, internet access, renewable energy, and sustainable development.",
  },
  {
    icon: Briefcase,
    title: "Career Growth",
    description:
      "Access internships, volunteering opportunities, leadership roles, and professional networking experiences.",
  },
  {
    icon: Trophy,
    title: "Recognition & Leadership",
    description:
      "Develop leadership skills while contributing to meaningful community projects and organizational activities.",
  },
];

export default function WhyJoin() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Why Join Us
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Why Become a Rap-Tech Member?
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Membership gives you the opportunity to learn, collaborate,
            innovate, and create lasting impact while becoming part of a
            growing technology community dedicated to transforming lives.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-600 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}