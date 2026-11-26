import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";
import { ventures } from "@/lib/products";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo className="h-12 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-slate-600">
            {site.legalName} develops and operates a growing portfolio of products and ventures.
          </p>
          <a href={`mailto:${site.email}`} className="link-accent mt-3 inline-block text-sm">{site.email}</a>
        </div>

        <div>
          <h2 className="eyebrow">Portfolio</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {ventures.map((v) => (
              <li key={v.slug}>
                {v.url ? (
                  <a href={v.url} className="link-quiet" target="_blank" rel="noopener">{v.name}</a>
                ) : (
                  <Link href={`/portfolio#${v.slug}`} className="link-quiet">{v.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow">Company</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/about" className="link-quiet">About</Link></li>
            <li><Link href="/contact" className="link-quiet">Contact &amp; support</Link></li>
            <li><Link href="/privacy" className="link-quiet">Privacy</Link></li>
            <li><Link href="/terms" className="link-quiet">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="container-page py-6 text-xs text-slate-500">© {year} {site.legalName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
