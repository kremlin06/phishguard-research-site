import { NavLink } from "react-router";
import { facts } from "../../content/facts.js";
import { footerNav, footerText, site } from "../../content/site.js";
import "./SiteFooter.css";

const linkClass = ({ isActive }) =>
  isActive ? "site-footer__link site-footer__link--current" : "site-footer__link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <nav aria-label={site.footerNavLabel}>
          <ul className="site-footer__links">
            {footerNav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__info">
          <p>{footerText.project}</p>
          {facts.institution && <p>{facts.institution}</p>}
          {facts.contactEmail && (
            <p>
              {footerText.contactLabel} <a href={`mailto:${facts.contactEmail}`}>{facts.contactEmail}</a>
            </p>
          )}
          {facts.owner && (
            <p>
              © {new Date().getFullYear()} {facts.owner}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
