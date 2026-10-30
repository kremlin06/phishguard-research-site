import "./PageHeader.css";

export default function PageHeader({ title, lead, children }) {
  return (
    <div className="page-header">
      <h1 tabIndex={-1}>{title}</h1>
      {lead && <p className="page-header__lead">{lead}</p>}
      {children}
    </div>
  );
}
