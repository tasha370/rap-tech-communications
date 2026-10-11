
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { teamMembers } from "../data/team";

export default function TeamPreview() {
  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="team-heading">
          <div className="section-eyebrow">
            <Users size={17} />
            THE PEOPLE BEHIND THE IMPACT
          </div>

          <div className="team-heading-row">
            <div>
              <h2>
                Meet the people
                <span> behind Rap-Tech.</span>
              </h2>

              <p>
                Meet the people working to expand digital access, promote
                sustainable energy and empower communities through technology
                and innovation.
              </p>
            </div>

            <Link href="/team" className="team-view-link">
              Meet the full team
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="team-card" key={member.id}>
              <div className="team-photo">
                <Image
                  src={member.image}
                  alt={`Photo of ${member.name}, ${member.role}`}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 950px) 50vw, 25vw"
                  className="team-member-image"
                />
              </div>

              <div className="team-card-content">
                <span className="team-role">{member.role}</span>

                <h3>{member.name}</h3>

                <p className="team-occupation">{member.occupation}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="team-bottom">
          <div>
            <h3>Be part of the digital transformation.</h3>
            <p>
              Join us in building digitally connected and sustainably powered
              communities.
            </p>
          </div>

          <Link href="/membership" className="team-join-button">
            Join Rap-Tech
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
