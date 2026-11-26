export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="border-b border-line">
      <div className="container-page py-16 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-slate-600 text-pretty">{intro}</p>}
      </div>
    </section>
  );
}
