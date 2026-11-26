import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-slate-600">The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
      <Link href="/" className="btn-primary mt-10">Back to home</Link>
    </section>
  );
}
