import "./Occasions.css";

const occasions = [
  { icon: "💍", name: "Weddings",   desc: "Bespoke bridal florals" },
  { icon: "🎂", name: "Birthdays",  desc: "Celebratory arrangements" },
  { icon: "🕊️", name: "Sympathy",   desc: "Heartfelt tributes" },
  { icon: "💼", name: "Corporate",  desc: "Office & event décor" },
  { icon: "🎁", name: "Gifting",    desc: "Curated gift bundles" },
];

export default function Occasions() {
  return (
    <section className="occasions">
      <div className="occasions__header fade-up">
        <div className="section-label occasions__label">Perfect for Every Occasion</div>
        <h2 className="section-title occasions__title">
          Whatever the <em>Moment</em>,<br />We've Got the Blooms
        </h2>
      </div>

      <div className="occasions__grid fade-up">
        {occasions.map((o) => (
          <div className="occ-item" key={o.name}>
            <span className="occ-item__icon">{o.icon}</span>
            <span className="occ-item__name">{o.name}</span>
            <span className="occ-item__desc">{o.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
