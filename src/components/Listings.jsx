import listings from '../data/listings.json';
import { ListingCard } from './ListingCard';

export function Listings() {
  return (
    <section id="listings" className="section">
      <div className="container">
        <span className="eyebrow">Featured listings</span>
        <h2>Curated properties currently represented by our team.</h2>
        <p className="section__intro">
          Update <code>src/data/listings.json</code> to add, remove, or modify listings. Each listing accepts price, address,
          property metrics, feature bullets, and an optional hero image stored in <code>public/assets/listings</code>.
        </p>
        <div className="listing-grid">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}
