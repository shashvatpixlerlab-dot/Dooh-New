import Link from "next/link";

export default function ContentPolicyPage() {
  return (
    <div className="card" style={{ maxWidth: "42rem" }}>
      <Link href="/" className="back-link">
        ← Back to screens
      </Link>
      <h1>Content policy</h1>
      <p className="muted">
        All creatives are reviewed before they go live. By uploading, you confirm
        your ad complies with this policy.
      </p>
      <p>Advertisers may not submit creatives that are:</p>
      <ol>
        <li>Illegal under Indian law</li>
        <li>Adult or sexually explicit</li>
        <li>Hateful, discriminatory, or harassing</li>
        <li>Misleading or fraudulent</li>
        <li>Infringing third-party intellectual property</li>
      </ol>
      <p className="muted small">
        Rejected ads include a reason. Refunds are processed manually after
        rejection.
      </p>
    </div>
  );
}
