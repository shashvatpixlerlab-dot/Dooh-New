import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollToSectionButton } from "@/components/landing/ScrollToSectionButton";
import shared from "@/components/landing/styles/shared.module.css";
import { Button } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth-session";
import { LANDING_SECTIONS } from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils";

export async function MarketplaceHeroActions() {
  const auth = await getAuthSession();

  if (!auth) {
    return (
      <>
        <ScrollToSectionButton
          section={LANDING_SECTIONS.screens}
          size="lg"
          className={cn(
            shared.btnTraclePrimary,
            shared.btnBrowseScreens,
            shared.btnResponsive,
            "sm:min-w-[180px]"
          )}
        >
          Browse screens
          <ArrowRight className={cn("h-4 w-4", shared.btnBrowseArrow)} />
        </ScrollToSectionButton>
        <Button
          asChild
          variant="outline"
          size="lg"
          className={cn(shared.btnTracleOutline, shared.btnResponsive, "sm:min-w-[180px]")}
        >
          <Link href="/signup?role=SCREEN_OWNER">List your screen</Link>
        </Button>
      </>
    );
  }

  return (
    <ScrollToSectionButton
      section={LANDING_SECTIONS.screens}
      size="lg"
      className={cn(
        shared.btnTraclePrimary,
        shared.btnBrowseScreens,
        shared.btnResponsive,
        "sm:min-w-[180px]"
      )}
    >
      Browse screens
      <ArrowRight className={cn("h-4 w-4", shared.btnBrowseArrow)} />
    </ScrollToSectionButton>
  );
}
