import { FadeUp } from "@/components/FadeUp";

const pains = [
  "Your team updates the CRM manually after every call",
  "Follow-up emails fall through the cracks for days",
  "Invoices sit in inboxes waiting for someone to act",
  "New leads come in and nothing happens until someone notices",
  "Every tool works — nothing talks to anything else",
];

export function ProblemSection() {
  return (
    <FadeUp className="mx-auto max-w-content px-6">
      <section>
        <h2 className="font-display text-2xl text-ink">Sound familiar?</h2>
        <ul className="mt-8 flex flex-col gap-5">
          {pains.map((text) => (
            <li
              key={text}
              className="flex gap-3 font-sans text-lg text-ink-2 md:items-start"
            >
              <span className="shrink-0 text-warn select-none" aria-hidden>
                ✗
              </span>
              <span className="min-w-0 flex-1 break-words">{text}</span>
            </li>
          ))}
        </ul>
      </section>
    </FadeUp>
  );
}
