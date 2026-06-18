"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.get("email"),
          password: form.get("password"),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(
          typeof data.message === "string"
            ? data.message
            : "Invalid credentials"
        );
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-login-page">
      <div className="card login-card">
        <h1>Admin Login</h1>
        <p className="muted small">
          Sign in to manage bookings, venues, and screens.
        </p>
        <form onSubmit={onSubmit}>
          <label>Email</label>
          <input
            name="email"
            type="email"
            defaultValue="admin@yopmail.com"
            required
            autoComplete="username"
          />
          <label>Password</label>
          <input
            name="password"
            type="password"
            required
            autoComplete="current-password"
          />
          {error && <p className="form-error">{error}</p>}
          <button className="btn btn-block" type="submit" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
