import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Experiences from "./components/Experiences";
import Clairs from "./components/Clairs";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import AboutJen from "./components/AboutJen";
import Featured from "./components/Featured";
import FAQ from "./components/FAQ";
import Instagram from "./components/Instagram";
import Contact from "./components/Contact";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import MobileCTA from "./components/MobileCTA";

export default function App() {
  const [modal, setModal] = useState<"book" | "contact" | null>(null);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const nearBottom =
        window.innerHeight + y > document.body.scrollHeight - 480;
      setShowBar(y > window.innerHeight * 0.7 && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const book = () => setModal("book");
  const contact = () => setModal("contact");

  return (
    <div className="bg-ivory text-ink">
      <Header onBook={book} />
      <main>
        <Hero onBook={book} />
        <Introduction />
        <Experiences />
        <Clairs />
        <Testimonials onBook={book} />
        <HowItWorks />
        <AboutJen />
        <Featured onBook={book} />
        <FAQ />
        <Instagram />
        <Contact onBook={contact} />
        <FinalCTA onBook={book} onContact={contact} />
      </main>
      <Footer onBook={book} />
      <MobileCTA visible={showBar && !modal} onBook={book} />
      <BookingModal
        open={modal !== null}
        mode={modal === "contact" ? "contact" : "book"}
        onClose={() => setModal(null)}
      />
    </div>
  );
}
