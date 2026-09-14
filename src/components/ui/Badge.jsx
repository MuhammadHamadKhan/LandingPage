export default function Badge({ children, variant = "pill", className = "" }) {
  if (variant === "ribbon") {
    // Solid rose ribbon — e.g. "MOST COMMISSIONED" on the highlighted pricing card
    return (
      <span
        className={`inline-block px-4 py-1.5 text-[11px] font-medium tracking-[0.15em] uppercase bg-[#E39B8C] text-white ${className}`}
      >
        {children}
      </span>
    );
  }

  if (variant === "eyebrow") {
    // Plain uppercase label used above section headings (e.g. "BIOGRAPHICAL OVERVIEW")
    return (
      <span
        className={`text-[11px] font-medium tracking-[0.15em] uppercase text-[#E39B8C] ${className}`}
      >
        {children}
      </span>
    );
  }

  // Default: rounded pill with a dot — e.g. "ROYAL NORTHERN COLLEGE OF MUSIC ALUMNA"
  return (
    <div
      className={`inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-[#F6DED6] ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#E39B8C]" />
      <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#16181D]">
        {children}
      </span>
    </div>
  );
}
