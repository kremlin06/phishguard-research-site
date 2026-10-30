import { Link } from "react-router";
import "./Button.css";

export default function Button({ to, variant = "primary", children }) {
  return (
    <Link className={`button button--${variant}`} to={to}>
      {children}
    </Link>
  );
}
