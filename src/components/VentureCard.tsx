import Link from "next/link";
import type { Venture } from "@/lib/products";
import { statusLabel } from "@/lib/products";

export function StatusBadge({ status }: { status: Venture["status"] }) {
  if (!status) return null;
  const tone =
    status === "available"
      ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
      : "border-ember-500/30 bg-ember-500/10 text-ember-600";
  return (
    <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[0.7rem] tracking-wider uppercase ${tone}`}>
      {statusLabel[status]}
    </span>
  );
}

export function VentureCard({ venture }: { venture: Venture }) {
  const v = venture;
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition hover:border-slate-500 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-semibold tracking-tight">{v.name}</h3>
        <StatusBadge status={v.status} />
      </div>
      <p className="mt-2 text-slate-700">{v.tagline ?? "Details coming soon."}</p>
      {v.highlights && (
        <ul className="mt-6 space-y-2.5 text-sm text-slate-600">
          {v.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ember-500" />
              {h}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-auto pt-8">
        {v.url ? (
          <a href={v.url} target="_blank" rel="noopener" className="link-accent focus-ring inline-flex items-center gap-1.5 rounded text-sm font-medium">
            Visit {v.url.replace("https://", "")}
            <span aria-hidden="true" className="transition group-hover:translate-x-0.5">→</span>
          </a>
        ) : (
          <Link href="/contact" className="link-accent text-sm font-medium">Ask about {v.name} →</Link>
        )}
      </div>
    </article>
  );
}
