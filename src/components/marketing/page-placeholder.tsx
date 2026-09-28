export function PagePlaceholder({ title, description }: { title: string; description: string }) {
  return (
    <section className="marketing-section flex flex-1 flex-col justify-center gap-4">
      <p className="text-label">Clonao</p>
      <h1 className="text-section-heading max-w-2xl">{title}</h1>
      <p className="text-body-lg max-w-xl">{description}</p>
    </section>
  );
}
