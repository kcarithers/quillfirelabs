import Link from "next/link";
import { ventures } from "@/lib/products";
import { site } from "@/lib/site";
import { VentureCard } from "@/components/VentureCard";

const principles = [
  { n: "01", title: "Define the problem first", body: "Every venture starts from a clearly stated need and the people who have it — not from a feature list or a trend." },
  { n: "02", title: "Think in systems", body: "How the pieces fit together — people, workflows, data, edge cases — is worked out before anything is polished." },
  { n: "03", title: "Keep it simple", body: "Fewer moving parts means lower cost, faster delivery and fewer things to go wrong. Complexity has to earn its place." },
  { n: "04", title: "Build to last", body: "Sound foundations and honest decisions, so what we make stays dependable as it grows." },
];

const focusAreas = [
  { title: "Consumer apps", body: "Tools that help families, teams and individuals organize, coordinate and stay motivated.", current: true },
  { title: "Engineering & MBSE", body: "Software and services supporting system architecture, requirements and model-based systems engineering.", current: false },
  { title: "Design, metrology & simulation", body: "Practical solutions for mechanical design, measurement and modeling.", current: false },
  { title: "New ventures", body: "Brands and businesses beyond software, developed under the Quillfire Labs umbrella.", current: true },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_70%_20%,black,transparent_70%)] opacity-60" />
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-ember-500/15 blur-3xl" />
        <div className="container-page relative py-20 sm:py-28 lg:py-36">
          <p className="eyebrow">Products · Studios · Ventures</p>
          <h1 className="mt-5 max-w-4xl text-[2.8rem] leading-[1.03] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Ideas,{" "}
            <span className="relative whitespace-nowrap text-ember-600">
              engineered
              <svg aria-hidden="true" viewBox="0 0 200 12" className="absolute -bottom-2 left-0 h-3 w-full" preserveAspectRatio="none">
                <path d="M2 9 C 60 2, 140 2, 198 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            .
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-slate-600 text-pretty sm:text-xl">
            Quillfire Labs is an independent company that creates and grows a portfolio of products and ventures —
            from apps for families and youth sports to new projects beyond software. Each one starts with a real
            problem and is built with engineering discipline.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/portfolio" className="btn-primary">Explore the portfolio</Link>
            <Link href="/contact" className="btn-secondary">Get in touch</Link>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="border-t border-line" aria-labelledby="portfolio-heading">
        <div className="container-page py-20 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 id="portfolio-heading" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Under the Quillfire umbrella</h2>
            </div>
            <Link href="/portfolio" className="link-accent text-sm font-medium">Full portfolio →</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ventures.map((v) => <VentureCard key={v.slug} venture={v} />)}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-line bg-surface" aria-labelledby="approach-heading">
        <div className="container-page grid gap-12 py-20 sm:py-24 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">Approach</p>
            <h2 id="approach-heading" className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">How we work</h2>
            <p className="mt-4 text-slate-600">
              Rooted in mechanical design and systems engineering — applied to every product and venture.
            </p>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {principles.map((p) => (
              <li key={p.n} className="bg-paper p-6 sm:p-8">
                <span className="font-mono text-sm text-ember-600">{p.n}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Focus areas */}
      <section className="border-t border-line" aria-labelledby="focus-heading">
        <div className="container-page py-20 sm:py-24">
          <p className="eyebrow">Direction</p>
          <h2 id="focus-heading" className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Where we&rsquo;re working — and where we&rsquo;re headed
          </h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((a) => (
              <li key={a.title} className="border-t border-line pt-5">
                <span className={`font-mono text-[0.7rem] tracking-wider uppercase ${a.current ? "text-ember-600" : "text-slate-500"}`}>
                  {a.current ? "Active" : "Exploring"}
                </span>
                <h3 className="mt-2 font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact CTA */}
      <section aria-labelledby="cta-heading">
        <div className="container-page pb-20 sm:pb-24">
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-ember-500/10 blur-3xl" />
            <div className="relative">
              <h2 id="cta-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">Questions, support or ideas?</h2>
              <p className="mt-3 max-w-xl text-slate-600">
                Reach out about anything in the portfolio, a business inquiry, or a problem you think deserves a better solution.
              </p>
            </div>
            <div className="relative mt-8 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
              <a href={`mailto:${site.email}`} className="btn-primary">Email us</a>
              <Link href="/contact" className="btn-secondary">Contact options</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
