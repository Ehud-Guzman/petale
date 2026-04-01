import { Link } from "react-router-dom";
import "./CTABanner.css";

export default function CTABanner() {
  return (
    <div className="cta-banner fade-up">
      <div className="cta-banner__left">
        <h2 className="cta-banner__heading">
          Ready to send something <em>beautiful?</em>
        </h2>
        <p className="cta-banner__text">
          Order online for same-day delivery, or visit our studio in Westlands
          for a personal consultation with our floral designers.
        </p>
      </div>
      <Link to="/contact" className="cta-banner__btn">Start Your Order →</Link>
    </div>
  );
}
