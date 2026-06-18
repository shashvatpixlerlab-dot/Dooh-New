import Link from "next/link";
import { AuthFormCard } from "@/components/auth/AuthFormCard";
import { LoginForm } from "@/components/auth/LoginForm";
import auth from "@/components/auth/styles/auth.module.css";

export default function LoginPage() {
  return (
    <AuthFormCard
      title="Welcome back"
      description="Sign in to your admin, owner, or advertiser dashboard"
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link href="/signup" className={auth.footerLink}>
            Create one
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthFormCard>
  );
}
