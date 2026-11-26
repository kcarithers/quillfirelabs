import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Quillfire Labs is an independent company building products and ventures with engineering discipline and practical problem-solving.",
  alternates: { canonical: "/about" },
};

const facts = [
  ["Legal name", site.legalName],
  ["Structure", "Limited liability company"],
  ["Contact", site.email],
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Independent by design."
        intro="Quillfire Labs creates products and ventures the way good engineering gets done: understand the problem, design the system, then make it simple to use."
      />
      <div className="container-page grid gap-16 py-16 sm:py-20 lg:grid-cols-[1.6fr_1fr]">
        <div className="prose-page">
          <h2 className="mt-0!">Background</h2>
          <p>
            Quillfire Labs was founded by an engineer whose professional background spans mechanical design, systems
            engineering, model-based systems engineering (MBSE), system architecture and complex engineering
            development. That background shapes how everything is approached — with clear requirements, careful
            trade-offs and attention to how the whole system behaves, not just how it looks.
          </p>
          <h2>What we make</h2>
          <p>
            Quillfire Labs isn&rsquo;t tied to a single industry or to software alone. The portfolio includes{" "}
            <Link href="/portfolio#nimotrax">NimoTrax</Link>, for managing tasks, rewards and savings in families and
            groups, along with ventures in development: <Link href="/portfolio#kodatrax">KodaTrax</Link>, a team
            management app for small-sided youth soccer, <Link href="/portfolio#aethron-studios">Aethron Studios</Link>{" "}
            and <Link href="/portfolio#inquisitivemaestro">inquisitiveMaestro</Link>.
          </p>
          <p>
            Future work may extend into productivity and AI-assisted tools, engineering and MBSE solutions, mechanical
            design and metrology, modeling and simulation, and new ventures wherever a practical, well-built solution can
            make a real difference.
          </p>
          <h2>The name</h2>
          <p>
            <em>Quill</em> stands for ideas, craft and precision — the careful work of putting a design on paper.{" "}
            <em>Fire</em> stands for energy, ambition and transformation — turning that design into something real.
          </p>
        </div>
        <aside aria-labelledby="facts-heading" className="h-fit rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <h2 id="facts-heading" className="eyebrow">Company details</h2>
          <dl className="mt-5 space-y-4 text-sm">
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt className="text-slate-500">{k}</dt>
                <dd className="mt-0.5 font-medium text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </>
  );
}
