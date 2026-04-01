import { useEffect } from "react";
import "../styles/florist.css";

import Navbar          from "../components/Navbar";
import Hero            from "../components/Hero";
import Marquee         from "../components/Marquee";
import Collections     from "../components/Collections";
import About           from "../components/About";
import Occasions       from "../components/Occasions";
import Testimonials    from "../components/Testimonials";
import CTABanner       from "../components/CTABanner";
import Footer          from "../components/Footer";

export default function FloristHome() {
  // Scroll-triggered fade-up for all .fade-up elements
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Collections />
      <About />
      <Occasions />
      <Testimonials />
      <CTABanner />
      <Footer />
    </>
  );
}
