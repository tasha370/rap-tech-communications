import {
  Globe,
  Lightbulb,
  Users,
  Leaf,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Globe,
    title: "Connect",
    description:
      "We expand access to reliable internet and technology, helping communities connect with information, services and opportunities.",
  },
  {
    number: "02",
    icon: Users,
    title: "Empower",
    description:
      "We equip individuals and communities with practical digital skills, knowledge and opportunities for growth.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Innovate",
    description:
      "We encourage creative technology solutions that respond to real challenges faced by communities.",
  },
  {
    number: "04",
    icon: Leaf,
    title: "Sustain",
    description:
      "We promote sustainable technology and energy solutions that create lasting benefits for communities.",
  },
];

export default function WhyRapTech() {
  return (
    <section className="how-section">
      <div className="container">
        <div className="how-heading">
          <div className="section-label">
            <span></span>
            How We Work
          </div>

          <h2>
            From technology to
            <span> community impact.</span>
          </h2>

          <p>
            Our approach is simple: connect communities, empower people,
            support innovation and create sustainable solutions that make a
            lasting difference.
          </p>
        </div>

        <div className="how-grid">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div className="how-card" key={step.number}>
                <div className="how-top">
                  <span className="how-number">{step.number}</span>

                  <div className="how-icon">
                    <Icon size={25} />
                  </div>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}