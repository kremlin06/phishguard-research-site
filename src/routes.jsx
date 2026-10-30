import Faq from "./pages/Faq/Faq.jsx";
import Features from "./pages/Features/Features.jsx";
import Home from "./pages/Home/Home.jsx";
import HowItWorks from "./pages/HowItWorks/HowItWorks.jsx";
import Privacy from "./pages/Privacy/Privacy.jsx";
import Research from "./pages/Research/Research.jsx";
import Terms from "./pages/Terms/Terms.jsx";

export const pages = [
  { path: "/", element: <Home /> },
  { path: "/features", element: <Features /> },
  { path: "/how-it-works", element: <HowItWorks /> },
  { path: "/faq", element: <Faq /> },
  { path: "/research", element: <Research /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/terms", element: <Terms /> },
];
