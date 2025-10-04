import { company } from '../data/company';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h3>{company.name}</h3>
          <p>{company.tagline}</p>
        </div>
        <div className="footer__links">
          <a href={company.social.facebook}>Facebook</a>
          <a href={company.social.instagram}>Instagram</a>
          <a href={company.social.linkedin}>LinkedIn</a>
        </div>
        <div className="footer__meta">
          <span>© {year} {company.name}. All rights reserved.</span>
          <a href="/sitemap.xml">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
