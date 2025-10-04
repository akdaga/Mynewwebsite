import { testimonials } from '../data/testimonials';

export function Testimonials() {
  return (
    <section id="testimonials" className="section section--alt">
      <div className="container">
        <span className="eyebrow">Client feedback</span>
        <h2>Results that speak for themselves.</h2>
        <div className="cards cards--three">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.name} className="testimonial">
              <p>“{testimonial.quote}”</p>
              <cite>{testimonial.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
