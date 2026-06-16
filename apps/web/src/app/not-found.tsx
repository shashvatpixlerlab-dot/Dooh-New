import Link from "next/link";

export default function NotFound() {
  return (
    <div className="empty-state">
      <h1>Page not found</h1>
      <p className="muted">The screen or page you are looking for does not exist.</p>
      <Link href="/" className="btn" style={{ marginTop: "1rem" }}>
        Browse screens
      </Link>
    </div>
  );
}
