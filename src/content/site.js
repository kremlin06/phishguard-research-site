export const site = {
  name: "PhishGuard",
  skipLinkLabel: "Skip to main content",
  menuLabel: "Menu",
  primaryNavLabel: "Primary",
  footerNavLabel: "Footer",
  onThisPageLabel: "On this page",
};

export const primaryNav = [
  { label: "Home", to: "/", mobileOnly: true },
  { label: "Features", to: "/features" },
  { label: "How it works", to: "/how-it-works" },
  { label: "FAQ", to: "/faq" },
  { label: "Research", to: "/research" },
  { label: "Privacy", to: "/privacy" },
];

export const footerNav = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "How it works", to: "/how-it-works" },
  { label: "FAQ", to: "/faq" },
  { label: "Research", to: "/research" },
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
];

export const footerText = {
  project: "PhishGuard is a thesis research project.",
  contactLabel: "Contact:",
};

export const pageTitles = {
  "/": "PhishGuard — SMS phishing detection for Android",
  "/features": "Features — PhishGuard",
  "/how-it-works": "How it works — PhishGuard",
  "/faq": "FAQ — PhishGuard",
  "/research": "Research — PhishGuard",
  "/privacy": "Privacy policy — PhishGuard",
  "/terms": "Terms of use — PhishGuard",
  notFound: "Page not found — PhishGuard",
};

export const pageDescriptions = {
  "/": "PhishGuard is an Android app that checks SMS messages for signs of phishing. It is designed to analyze messages on your phone.",
  "/features": "What PhishGuard does, what is a design target, and what isn't included.",
  "/how-it-works": "How PhishGuard analyzes a text message: text preparation, rules, a Naive Bayes model, and a warning.",
  "/faq": "Answers about PhishGuard's permissions, privacy, mistakes, and limits.",
  "/research": "A summary of the PhishGuard thesis research: objectives, hybrid method, datasets, preliminary results and limitations.",
  "/privacy": "How PhishGuard handles your data, including SMS access and optional feedback.",
  "/terms": "Terms of use for the PhishGuard research application and this website.",
};

export const evidence = {
  prefix: "Status:",
  app: "In the app",
  target: "Design target",
  planned: "Planned",
};

export const about = {
  heading: "A research project",
  body: [
    "PhishGuard is a thesis research project: *a Lightweight Offline SMS Phishing Detector for Android Using Hybrid Heuristic and Naive Bayes.* It's built to study how far a small, readable detector can go on a phone.",
  ],
  link: { label: "How the detector works", to: "/how-it-works" },
};

export const notFound = {
  heading: "Page not found",
  body: "The page you're looking for isn't here. It may have moved, or the address may have a typo.",
  links: [
    { label: "Home", to: "/" },
    { label: "Features", to: "/features" },
    { label: "How it works", to: "/how-it-works" },
    { label: "FAQ", to: "/faq" },
    { label: "Research", to: "/research" },
    { label: "Privacy", to: "/privacy" },
  ],
};
