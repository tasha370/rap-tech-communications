import {
  FileText,
  SearchCheck,
  BadgeCheck,
  Users,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Submit Your Application",
    description:
      "Complete the membership application form by providing your personal information and selecting your preferred membership category.",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "Application Review",
    description:
      "Our membership committee reviews your application to ensure it aligns with Rap-Tech Communications' mission and values.",
  },
  {
    number: "03",
    icon: BadgeCheck,
    title: "Approval",
    description:
      "Once approved, you'll receive a confirmation email with your membership details and onboarding information.",
  },
  {
    number: "04",
    icon: Users,
    title: "Become an Active Member",
    description:
      "Start participating in projects, events, training sessions, networking opportunities, and community initiatives.",
  },
];

export default function MembershipProcess() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-blue-700">
            Membership Process
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            How to Become a Member
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Joining Rap-Tech Communications is simple. Follow these four
            straightforward steps and become part of a growing community
            transforming lives through technology and innovation.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Number */}

                <div className="absolute right-6 top-6 text-5xl font-black text-slate-100">
                  {step.number}
                </div>

                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}