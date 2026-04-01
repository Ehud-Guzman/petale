import "./Collections.css";

const items = [
  {
    tag: "Signature",
    name: "La Belle Bloom",
    desc: "Lush red roses, garden peonies and eucalyptus artfully arranged in a muted linen wrap.",
    price: "KSh 3,500",
    unit: "from",
    img: "/images/labele.png",
  },
  {
    tag: "Gift Set",
    name: "Petals & Luxe Box",
    desc: "Curated gift box with seasonal blooms, artisan candle and a handwritten card.",
    price: "KSh 5,200",
    unit: "from",
    img: "/images/petals.jpg",
  },
  {
    tag: "Subscription",
    name: "Monthly Bloom Club",
    desc: "Fresh seasonal arrangements delivered to your door every month. Cancel anytime.",
    price: "KSh 2,800",
    unit: "/month",
    img: "/images/Pink-Roses-For-Her-2_E9A3238.webp",
  },
];

export default function Collections() {
  return (
    <section className="collections">
      <div className="collections__header fade-up">
        <div className="collections__header-left">
          <div className="section-label">Our Collections</div>
          <h2 className="section-title">
            Blooms Crafted with <em>Intention</em>
          </h2>
          <p className="collections__sub">
            Each arrangement is designed by hand, using only the finest seasonal
            flowers sourced fresh daily.
          </p>
        </div>
        <button className="collections__view-all">View all →</button>
      </div>

      <div className="collections__grid">
        {items.map((c, i) => (
          <div
            className="card fade-up"
            key={i}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            <div className="card__img-wrap">
              <img src={c.img} alt={c.name} className="card__img" />
              <span className="card__tag">{c.tag}</span>
            </div>
            <div className="card__body">
              <div className="card__name">{c.name}</div>
              <div className="card__desc">{c.desc}</div>
              <div className="card__footer">
                <div className="card__price">
                  {c.price} <span>{c.unit}</span>
                </div>
                <button className="card__add">Add to Order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
