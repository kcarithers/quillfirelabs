import type { Metadata } from "next";
import Link from "next/link";
import { ventures } from "@/lib/products";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/VentureCard";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "NimoTrax, KodaTrax, Aethron Studios and inquisitiveMaestro — the Quillfire Labs portfolio.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Under the Quillfire umbrella"
        intro="Products, studios and ventures created by Quillfire Labs. Each has its own home, with full details and dedicated support."
      />
      <div className="container-page divide-y divide-line">
        {ventures.map((v) => (
          <section key={v.slug} id={v.slug} className="grid scroll-mt-28 gap-8 py-14 sm:py-16 lg:grid-cols-[1fr_1.4fr]" aria-labelledby={`${v.slug}-title`}>
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 id={`${v.slug}-title`} className="text-3xl font-semibold tracking-tight">{v.name}</h2>
                <StatusBadge status={v.status} />
              </div>
              <p className="mt-3 text-lg text-slate-700">{v.tagline ?? "Details coming soon."}</p>
              {v.audience && (
                <>
                  <p className="eyebrow mt-6">For</p>
                  <p className="mt-1 text-sm text-slate-600">{v.audience}</p>
                </>
              )}
              {v.url ? (
                <a href={v.url} target="_blank" rel="noopener" className="btn-primary mt-8">Visit {v.url.replace("https://", "")}</a>
              ) : (
                <Link href="/contact" className="btn-secondary mt-8">Ask about {v.name}</Link>
              )}
            </div>
            {(v.summary || v.highlights) && (
              <div>
                {v.summary && <p className="leading-relaxed text-slate-700">{v.summary}</p>}
                {v.highlights && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {v.highlights.map((h) => (
                      <li key={h} className="rounded-xl border border-line bg-surface p-4 text-sm text-slate-700">{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </section>
        ))}
      </div>
    </>
  );
}
