import Image from "next/image";
import {
  Award,
  Users,
  BookOpen,
  Lightbulb,
  Globe,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Access workshops, training programs, seminars, and practical digital skills development opportunities.",
  },
  {
    icon: Users,
    title: "Professional Networking",
    description:
      "Connect with innovators, students, professionals, organizations, and mentors from different sectors.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Support",
    description:
      "Develop your ideas through mentorship, collaboration, and participation in technology-driven initiatives.",
  },
  {
    icon: Globe,
    title: "Community Impact",
    description:
      "Join projects that improve digital inclusion, renewable energy adoption, and community development.",
  },
  {
    icon: Award,
    title: "Recognition",
    description:
      "Receive certificates, leadership opportunities, and recognition for your active participation.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Community",
    description:
      "Become part of a professional network committed to integrity, innovation, and sustainable development.",
  },
];

export default function MembershipBenefits() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-stretch">
        
        {/* Left Image */}
        <div className="relative h-162.5 overflow-hidden rounded-3xl shadow-xl">
          <Image
            src="/images/membership/membership-benefits.jpg"
            alt="Membership Benefits"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Content */}
       <div className="flex flex-col justify-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Member Benefits
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            What You'll Gain as a Member
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Membership at Rap-Tech Communications provides opportunities for
            learning, collaboration, innovation, leadership, and community
            service that help you grow both personally and professionally.
          </p>

          <div className="mt-10 space-y-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="flex gap-5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}