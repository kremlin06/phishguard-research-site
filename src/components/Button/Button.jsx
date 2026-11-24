import { Link } from "react-router";
import "./Button.css";

export default function Button({ to, href, variant = "primary", children }) {
  // href = a plain file link (for example the test APK); to = a router link.
  if (href) {
    return (
      <a className={`button button--${variant}`} href={href} download>
        {children}
      </a>
    );
  }
  return (
    <Link className={`button button--${variant}`} to={to}>
      {children}
    </Link>
  );
}
