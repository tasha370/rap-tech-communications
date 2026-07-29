import Link from "next/link";
import { ReactNode } from "react";

interface SecondaryButtonProps {
  href: string;
  children: ReactNode;
}

export default function SecondaryButton({
  href,
  children,
}: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-700"
    >
      {children}
    </Link>
  );
}