import { Link } from "react-router-dom";
import "./Footer.css";

const footerCols = [
  {
    title: "Shop",
    links: [
      { label: "All Arrangements", path: "/collections" },
      { label: "Gift Boxes",       path: "/collections" },
      { label: "Subscriptions",    path: "/collections" },
      { label: "Wedding Packages", path: "/collections" },
      { label: "Corporate",        path: "/collections" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Our Story",    path: "/about" },
      { label: "Meet the Team", path: "/about" },
      { label: "Sustainability", path: "/about" },
      { label: "Careers",      path: "/contact" },
      { label: "Press",        path: "/contact" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Same-Day Delivery",   path: "/contact" },
      { label: "Care Instructions",   path: "/contact" },
      { label: "Returns & Refunds",   path: "/contact" },
      { label: "Gift Cards",          path: "/collections" },
      { label: "Contact Us",          path: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">🌹 <span>Pétale</span> Studio</Link>
          <p className="footer__tagline">
            Artisan floristry and curated gifting for Nairobi's most meaningful moments.
          </p>
        </div>

        {footerCols.map((col) => (
          <div className="footer__col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.path}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <div className="footer__copy">
          © 2025 Pétale Studio. All rights reserved. Nairobi, Kenya.
        </div>
        <div className="footer__credit">
          Crafted by <a href="https://glimmerink.co.ke/" target="_blank" rel="noopener noreferrer">Glimmerink</a>
        </div>
        <div className="footer__socials">
          {["Fb", "In", "Ig", "Tw"].map((s) => (
            <div className="footer__social" key={s}>{s}</div>
          ))}
        </div>
      </div>
    </footer>
  );
}
