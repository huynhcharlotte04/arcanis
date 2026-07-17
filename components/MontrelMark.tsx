type MontrelMarkProps = {
  className?: string;
  size?: number;
  title?: string;
};

// Emblème de l'entreprise fictive Montrel Industries : un monogramme "M"
// géométrique inscrit dans un hexagone technique, dessiné en traits fins pour
// rester cohérent avec l'esthétique de la plateforme. Utilise currentColor,
// donc sa teinte suit la classe de texte appliquée.
export function MontrelMark({ className, size = 40, title }: MontrelMarkProps) {
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
      <path
        d="M15 33 L15 16 L24 26 L33 16 L33 33"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="38.5" r="1.3" fill="currentColor" />
    </svg>
  );
}
