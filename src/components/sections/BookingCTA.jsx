import { Lock } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Divider from "../ui/Divider";

export default function BookingCTA() {
  return (
    <section
      id="booking"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-white px-6 md:px-16 py-20"
    >
      <div className="border border-[#E4E0D8] bg-[#FAF7F2] px-6 sm:px-12 py-16 sm:py-20 text-center">
        {/* Eyebrow pill */}
        <Badge className="!bg-white mb-10">
          2025 / 2026 Engagement Calendar Now Open
        </Badge>

        {/* Headline */}
        <h2
          style={{ fontFamily: " serif" }}
          className="font-black text-[#16181D]  leading-[0.95] max-w-4xl mx-auto text-[10vw] sm:text-[7vw] md:text-[6vw] lg:text-[4vw] xl:text-[3.4rem]"
        >
          Reserve Your Date <br /> for an <br /> Unforgettable Soundtrack
          <span className="text-[#E39B8C]">.</span>
        </h2>

        {/* Supporting copy */}
        <p className="mt-6 max-w-xl mx-auto text-[#3C4A5C] leading-relaxed">
          Whether planning an intimate destination wedding along the Amalfi
          cliffs, a Mayfair celebration, or a high-jewelry gala, Bianca curates
          a singular sonic narrative tailored to your moment.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button
            variant="primary"
            icon="→"
            className="cursor-pointer w-full sm:w-auto"
          >
            Book Your Event
          </Button>
          <Button
            variant="secondary"
            icon={<Lock size={14} />}
            iconPosition="left"
            className="cursor-pointer w-full sm:w-auto"
          >
            Client Portal &amp; Concierge
          </Button>
        </div>

        <Divider className="max-w-4xl mx-auto my-10" />

        {/* Contact row */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-12 gap-y-4 text-sm">
          <p>
            <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#3C4A5C] mr-2">
              Direct Concierge:
            </span>
            <a
              href="mailto:bookings@biancablezard.com"
              className="font-semibold text-[#16181D] hover:text-[#E39B8C] transition-colors"
            >
              bookings@biancablezard.com
            </a>
          </p>
          <p>
            <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#3C4A5C] mr-2">
              Artist Line:
            </span>
            <span className="font-semibold text-[#16181D]">
              +44 7700 900 456
            </span>
          </p>
          <p>
            <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#3C4A5C] mr-2">
              Location:
            </span>
            <span className="text-blue-600">Mayfair, London</span>
            <span className="text-[#16181D]"> • Worldwide</span>
          </p>
        </div>
      </div>
    </section>
  );
}
