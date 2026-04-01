import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const links = [
  { label: "Home",        path: "/" },
  { label: "Collections", path: "/collections" },
  { label: "About",       path: "/about" },
  { label: "Contact",     path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
      setScrolled(scrollTop > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <Link to="/" className="navbar__logo">
          🌹 <span>Pétale</span> Studio
        </Link>

        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {links.map((l) => (
            <li key={l.path}>
              <Link
                to={l.path}
                className={location.pathname === l.path ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="navbar__cta">
          Order Now
        </Link>

        <button 
          className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Scroll Progress Indicator */}
      <div className="scroll-progress">
        <div 
          className="scroll-progress__bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
}
