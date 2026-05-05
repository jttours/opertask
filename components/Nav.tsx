"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";

const navLinkClass =
  "font-sans text-ink-2 transition-colors hover:text-ink";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-raised bg-ground">
      <div className="relative mx-auto h-16 max-w-content px-6">
        <div className="flex h-full items-center justify-between">
          <Link href="/">
            <Logo size="sm" />
          </Link>

          <div className="hidden items-center gap-10 md:flex">
            <Link href="/blueprint" className={navLinkClass}>
              Blueprint
            </Link>
            <Link href="/about" className={navLinkClass}>
              About
            </Link>
          </div>

          <div className="hidden md:block">
            <Button variant="primary" href="/booking">
              Book Blueprint
            </Button>
          </div>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-ink md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-ink"
              aria-hidden
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {menuOpen ? (
          <div
            id="mobile-nav-menu"
            className="absolute inset-x-0 top-full flex flex-col gap-4 border-b border-raised bg-ground px-6 py-4 md:hidden"
          >
            <Link
              href="/blueprint"
              className={`${navLinkClass} flex min-h-11 items-center justify-center py-3 text-center`}
              onClick={() => setMenuOpen(false)}
            >
              Blueprint
            </Link>
            <Link
              href="/about"
              className={`${navLinkClass} flex min-h-11 items-center justify-center py-3 text-center`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex justify-center pt-2">
              <Button
                variant="primary"
                href="/booking"
                onClick={() => setMenuOpen(false)}
              >
                Book Blueprint
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
