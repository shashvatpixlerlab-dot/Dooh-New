import Link from "next/link";
import { LoginForm } from "@/components/auth/LoginForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <Card className="shadow-lg">
      <CardHeader className="text-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          DOOH Network
        </Link>
        <CardTitle className="mt-4">Sign in</CardTitle>
        <CardDescription>
          Access your admin, screen owner, or advertiser dashboard
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
