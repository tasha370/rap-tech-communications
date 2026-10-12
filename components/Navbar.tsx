
"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-container">
        {/* Logo */}
        <Link href="/" className="logo" onClick={closeMenu}>
          <Image
            src="/images/rap-tech-logo.jpeg"
            alt="Rap-Tech Communications"
            width={180}
            height={65}
            priority
            className="logo-image"
          />
        </Link>

        {/* Navigation links */}
        <nav
          id="main-navigation"
          className={`desktop-nav ${isOpen ? "mobile-open" : ""}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={isActive ? "active-link" : ""}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/membership"
            className="mobile-join-button"
            onClick={closeMenu}
          >
            Join Us
          </Link>
        </nav>

        {/* Desktop Join Us button */}
        <Link
          href="/membership"
          className="nav-button desktop-join-button"
          onClick={closeMenu}
        >
          Join Us
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="menu-button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isOpen}
          aria-controls="main-navigation"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
    </header>
  );
}