// Straight from the client's "Old Client Reviews" document — no names attached
// in the source, so a star row is used instead of inventing attributions.
const reviews = [
  "She was absolutely perfect, everything we hoped for and more.",
  "You literally made my dreams come true.",
  "She was absolutely incredible, a massive hit with everyone.",
  "The bespoke songs were even better than we'd imagined.",
  "She played as I walked down the aisle, it was one of the most beautiful moments of my life.",
  "Honestly, she was unbelievable, it totally completed our wedding.",
  "She kept me calm, was truly professional, and just all-round amazing.",
  "Everyone commented on how perfect the music was.",
  "Beautiful person, beautiful music.",
  "Thank you for making our wedding.",
];

function ReviewBubble({ quote }) {
  return (
    <div className="flex-shrink-0 w-[260px] sm:w-[320px] lg:w-[340px] xl:w-[360px] bg-white border border-[#E4E0D8] rounded-2xl p-6 sm:p-7 lg:p-8 mx-3">
      <div
        className="flex gap-0.5 text-[#D61F7F] text-base mb-4"
        aria-hidden="true"
      >
        {"★★★★★"}
      </div>
      <p
        style={{ fontFamily: "'Bodoni Moda', serif" }}
        className="italic text-[#16181D] text-base sm:text-lg leading-snug"
      >
        &ldquo; {quote}&nbsp;&rdquo;
      </p>
    </div>
  );
}

export default function Reviews() {
  // Duplicate the list so the track can loop seamlessly: translating exactly
  // -50% moves through one full set, then the (identical) second set picks up
  // right where the first left off, with no visible seam or reset jump.
  const track = [...reviews, ...reviews];

  return (
    <section
      id="reviews"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className=" py-20 scroll-mt-24"
    >
      <style>{`
        @keyframes reviews-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .reviews-track {
          animation: reviews-marquee 45s linear infinite;
        }
        .reviews-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .reviews-track {
            animation: none;
            overflow-x: auto;
          }
        }
      `}</style>

      {/* Section header */}
      <div className="px-6 md:px-16 text-center mb-14">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-10 bg-[#E4E0D8]" />
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#D61F7F]">
            Client Testimonials
          </span>
          <span className="h-px w-10 bg-[#E4E0D8]" />
        </div>
        <h2
          style={{ fontFamily: "'Bodoni Moda', serif" }}
          className="font-black text-[#16181D] leading-[0.95] text-[13vw] sm:text-[8vw] lg:text-[4.5vw] xl:text-[4rem]"
        >
          REVIEWS
        </h2>
        <p className="mt-5 text-sm md:text-base text-[#3C4A5C] max-w-md mx-auto">
          Hear what some of my previous couples have had to say.
        </p>
      </div>

      {/* Sliding review bubbles — full-bleed, edge to edge */}
      <div className="overflow-hidden">
        <div className="reviews-track flex w-max">
          {track.map((quote, i) => (
            <ReviewBubble key={i} quote={quote} />
          ))}
        </div>
      </div>
    </section>
  );
}
