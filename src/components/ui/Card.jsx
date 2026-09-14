export default function Card({
  children,
  highlighted = false,
  className = "",
}) {
  return (
    <div
      className={`bg-white border p-6 ${
        highlighted ? "border-2 border-[#E39B8C]" : "border-[#E4E0D8]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
