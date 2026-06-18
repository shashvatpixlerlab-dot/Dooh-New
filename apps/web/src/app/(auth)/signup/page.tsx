import Link from "next/link";
import { AuthFormCard } from "@/components/auth/AuthFormCard";
import { SignupForm } from "@/components/auth/SignupForm";
import auth from "@/components/auth/styles/auth.module.css";

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
    <AuthFormCard
      title="Create your account"
      description="Join as a Screen Owner or Advertiser"
      footer={
        <>
          Already have an account?{" "}
          <Link href="/login" className={auth.footerLink}>
            Sign in
          </Link>
        </>
      }
    >
      <SignupForm
        defaultEmail={defaultEmail}
        defaultRole={defaultRole ?? "SCREEN_OWNER"}
      />
    </AuthFormCard>
  );
}
