import Link from "next/link";
import { Logo } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <Link href="/" aria-label="Quillfire Labs home" className="focus-ring rounded">
          <Logo priority className="h-10 w-auto sm:h-14" />
        </Link>

        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-8 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-quiet focus-ring rounded">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu: native <details>, no client JavaScript required */}
        <details className="group relative sm:hidden">
          <summary
            className="focus-ring flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md border border-line [&::-webkit-details-marker]:hidden"
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="group-open:hidden" />
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="hidden group-open:block" />
            </svg>
          </summary>
          <nav aria-label="Mobile" className="absolute right-0 mt-2 w-48 rounded-lg border border-line bg-surface p-2 shadow-xl">
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block rounded-md px-3 py-3 text-sm hover:bg-paper">{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
