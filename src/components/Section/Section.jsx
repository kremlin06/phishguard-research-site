import "./Section.css";

export default function Section({ id, title, split = false, children }) {
  return (
    <section className={split ? "section section--split" : "section"} aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      <div className="section__body stack">{children}</div>
    </section>
  );
}
