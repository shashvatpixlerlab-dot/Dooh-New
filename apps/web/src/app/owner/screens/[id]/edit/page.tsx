import { notFound } from "next/navigation";
import { ScreenForm } from "@/components/owner/ScreenForm";
import { OwnerPageHeader } from "@/components/owner/OwnerPageHeader";
import { ownerApi } from "@/lib/owner-api";
import type { OwnerScreen } from "@/lib/types";

export default async function EditScreenPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let screen: OwnerScreen;
  try {
    screen = await ownerApi<OwnerScreen>(`/owner/screens/${id}`);
  } catch {
    notFound();
  }

  return (
    <div className="space-y-8">
      <OwnerPageHeader title="Edit screen" description={screen.name} />
      <ScreenForm mode="edit" screen={screen} />
    </div>
  );
}
