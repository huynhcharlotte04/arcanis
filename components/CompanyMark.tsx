type CompanyMarkProps = {
  monogram: string;
  className?: string;
  size?: number;
  title?: string;
};

// Emblème générique pour une entreprise cliente qui n'est pas Montrel
// Industries (ex. QSEAL11, où chaque cabinet traite une entreprise
// différente) : même hexagone technique que MontrelMark, mais avec le
// monogramme de l'entreprise plutôt qu'un "M" gravé en dur.
export function CompanyMark({ monogram, className, size = 40, title }: CompanyMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={className}
    >
      {title ? <title>{title}</title> : null}
      <polygon
        points="24,3 41.2,13.5 41.2,34.5 24,45 6.8,34.5 6.8,13.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity="0.55"
      />
      <text
        x="24"
        y="28"
        textAnchor="middle"
        fontSize="14"
        fontWeight="700"
        fill="currentColor"
      >
        {monogram}
      </text>
    </svg>
  );
}
