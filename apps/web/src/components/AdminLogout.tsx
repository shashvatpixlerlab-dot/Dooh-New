"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function AdminLogout() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function logout() {
    setLoading(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      className="btn btn-ghost"
      onClick={logout}
      disabled={loading}
    >
      {loading ? "Signing out…" : "Sign out"}
    </button>
  );
}
