import { ScreenForm } from "@/components/owner/ScreenForm";
import { OwnerPageHeader } from "@/components/owner/OwnerPageHeader";

export default function NewScreenPage() {
  return (
    <div className="space-y-8">
      <OwnerPageHeader
        title="Add screen"
        description="Register a new display on the marketplace. Upload at least 3 photos and set your daily slot price."
      />
      <ScreenForm mode="create" />
    </div>
  );
}
