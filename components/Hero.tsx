import Link from "next/link";
import { ArrowRight, Wifi, Sun, Laptop } from "lucide-react";
import { site } from "../data/site";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-background"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-label">
            <span></span>
            Community Technology & Sustainable Development
          </div>

          <h1>
            Internet and power
            <span> for every community.</span>
          </h1>

          <p>{site.description}</p>

          <div className="hero-buttons">
            <Link href="/membership" className="primary-button">
              Become a Member
              <ArrowRight size={18} />
            </Link>

            <Link href="/programmes" className="secondary-button">
              Explore Programmes
            </Link>
          </div>

          <div className="hero-features">
            <div>
              <Wifi size={21} />
              <span>Internet Access</span>
            </div>

            <div>
              <Sun size={21} />
              <span>Sustainable Energy</span>
            </div>

            <div>
              <Laptop size={21} />
              <span>Digital Transformation</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-inner">
            <div className="card-icon">
              <Wifi size={30} />
            </div>

            <p>Our Motto</p>

            <h2>
              Internet Access,
              <br />
              Sustainable Energy Access,
              <br />
              and Digital Transformation
              <br />
              for All.
            </h2>

            <div className="card-line"></div>

            <span>Rap-Tech Communications</span>
          </div>
        </div>
      </div>
    </section>
  );
}