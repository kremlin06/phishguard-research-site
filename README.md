# phishguard-research-site

The public research website for **PhishGuard: Lightweight Offline SMS Phishing Detector for Android Using Hybrid Heuristic and Naive Bayes**, a Bachelor of Science in Computer Science thesis project at STI College Balagtas.

The site introduces the app, explains how the detector works, answers common questions, summarizes the thesis research on its **Research** page, and hosts draft Privacy and Terms pages. It is an informational site. It does not offer a download, and it does not claim that the app is released.

## Pages

| Path | Content |
|---|---|
| `/` | Home |
| `/features` | Features |
| `/how-it-works` | How it works |
| `/faq` | FAQ |
| `/research` | Research summary: background, objectives, method, datasets, preliminary results, limitations, references |
| `/privacy` | Privacy policy (draft) |
| `/terms` | Terms of use (draft) |

## Technology

- React 19 and React Router 7 (declarative routing, clean URLs, no hash routing)
- Vite 8 for the build
- Plain CSS with custom properties; the Inter font is self-hosted
- Every page is prerendered to its own HTML file at build time (`scripts/prerender.mjs`), so direct links and refreshes work on GitHub Pages
- No analytics, cookies or third-party requests

Node.js 22.12 or newer (Node 22 LTS recommended) and npm are required.

## Run it locally

```powershell
cd "<path to the phishguard-research-site folder>"
npm ci
npm run dev
```

`npm run dev` prints a local address (normally `http://localhost:5173/`). Press Ctrl+C to stop it.

## Production build

```powershell
npm run build
npm run preview:pages
```

`npm run build` checks the content, builds the site into `dist/`, and prerenders every page. `npm run preview:pages` serves `dist/` the way GitHub Pages does, at `http://localhost:4180/phishguard-research-site/`.



## Content notes

The research summary in `src/content/research.js` follows the thesis manuscript. Results marked preliminary are not final findings. The datasets, SMS messages, labeling records and consent records are not part of this repository.
