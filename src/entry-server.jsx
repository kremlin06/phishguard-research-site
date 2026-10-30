import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App.jsx";
import { basename } from "./basename.js";
import { pageDescriptions, pageTitles } from "./content/site.js";
import { pages } from "./routes.jsx";

export function render(path) {
  const location = (basename === "/" ? "" : basename) + (path === "/" ? "/" : `${path}/`);
  return renderToString(
    <StrictMode>
      <StaticRouter basename={basename} location={location}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}

export const routes = pages.map((page) => page.path);
export { pageDescriptions, pageTitles };
