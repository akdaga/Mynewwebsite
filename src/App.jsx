import { useEffect } from 'react';
import './App.css';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Listings } from './components/Listings';
import { Navigation } from './components/Navigation';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { company } from './data/company';

const metaDescription =
  'Daga Realty is a boutique Melbourne-based agency offering residential sales, property management, and project marketing services.';

const metaKeywords =
  'Daga Realty, Melbourne real estate, boutique agency, property management, project marketing, Wyndham real estate';

function sanitisePhone(number) {
  return number && !number.startsWith('UPDATE') ? number.replace(/\s+/g, '') : '';
}

function buildAddress(lines) {
  const filtered = lines.filter((line) => !line.startsWith('UPDATE'));
  return filtered.join(', ');
}

function App() {
  useEffect(() => {
    document.title = `${company.name} | Boutique property agency`;

    const ensureMeta = (name, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    ensureMeta('description', metaDescription);
    ensureMeta('keywords', metaKeywords);

    const ldJson = {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: company.name,
      description: metaDescription,
      url: window.location.origin,
      email: company.email,
      telephone: sanitisePhone(company.phone),
      image: `${window.location.origin}/assets/logo.svg`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: buildAddress(company.address),
        addressLocality: 'Melbourne',
        addressRegion: 'VIC',
        postalCode: '3000',
        addressCountry: 'AU'
      }
    };

    let structuredData = document.getElementById('structured-data');
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'structured-data';
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify(ldJson);
  }, []);

  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <Listings />
        <About />
        <CTA />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
