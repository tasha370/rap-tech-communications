import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Globe,
  Leaf,
} from "lucide-react";

const programmes = [
  {
    icon: BookOpen,
    title: "Digital Literacy",
    category: "Education",
    description:
      "Providing digital skills and practical technology training to help individuals participate confidently in the digital economy.",
    image: "/images/programs/digital-literacy.jpg",
  },
  {
    icon: Globe,
    title: "Community Internet Connectivity",
    category: "Connectivity",
    description:
      "Expanding access to reliable and affordable internet connectivity for communities, schools and underserved areas.",
    image: "/images/programs/internet-connectivity.jpg",
  },
  {
    icon: Leaf,
    title: "Green Technology Solutions",
    category: "Sustainability",
    description:
      "Promoting sustainable technology and clean energy solutions that support resilient and environmentally responsible communities.",
    image: "/images/programs/green-energy.jpg",
  },
];

export default function Programmes() {
  return (
    <section className="programmes-section">
      <div className="container">
        <div className="programmes-heading">
          <div>
            <div className="section-label">
              <span></span>
              What We Do
            </div>

            <h2>
              Our <span>Programmes</span>
            </h2>
          </div>

          <p>
            We use technology, connectivity and sustainable solutions to
            create opportunities and empower communities.
          </p>
        </div>

        <div className="programmes-grid">
          {programmes.map((programme) => {
            const Icon = programme.icon;

            return (
              <article className="programme-card" key={programme.title}>
                <div
                  className="programme-image"
                  style={{
                    backgroundImage: `url(${programme.image})`,
                  }}
                >
                  <div className="programme-image-overlay"></div>

                  <div className="programme-icon">
                    <Icon size={24} />
                  </div>
                </div>

                <div className="programme-content">
                  <span className="programme-category">
                    {programme.category}
                  </span>

                  <h3>{programme.title}</h3>

                  <p>{programme.description}</p>

                  <Link href="/programmes" className="programme-link">
                    Learn More
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}