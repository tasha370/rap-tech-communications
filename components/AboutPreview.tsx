
import { ArrowRight, Globe, Lightbulb, Users } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section className="about-section">
      <div className="container about-container">
        <div className="about-image">
          <div className="about-image-main">
            <div className="about-image-content">
              <Globe size={42} />
              <span>Connecting Communities</span>
            </div>
          </div>

          <div className="about-badge">
            <strong>3+</strong>
            <span>Areas of Impact</span>
          </div>
        </div>

        <div className="about-content">
          <div className="section-label">
            <span></span>
            About Rap-Tech Communications
          </div>

          <h2>
            Technology that
            <span> transforms communities.</span>
          </h2>

          <p>
            Rap-Tech Communications is focused on using technology,
            connectivity and sustainable solutions to create opportunities
            for individuals and communities.
          </p>

          <p>
            We believe that access to reliable internet, sustainable energy
            and digital skills can help communities learn, connect, innovate
            and participate in the digital economy.
          </p>

          <div className="about-features">
            <div>
              <div className="about-feature-icon">
                <Globe size={22} />
              </div>

              <div>
                <h3>Digital Connectivity</h3>
                <p>Expanding access to reliable internet services.</p>
              </div>
            </div>

            <div>
              <div className="about-feature-icon">
                <Lightbulb size={22} />
              </div>

              <div>
                <h3>Sustainable Solutions</h3>
                <p>Promoting clean and sustainable technology.</p>
              </div>
            </div>

            <div>
              <div className="about-feature-icon">
                <Users size={22} />
              </div>

              <div>
                <h3>Community Empowerment</h3>
                <p>Building digital skills and opportunities.</p>
              </div>
            </div>
          </div>

          <Link href="/about" className="about-button">
            Learn More
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

