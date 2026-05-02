export function PageHeader({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="px-4 pb-5 pt-7 md:px-6 md:pt-10">
      <div className="mx-auto max-w-6xl">
        {eyebrow && <p className="text-sm font-black uppercase tracking-[0.22em] text-palm">{eyebrow}</p>}
        <h1 className="mt-2 max-w-4xl text-4xl font-black tracking-normal text-cocoa md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-charcoal/70">{description}</p>
      </div>
    </section>
  );
}
