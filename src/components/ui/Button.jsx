export default function Button({
  children,
  variant = "primary",
  icon,
  iconPosition = "right",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-4 text-[11px] font-medium tracking-[0.15em] uppercase transition-colors";

  const variants = {
    // Filled rose — main call-to-action (e.g. "Reserve Date", "Register / Inquire")
    primary: "bg-[#E39B8C] text-white hover:bg-[#d98a7a]",
    // White bg + dark outline — secondary action (e.g. "Login", "Listen Audio Samples")
    secondary:
      "bg-white border border-[#16181D] text-[#16181D] hover:bg-[#16181D] hover:text-white ",
    // Quiet outline — used on lighter/bordered contexts (e.g. "Listen Audio Samples")
    outline: "border border-[#E4E0D8] text-[#16181D] hover:border-[#16181D]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {icon && iconPosition === "left" && (
        <span aria-hidden="true">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span aria-hidden="true">{icon}</span>
      )}
    </button>
  );
}
