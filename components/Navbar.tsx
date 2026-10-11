"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programmes", href: "/programmes" },
  { name: "Membership", href: "/membership" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link href="/" className="logo" onClick={() => setIsOpen(false)}>
          <span className="logo-mark">RT</span>

          <span className="logo-text">
            Rap-Tech
            <small>Communications</small>
          </span>
        </Link>

        <nav className={`desktop-nav ${isOpen ? "mobile-open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link href="/membership" className="nav-button">
          Join Us
        </Link>

        <button
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}