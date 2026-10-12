
import Link from "next/link";
import {
  ArrowRight,
  Users,
  BookOpen,
  Globe,
  CheckCircle,
} from "lucide-react";

const membershipBenefits = [
  {
    icon: Users,
    title: "Community Networking",
    description:
      "Connect with people interested in technology, innovation, and digital development.",
  },
  {
    icon: BookOpen,
    title: "Learning Opportunities",
    description:
      "Explore opportunities to develop digital skills and learn about emerging technologies.",
  },
  {
    icon: Globe,
    title: "Community Impact",
    description:
      "Participate in initiatives that promote internet access, digital inclusion, and sustainable technology.",
  },
];

export default function MembershipPage() {
  return (
    <main className="membership-page">
      <section className="membership-main container">
        <div className="membership-inner">
          <p className="membership-eyebrow">
            BECOME A MEMBER
          </p>

          <h1 className="membership-title">
            Join Rap-Tech Communications
          </h1>

          <p className="membership-intro">
            Be part of a community working to expand connectivity,
            promote sustainable technology, and create digital
            opportunities for everyone.
          </p>

          <div className="membership-benefit-grid">
            {membershipBenefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  className="membership-benefit-card"
                  key={benefit.title}
                >
                  <div className="membership-benefit-icon">
                    <Icon size={34} />
                  </div>

                  <h2>{benefit.title}</h2>

                  <p>{benefit.description}</p>
                </article>
              );
            })}
          </div>

          <section className="membership-enquiry">
            <h2>Ready to get involved?</h2>

            <p>
              Contact the Rap-Tech team to enquire about membership,
              available opportunities, and the next steps for joining.
            </p>

            <Link
              href="/contact"
              className="membership-enquiry-button"
            >
              Enquire About Membership
              <ArrowRight size={18} />
            </Link>
          </section>

          <p className="membership-note">
            <CheckCircle size={18} />
            <span>
              Learn, connect, and contribute to digital empowerment.
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}
