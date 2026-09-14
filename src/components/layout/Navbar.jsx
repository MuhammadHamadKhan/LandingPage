import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const navLinks = ["Home", "About", "Booking"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E4E0D8] transition-colors"
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        {/* Logo */}
        <div className="flex items-end gap-1">
          <span
            style={{ fontFamily: "'Bodoni Moda', serif" }}
            className="text-xl md:text-2xl font-black tracking-tight text-[#16181D] whitespace-nowrap"
          >
            BIANCA BLEZARD
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E39B8C] mb-1.5" />
        </div>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-medium tracking-[0.15em] uppercase text-[#16181D]">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false); // Close mobile menu if open

                const targetId = link.toLowerCase();

                // Smooth scroll to top if link is "Home", otherwise find element by ID
                if (targetId === "home") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }
              }}
              className="hover:text-[#E39B8C] transition-colors cursor-pointer"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="secondary" className="cursor-pointer px-5 py-2.5">
            Login
          </Button>
          <Button variant="primary" className="cursor-pointer px-5 py-2.5">
            Register / Inquire
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="lg:hidden text-[#16181D] p-1 focus:outline-none"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E4E0D8] bg-white/95 backdrop-blur-lg px-6 py-6 flex flex-col gap-6 shadow-lg">
          <div className="flex flex-col gap-5 text-xs font-medium tracking-[0.15em] uppercase text-[#16181D]">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="hover:text-[#E39B8C] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <Button variant="secondary" className="w-full">
              Login
            </Button>
            <Button variant="primary" className="w-full">
              Register / Inquire
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
