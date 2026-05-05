import type { Metadata } from "next";
import Link from "next/link";

import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Book a Session | OperTask",
  description:
    "Book your Automation Blueprint or a free Workflow Fit Call with OperTask.",
};

export default function BookingPage() {
  return (
    <div className="min-w-0 overflow-x-clip">
      <header className="flex justify-center py-8">
        <Link href="/" aria-label="OperTask home">
          <Logo size="sm" />
        </Link>
      </header>

      <div className="mx-auto w-full max-w-content min-w-0 px-6 pb-16">
        <div className="mt-12 grid min-w-0 grid-cols-1 gap-8 md:grid-cols-2">
          <div
            id="blueprint"
            className="scroll-mt-8 min-w-0 rounded-sm border border-raised bg-surface p-6 md:p-8"
          >
            <h2 className="font-display text-xl text-ink">Automation Blueprint</h2>
            <p className="mt-2 font-display text-3xl text-accent">$397</p>
            <p className="mt-4 font-sans leading-relaxed text-ink-2">
              A 90-minute working session that maps your manual workflows, scores
              automation opportunities, and delivers a prioritized roadmap you
              can act on immediately.
            </p>
            <CalendlyEmbed
              url="https://calendly.com/opertask/blueprint"
              minHeight={650}
              containerId="calendly-blueprint"
              className="mt-6 min-h-[650px] w-full"
            />
          </div>

          <div
            id="fit-call"
            className="scroll-mt-8 min-w-0 rounded-sm border border-raised bg-surface p-6 md:p-8"
          >
            <h2 className="font-display text-xl text-ink">Workflow Fit Call</h2>
            <p className="mt-3 inline-block rounded-full bg-raised px-3 py-1 font-sans text-xs text-ink-2">
              Free · 20 minutes
            </p>
            <p className="mt-4 font-sans leading-relaxed text-ink-2">
              A short introductory call to discuss your workflows and see if
              an Automation Blueprint is the right fit. No commitment, no pitch —
              just a direct conversation.
            </p>
            <CalendlyEmbed
              url="https://calendly.com/opertask/fit-call"
              minHeight={650}
              containerId="calendly-fit-call"
              className="mt-6 min-h-[650px] w-full"
            />
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-ink-3">
          Every Blueprint is personally delivered by our founder.
        </p>
      </div>
    </div>
  );
}
