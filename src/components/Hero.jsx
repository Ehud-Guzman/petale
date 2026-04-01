import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* Left — Copy */}
      <div className="hero__left">
        <div className="hero__label">Artisan Floristry &amp; Gifting</div>

        <h1 className="hero__title">
          Where Every<br />
          Bloom <em>Tells</em><br />
          a Story
        </h1>

        <p className="hero__desc">
          Handcrafted floral arrangements and curated gift experiences for
          life's most meaningful moments — delivered with care across Nairobi.
        </p>

        <div className="hero__actions">
          <Link to="/collections" className="btn-primary">Shop Collections</Link>
          <Link to="/contact" className="btn-ghost">Book Consultation</Link>
        </div>

        {/* Decorative numbers row */}
        <div className="hero__stats">
          {[
            { num: "8+", label: "Years of craft" },
            { num: "4k+", label: "Happy clients" },
            { num: "100%", label: "Fresh daily" },
          ].map((s) => (
            <div className="hero__stat" key={s.label}>
              <span className="hero__stat-num">{s.num}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Image */}
      <div className="hero__right">
        <img
          src="/rose.webp"
          alt="Beautiful floral arrangement"
          className="hero__img"
        />

        {/* Floating badge */}
        <div className="hero__badge">
          <div className="hero__badge-label">This week's feature</div>
          <div className="hero__badge-value">Garden Rose<br />Collection</div>
          <div className="hero__badge-sub">✦ Limited availability</div>
        </div>

        {/* Decorative corner accent */}
        <div className="hero__accent" />
      </div>
    </section>
  );
}
