import type { Metadata } from "next";

import { BlueprintSteps } from "@/components/BlueprintSteps";
import { CtaBlock } from "@/components/CtaBlock";
import { HeroSection } from "@/components/HeroSection";
import { IndustryBadges } from "@/components/IndustryBadges";
import { ProblemSection } from "@/components/ProblemSection";
import { ToolsRow } from "@/components/ToolsRow";

export const metadata: Metadata = {
  title: "OperTask — AI Automation & Workflow Implementation",
  description:
    "OperTask maps your manual workflows, scores automation opportunities, and delivers a prioritized implementation roadmap for your team.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="py-section-lg">
        <ProblemSection />
      </div>
      <div className="py-section-lg">
        <BlueprintSteps />
      </div>
      <div className="py-section-lg">
        <ToolsRow />
      </div>
      <div className="py-section-lg">
        <IndustryBadges />
      </div>
      <div className="py-section-lg">
        <CtaBlock />
      </div>
    </>
  );
}
