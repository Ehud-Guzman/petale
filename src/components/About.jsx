import "./About.css";

const pillars = [
  {
    icon: "🌿",
    title: "Sustainably Sourced",
    text: "We partner with local farms and responsible growers for every bloom.",
  },
  {
    icon: "✦",
    title: "Artisan Crafted",
    text: "No two arrangements are alike. Each is made by hand with care and intention.",
  },
  {
    icon: "🚚",
    title: "Same-Day Delivery",
    text: "Order by 12pm for same-day delivery within Nairobi and surrounding areas.",
  },
];

export default function About() {
  return (
    <section className="about">
      <div className="about__inner">
        {/* Images */}
        <div className="about__images fade-up">
          <img
            className="about__img-main"
            src="./images/carnation-and-roses.jpg"
            alt="Florist at work"
          />
          <img
            className="about__img-accent"
            src="./images/petals.jpg"
            alt="Flowers detail"
          />
          <div className="about__stat-badge">
            <span className="about__stat-num">8+</span>
            <span className="about__stat-txt">Years crafting beauty</span>
          </div>
        </div>

        {/* Copy */}
        <div className="about__copy fade-up">
          <div className="section-label">Our Story</div>
          <h2 className="section-title">
            More than flowers.<br />
            <em>Moments</em> made tangible.
          </h2>
          <p className="about__text">
            Pétale Studio was born from a belief that every gesture deserves a
            beautiful frame. Since 2016, we've been designing arrangements that
            speak — for weddings, birthdays, milestones, and the quiet everyday
            moments that matter most.
          </p>
          <button className="btn-primary">Meet Our Team</button>

          <div className="about__pillars">
            {pillars.map((p) => (
              <div className="about__pillar" key={p.title}>
                <span className="about__pillar-icon">{p.icon}</span>
                <div>
                  <div className="about__pillar-title">{p.title}</div>
                  <div className="about__pillar-text">{p.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
