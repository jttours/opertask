import { Button } from "@/components/Button";
import { FadeUp } from "@/components/FadeUp";

export function CtaBlock() {
  return (
    <FadeUp className="mx-auto max-w-content px-6">
      <section className="flex flex-col items-center text-center">
        <h2 className="max-w-xl font-display text-3xl text-ink">
          Ready to eliminate manual admin work?
        </h2>
        <div className="mt-10 flex flex-col items-center gap-4">
          <Button variant="primary" href="/booking">
            Book an Automation Blueprint — $397
          </Button>
          <Button variant="secondary" href="/booking#fit-call">
            or start with a free Workflow Fit Call
          </Button>
        </div>
      </section>
    </FadeUp>
  );
}
