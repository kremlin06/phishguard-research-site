import { site } from "../../content/site.js";
import "./SkipLink.css";

export default function SkipLink() {
  return (
    <a className="skip-link" href="#main">
      {site.skipLinkLabel}
    </a>
  );
}
