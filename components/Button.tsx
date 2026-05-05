"use client";

import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

type Variant = "primary" | "secondary";

type ButtonProps = {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
};

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const combined = className.trim();

  if (variant === "secondary") {
    const secondaryClasses = `inline-flex max-w-full items-center justify-center whitespace-normal text-balance font-sans text-accent underline-offset-4 hover:underline ${combined}`;

    if (href) {
      return (
        <Link href={href} className={secondaryClasses} onClick={onClick}>
          {children}
          <span aria-hidden="true"> →</span>
        </Link>
      );
    }

    return (
      <button
        type="button"
        className={secondaryClasses}
        onClick={onClick}
      >
        {children}
        <span aria-hidden="true"> →</span>
      </button>
    );
  }

  const primaryClasses = `inline-flex max-w-full items-center justify-center whitespace-normal rounded-[2px] bg-accent px-4 py-3 text-center font-display font-medium text-ground transition-opacity hover:opacity-90 sm:px-6 ${combined}`;

  if (href) {
    return (
      <Link href={href} className={primaryClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={primaryClasses} onClick={onClick}>
      {children}
    </button>
  );
}
