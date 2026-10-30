import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { primaryNav, site } from "../../content/site.js";
import "./SiteHeader.css";

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" focusable="false">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" focusable="false">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

const linkClass = ({ isActive }) =>
  isActive ? "site-nav__link site-nav__link--current" : "site-nav__link";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 48em)");
    const handleChange = (event) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  function handleKeyDown(event) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      buttonRef.current?.focus();
    }
  }

  return (
    <header className="site-header" onKeyDown={handleKeyDown}>
      <div className="container site-header__inner">
        <NavLink to="/" end className="site-header__brand">
          {site.name}
        </NavLink>

        <button
          ref={buttonRef}
          type="button"
          className={open ? "site-header__menu-button site-header__menu-button--open" : "site-header__menu-button"}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{site.menuLabel}</span>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav id="site-menu" className={open ? "site-nav site-nav--open" : "site-nav"} aria-label={site.primaryNavLabel}>
          <ul className="site-nav__list">
            {primaryNav.map((item) => (
              <li
                key={item.to}
                className={item.mobileOnly ? "site-nav__item site-nav__item--mobile-only" : "site-nav__item"}
              >
                <NavLink to={item.to} end className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
