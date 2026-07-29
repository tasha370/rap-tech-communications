interface SectionHeadingProps {
  badge: string;
  title: string;
  description: string;
  centered?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto mb-16 max-w-4xl text-center" : "mb-16"}>
      <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold uppercase tracking-widest text-blue-700">
        {badge}
      </span>

      <h2 className="mt-5 text-5xl font-bold tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}