import { useState, useEffect } from "react";
import "../styles/florist.css";
import "./ContactPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const info = [
  {
    icon: "📍",
    label: "Studio Address",
    value: "14 Mpaka Road, Westlands\nNairobi, Kenya",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+254 700 000 000",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "hello@patalestudio.co.ke",
  },
  {
    icon: "🕐",
    label: "Studio Hours",
    value: "Mon – Fri: 8am – 6pm\nSat: 9am – 4pm",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", occasion: "", message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to backend / EmailJS / formspree
    setSent(true);
  };

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

      {/* Page header */}
      <div className="contact-page__header">
        <div className="section-label">Get in Touch</div>
        <h1 className="contact-page__title">
          Let's Create Something <em>Beautiful</em>
        </h1>
        <p className="contact-page__sub">
          Whether it's a custom arrangement, a wedding consultation, or a quick
          question — we'd love to hear from you.
        </p>
      </div>

      <div className="contact-page__body">
        {/* ── Form ── */}
        <div className="contact-page__form-wrap fade-up">
          {sent ? (
            <div className="contact-page__success">
              <span className="contact-page__success-icon">🌹</span>
              <h3>Message received!</h3>
              <p>We'll get back to you within 24 hours. Thank you for reaching out.</p>
              <button className="btn-primary" onClick={() => setSent(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2 className="contact-form__heading">Send Us a Message</h2>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Amara Njoki"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-form__group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-form__row">
                <div className="contact-form__group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+254 7XX XXX XXX"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-form__group">
                  <label>Occasion / Service</label>
                  <select
                    name="occasion"
                    value={form.occasion}
                    onChange={handleChange}
                  >
                    <option value="">Select one…</option>
                    <option>Wedding Florals</option>
                    <option>Birthday Arrangement</option>
                    <option>Gift Box</option>
                    <option>Corporate / Office</option>
                    <option>Sympathy Flowers</option>
                    <option>Subscription</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="contact-form__group">
                <label>Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your order, preferred date, budget or any other details…"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn-primary contact-form__submit">
                Send Message →
              </button>
            </form>
          )}
        </div>

        {/* ── Studio Info ── */}
        <div className="contact-page__info fade-up">
          <h2 className="contact-page__info-heading">
            Visit Our <em>Studio</em>
          </h2>
          <p className="contact-page__info-text">
            Walk-ins welcome during studio hours. For weddings or bespoke
            projects, we recommend booking a consultation in advance.
          </p>

          <div className="contact-page__info-cards">
            {info.map((item) => (
              <div className="info-card" key={item.label}>
                <span className="info-card__icon">{item.icon}</span>
                <div>
                  <div className="info-card__label">{item.label}</div>
                  <div className="info-card__value">
                    {item.value.split("\n").map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="contact-page__map">
            <div className="contact-page__map-placeholder">
              <span>📍</span>
              <p>14 Mpaka Road, Westlands, Nairobi</p>
              <a
                href="https://maps.google.com/?q=Westlands+Nairobi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{ display: "inline-block", marginTop: "1rem" }}
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
