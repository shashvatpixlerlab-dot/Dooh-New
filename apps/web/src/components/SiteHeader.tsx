import Link from "next/link";
import { SiteNav } from "./SiteNav";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="logo">
        <span className="logo-mark" aria-hidden>
          ◉
        </span>
        DOOH Network
      </Link>
      <div className="site-header-actions">
        <SiteNav />
      </div>
    </header>
  );
}
