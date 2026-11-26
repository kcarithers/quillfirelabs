import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "How Quillfire Labs handles information on quillfirelabs.com.",
  alternates: { canonical: "/privacy" },
};

// REVIEW BEFORE LAUNCH: update if you add analytics, forms, cookies or newsletters.
const EFFECTIVE = "November 25, 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy policy" intro={`Effective ${EFFECTIVE}`} />
      <div className="container-page py-14">
        <div className="prose-page">
          <p>
            This policy explains how {site.legalName} (&ldquo;Quillfire Labs,&rdquo; &ldquo;we&rdquo;) handles
            information when you visit {site.url.replace("https://", "")} (the &ldquo;Site&rdquo;). Our products and ventures have their own privacy policies on their respective websites, which govern data
            collected through them.
          </p>
          <h2>Information we collect</h2>
          <ul>
            <li><strong>Information you send us.</strong> If you email us, we receive your email address and whatever you include in your message.</li>
            <li><strong>Technical data.</strong> Our hosting provider automatically processes standard request data such as IP address, browser type and pages requested, for security and to deliver the Site.</li>
          </ul>
          <p>The Site does not use advertising trackers and does not set cookies for tracking or marketing purposes.</p>
          <h2>How we use information</h2>
          <ul>
            <li>To respond to your inquiries and provide support.</li>
            <li>To operate, secure and improve the Site.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <p>We do not sell your personal information.</p>
          <h2>Sharing</h2>
          <p>
            We share information only with service providers that help us operate the Site and handle email (such as
            our hosting and email providers), when required by law, or to protect our rights and the safety of others.
          </p>
          <h2>Retention</h2>
          <p>We keep correspondence only as long as needed to respond, provide support, or meet legal requirements.</p>
          <h2>Your choices</h2>
          <p>
            You may ask us to access, correct or delete information you&rsquo;ve sent us by emailing{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. Depending on where you live, you may have additional rights
            under applicable law.
          </p>
          <h2>Children</h2>
          <p>The Site is not directed to children under 13, and we do not knowingly collect their personal information through it.</p>
          <h2>Changes</h2>
          <p>We may update this policy. The effective date above shows when it last changed.</p>
          <h2>Contact</h2>
          <p>{site.legalName} — <a href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
      </div>
    </>
  );
}
