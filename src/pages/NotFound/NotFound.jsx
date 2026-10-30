import { Link } from "react-router";
import { notFound } from "../../content/site.js";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="container container--narrow not-found stack">
      <h1 tabIndex={-1}>{notFound.heading}</h1>
      <p className="not-found__body">{notFound.body}</p>
      <ul className="not-found__links">
        {notFound.links.map((item) => (
          <li key={item.to}>
            <Link className="not-found__link" to={item.to}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
