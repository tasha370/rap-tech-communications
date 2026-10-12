import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Membership", href: "/membership" },
  { label: "Our Team", href: "/team" },
  { label: "Contact Us", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="rt-footer">
      {/* CALL TO ACTION */}
      <div className="rt-footer-cta">
        <div className="rt-footer-cta-inner">
          <div className="rt-footer-cta-text">
            <span className="rt-footer-eyebrow">
              LET'S MAKE AN IMPACT
            </span>

            <h2>
              Together, We Can Build a
              <span> More Digital Future.</span>
            </h2>

            <p>
              Join Rap-Tech Communications in empowering
              communities through digital skills, connectivity,
              and technology-driven innovation.
            </p>
          </div>

          <Link href="#contact" className="rt-footer-cta-button">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="rt-footer-main">
        <div className="rt-footer-grid">
          {/* BRAND */}
          <div className="rt-footer-brand">
            
<Link href="/" className="footer-logo">
  <Image
    src="/images/rap-tech-logo.jpeg"
    alt="Rap-Tech Communications"
    width={200}
    height={75}
    className="footer-logo-image"
  />
</Link>

            <p className="rt-footer-description">
              Empowering communities through technology,
              digital literacy, connectivity, and innovation
              for a brighter and more inclusive future.
            </p>

  
<div className="rt-footer-socials">
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    Facebook
  </a>
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
    Instagram
  </a>
  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
    LinkedIn
  </a>
</div>
</div>

          {/* QUICK LINKS */}
          <div className="rt-footer-links">
            <h3>Quick Links</h3>

            {quickLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* OUR PROGRAMMES */}
          <div className="rt-footer-links">
            <h3>Our Focus</h3>

            <Link href="/programmes">
              Digital Literacy
            </Link>

            <Link href="/programmes">
              Community Connectivity
            </Link>

            <Link href="/programmes">
              Green Technology
            </Link>

            <Link href="/membership">
              Join Our Community
            </Link>
          </div>

          {/* CONTACT DETAILS */}
          <div className="rt-footer-contact">
            <h3>Contact Us</h3>

            <p>
              <MapPin size={18} />
              <span>West Nile, Uganda</span>
            </p>

            <p>
              <Mail size={18} />
              <span>Get in touch through our contact section.</span>
            </p>

            <p>
              <Phone size={18} />
              <span>Contact our team for enquiries.</span>
            </p>

            <Link
              href="#contact"
              className="rt-footer-contact-link"
            >
              Send Us a Message <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="rt-footer-bottom">
          <p>
            © {new Date().getFullYear()} Rap-Tech Communications.
            All rights reserved.
          </p>

          <p className="rt-footer-tagline">
            Technology <span>•</span> Community <span>•</span>{" "}
            Innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
