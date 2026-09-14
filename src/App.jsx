import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import BookingCTA from "./components/sections/BookingCTA";
import Footer from "./components/layout/Footer";

export default function App() {
  // Fonts loaded once here at the App level (previously lived inside Navbar
  // so it could work standalone during development — now that all sections
  // are assembled, it only needs to load once for the whole page).
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Inter:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <BookingCTA />
      <Footer />
    </div>
  );
}
