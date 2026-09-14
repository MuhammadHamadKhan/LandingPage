import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Divider from "../ui/Divider";

export default function Hero() {
  return (
    <section
      id="home"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="grid grid-cols-1 xl:grid-cols-[1.15fr_1fr] bg-[#FAF7F2] xl:min-h-[calc(100vh-80px)]"
    >
      {/* Left Column — Content */}
      <div className="flex flex-col justify-between px-6 sm:px-12 md:px-16 py-12 sm:py-16 xl:py-20">
        <div>
          {/* Eyebrow badge */}
          <Badge className="mb-6 sm:mb-8">
            Royal Northern College of Music Alumna
          </Badge>

          {/* Main Headline */}
          <h1
            style={{ fontFamily: "'Bodoni Moda', serif" }}
            className="font-black text-[#16181D] leading-[0.92] text-[15vw] sm:text-[10vw] md:text-[7.5vw] lg:text-[6vw] xl:text-[4.5rem] tracking-tight"
          >
            BIANCA
            <br />
            BLEZARD
            <span className="text-[#E39B8C]">.</span>
            <br />
            VIOLIN
          </h1>

          {/* Subheading */}
          <p className="mt-6 sm:mt-8 text-xs sm:text-sm font-medium tracking-[0.15em] uppercase text-[#16181D] max-w-md leading-relaxed">
            Live violin performances for exceptional celebrations &amp;
            weddings.
          </p>

          {/* Hairline Divider */}
          <Divider className="max-w-md my-6 sm:my-8" />

          {/* Body Description */}
          <p className="text-[#3C4A5C] text-sm sm:text-base max-w-md leading-relaxed">
            Curating evocative auditory landscapes across Lake Como, Paris, the
            Amalfi Coast, London, and the Swiss Alps since 2012.
          </p>

          {/* Single Primary CTA + Audio Text Link */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8 sm:mt-10">
            <Button
              variant="primary"
              icon="→"
              className="cursor-pointer w-full sm:w-auto px-8 py-3.5"
            >
              Reserve Date
            </Button>

            {/* Replaced 2nd Button with Audio Link */}
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.15em] uppercase text-[#16181D] hover:text-[#E39B8C] transition-colors py-2 group">
              <span className="flex items-center gap-0.5 text-[#E39B8C]">
                <span className="w-0.5 h-3 bg-current animate-pulse" />
                <span className="w-0.5 h-4 bg-current" />
                <span className="w-0.5 h-2 bg-current animate-pulse" />
              </span>
              <span>Listen Audio Samples</span>
            </span>
          </div>
        </div>

        {/* Location & Availability Footer */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-[#E4E0D8]/60 flex flex-wrap items-center justify-between gap-4 max-w-md">
          <div className="flex items-center gap-2 text-xs text-[#3C4A5C]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="font-medium text-[#16181D]">Base Location:</span>{" "}
            Mayfair, London, UK
          </div>
          <div className="text-xs text-[#3C4A5C]/80 tracking-wide uppercase font-medium">
            Worldwide Destination Events
          </div>
        </div>
      </div>

      {/* Right Column — Full Bleed Image */}
      <div className="relative h-[380px] sm:h-[480px] md:h-[580px] xl:h-full bg-[#F1EDE6]">
        <img
          src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1200&q=80"
          alt="Bianca Blezard performing violin at an outdoor wedding ceremony"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle photo gradient vignette on mobile bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent xl:hidden" />
      </div>
    </section>
  );
}
