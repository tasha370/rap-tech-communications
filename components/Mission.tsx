import { ArrowRight, Target, Zap } from "lucide-react";
import Link from "next/link";

export default function Mission() {
  return (
    <section className="mission-section">
      <div className="container">
        <div className="mission-card">
          <div className="mission-content">
            <div className="section-label mission-label">
              <span></span>
              Our Mission
            </div>

            <h2>
              Internet Access, Sustainable Energy Access,
              <span> and Digital Transformation for All.</span>
            </h2>

            <p>
              Rap-Tech Communications works to use technology, connectivity
              and sustainable solutions to create opportunities, empower
              communities and contribute to inclusive digital development.
            </p>

            <Link href="/about" className="mission-button">
              Learn More
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mission-side">
            <div className="mission-icon">
              <Target size={30} />
            </div>

            <div>
              <span>Our Vision</span>
              <h3>Connected and empowered communities.</h3>
            </div>

            <div className="mission-divider"></div>

            <div className="mission-icon mission-icon-orange">
              <Zap size={30} />
            </div>

            <div>
              <span>Our Approach</span>
              <h3>Connect. Empower. Innovate. Sustain.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}