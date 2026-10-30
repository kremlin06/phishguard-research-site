import { site } from "../../content/site.js";
import ChevronIcon from "../ChevronIcon/ChevronIcon.jsx";
import "./OnThisPage.css";

export default function OnThisPage({ items }) {
  const list = (
    <ul className="on-this-page__list">
      {items.map((item) => (
        <li key={item.id}>
          <a className="on-this-page__link" href={`#${item.id}`}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <details className="on-this-page on-this-page--collapsed">
        <summary className="on-this-page__summary">
          <ChevronIcon className="on-this-page__chevron" />
          <span>{site.onThisPageLabel}</span>
        </summary>
        {list}
      </details>
      <nav className="on-this-page on-this-page--sticky" aria-label={site.onThisPageLabel}>
        <p className="on-this-page__title">{site.onThisPageLabel}</p>
        {list}
      </nav>
    </>
  );
}
