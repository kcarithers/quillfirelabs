import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Terms governing use of the Quillfire Labs website.",
  alternates: { canonical: "/terms" },
};

const EFFECTIVE = "November 25, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of use" intro={`Effective ${EFFECTIVE}`} />
      <div className="container-page py-14">
        <div className="prose-page">
          <p>
            These terms govern your use of {site.url.replace("https://", "")} (the &ldquo;Site&rdquo;), operated by{" "}
            {site.legalName}. By using the Site you agree to them. Each Quillfire Labs product or venture is governed by its own terms, available on its website.
          </p>
          <h2>Use of the Site</h2>
          <p>You may use the Site for lawful, personal and business informational purposes. Don&rsquo;t attempt to disrupt, probe or gain unauthorized access to it.</p>
          <h2>Intellectual property</h2>
          <p>
            The Site&rsquo;s content, the Quillfire Labs name and logo, and the names of our products and ventures are owned by {site.legalName}. You may not use them without permission, except to refer accurately to them.
          </p>
          <h2>Third-party links</h2>
          <p>The Site may link to sites we don&rsquo;t control, including app stores. We aren&rsquo;t responsible for their content or practices.</p>
          <h2>Disclaimer</h2>
          <p>The Site is provided &ldquo;as is&rdquo; without warranties of any kind. Information about products and ventures under development may change.</p>
          <h2>Limitation of liability</h2>
          <p>To the fullest extent permitted by law, {site.legalName} is not liable for indirect, incidental or consequential damages arising from use of the Site.</p>
          <h2>Governing law</h2>
          <p>These terms are governed by the laws of {site.jurisdiction}, without regard to conflict-of-law rules.</p>
          <h2>Changes</h2>
          <p>We may update these terms; continued use of the Site means you accept the current version.</p>
          <h2>Contact</h2>
          <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
      </div>
    </>
  );
}
