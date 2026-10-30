import ChevronIcon from "../ChevronIcon/ChevronIcon.jsx";
import "./Accordion.css";

export default function Accordion({ id, question, children }) {
  return (
    <details id={id} className="accordion">
      <summary className="accordion__summary">
        <ChevronIcon className="accordion__chevron" />
        <span>{question}</span>
      </summary>
      <div className="accordion__content stack">{children}</div>
    </details>
  );
}
