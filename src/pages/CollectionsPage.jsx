import { useState, useEffect } from "react";
import "../styles/florist.css";
import "./CollectionsPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FILTERS = ["All", "Arrangements", "Gift Boxes", "Subscriptions", "Wedding", "Corporate"];

const products = [
  {
    category: "Arrangements",
    tag: "Signature",
    name: "La Belle Bloom",
    desc: "Lush red roses, peonies and eucalyptus in a muted linen wrap.",
    price: "KSh 3,500",
    img: "/rose.webp",
  },
  {
    category: "Gift Boxes",
    tag: "Gift Set",
    name: "Petals & Luxe Box",
    desc: "Seasonal blooms, artisan candle and handwritten card in a keepsake box.",
    price: "KSh 5,200",
    img: "/images/labele.png",
  },
  {
    category: "Subscriptions",
    tag: "Monthly",
    name: "Bloom Club",
    desc: "Fresh seasonal arrangements delivered every month. Cancel anytime.",
    price: "KSh 2,800/mo",
    img: "/images/Pink-Roses-For-Her-2_E9A3238.webp",
  },
  {
    category: "Arrangements",
    tag: "Seasonal",
    name: "Crimson Dusk",
    desc: "Deep red dahlias and garden roses, wrapped in Italian kraft paper.",
    price: "KSh 4,200",
    img: "/images/dahlia-decorative-garden-wonder.jpg",
  },
  {
    category: "Wedding",
    tag: "Bridal",
    name: "The Bridal Suite",
    desc: "Full consultation and bespoke bridal florals for your wedding day.",
    price: "KSh 45,000",
    img: "/images/Blossom-Veil-1_E9A3046-scaled_1.webp",
  },
  {
    category: "Gift Boxes",
    tag: "Anniversary",
    name: "Amore Gift Set",
    desc: "A romantic curated box — roses, chocolates and a personalised card.",
    price: "KSh 6,500",
    img: "/images/carnation-and-roses.jpg",
  },
  {
    category: "Corporate",
    tag: "Office",
    name: "Weekly Office Blooms",
    desc: "Keep your workspace beautiful. Weekly arrangements on a rolling contract.",
    price: "KSh 8,000/mo",
    img: "/images/beautidul-vase-bouquet-img-600x600.jpg",
  },
  {
    category: "Arrangements",
    tag: "Sympathy",
    name: "Gentle Farewell",
    desc: "Dignified white and soft green arrangement for moments of remembrance.",
    price: "KSh 4,800",
    img: "/images/farewell-flower-arrangement_orig.jpg",
  },
  {
    category: "Subscriptions",
    tag: "Quarterly",
    name: "Seasonal Gift Box",
    desc: "A curated gift box delivered once per quarter — always a surprise.",
    price: "KSh 9,500/qtr",
    img: "/images/ADazzlingNight-687.jpg",
  },
];

export default function CollectionsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [active]);

  return (
    <>
      <Navbar />

      {/* Page hero */}
      <div className="coll-page__hero">
        <div className="section-label">Everything We Offer</div>
        <h1 className="coll-page__title">
          Our <em>Collections</em>
        </h1>
        <p className="coll-page__sub">
          Browse handcrafted arrangements, curated gift boxes, and subscription plans
          — each made with care for the moments that matter.
        </p>
      </div>

      {/* Filter bar */}
      <div className="coll-page__filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn ${active === f ? "filter-btn--active" : ""}`}
            onClick={() => setActive(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="coll-page__grid">
        {filtered.map((p, i) => (
          <div
            className="coll-card fade-up"
            key={p.name}
            style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
          >
            <div className="coll-card__img-wrap">
              <img src={p.img} alt={p.name} className="coll-card__img" />
              <span className="coll-card__tag">{p.tag}</span>
              <button className="coll-card__quick-add">Quick Add</button>
            </div>
            <div className="coll-card__body">
              <div className="coll-card__name">{p.name}</div>
              <div className="coll-card__desc">{p.desc}</div>
              <div className="coll-card__footer">
                <div className="coll-card__price">{p.price}</div>
                <button className="btn-primary" style={{ padding: "0.55rem 1.2rem", fontSize: "0.75rem" }}>
                  Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="coll-page__empty">No products in this category yet.</div>
      )}

      <Footer />
    </>
  );
}
