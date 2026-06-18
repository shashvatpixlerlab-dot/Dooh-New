import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAuthSession } from "@/lib/auth-session";
import { PremiumCard } from "@/components/landing/PremiumCard";
import { ScrollToSectionButton } from "@/components/landing/ScrollToSectionButton";
import { SectionHeading } from "@/components/landing/SectionHeading";
import shared from "@/components/landing/styles/shared.module.css";
import { Button } from "@/components/ui/button";
import { LANDING_SECTIONS } from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils";

export async function LandingCta() {
  const auth = await getAuthSession();

  return (
    <PremiumCard
      className={cn(
        shared.sectionReadable,
        "mx-auto max-w-3xl px-4 py-10 text-center sm:px-8 sm:py-14 lg:px-12 lg:py-16"
      )}
    >
      <SectionHeading
        eyebrow="Get started"
        title="Ready to put your brand on screen?"
        description="Join advertisers and venue owners using DOOH Network to reach customers where they actually spend time."
      />

      <div className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center">
        <ScrollToSectionButton
          section={LANDING_SECTIONS.screens}
          size="lg"
          className={cn(
            shared.btnTraclePrimary,
            shared.btnBrowseScreens,
            shared.btnResponsive,
            "sm:min-w-[160px]"
          )}
        >
          Browse screens
          <ArrowRight className={cn("h-4 w-4", shared.btnBrowseArrow)} />
        </ScrollToSectionButton>
        {!auth ? (
          <Button
            asChild
            variant="outline"
            size="lg"
            className={cn(shared.btnTracleOutline, shared.btnResponsive, "sm:min-w-[160px]")}
          >
            <Link href="/signup">Get started free</Link>
          </Button>
        ) : null}
      </div>
    </PremiumCard>
  );
}
