/**
 * Разделитель-ромб под заголовком — фирменный приём шаблона Attorneyster.
 * Один элемент, который держит весь ритм страницы: он повторяется
 * под каждым заголовком и заменяет собой декоративные градиенты.
 */
export function Separator({
  align = "left",
  tone = "accent",
  className = "",
}: {
  align?: "left" | "center";
  tone?: "accent" | "dark";
  className?: string;
}) {
  const color = tone === "accent" ? "#4a6cf7" : "#14171d";
  return (
    <span
      className={`flex items-center gap-2 ${
        align === "center" ? "justify-center" : ""
      } ${className}`}
      aria-hidden="true"
    >
      <span className="h-px w-10" style={{ background: color, opacity: 0.5 }} />
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
        <path d="M4.5 0L9 4.5L4.5 9L0 4.5L4.5 0Z" fill={color} />
      </svg>
      <span className="h-px w-10" style={{ background: color, opacity: 0.5 }} />
    </span>
  );
}

/** Заголовок секции с eyebrow и разделителем. */
export function SectionTitle({
  eyebrow,
  title,
  align = "left",
  tone = "light",
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  align?: "left" | "center";
  /** light — заголовок светлый (на тёмном фоне), dark — тёмный (на бумаге) */
  tone?: "light" | "dark";
  children?: React.ReactNode;
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={`h-section mt-4 ${
          tone === "light" ? "text-mist-100" : "text-graphite-900"
        }`}
      >
        {title}
      </h2>
      <Separator
        align={align}
        tone={tone === "light" ? "accent" : "dark"}
        className="mt-5"
      />
      {children}
    </div>
  );
}
