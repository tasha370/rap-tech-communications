import { GraduationCap, Briefcase, Building2, HeartHandshake, Check } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Student Member",
    icon: GraduationCap,
    description:
      "Ideal for secondary school, college, and university students who are passionate about technology and innovation.",
    benefits: [
      "Digital skills training",
      "Mentorship opportunities",
      "Innovation challenges",
      "Community projects",
    ],
    featured: true,
  },
  {
    title: "Professional Member",
    icon: Briefcase,
    description:
      "For professionals seeking to contribute their expertise while expanding their network and leadership opportunities.",
    benefits: [
      "Professional networking",
      "Leadership opportunities",
      "Training workshops",
      "Industry collaborations",
    ],
    featured: false,
  },
  {
    title: "Institutional Member",
    icon: Building2,
    description:
      "Designed for schools, companies, NGOs, and institutions interested in partnering with Rap-Tech Communications.",
    benefits: [
      "Strategic partnerships",
      "Collaborative projects",
      "Community outreach",
      "Technology programs",
    ],
    featured: false,
  },
  {
    title: "Volunteer",
    icon: HeartHandshake,
    description:
      "Support community initiatives by volunteering your time, skills, and expertise to our programs.",
    benefits: [
      "Volunteer opportunities",
      "Community service",
      "Project participation",
      "Leadership experience",
    ],
    featured: false,
  },
];

export default function MembershipCategories() {
  return (
    <section
      id="categories"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-orange-700">
            Membership Categories
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Choose Your Membership
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're a student, professional, institution, or volunteer,
            there's a place for you at Rap-Tech Communications.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className={`relative rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  category.featured
                    ? "border-blue-700 shadow-xl"
                    : "border-slate-200"
                }`}
              >
                {category.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-700 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </div>
                )}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {category.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {category.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {category.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-3"
                    >
                      <Check
                        size={18}
                        className="text-green-600"
                      />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#apply"
                  className={`mt-8 block rounded-xl px-6 py-3 text-center font-semibold transition ${
                    category.featured
                      ? "bg-blue-700 text-white hover:bg-blue-800"
                      : "border border-slate-300 hover:border-blue-700 hover:text-blue-700"
                  }`}
                >
                  Join as {category.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}