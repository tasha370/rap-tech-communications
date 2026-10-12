
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
      "Building practical computer and digital skills to help individuals use technology confidently for learning, communication, work, and everyday activities.",
    image: "/images/programmes/digital-literacy.png",
  },
  {
    icon: Globe,
    title: "Community Internet Connectivity",
    category: "Connectivity",
    description:
      "Promoting access to reliable and affordable internet so communities, schools, and underserved areas can benefit from online learning, information, and digital services.",
    image: "/images/programmes/community-internet-connectivity.png",
  },
  {
    icon: Leaf,
    title: "Green Technology Solutions",
    category: "Sustainability",
    description:
      "Encouraging energy-efficient technology, renewable energy awareness, and responsible electronic waste management to support environmentally sustainable communities.",
    image: "/images/programmes/green-technology-solutions.png",
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
              <article
                className="programme-card"
                key={programme.title}
              >
                <div
                  className="programme-image"
                  style={{
                    backgroundImage: `url("${programme.image}")`,
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

                  <Link
                    href="/programmes"
                    className="programme-link"
                  >
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
