export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-[#FAF7F2] border-t border-[#E4E0D8]"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr] gap-10 sm:gap-8">
          {/* Brand column */}
          <div className="max-w-sm">
            <div className="flex items-end gap-1 mb-4">
              <span
                style={{ fontFamily: "'Bodoni Moda', serif" }}
                className="text-xl font-black tracking-tight text-[#16181D] whitespace-nowrap"
              >
                BIANCA BLEZARD
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E39B8C] mb-1.5" />
            </div>
            <p className="text-xs sm:text-sm tracking-wide uppercase text-[#3C4A5C] leading-relaxed">
              Bespoke live violin performances for weddings, luxury galas, and
              private international residencies. London, Lake Como, and
              worldwide.
            </p>
          </div>

          {/* Direct inquiries */}
          <div>
            <h3 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#16181D] mb-5">
              Direct Inquiries
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:hello@biancablezard.com"
                  className="text-sm text-[#3C4A5C] hover:text-[#E39B8C] transition-colors"
                >
                  hello@biancablezard.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:bookings@biancablezard.com"
                  className="text-sm text-[#3C4A5C] hover:text-[#E39B8C] transition-colors"
                >
                  bookings@biancablezard.com
                </a>
              </li>
            </ul>
          </div>

          {/* Follow the journey */}
          <div>
            <h3 className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#16181D] mb-5">
              Follow the Journey
            </h3>
            <ul className="flex flex-row sm:flex-col flex-wrap gap-x-6 gap-y-3">
              {["Instagram", "Spotify", "YouTube"].map((platform) => (
                <li key={platform}>
                  <a
                    href="#"
                    className="text-sm text-[#3C4A5C] hover:text-[#E39B8C] transition-colors"
                  >
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E4E0D8] mt-14 sm:mt-16 pt-6 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-[#3C4A5C]">
            © {currentYear} Bianca Blezard. All rights reserved.
          </p>
          <p className="text-[10px] tracking-[0.15em] uppercase text-[#3C4A5C]">
            Haute Horlogerie &amp; Editorial Concert Production
          </p>
        </div>
      </div>
    </footer>
  );
}
