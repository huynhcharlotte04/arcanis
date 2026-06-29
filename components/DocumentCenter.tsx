import Link from "next/link";
import { simulation } from "@/data/mission";

export function DocumentCenter() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {simulation.documentCategories.map((category) => (
        <Link
          key={category.title}
          href={`/centre-documentaire/${encodeURIComponent(category.title.toLowerCase())}`}
          className="glass-panel group rounded-lg p-6 transition hover:-translate-y-0.5 hover:border-brass/45"
        >
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-2xl font-semibold text-porcelain">
              {category.title}
            </h2>
            <span className="rounded-full border border-brass/35 px-3 py-1 text-xs text-brass">
              A venir
            </span>
          </div>
          <p className="mt-5 text-sm leading-7 text-mist">
            {category.description}
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-mist group-hover:text-brass">
            {category.status}
          </p>
        </Link>
      ))}
    </div>
  );
}
