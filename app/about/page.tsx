
import About from "../../components/AboutPreview";

export default function AboutPage() {
  return (
    <main>
      <About />

      <section className="about-details-section">
        <div className="container">
          <div className="about-details-heading">
            <span className="section-label">
              <span></span>
              OUR PURPOSE
            </span>

            <h2>
              Our Mission, Vision and <span>Values</span>
            </h2>

            <p>
              Rap-Tech Communications seeks to use technology
              and sustainable solutions to create opportunities
              and support inclusive community development.
            </p>
          </div>

          <div className="about-details-grid">
            <article className="about-details-card">
              <div className="about-details-number">01</div>
              <h3>Our Mission</h3>
              <p>
                To promote internet connectivity, sustainable
                energy access, and digital transformation that
                empowers individuals and communities.
              </p>
            </article>

            <article className="about-details-card">
              <div className="about-details-number">02</div>
              <h3>Our Vision</h3>
              <p>
                A connected and empowered society where
                communities can access and benefit from
                digital opportunities and sustainable technology.
              </p>
            </article>

            <article className="about-details-card">
              <div className="about-details-number">03</div>
              <h3>Our Values</h3>
              <p>
                We value community empowerment, innovation,
                digital inclusion, collaboration, and
                environmental responsibility.
              </p>
            </article>
          </div>

          <div className="about-details-cta">
            <h2>Discover what we do</h2>
            <p>
              Explore our programmes in digital literacy,
              community internet connectivity, and green
              technology solutions.
            </p>

            <a href="/programmes" className="about-button">
              Explore Our Programmes
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
