export function SectionHeader({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brass">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-normal text-porcelain sm:text-5xl">
        {title}
      </h1>
      {children ? (
        <p className="mt-5 text-base leading-8 text-mist">{children}</p>
      ) : null}
    </div>
  );
}
