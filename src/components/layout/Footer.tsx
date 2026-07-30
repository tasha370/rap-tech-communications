import Link from "next/link";
import Image from "next/image";
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
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo/logo.png"
                alt="Rap-Tech Communications"
                width={70}
                height={70}
                className="h-14 w-auto"
              />

              <div>
                <h2 className="text-xl font-bold text-white">
                  RAP-TECH Communications
                </h2>

                <p className="text-sm text-slate-400">
                  Empowering Communities Through Technology
                </p>
              </div>
            </div>

            <p className="mt-6 leading-7 text-slate-300">
              Rap-Tech Communications is committed to bridging the digital divide
              through technology, innovation, digital skills development,
              internet connectivity, renewable energy, research, and community
              empowerment initiatives.
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
              <li>
                <Link href="/" className="transition hover:text-blue-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-blue-400">
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/initiatives"
                  className="transition hover:text-blue-400"
                >
                  Initiatives
                </Link>
              </li>

              <li>
                <Link
                  href="/membership"
                  className="transition hover:text-blue-400"
                >
                  Membership
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Focus Areas
            </h3>

            <ul className="space-y-3">
              <li>Internet Connectivity</li>
              <li>Digital Skills Development</li>
              <li>Digital Transformation</li>
              <li>Renewable Energy</li>
              <li>Research & Innovation</li>
              <li>Community Empowerment</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Connect With Us
            </h3>

            <p className="leading-7">
              Stay connected with Rap-Tech Communications through our official
              social media platforms.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                <FaFacebookF size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition duration-300 hover:-translate-y-1 hover:bg-pink-600"
              >
                <FaInstagram size={20} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-3 transition duration-300 hover:-translate-y-1 hover:bg-sky-600"
              >
                <FaLinkedinIn size={20} />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Rap-Tech Communications. All Rights
            Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-blue-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-blue-400"
            >
              Terms of Service
            </Link>
          </div>

        </div>
      </Container>
    </footer>
  );
}