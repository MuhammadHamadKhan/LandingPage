import { Lock } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Divider from "../ui/Divider";

export default function BookingCTA() {
  return (
    <section
      id="booking"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-white px-4 xs:px-6 md:px-16 py-12 sm:py-20"
    >
      <div className="border border-[#E4E0D8] bg-[#FAF7F2] px-4 xs:px-6 sm:px-12 py-10 sm:py-20 text-center rounded-sm">
        {/* Eyebrow pill */}
        <Badge className="!bg-white mb-6 sm:mb-10 text-xs sm:text-sm max-w-full inline-flex whitespace-normal text-center leading-normal px-3 py-1.5">
          2025 / 2026 Engagement Calendar Now Open
        </Badge>

        {/* Headline */}
        <h2
          style={{ fontFamily: "serif" }}
          className="font-black text-[#16181D] leading-[1.1] sm:leading-[0.95] max-w-4xl mx-auto text-2xl xs:text-3xl sm:text-[7vw] md:text-[6vw] lg:text-[4vw] xl:text-[3.4rem] break-words"
        >
          Reserve Your Date <br className="hidden xs:inline" /> for an{" "}
          <br className="hidden xs:inline" /> Unforgettable Soundtrack
          <span className="text-[#E39B8C]">.</span>
        </h2>

        {/* Supporting copy */}
        <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-[#3C4A5C] text-sm sm:text-base leading-relaxed px-1">
          Whether planning an intimate destination wedding along the Amalfi
          cliffs, a Mayfair celebration, or a high-jewelry gala, Bianca curates
          a singular sonic narrative tailored to your moment.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-10 max-w-md sm:max-w-none mx-auto">
          <Button
            variant="primary"
            icon="→"
            className="cursor-pointer w-full sm:w-auto text-sm py-3"
          >
            Book Your Event
          </Button>
          <Button
            variant="secondary"
            icon={<Lock size={14} />}
            iconPosition="left"
            className="cursor-pointer w-full sm:w-auto text-sm py-3"
          >
            Client Portal &amp; Concierge
          </Button>
        </div>

        <Divider className="max-w-4xl mx-auto my-8 sm:my-10" />

        {/* Contact row */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-8 gap-y-4 text-xs sm:text-sm">
          <p className="break-words">
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.15em] uppercase text-[#3C4A5C] mr-1.5 block xs:inline">
              Direct Concierge:
            </span>
            <a
              href="mailto:bookings@biancablezard.com"
              className="font-semibold text-[#16181D] hover:text-[#E39B8C] transition-colors break-all xs:break-normal"
            >
              bookings@biancablezard.com
            </a>
          </p>
          <p>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.15em] uppercase text-[#3C4A5C] mr-1.5 block xs:inline">
              Artist Line:
            </span>
            <span className="font-semibold text-[#16181D] whitespace-nowrap">
              +44 7700 900 456
            </span>
          </p>
          <p>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.15em] uppercase text-[#3C4A5C] mr-1.5 block xs:inline">
              Location:
            </span>
            <span className="text-blue-600 font-medium">Mayfair, London</span>
            <span className="text-[#16181D]"> • Worldwide</span>
          </p>
        </div>
      </div>
    </section>
  );
}
