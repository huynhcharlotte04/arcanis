import Link from "next/link";

export function BrandHeader() {
  return (
    <header className="flex items-center justify-between gap-4">
      <Link href="/" className="group inline-flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-md border border-brass/50 bg-brass/10 text-sm font-bold text-brass">
          A
        </span>
        <span>
          <span className="block text-sm font-semibold tracking-[0.26em] text-porcelain">
            ARCANIS
          </span>
          <span className="block text-xs text-mist">
            Professional Judgment
          </span>
        </span>
      </Link>
      <span className="hidden text-xs uppercase tracking-[0.24em] text-mist sm:block">
        V0 Mission Qualite
      </span>
    </header>
  );
}
