import { FadeUp } from "@/components/FadeUp";

const industries = [
  "Accounting & Bookkeeping",
  "Travel & Tourism",
  "E-commerce",
  "Professional Services",
  "Sales Teams",
  "Operations-Heavy SMBs",
];

export function IndustryBadges() {
  return (
    <FadeUp className="mx-auto max-w-content px-6">
      <section>
        <h2 className="font-sans text-sm italic text-ink-3">
          Teams across these industries use OperTask
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {industries.map((label) => (
            <span
              key={label}
              className="border border-raised bg-raised px-5 py-3 font-sans text-sm text-ink"
            >
              {label}
            </span>
          ))}
        </div>
      </section>
    </FadeUp>
  );
}
