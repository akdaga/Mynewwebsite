const highlights = [
  { value: '48 hrs', label: 'Average time to launch a campaign once assets are supplied.' },
  { value: '92%', label: 'Of clients refer friends and family based on their experience.' },
  { value: '4.9 / 5', label: 'Average vendor satisfaction score from post-settlement surveys.' }
];

export function Highlights() {
  return (
    <section className="section section--muted">
      <div className="container highlights">
        {highlights.map((item) => (
          <div key={item.value} className="highlights__item">
            <strong>{item.value}</strong>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
