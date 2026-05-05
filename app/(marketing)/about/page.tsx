import type { Metadata } from "next";

import { Button } from "@/components/Button";
import { FadeUp } from "@/components/FadeUp";
import { ToolsRow } from "@/components/ToolsRow";

export const metadata: Metadata = {
  title: "About | OperTask",
  description:
    "Meet the founder behind OperTask — an automation specialist with a background in accounting, travel operations, and e-commerce.",
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-ground py-section-lg">
        <FadeUp className="mx-auto max-w-content px-6">
          <section className="grid min-w-0 grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 md:items-start">
            <div className="flex aspect-square min-w-0 w-full items-center justify-center rounded-sm border border-raised bg-surface md:aspect-auto md:h-[360px]">
              <span className="font-sans text-sm text-ink-3">Photo</span>
            </div>

            <div className="min-w-0">
              <h1 className="font-display text-2xl text-ink">Omar Atallah</h1>
              <p className="mt-3 font-sans text-sm uppercase tracking-widest text-ink-2">
                Founder, OperTask
              </p>
              <p className="my-6 border-l-2 border-accent pl-4 font-sans text-base leading-relaxed text-ink md:text-lg">
                Before OperTask, I spent years inside accounting, travel
                operations, and e-commerce businesses — which means I
                understand the actual workflows your team runs daily, not just
                the theory.
              </p>
            </div>
          </section>
        </FadeUp>
      </div>

      <div className="bg-ground py-section-lg">
        <FadeUp className="mx-auto max-w-content px-6">
          <section className="min-w-0 md:grid md:grid-cols-2 md:gap-14">
            <div className="hidden md:block" aria-hidden />
            <div className="min-w-0 space-y-6 font-sans leading-relaxed text-ink-2 md:col-start-2">
              <p>
                I&apos;ve spent the better part of a decade embedded in the
                operational side of real businesses — not consulting from the
                outside, but running the books, managing the systems, and being
                the person who had to fix things when the workflow broke. That
                background spans accounting firms, travel operations, and
                e-commerce businesses, where I worked directly with the tools
                your teams use: HubSpot, QuickBooks, Make.com, Shopify,
                Monday.com.
              </p>
              <p>
                OperTask came out of a simple observation: most small business
                owners already know what&apos;s slowing them down. They just
                don&apos;t have time to map it, score it, and sequence a fix.
                The Automation Blueprint exists to close that gap — one session,
                a clear deliverable, no fluff.
              </p>
              <p>
                My approach is direct. I don&apos;t believe in handoffs,
                templates, or discovery calls that lead nowhere. When you book
                a Blueprint, I&apos;m the one doing the work. I&apos;ll ask
                uncomfortable questions about how your team actually operates,
                not how the org chart says it does. That&apos;s the only way to
                build automation that sticks.
              </p>
            </div>
          </section>
        </FadeUp>
      </div>

      <div className="bg-ground py-section-lg">
        <FadeUp className="mx-auto max-w-content px-6">
          <ToolsRow bare title="Tools I work with" />
        </FadeUp>
      </div>

      <div className="bg-ground py-section-lg">
        <FadeUp className="mx-auto max-w-content px-6">
          <section className="flex flex-col items-center text-center">
            <p className="font-sans text-xl text-ink md:text-2xl">
              Ready to work together?
            </p>
            <div className="mt-8">
              <Button variant="primary" href="/booking">
                Book an Automation Blueprint →
              </Button>
            </div>
          </section>
        </FadeUp>
      </div>
    </>
  );
}
