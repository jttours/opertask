import { FadeUp } from "@/components/FadeUp";

const steps = [
  {
    n: 1,
    title: "Map",
    description:
      "Document your current tools, workflows, and handoffs",
  },
  {
    n: 2,
    title: "Identify",
    description:
      "Surface the 3–5 highest-value automation opportunities",
  },
  {
    n: 3,
    title: "Score",
    description: "Rank each by implementation effort vs. time saved",
  },
  {
    n: 4,
    title: "Roadmap",
    description: "Deliver a written plan with tool recommendations",
  },
  {
    n: 5,
    title: "Walkthrough",
    description: "Review all findings in a 45-minute live call",
  },
];

const stepDelays = [0, 0.15, 0.3, 0.45, 0.6] as const;

export function BlueprintSteps() {
  return (
    <div className="mx-auto max-w-content px-6">
      <h2 className="font-display text-2xl text-ink">
        The Automation Blueprint Process
      </h2>
      <div className="mt-10 flex flex-col gap-10">
        {steps.map((step, i) => (
          <FadeUp
            key={step.title}
            delay={stepDelays[i]}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-2">
              <span className="font-display text-accent">{step.n}</span>
              <h3 className="font-display text-xl font-medium text-ink">
                {step.title}
              </h3>
              <p className="font-sans text-ink-2">{step.description}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
