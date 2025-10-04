import { company } from '../data/company';

export function About() {
  return (
    <section id="about" className="section section--split">
      <div className="container section__grid">
        <div>
          <span className="eyebrow">About {company.name}</span>
          <h2>People-first real estate, backed by insight.</h2>
          <p>{company.description}</p>
          <p>
            Update this section with your official story, awards, and unique selling points. The layout is optimised to support
            rich copy, bullet points, and calls-to-action so you can highlight what sets your agency apart.
          </p>
        </div>
        <div className="about__highlights">
          <div>
            <strong>Fast turnarounds</strong>
            <p>Campaign launch checklists and templates reduce production time for new listings.</p>
          </div>
          <div>
            <strong>Data-backed advice</strong>
            <p>Integrate market insights, suburb reports, or success metrics to build trust.</p>
          </div>
          <div>
            <strong>Dedicated team</strong>
            <p>Introduce your agents, concierge services, and partner network to round out the story.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
