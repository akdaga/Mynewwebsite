import { useMemo, useState } from 'react';
import { company } from '../data/company';

const logo = '/assets/logo.svg';

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#listings', label: 'Listings' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' }
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const contactHref = useMemo(() => {
    if (!company.phone || company.phone.startsWith('UPDATE')) {
      return '#contact';
    }
    return `tel:${company.phone.replace(/\s+/g, '')}`;
  }, []);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" aria-label={`${company.name} home`}>
          <img src={logo} alt={`${company.name} logo`} className="nav__logo" />
          <span className="nav__brand-text">
            <span className="nav__brand-name">{company.name}</span>
            <span className="nav__brand-tagline">{company.tagline}</span>
          </span>
        </a>
        <nav
          id="primary-navigation"
          className={`nav__links ${open ? 'nav__links--open' : ''}`}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav__cta" href={contactHref}>
            Call us
          </a>
        </nav>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
