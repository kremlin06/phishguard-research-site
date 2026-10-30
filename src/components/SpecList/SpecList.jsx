import EvidenceLabel from "../EvidenceLabel/EvidenceLabel.jsx";
import RichText from "../RichText/RichText.jsx";
import "./SpecList.css";

export default function SpecList({ items }) {
  return (
    <ul className="spec-list">
      {items.map((item) => (
        <li key={item.name} className="spec-list__row">
          <h3 className="spec-list__name">{item.name}</h3>
          <div className="spec-list__body">
            {item.label && <EvidenceLabel kind={item.label} />}
            <p>
              <RichText text={item.description} />
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
