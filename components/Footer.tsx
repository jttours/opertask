import Link from "next/link";

import { Logo } from "@/components/Logo";

const footerLinkClass =
  "font-sans text-sm text-ink-3 transition-colors hover:text-ink";

export function Footer() {
  return (
    <footer className="border-t border-raised bg-ground py-12">
      <div className="mx-auto flex max-w-content flex-col gap-10 px-6">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-6">
          <Logo size="sm" />
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
            <Link href="/blueprint" className={footerLinkClass}>
              Blueprint
            </Link>
            <Link href="/about" className={footerLinkClass}>
              About
            </Link>
            <Link href="/booking" className={footerLinkClass}>
              Booking
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <p className="font-sans text-sm italic text-ink-3">
            Your workflows, running like clockwork.
          </p>
          <p className="font-sans text-sm text-ink-3">
            © 2026 OperTask
          </p>
        </div>
      </div>
    </footer>
  );
}
