import { Lock } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Divider from "../ui/Divider";

export function TikTokIcon({ size = 16 }) {
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

export function InstagramIcon({ size = 16 }) {
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
export default function Contact() {
  return (
    <section
      id="contact"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-white px-4 xs:px-6 md:px-16 py-12 sm:py-20"
    >
      <div className="border border-[#E4E0D8] bg-[] px-4 xs:px-6 sm:px-12 py-10 sm:py-20 text-center rounded-sm">
        {/* Eyebrow pill */}

        {/* Headline */}
        <h2
          style={{ fontFamily: "serif" }}
          className="font-black text-[#16181D] leading-[1.1] sm:leading-[0.95] max-w-4xl mx-auto text-2xl xs:text-3xl sm:text-[7vw] md:text-[6vw] lg:text-[4vw] xl:text-[3.4rem] break-words"
        >
          Contact me
        </h2>

        {/* Supporting copy */}
        <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-[#3C4A5C] text-sm sm:text-base leading-relaxed px-1">
          If you would like any more information, please message me on socials
          or fill out my register interest form!
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-8 sm:mt-10 max-w-md sm:max-w-none mx-auto">
          <a
            href="https://interest.biancablezardviolin.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            icon="→"
            className="cursor-pointer w-full sm:w-auto text-sm py-3 px-7 font-medium tracking-[0.15em] uppercase bg-[#D61F7F]  text-white  transition-colors"
          >
            Register Interest
          </a>
          {/* Replace these hrefs with Bianca's real profile links */}
          <a
            href="https://www.instagram.com/biancablezardviolin"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center justify-center gap-2 w-full sm:w-auto text-sm py-3 px-7 font-medium tracking-[0.15em] uppercase bg-white border border-[#D61F7F] text-[#D61F7F]  transition-colors"
          >
            <InstagramIcon size={16} />
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@biancablezardviolin?_t=8ivCYtkWnOC&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center justify-center gap-2 w-full sm:w-auto text-sm py-3 px-7 font-medium tracking-[0.15em] uppercase bg-white border border-[#D61F7F] text-[#D61F7F]  transition-colors"
          >
            <TikTokIcon size={16} />
            TikTok
          </a>
        </div>

        <Divider className="max-w-4xl mx-auto my-8 sm:my-10 hidden md:flex " />
      </div>
    </section>
  );
}
