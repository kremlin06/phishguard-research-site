import { useEffect, useRef } from "react";
import { useLocation } from "react-router";

function goToHash(hash) {
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return;

  target.scrollIntoView();
  if (target.tagName === "DETAILS" || target.contains(document.activeElement)) return;

  if (!target.matches("a[href], button, input, select, textarea, [tabindex]")) target.tabIndex = -1;
  target.focus({ preventScroll: true });
}

export function useRouteFocus(title) {
  const { pathname, hash } = useLocation();
  const previousPathname = useRef(null);

  useEffect(() => {
    if (title) document.title = title;
  }, [title]);

  useEffect(() => {
    const previous = previousPathname.current;
    previousPathname.current = pathname;

    if (hash) {
      goToHash(hash);
      return;
    }

    if (previous === null || previous === pathname) return;

    window.scrollTo(0, 0);
    const target = document.querySelector("#main h1") ?? document.getElementById("main");
    target?.focus({ preventScroll: true });
  }, [pathname, hash]);
}
