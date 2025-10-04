import { company } from '../data/company';

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <h1>{company.heroHeading}</h1>
          <p>{company.heroSubheading}</p>
          <div className="hero__actions">
            <a className="button" href="#listings">
              {company.ctaPrimary}
            </a>
            <a className="button button--ghost" href="#contact">
              {company.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="hero__card" role="presentation">
          <div className="hero__card-inner">
            <span className="hero__card-eyebrow">Trusted by homeowners & developers</span>
            <h2>Market-ready in days, not weeks.</h2>
            <ul>
              <li>Personalised campaign planning</li>
              <li>Digital reach with hyper-local insight</li>
              <li>Transparent reporting every step</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
