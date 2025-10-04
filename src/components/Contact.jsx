import { company } from '../data/company';

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container section__grid">
        <div>
          <span className="eyebrow">Get in touch</span>
          <h2>Ready to plan your next move?</h2>
          <p>
            Call, email, or visit the Daga Realty office to talk through campaign strategy, request an appraisal, or share a new
            project opportunity. Update the contact details below with your official information.
          </p>
          <div className="contact__details">
            <div>
              <span className="contact__label">Phone</span>
              <a href={company.phone.startsWith('UPDATE') ? '#contact' : `tel:${company.phone.replace(/\s+/g, '')}`}>
                {company.phone}
              </a>
            </div>
            <div>
              <span className="contact__label">Email</span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
            <div>
              <span className="contact__label">Office</span>
              <address>
                {company.address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </div>
          </div>
        </div>
        <div className="contact__card">
          <h3>Office hours</h3>
          <ul>
            {company.officeHours.map((slot) => (
              <li key={slot.days}>
                <strong>{slot.days}</strong>
                <span>{slot.hours}</span>
              </li>
            ))}
          </ul>
          <div className="contact__meta">
            <p>
              <strong>Postal address</strong>
              {company.postalAddress.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
            <p>
              <strong>Licence</strong>
              <span>{company.license}</span>
            </p>
            <p>
              <strong>ABN</strong>
              <span>{company.abn}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
