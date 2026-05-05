"use client";

import { motion, type ViewportOptions } from "framer-motion";
import type { ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  viewport?: ViewportOptions;
};

const defaultViewport: ViewportOptions = { once: true, margin: "-80px" };

export function FadeUp({
  children,
  delay = 0,
  className,
  viewport,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ ...defaultViewport, ...viewport }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
