import "./Testimonials.css";

const testimonials = [
  {
    text: "The arrangement for our wedding was beyond anything I'd imagined. Every bloom was perfect, every detail considered. Absolutely stunning.",
    name: "Amara Njoki",
    role: "Bride, Nairobi",
    avatar: "🌹",
    stars: "★★★★★",
  },
  {
    text: "I subscribe to the monthly club and it has genuinely transformed my home. Fresh, creative, always a surprise. Worth every shilling.",
    name: "David Ochieng",
    role: "Monthly Subscriber",
    avatar: "🌿",
    stars: "★★★★★",
  },
  {
    text: "Ordered a gift box for my mum's birthday. She cried — happy tears. The quality and presentation are truly premium.",
    name: "Fatuma Wanjiru",
    role: "Gift Customer",
    avatar: "🌷",
    stars: "★★★★★",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__header fade-up">
        <div className="section-label" style={{ justifyContent: "center" }}>
          <span style={{ width: "2rem", height: "1px", background: "var(--gold)", display: "block", flexShrink: 0 }} />
          What They Say
        </div>
        <h2 className="section-title">
          Stories from our <em>Community</em>
        </h2>
      </div>

      <div className="testimonials__grid">
        {testimonials.map((t, i) => (
          <div
            className="testi-card fade-up"
            key={i}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="testi-card__quote">"</div>
            <div className="testi-card__stars">{t.stars}</div>
            <p className="testi-card__text">"{t.text}"</p>
            <div className="testi-card__author">
              <div className="testi-card__avatar">{t.avatar}</div>
              <div>
                <span className="testi-card__name">{t.name}</span>
                <span className="testi-card__role">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
