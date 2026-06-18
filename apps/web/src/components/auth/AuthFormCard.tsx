import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import auth from "@/components/auth/styles/auth.module.css";
import { cn } from "@/lib/utils";

export function AuthFormCard({
  title,
  description,
  children,
  footer,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <Card className={cn(auth.formCard, "backdrop-blur-sm")}>
      <CardHeader className={auth.formHeader}>
        <CardTitle className={cn(auth.formTitle, "text-[length:inherit] leading-tight")}>
          {title}
        </CardTitle>
        <CardDescription className={auth.formDescription}>{description}</CardDescription>
      </CardHeader>
      <CardContent className={auth.formContent}>
        <div className={auth.formRoot}>{children}</div>
        <p className={auth.footerText}>{footer}</p>
      </CardContent>
    </Card>
  );
}
