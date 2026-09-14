import Badge from "./Badge";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className = "",
}) {
  return (
    <div
      className={`${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <div className="mb-4">
          <Badge variant="eyebrow">{eyebrow}</Badge>
        </div>
      )}
      <h2
        style={{ fontFamily: "'Bodoni Moda', serif" }}
        className="font-black text-[#16181D] leading-[0.95] text-[12vw] sm:text-[7vw] lg:text-[3.6vw] xl:text-[3.25rem]"
      >
        {title}
        <span className="text-[#E39B8C]">.</span>
      </h2>
    </div>
  );
}
