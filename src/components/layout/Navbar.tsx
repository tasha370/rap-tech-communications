import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Projects", href: "/projects" },
  { name: "Membership", href: "/membership" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
       <Link href="/" className="flex items-center gap-3">
  <Image
    src="/images/logo/logo.png"
    alt="Rap-Tech Communications"
    width={60}
    height={60}
    priority
    className="h-14 w-auto"
  />

  <div className="hidden sm:block">
    <h1 className="text-lg font-bold text-slate-900">
      RAP-TECH
    </h1>
    <p className="text-xs text-slate-600">
      Communications
    </p>
  </div>
</Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 transition-colors hover:text-blue-700"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/membership"
          className="rounded-lg bg-blue-700 px-5 py-2.5 font-medium text-white transition hover:bg-blue-800"
        >
          Join Us
        </Link>
      </div>
    </header>
  );
}