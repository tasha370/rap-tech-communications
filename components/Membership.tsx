import Link from "next/link";
import { ArrowRight, Users, CheckCircle } from "lucide-react";

const benefits = [
  "Connect with a growing technology community",
  "Access learning and networking opportunities",
  "Participate in community technology initiatives",
];

export default function MembershipCTA() {
  return (
    <section className="membership-cta">
      <div className="container">
        <div className="membership-card">
          <div className="membership-content">
            <div className="section-label membership-label">
              <span></span>
              Join Rap-Tech
            </div>

            <h2>
              Be part of the
              <span> digital transformation.</span>
            </h2>

            <p>
              Join Rap-Tech Communications and become part of a community
              working to expand connectivity, promote sustainable technology
              and create digital opportunities for everyone.
            </p>

            <div className="membership-benefits">
              {benefits.map((benefit) => (
                <div key={benefit}>
                  <CheckCircle size={19} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="membership-buttons">
              <Link href="/membership" className="membership-primary">
                Become a Member
                <ArrowRight size={18} />
              </Link>

              <Link href="/contact" className="membership-secondary">
                Get Involved
              </Link>
            </div>
          </div>

          <div className="membership-visual">
            <div className="membership-circle membership-circle-one"></div>
            <div className="membership-circle membership-circle-two"></div>

            <div className="membership-icon">
              <Users size={48} />
            </div>

            <span>Connect</span>
            <strong>Empower</strong>
            <span>Transform</span>
          </div>
        </div>
      </div>
    </section>
  );
}