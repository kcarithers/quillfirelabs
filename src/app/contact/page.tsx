import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";
import { ventures } from "@/lib/products";

export const metadata: Metadata = {
  title: "Contact & support",
  description: "Contact Quillfire Labs for product support, business inquiries and general questions.",
  alternates: { canonical: "/contact" },
};

const mail = (subject: string) => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

export default function ContactPage() {
  const channels = [
    { title: "Product support", body: "Help with an account, a bug, or a question about how something works. Please include the product name and your device.", href: mail("Product support"), cta: "Email support" },
    { title: "Business inquiries", body: "Partnerships, press, app store or vendor verification, and other company matters.", href: mail("Business inquiry"), cta: "Email the company" },
    { title: "Ideas & feedback", body: "Feature requests, or a problem you think deserves a better solution.", href: mail("Feedback"), cta: "Send feedback" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch."
        intro={`Every message goes to ${site.email} and is read by a person. We aim to reply within a few business days.`}
      />
      <div className="container-page py-16 sm:py-20">
        <ul className="grid gap-6 md:grid-cols-3">
          {channels.map((c) => (
            <li key={c.title} className="flex flex-col rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <h2 className="text-lg font-semibold tracking-tight">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.body}</p>
              <a href={c.href} className="link-accent mt-6 text-sm font-medium">{c.cta} →</a>
            </li>
          ))}
        </ul>

        <section className="mt-16" aria-labelledby="product-sites">
          <h2 id="product-sites" className="eyebrow">Product websites</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Product-specific help, FAQs and privacy information are on each product&rsquo;s own site.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {ventures.filter((v) => v.url).map((p) => (
              <li key={p.slug}>
                <a href={p.url!} target="_blank" rel="noopener" className="btn-secondary">{p.name} ↗</a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
