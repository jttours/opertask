import type { Metadata } from "next";

import { Button } from "@/components/Button";
import { FadeUp } from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Automation Blueprint | OperTask",
  description:
    "Map your manual workflows, score automation opportunities, and get a prioritized roadmap in one 90-minute session.",
};

const checklistItems = [
  "Full workflow map of your current manual operations",
  "Automation opportunity scoring for each task identified",
  "Prioritized implementation roadmap (highest ROI first)",
  "Tool recommendations matched to your existing stack",
  "Recorded walkthrough you can share with your team",
];

const timelineSteps = [
  {
    n: 1,
    title: "Map",
    description:
      "We document every manual, recurring task your team handles today. Nothing is too small — if someone does it more than twice a week, it goes on the map.",
  },
  {
    n: 2,
    title: "Identify",
    description:
      "We flag every task that can be partially or fully automated with existing tools. We note dependencies, edge cases, and what cannot be automated safely.",
  },
  {
    n: 3,
    title: "Score",
    description:
      "Each automation opportunity is scored on two axes: time saved per week and implementation complexity. This gives us a ranked list with clear ROI logic.",
  },
  {
    n: 4,
    title: "Roadmap",
    description:
      "We sequence the top automation opportunities into a phased plan you can start immediately. Phase 1 is always the highest-leverage, lowest-effort wins.",
  },
  {
    n: 5,
    title: "Walkthrough",
    description:
      "We record a narrated screen walkthrough of the full roadmap so your team can review it, share it, and act on it without needing us in the room.",
  },
];

const stepDelays = [0, 0.15, 0.3, 0.45, 0.6] as const;

export default function BlueprintPage() {
  return (
    <>
      <div className="bg-ground py-section-lg">
        <FadeUp className="mx-auto max-w-content px-6">
          <section>
            <h1 className="font-display text-3xl text-ink text-balance md:text-5xl">
              Automation Blueprint
            </h1>
            <p className="mt-6 max-w-3xl font-sans text-lg leading-relaxed text-ink-2 md:text-xl">
              In 90 minutes, we map every manual task your team repeats — and
              deliver a scored, prioritized automation roadmap you can act on
              immediately. Whether you implement with us or independently, you
              leave with a complete picture of what to automate first and why.
            </p>
          </section>
        </FadeUp>
      </div>

      <div className="bg-ground py-section-lg">
        <FadeUp className="mx-auto max-w-content px-6">
          <section>
            <h2 className="font-display text-2xl text-ink">What you receive</h2>
            <ul className="mt-8 flex flex-col gap-5">
              {checklistItems.map((item) => (
                <li key={item} className="flex gap-3 font-sans text-lg text-ink">
                  <span className="shrink-0 text-accent select-none" aria-hidden>
                    ✓
                  </span>
                  <span className="min-w-0 flex-1 break-words">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </FadeUp>
      </div>

      <div className="bg-ground py-section-lg">
        <div className="mx-auto max-w-content px-6">
          <FadeUp>
            <h2 className="font-display text-2xl text-ink">
              How the Blueprint works
            </h2>
          </FadeUp>

          <div className="relative mt-12">
            <div
              className="absolute bottom-8 left-7 top-8 z-0 hidden w-px bg-raised md:left-8 md:bottom-12 md:block"
              aria-hidden
            />

            <div className="relative z-10 flex flex-col gap-12 md:gap-14">
              {timelineSteps.map((step, i) => (
                <FadeUp
                  key={step.title}
                  delay={stepDelays[i]}
                  viewport={{ once: true }}
                  className="flex flex-col gap-3 md:flex-row md:gap-10"
                >
                  <div className="flex shrink-0 items-center justify-start bg-ground font-display text-2xl tabular-nums leading-none text-accent md:w-16 md:justify-center md:px-2 md:pt-0.5 md:text-4xl">
                    {step.n}
                  </div>
                  <div className="min-w-0 flex-1 border-l border-raised pt-0.5 pl-4 md:border-none md:pl-0">
                    <h3 className="font-display text-xl font-medium text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 font-sans text-base leading-relaxed text-ink-2 md:text-lg">
                      {step.description}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-ground py-section-lg">
        <FadeUp className="mx-auto max-w-content px-6">
          <section className="flex flex-col items-center text-center">
            <p className="font-display text-6xl leading-none text-accent md:text-7xl">
              $397
            </p>
            <p className="mt-4 font-sans text-ink-2">One-time session fee</p>

            <div className="mt-8 max-w-xl rounded-sm border border-raised bg-surface p-6 text-left md:text-center">
              <p className="font-sans text-ink md:text-lg">
                The full $397 is credited toward your implementation project if
                you move forward with OperTask.
              </p>
            </div>

            <p className="mt-8 max-w-2xl font-sans italic text-ink-2">
              Personally delivered by our founder — you will not be handed off
              to a junior or a template.
            </p>
          </section>
        </FadeUp>
      </div>

      <div className="bg-ground py-section-lg">
        <FadeUp className="mx-auto max-w-content px-6">
          <section className="flex flex-col items-center text-center">
            <h2 className="max-w-xl font-display text-2xl text-ink md:text-3xl">
              Ready to map your automation opportunities?
            </h2>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Button variant="primary" href="/booking">
                Book your Automation Blueprint — $397
              </Button>
              <Button variant="secondary" href="/booking#fit-call">
                Prefer to ask questions first? Book a free Workflow Fit Call
              </Button>
            </div>
          </section>
        </FadeUp>
      </div>
    </>
  );
}
