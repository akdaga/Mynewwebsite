export function ListingCard({ listing }) {
  return (
    <article className="listing-card">
      <div className="listing-card__media">
        <img src={listing.image} alt={`${listing.title} - ${listing.address}`} loading="lazy" />
      </div>
      <div className="listing-card__content">
        <span className="eyebrow">{listing.price}</span>
        <h3>{listing.title}</h3>
        <p className="listing-card__address">{listing.address}</p>
        <p>{listing.description}</p>
        <dl className="listing-card__meta">
          <div>
            <dt>Beds</dt>
            <dd>{listing.bedrooms}</dd>
          </div>
          <div>
            <dt>Baths</dt>
            <dd>{listing.bathrooms}</dd>
          </div>
          <div>
            <dt>Parking</dt>
            <dd>{listing.parking}</dd>
          </div>
          <div>
            <dt>Land</dt>
            <dd>{listing.landSize}</dd>
          </div>
        </dl>
        <ul className="listing-card__features">
          {listing.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <a className="button button--ghost" href="#contact">
          Enquire now
        </a>
      </div>
    </article>
  );
}
