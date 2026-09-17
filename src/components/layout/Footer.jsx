import logo from "../../assets/logo2.png";
import { InstagramIcon, TikTokIcon } from "../sections/Contact";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{ fontFamily: "'Inter', sans-serif" }}
      className=" bg-black text-white border-t border-[#E4E0D8]"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 py-8 sm:py-8">
        <div className="flex flex-col items-center text-center gap-10">
          {/* Logo */}
          <div className="flex items-end gap-1">
            <img
              src={logo}
              alt="Bianca Blezard"
              className=" h-14 sm:h-16 md:h-20 w-auto object-contain"
            />
          </div>

          {/* Hear me perform */}
          <div>
            <h3 className="text-[11px] font-medium tracking-[0.15em] uppercase  mb-4">
              Hear Me Perform
            </h3>
            <ul className="flex flex-row justify-center gap-6">
              {/* Replace these hrefs with Bianca's real profile links */}
              <li>
                <a
                  href="https://www.instagram.com/biancablezardviolin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm  hover:text-[#D61F7F] transition-colors"
                >
                  <InstagramIcon size={16} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@biancablezardviolin?_t=8ivCYtkWnOC&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm  hover:text-[#D61F7F] transition-colors"
                >
                  <TikTokIcon size={16} />
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E4E0D8] mt-14 sm:mt-16 pt-6">
          <p className="text-xs  text-center">
            © {currentYear} Bianca Blezard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
