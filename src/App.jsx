import { matchPath, Route, Routes, useLocation } from "react-router";
import SiteFooter from "./components/SiteFooter/SiteFooter.jsx";
import SiteHeader from "./components/SiteHeader/SiteHeader.jsx";
import SkipLink from "./components/SkipLink/SkipLink.jsx";
import { pageTitles, site } from "./content/site.js";
import { useRouteFocus } from "./hooks/useRouteFocus.js";
import NotFound from "./pages/NotFound/NotFound.jsx";
import { pages } from "./routes.jsx";

function titleFor(pathname) {
  const page = pages.find((item) => matchPath({ path: item.path, end: true }, pathname));
  if (!page) return pageTitles.notFound;
  return pageTitles[page.path] ?? site.name;
}

export default function App() {
  const { pathname } = useLocation();
  useRouteFocus(titleFor(pathname));

  return (
    <div className="app">
      <SkipLink />
      <SiteHeader />
      <main id="main" className="app__main" tabIndex={-1}>
        <Routes>
          {pages.map((page) => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
