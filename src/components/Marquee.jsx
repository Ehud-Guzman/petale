import "./Marquee.css";

const items = [
  "Same-day delivery",
  "Custom arrangements",
  "Wedding specialists",
  "Gift wrapping",
  "Nairobi & surrounds",
  "Premium blooms",
  "Sustainably sourced",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="marquee">
      <div className="marquee__inner">
        {doubled.map((item, i) => (
          <div className="marquee__item" key={i}>
            {item}
            <span className="marquee__dot" />
          </div>
        ))}
      </div>
    </div>
  );
}
