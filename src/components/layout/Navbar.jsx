import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";
import logo from "../../assets/logo.png";

const navLinks = ["About", "Reviews", "Contact"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (link) => {
    setMobileOpen(false);

    const targetId = link.toLowerCase();

    if (targetId === "about") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        style={{ fontFamily: "'Inter', sans-serif" }}
        className="sticky top-0 z-50 w-full overflow-x-clip bg-white/80 backdrop-blur-md border-b border-[#E4E0D8]"
      >
        <div className="max-w-[1850px] mx-auto [@media(min-width:1200px)_and_(max-width:1500px)]:max-w-[1360px] flex items-center justify-between px-4 sm:px-6 md:px-10 md:pl-18 lg:px-12 xl:px-16 2xl:px-20  py-4 sm:py-5 xl:py-6">
          {/* Logo */}
          <div className="shrink-0">
            <img
              src={logo}
              alt="Bianca Blezard"
              className="h-12 sm:h-16 md:h-18 xl:h-20 2xl:h-18  w-auto object-contain"
            />
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10 2xl:gap-12 text-[11px] xl:text-xs 2xl:text-sm font-medium tracking-[0.15em] uppercase text-[#16181D]">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link);
                }}
                className="hover:text-[#D61F7F] transition-colors cursor-pointer"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://customer.biancablezardviolin.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              icon="→"
              className="text-center cursor-pointer w-full sm:w-auto text-sm xl:text-base py-3 xl:py-3.5 px-7 xl:px-8 font-medium tracking-[0.15em] uppercase bg-white  text-[#D61F7F] border rounded  border-[#D61F7F] transition-colors"
            >
              Login
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="lg:hidden relative z-[70] text-[#16181D] p-2 focus:outline-none shrink-0"
          >
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </nav>

      {/* Full-screen overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`lg:hidden fixed inset-0 z-[60] bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed top-0 right-0 z-[65] h-dvh w-[82%] max-w-[360px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#E4E0D8]">
            {/* Sidebar Logo */}
            <img
              src={logo}
              alt="Bianca Blezard"
              className="h-12 sm:h-14 w-auto object-contain"
            />

            {/* Close Button */}
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E4E0D8] text-[#16181D] hover:bg-[#F7F4EF] hover:border-[#E39B8C] transition-all duration-200"
            >
              <X size={20} strokeWidth={1.8} />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="flex flex-col flex-1 px-6 sm:px-8 py-8">
            {/* Navigation */}
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#9A9A9A] mb-6">
                Navigation
              </p>

              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link);
                    }}
                    className={`group flex items-center justify-between py-4 text-sm font-medium tracking-[0.12em] uppercase text-[#16181D] hover:text-[#E39B8C] transition-colors ${
                      index !== navLinks.length - 1
                        ? "border-b border-[#EEEAE3]"
                        : ""
                    }`}
                  >
                    <span>{link}</span>

                    <span className="text-[#B8B4AE] group-hover:text-[#E39B8C] group-hover:translate-x-1 transition-all duration-200">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-auto pt-8">
              <div className="border-t border-[#E4E0D8] pt-7">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#9A9A9A] mb-5">
                  Account
                </p>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://customer.biancablezardviolin.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon="→"
                    className="text-center cursor-pointer w-full sm:w-auto text-sm py-3 px-7 font-medium tracking-[0.15em] uppercase bg-white  text-[#D61F7F] border rounded  border-[#D61F7F] transition-colors"
                  >
                    Login
                  </a>

                  <a
                    href="https://interest.biancablezardviolin.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    icon="→"
                    className="text-center cursor-pointer w-full sm:w-auto text-sm py-3 px-7 font-medium tracking-[0.15em] uppercase bg-[#D61F7F]  text-white  transition-colors"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
