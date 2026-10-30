import "./Callout.css";

export default function Callout({ lead, text }) {
  return (
    <div className="callout" role="note">
      <p>
        <strong>{lead}</strong> {text}
      </p>
    </div>
  );
}
