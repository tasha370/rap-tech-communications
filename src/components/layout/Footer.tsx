import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Container from "@/components/shared/Container";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <Container className="py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Organization */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              RAP-TECH
            </h2>

            <p className="mt-5 leading-7">
              Empowering communities through technology,
              digital inclusion, innovation and sustainable
              development.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Arua, Uganda</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+256 XXX XXX XXX</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@raptech.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/initiatives">Initiatives</Link></li>
              <li><Link href="/membership">Membership</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Focus Areas
            </h3>

            <ul className="space-y-3">
              <li>Internet Connectivity</li>
              <li>Digital Skills</li>
              <li>Digital Transformation</li>
              <li>Renewable Energy</li>
              <li>Research & Innovation</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Connect With Us
            </h3>

            <p>
              Follow Rap-Tech Communications on our social
              media platforms.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-700"
              >
                <FaFacebookF size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-700"
              >
                <FaInstagram size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-700"
              >
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Rap-Tech Communications. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}