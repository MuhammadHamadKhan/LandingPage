import Badge from "../ui/Badge";
import Card from "../ui/Card";
import Divider from "../ui/Divider";

const bioParagraphs = [
  `Bianca Blezard is a classically trained concert violinist who has spent over a decade performing at some of the world's most distinguished events across the United Kingdom, French Riviera, and the Italian Lakes. From grand wedding vows at English country manors to exclusive high-jewelry galas in Mayfair and Monaco, Bianca brings a rare combination of technical mastery and magnetic stage presence.`,
  `Trained at the revered Royal Northern College of Music, Bianca refined her craft under world-celebrated violin pedagogues. Her repertoire seamlessly bridges monumental classical concerti, modern pop & Bridgerton-style cinematic adaptations, and bespoke romantic arrangements shaped intimately around each celebration.`,
  `Whether performing solo with custom backing orchestrations, roaming among guests during sunset cocktail hours, or collaborating with world-class vocalists and DJs, Bianca ensures every guest leaves deeply moved.`,
];

const stats = [
  {
    number: "01",
    title: "RNCM Honours Graduate",
    subtitle: "Classical Violin Performance",
  },
  {
    number: "02",
    title: "12+ Years Experience",
    subtitle: "Concert & High-Profile Residencies",
  },
  {
    number: "03",
    title: "300+ Luxury Celebrations",
    subtitle: "Destination Weddings & Galas",
  },
  {
    number: "04",
    title: "Worldwide Travel",
    subtitle: "Available across UK, Europe & Globally",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-white px-6 md:px-16 py-20"
    >
      {/* Section header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#E39B8C]">
          Biographical Overview
        </span>
        <span className="h-px w-10 bg-[#E4E0D8]" />
      </div>
      <h2
        style={{ fontFamily: "'Bodoni Moda', serif" }}
        className="font-black text-[#16181D] leading-[0.95] text-[15vw] sm:text-[8vw] lg:text-[4.5vw] xl:text-[4rem]"
      >
        ABOUT<span className="text-[#E39B8C]">.</span>
      </h2>
      <p className="mt-6 text-sm md:text-base tracking-wide uppercase text-[#16181D] max-w-3xl">
        Concert performer. Recording artist. An intimate sensory experience
        unlike any other.
      </p>

      <Divider className="my-10" />

      {/* Two-column body */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
        {/* Left — bio, quote, stats */}
        <div>
          <Badge variant="eyebrow">The Performer Behind</Badge>
          <h3
            style={{ fontFamily: "'Bodoni Moda', serif" }}
            className="italic font-medium text-[#16181D] text-3xl md:text-4xl mt-3 mb-6"
          >
            The Music &amp; Emotion.
          </h3>

          <div className="space-y-5 text-[#3C4A5C] leading-relaxed">
            {bioParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Pull quote */}
          <div className="border-l-4 border-[#E39B8C] bg-[#FAF7F2] p-8 my-12">
            <p
              style={{ fontFamily: "'Bodoni Moda', serif" }}
              className="italic text-[#16181D] text-2xl md:text-3xl leading-snug"
            >
              &ldquo;Music is not background. It is the memory your guests take
              home.&rdquo;
            </p>
            <p className="mt-4 text-[11px] font-medium tracking-[0.15em] uppercase text-[#E39B8C]">
              — Bianca Blezard
            </p>
          </div>

          {/* Stat grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat) => (
              <Card key={stat.number}>
                <span className="text-xs font-medium text-[#E39B8C]">
                  {stat.number}
                </span>
                <p className="font-semibold text-[#16181D] mt-1">
                  {stat.title}
                </p>
                <p className="text-sm text-[#3C4A5C] mt-1">{stat.subtitle}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Right — sticky dark portrait panel */}
        <div className="lg:sticky lg:top-24 self-start bg-[#0D0D0D] h-fit">
          <div className="relative">
            {/* Replace with Bianca's actual portrait photo */}
            <img
              src="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?w=900&q=80"
              alt="Portrait of Bianca Blezard, concert soloist"
              className="w-full h-80 object-cover"
            />
            <span className="absolute top-4 left-4 bg-white text-[#16181D] text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-1.5">
              Portrait • Concert Soloist
            </span>
          </div>

          <div className="p-8">
            <p
              style={{ fontFamily: "'Bodoni Moda', serif" }}
              className="italic text-white text-xl md:text-2xl leading-snug"
            >
              &ldquo;Music is not background. It is the memory your guests take
              home.&rdquo;
            </p>
          </div>

          <div className="bg-[#F1EDE6] p-6 flex gap-4 items-start">
            {/* Replace with an actual sheet music / rehearsal photo */}
            <img
              src="https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=200&q=80"
              alt="Sheet music"
              className="w-16 h-16 object-cover flex-shrink-0"
            />
            <div>
              <h4
                style={{ fontFamily: "'Bodoni Moda', serif" }}
                className="font-black text-[#16181D] text-lg leading-none"
              >
                THE APPROACH<span className="text-[#E39B8C]">.</span>
              </h4>
              <p className="text-sm text-[#3C4A5C] mt-2 leading-relaxed">
                Every event is unique. Bianca curates each performance around
                the occasion, the venue, and the client&rsquo;s taste — no two
                events are ever the same.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
