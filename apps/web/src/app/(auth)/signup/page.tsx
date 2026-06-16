import Link from "next/link";
import { SignupForm } from "@/components/auth/SignupForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string; role?: string }>;
}) {
  const params = await searchParams;
  const defaultEmail = params.email?.trim() || undefined;
  const defaultRole =
    params.role === "SCREEN_OWNER" || params.role === "ADVERTISER"
      ? params.role
      : defaultEmail
        ? "ADVERTISER"
        : undefined;

  return (
    <Card className="shadow-lg">
      <CardHeader className="text-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          DOOH Network
        </Link>
        <CardTitle className="mt-4">Create account</CardTitle>
        <CardDescription>Join as a Screen Owner or Advertiser</CardDescription>
      </CardHeader>
      <CardContent>
        <SignupForm
          defaultEmail={defaultEmail}
          defaultRole={defaultRole ?? "SCREEN_OWNER"}
        />
      </CardContent>
    </Card>
  );
}
