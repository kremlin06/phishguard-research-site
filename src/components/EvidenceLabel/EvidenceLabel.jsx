import { evidence } from "../../content/site.js";
import "./EvidenceLabel.css";

export default function EvidenceLabel({ kind }) {
  return (
    <span className={`evidence-label evidence-label--${kind}`}>
      <span className="visually-hidden">{evidence.prefix} </span>
      <span className="evidence-label__dot" aria-hidden="true" />
      {evidence[kind]}
    </span>
  );
}
