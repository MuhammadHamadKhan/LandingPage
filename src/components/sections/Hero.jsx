import Divider from "../ui/Divider";
import heroImage from "../../assets/bianca.jpeg";

// White circle bg + black glyph, per client request
function TikTokIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.5 3c.4 2.2 1.9 3.9 4.1 4.3v3.1c-1.5 0-2.9-.5-4.1-1.3v6.4c0 3.3-2.7 5.9-6 5.9s-6-2.6-6-5.9 2.7-5.9 6-5.9c.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.2-.9-.2-1.5 0-2.7 1.2-2.7 2.8s1.2 2.8 2.7 2.8 2.8-1.2 2.8-2.8V3h3.2z" />
    </svg>
  );
}

// Real Instagram gradient mark, pink/magenta-dominant per client request
function InstagramLogo() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 48 48" aria-hidden="true">
      <defs>
        <linearGradient id="igGradientHero" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FED576" />
          <stop offset="15%" stopColor="#F47133" />
          <stop offset="35%" stopColor="#E1306C" />
          <stop offset="60%" stopColor="#C13584" />
          <stop offset="80%" stopColor="#962FBF" />
          <stop offset="100%" stopColor="#833AB4" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="12" fill="url(#igGradientHero)" />
      <rect
        x="13"
        y="13"
        width="22"
        height="22"
        rx="6"
        fill="none"
        stroke="white"
        strokeWidth="2.2"
      />
      <circle
        cx="24"
        cy="24"
        r="6"
        fill="none"
        stroke="white"
        strokeWidth="2.2"
      />
      <circle cx="32.5" cy="15.5" r="1.6" fill="white" />
    </svg>
  );
}
function ArrowIcon({ className = "" }) {
  return (
    <svg
      width="28"
      height="18"
      viewBox="0 0 20 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1 2L5 6L1 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="chevron-1"
      />
      <path
        d="M7 2L11 6L7 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="chevron-2"
      />
      <path
        d="M13 2L17 6L13 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="chevron-3"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <>
      <style>{`
  @keyframes chevron-flow {
    0%, 100% { opacity: 0.15; }
    50% { opacity: 1; }
  }
  .chevron-1 { animation: chevron-flow 1.5s ease-in-out infinite; }
  .chevron-2 { animation: chevron-flow 1.5s ease-in-out infinite; animation-delay: 0.15s; }
  .chevron-3 { animation: chevron-flow 1.5s ease-in-out infinite; animation-delay: 0.3s; }
`}</style>
      <section
        id="about"
        style={{ fontFamily: "'Inter', sans-serif" }}
        className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] bg-black text-white w-full overflow-hidden items-stretch"
      >
        {/* Left Column — Content */}
        <div className="flex flex-col justify-center items-center px-6 sm:px-12 md:px-16 lg:px-12 xl:px-20 py-12 sm:py-16 lg:py-16">
          <div>
            {/* Main Headline */}
            <h1
              style={{ fontFamily: "'Bodoni Moda', serif" }}
              className="font-black leading-[0.92] text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-8xl tracking-tight"
            >
              BIANCA
              <br />
              BLEZARD
              <br />
              VIOLIN
            </h1>

            {/* Subheading */}
            <p className="mt-6 sm:mt-8 text-xs sm:text-sm lg:text-base xl:text-lg 3xl:text-xl font-medium tracking-[0.15em] uppercase leading-relaxed">
              Multi-award-winning wedding violinist <br />
              Based in the UK
              <br />
              performing Worldwide
            </p>

            {/* Hairline Divider */}
            <Divider className="max-w-md my-6 sm:my-8 border-[#E4E0D8]" />

            {/* Body Description */}
            <p className="text-sm sm:text-base lg:text-xl 2xl:text-2xl max-w-md leading-relaxed">
              Thank you so much for visiting my page. If you have already booked
              with me, you can log into my customer portal here. If you would
              like to enquire about my services, please use the form linked
              below to register your interest.
            </p>

            {/* Single Primary CTA + Audio Text Link */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center sm:items-center gap-4 sm:gap-6 mt-8 sm:mt-10">
              <a
                href="https://interest.biancablezardviolin.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center cursor-pointer whitespace-nowrap w-full sm:w-auto rounded text-sm lg:text-base 3xl:text-lg py-3 lg:py-3.5 px-7 lg:px-8 font-medium tracking-[0.15em] uppercase bg-[#D61F7F] hover:bg-[#b8186b] text-white transition-colors"
              >
                Register Interest
              </a>

              {/* Audio Link */}
              <div className="flex flex-col  sm:flex-row items-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm 3xl:text-base font-medium tracking-[0.15em] uppercase text-white whitespace-nowrap">
                  Listen to me perform
                </span>

                <ArrowIcon className="rotate-90 sm:rotate-0 text-[#D61F7F] shrink-0" />

                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/biancablezardviolin"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 rounded-xl overflow-hidden transition-transform hover:scale-105 shrink-0"
                  >
                    <InstagramLogo />
                  </a>
                  <a
                    href="https://www.tiktok.com/@biancablezardviolin?_t=8ivCYtkWnOC&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-10 h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 text-black rounded-full bg-white flex items-center justify-center transition-transform hover:scale-105 shrink-0"
                  >
                    <TikTokIcon size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column — Image (Synchronized with content height) */}
        <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-auto md:h-[680px] lg:h-full bg-[#F1EDE6] overflow-hidden">
          <img
            src={heroImage}
            alt="Bianca Blezard performing violin at an outdoor wedding ceremony"
            className="w-full h-full object-cover object-[center_12%]"
          />
        </div>
      </section>
    </>
  );
}
