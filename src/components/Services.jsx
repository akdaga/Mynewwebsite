import { services } from '../data/services';

export function Services() {
  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <span className="eyebrow">How we help</span>
        <h2>End-to-end support across every stage of the property journey.</h2>
        <div className="cards cards--three">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul>
                {service.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
