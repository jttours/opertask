"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";

const stagger = 0.1;

export function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-ground px-6">
      <div className="mx-auto flex w-full max-w-content flex-col items-center px-0 text-center">
        <div className="relative max-w-full shrink-0">
          <Logo size="lg" />
          <span className="animate-blink font-display text-accent">_</span>
        </div>

        <motion.h1
          className="mt-10 w-full max-w-full font-display text-3xl tracking-tight text-ink text-balance md:max-w-4xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: stagger * 0,
          }}
        >
          Your team runs on manual work. That changes today.
        </motion.h1>

        <motion.p
          className="mt-6 w-full max-w-2xl font-sans text-lg text-ink-2 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: stagger * 1,
          }}
        >
          OperTask automates the admin, email, CRM, and invoicing work slowing
          your business down.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: stagger * 2,
          }}
        >
          <Button variant="primary" href="/booking">
            Book an Automation Blueprint — $397
          </Button>
        </motion.div>

        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: stagger * 3,
          }}
        >
          <Button variant="secondary" href="/booking#fit-call">
            Not ready? Start with a free Workflow Fit Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
