import { useEffect } from "react";
import "../styles/florist.css";
import "./AboutPage.css";
import Navbar from "../components/Navbar";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

const team = [
  {
    name: "Amara Waweru",
    role: "Head Floral Designer",
    bio: "8 years of artisan floristry. Trained in Nairobi and London.",
    emoji: "🌹",
  },
  {
    name: "Kofi Otieno",
    role: "Gift Curation Lead",
    bio: "Sources and curates every product in our gift box collection.",
    emoji: "🎁",
  },
  {
    name: "Zuri Kamau",
    role: "Studio & Events Manager",
    bio: "Coordinates all weddings, corporate, and bespoke event florals.",
    emoji: "🌿",
  },
];

const values = [
  {
    icon: "🌱",
    title: "Sustainability First",
    desc: "We source from Kenyan farms, reduce waste, and compost all offcuts. Beautiful should never cost the earth.",
  },
  {
    icon: "✦",
    title: "Artisan Standards",
    desc: "Every bouquet is hand-tied by our designers. We don't do templates — only intention.",
  },
  {
    icon: "❤️",
    title: "Community Roots",
    desc: "We partner with smallholder flower farms around Nakuru and the Rift Valley, keeping money local.",
  },
  {
    icon: "📦",
    title: "Zero Plastic Packaging",
    desc: "All our wrapping is kraft paper, linen, or reusable fabric. Boxes are made from recycled board.",
  },
];

const milestones = [
  { year: "2016", text: "Founded in Westlands with a single workbench and a dream." },
  { year: "2018", text: "First corporate contracts — 3 Nairobi hotels and a law firm." },
  { year: "2020", text: "Launched the monthly Bloom Club during lockdown. 300 subscribers in 3 months." },
  { year: "2022", text: "Opened our walk-in studio. Expanded to Mombasa delivery." },
  { year: "2024", text: "Crossed 4,000 unique clients. Named one of Nairobi's top gifting brands." },
];

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* ── Page Hero ── */}
      <div className="about-page__hero">
        <div className="about-page__hero-inner">
          <div className="section-label">Who We Are</div>
          <h1 className="about-page__title">
            Rooted in Craft,<br />
            <em>Driven by Beauty</em>
          </h1>
          <p className="about-page__sub">
            Since 2016, Pétale Studio has been Nairobi's home for artisan floristry
            and thoughtfully curated gifting — made by hand, delivered with care.
          </p>
        </div>
        <img
          className="about-page__hero-img"
          src="./images/unnamed.jpg"
          alt="Our studio"
        />
        <div className="about-page__hero-overlay" />
      </div>

      {/* ── Story + Timeline ── */}
      <section className="about-page__story">
        <div className="about-page__story-inner">
          <div className="about-page__story-left fade-up">
            <div className="section-label">Our Story</div>
            <h2 className="section-title">
              More than flowers.<br /><em>Moments</em> made tangible.
            </h2>
            <p>
              Pétale began when our founder, Amara Waweru, couldn't find a florist in
              Nairobi that treated flowers as art rather than commodity. She started
              with a workbench in her Westlands apartment and a belief that every
              gesture deserves a beautiful frame.
            </p>
            <p>
              Eight years later, we're a full studio — designing wedding florals, weekly
              office installations, and intimate birthday surprises — all from the same
              place of care and intention.
            </p>
          </div>

          <div className="about-page__timeline fade-up">
            <div className="section-label">How We Got Here</div>
            {milestones.map((m) => (
              <div className="timeline-item" key={m.year}>
                <div className="timeline-item__year">{m.year}</div>
                <div className="timeline-item__line" />
                <div className="timeline-item__text">{m.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about-page__values">
        <div className="fade-up" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span style={{ width: "2rem", height: "1px", background: "var(--gold)", display: "block" }} />
            What We Stand For
          </div>
          <h2 className="section-title">
            Our <em>Values</em>
          </h2>
        </div>
        <div className="about-page__values-grid">
          {values.map((v) => (
            <div className="value-card fade-up" key={v.title}>
              <span className="value-card__icon">{v.icon}</span>
              <div className="value-card__title">{v.title}</div>
              <div className="value-card__desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section className="about-page__team">
        <div className="fade-up" style={{ marginBottom: "3.5rem" }}>
          <div className="section-label">The People Behind the Blooms</div>
          <h2 className="section-title">Meet the <em>Team</em></h2>
        </div>
        <div className="about-page__team-grid">
          {team.map((member, i) => (
            <div
              className="team-card fade-up"
              key={member.name}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="team-card__avatar">{member.emoji}</div>
              <div className="team-card__name">{member.name}</div>
              <div className="team-card__role">{member.role}</div>
              <div className="team-card__bio">{member.bio}</div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
      <Footer />
    </>
  );
}
