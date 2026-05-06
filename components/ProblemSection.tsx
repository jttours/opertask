import { FadeUp } from "@/components/FadeUp";

const items = [
  {
    problem: "Your team updates the CRM manually after every call",
    fix: "Auto-logged via Make.com after every interaction",
  },
  {
    problem: "Follow-up emails fall through the cracks for days",
    fix: "Triggered automatically 24 hours after every meeting",
  },
  {
    problem: "Invoices sit in inboxes waiting for someone to act",
    fix: "Sent on schedule the moment a job is marked complete",
  },
  {
    problem: "New leads come in and nothing happens until someone notices",
    fix: "Routed, tagged, and assigned the moment they arrive",
  },
  {
    problem: "Every tool works — nothing talks to anything else",
    fix: "Connected once, synced automatically from then on",
  },
];

export function ProblemSection() {
  return (
    <FadeUp className="mx-auto max-w-content px-6">
      <section>
        <h2 className="font-display text-2xl text-ink">
          Sound familiar? Here&apos;s the fix.
        </h2>
        <ul className="mt-8 list-none p-0">
          {items.map(({ problem, fix }) => (
            <li
              key={problem}
              className="border-b border-raised py-5"
            >
              <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                <div className="flex min-w-0 flex-1 items-start font-sans text-lg">
                  <span className="mr-3 shrink-0 text-warn select-none" aria-hidden>
                    ✗
                  </span>
                  <span className="min-w-0 flex-1 wrap-break-word text-ink">
                    {problem}
                  </span>
                </div>
                <div className="mt-2 ml-6 flex min-w-0 items-start font-sans text-lg md:mt-0 md:ml-0 md:w-1/2 md:shrink-0">
                  <span className="mr-2 shrink-0 text-accent select-none" aria-hidden>
                    →
                  </span>
                  <span className="min-w-0 flex-1 wrap-break-word text-accent">
                    {fix}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </FadeUp>
  );
}
