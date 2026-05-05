import { FadeUp } from "@/components/FadeUp";

const tools = [
  "Make.com",
  "HubSpot",
  "QuickBooks",
  "Monday.com",
  "Zapier",
  "Shopify",
  "Gmail",
];

type ToolsRowProps = {
  /** Omit internal FadeUp so a parent section can animate the block. */
  bare?: boolean;
  /** Overrides the default homepage label styling and copy. */
  title?: string;
  titleHeadingClassName?: string;
};

export function ToolsRow({
  bare,
  title,
  titleHeadingClassName,
}: ToolsRowProps = {}) {
  const section = (
    <section>
      {title ? (
        <h2
          className={
            titleHeadingClassName ??
            "font-display text-xl text-ink"
          }
        >
          {title}
        </h2>
      ) : (
        <p className="font-display text-sm uppercase tracking-widest text-ink-3">
          Works with the tools you already use
        </p>
      )}
      <div className="mt-6 flex min-w-0 flex-wrap gap-3">
        {tools.map((name) => (
          <span
            key={name}
            className="border border-raised bg-surface px-4 py-2 font-sans text-sm text-ink-2"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );

  if (bare) {
    return section;
  }

  return (
    <FadeUp className="mx-auto max-w-content px-6">{section}</FadeUp>
  );
}
