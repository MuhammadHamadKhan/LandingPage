import Divider from "../ui/Divider";
import heroImage from "../../assets/bianca.jpeg";

function TikTokIcon({ size = 16 }) {
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

function InstagramIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="about"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]  bg-black text-white w-full lg:min-h-[600px] lg:max-h-[85vh] xl:max-h-[800px] overflow-hidden"
    >
      {/* Left Column — Content */}
      <div className="flex flex-col justify-center xl:justify-start xl:pt-18 items-center px-6 sm:px-12 md:px-16 lg:px-12 xl:px-20 py-12 sm:py-4 lg:py-4">
        <div>
          {/* Main Headline */}
          <h1
            style={{ fontFamily: "'Bodoni Moda', serif" }}
            className="font-black leading-[0.92] text-[15vw] sm:text-[10vw] md:text-[7.5vw] lg:text-[5vw] xl:text-[4.25rem] tracking-tight"
          >
            BIANCA
            <br />
            BLEZARD
            <br />
            VIOLIN
          </h1>

          {/* Subheading */}
          <p className="mt-6 sm:mt-8 text-xs sm:text-sm font-medium tracking-[0.15em] uppercase max-w-md leading-relaxed">
            Multi-award-winning wedding violinist. <br />
            Based in the UK performing Worldwide
          </p>

          {/* Hairline Divider */}
          <Divider className="max-w-md my-6 sm:my-8 border-[#E4E0D8]" />

          {/* Body Description */}
          <p className="text-sm sm:text-base max-w-md leading-relaxed">
            Thank you so much for visiting my page. If you have already booked
            with me, you can log into my customer portal here. If you would like
            to enquire about my services, please use the form linked below to
            register your interest.
          </p>

          {/* Single Primary CTA + Audio Text Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8 sm:mt-10">
            <a
              href="https://interest.biancablezardviolin.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center cursor-pointer w-full sm:w-auto text-sm py-3 px-7 font-medium tracking-[0.15em] uppercase bg-[#D61F7F] hover:bg-[#b8186b] text-white transition-colors"
            >
              Register Interest
            </a>

            {/* Audio Link */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-medium tracking-[0.15em] uppercase">
                Listen to me perform
              </span>
              <a
                href="https://www.instagram.com/biancablezardviolin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[#E4E0D8] hover:border-[#D61F7F] hover:text-[#D61F7F] transition-colors"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@biancablezardviolin?_t=8ivCYtkWnOC&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[#E4E0D8] hover:border-[#D61F7F] hover:text-[#D61F7F] transition-colors"
              >
                <TikTokIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column — Image */}
      <div className="relative h-[380px] sm:h-[480px] lg:h-full w-full bg-[#F1EDE6] overflow-hidden">
        <img
          src={heroImage}
          alt="Bianca Blezard performing violin at an outdoor wedding ceremony"
          className="w-full h-full object-cover object-top sm:object-[center_18%] md:object-[center_15%] xl:object-center"
        />
      </div>
    </section>
  );
}
