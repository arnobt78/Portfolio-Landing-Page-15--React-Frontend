# Portfolio Landing Page 15 - React, Vite, TailwindCSS, Framer Motion Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.2-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2-green)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-blue)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.33-orange)](https://www.framer.com/motion/)

A **single-page portfolio demo** built with React, Vite, TailwindCSS, and Framer Motion. It is intended for learning and instruction: you can run it locally, customize content via a central data file, and reuse its components (navbar, hero, about, skills, projects, education, contact, footer) in your own projects. The app is frontend-only (no backend or API); all content is driven by in-repo data and assets.

- **Live Demo:** [https://portfolio-ui-15.vercel.app/](https://portfolio-ui-15.vercel.app/)

---

## Table of Contents

- [Project details](#project-details)
- [How to run and use](#how-to-run-and-use)
- [Project structure](#project-structure)
- [Technology stack](#technology-stack)
- [Functionalities and features](#functionalities-and-features)
- [Components and reuse](#components-and-reuse)
- [Data and “routes”](#data-and-routes)
- [Environment variables (.env)](#environment-variables-env)
- [API and backend](#api-and-backend)
- [Code snippets](#code-snippets)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Project details

- **Name:** portfolio-ui-15
- **Type:** Single-page application (SPA), frontend only
- **Purpose:** Demo portfolio landing page for instruction and learning; reusable UI building blocks.
- **Content:** One “persona” (e.g. John Doe): hero, about, skills, featured projects, education, contact, and footer. Navigation is in-page via section IDs (no separate routes).
- **Deployment:** Optimized for static hosting (e.g. Vercel). Build output is in `dist/`; no server-side rendering or API.

---

## How to run and use

**Prerequisites:** Node.js (v18+ recommended) and npm.

1. **Clone and install**

   ```bash
   git clone <your-repo-url>
   cd portfolio-ui-15
   npm install
   ```

2. **Development**

   ```bash
   npm run dev
   ```

   Opens the app (e.g. `http://localhost:5173`) with hot reload.

3. **Lint**

   ```bash
   npm run lint
   ```

4. **Production build**

   ```bash
   npm run build
   ```

   Output: `dist/`. Serve `dist/` with any static host.

5. **Preview production build locally**

   ```bash
   npm run preview
   ```

No environment variables are required to run or build (see [Environment variables (.env)](#environment-variables-env)).

---

## Project structure

```bash
portfolio-ui-15/
├── index.html              # Entry HTML; meta tags and root div
├── package.json            # Scripts and dependencies
├── vite.config.js          # Vite config (React plugin, build options)
├── vercel.json             # SPA rewrites for client-side routing
├── postcss.config.js       # PostCSS (Tailwind, autoprefixer)
├── eslint.config.js        # ESLint (JS/JSX, React hooks, refresh)
├── src/
│   ├── main.jsx            # React root (StrictMode, App)
│   ├── App.jsx             # Layout: Navbar + main sections + Footer
│   ├── index.css           # Tailwind import + theme/base
│   ├── data/
│   │   └── constants.js    # USER_DETAILS, PROJECTS, SKILLS
│   ├── context/
│   │   └── ThemeContext.jsx # Theme provider + useTheme (optional use)
│   ├── components/
│   │   ├── Navbar.jsx      # Fixed nav, scroll links, mobile menu
│   │   ├── Hero.jsx        # Hero + CTA buttons + 3D background
│   │   ├── About.jsx       # About + profile image
│   │   ├── Skills.jsx      # Skills by category
│   │   ├── Projects.jsx    # Project cards + modal
│   │   ├── Education.jsx   # Education timeline
│   │   ├── Contact.jsx     # Social links + mailto
│   │   ├── Footer.jsx      # Copyright + tech stack note
│   │   └── 3d/
│   │       └── FloatingShapes.jsx  # Three.js starfield background
│   └── assets/             # Images (e.g. profile, project thumbnails)
├── public/                 # Static assets (e.g. favicon.ico)
└── dist/                   # Production build (gitignored)
```

---

## Technology stack

| Layer         | Technology                                             |
| ------------- | ------------------------------------------------------ |
| Runtime       | Node.js                                                |
| Framework     | React 19                                               |
| Build         | Vite 7                                                 |
| Styling       | TailwindCSS 4 (PostCSS, autoprefixer)                  |
| Animation     | Framer Motion 12                                       |
| 3D / Canvas   | Three.js, @react-three/fiber, @react-three/drei, maath |
| Icons         | lucide-react, react-icons                              |
| Smooth scroll | react-scroll                                           |
| Lint          | ESLint (flat config), React Hooks, React Refresh       |

---

## Functionalities and features

- **Single-page layout:** One HTML page; sections: Hero, About, Skills, Projects, Education, Contact; Footer.
- **In-page navigation:** Navbar and Hero CTAs use `react-scroll` to smooth-scroll to section IDs (`#about`, `#skills`, `#projects`, `#education`, `#contact`).
- **Responsive navbar:** Fixed top bar; desktop links + optional “Resume” link; mobile hamburger with AnimatePresence.
- **Hero:** Headline, short bio from data, “View Work” / “Contact Me” buttons, 3D starfield background (FloatingShapes).
- **About:** Profile image (or placeholder), bio, and highlight cards (e.g. Fresh Perspective, MERN Specialist).
- **Skills:** Categories (e.g. Frontend, Backend, Tools) and tag-style items from `SKILLS` in `constants.js`.
- **Projects:** Grid of project cards (image, title, short description); click opens a modal with full description, tech tags, and “View Live Project” link.
- **Education:** Timeline-style block (e.g. degree, institution, coursework).
- **Contact:** Social links (from `USER_DETAILS.socialMatches`) and a “Say Hello” mailto button using `USER_DETAILS.email`.
- **Footer:** Dynamic year and name from data; “Built with React & Tailwind CSS.”
- **Animations:** Framer Motion for section entrance, hover, and modal; layout animations for project modal.
- **ThemeContext:** Optional dark/light theme with `localStorage`; applied via `document.documentElement` class. (App currently uses dark by default; you can wrap with `ThemeProvider` where needed.)

---

## Components and reuse

Each section is a React component that reads from `src/data/constants.js`. To reuse in another project:

1. Copy the component file and any assets it uses (images, etc.).
2. Copy the relevant part of `constants.js` (e.g. `USER_DETAILS`, `PROJECTS`, or `SKILLS`).
3. Install the same dependencies (e.g. `framer-motion`, `react-scroll`, `lucide-react`, `react-icons`). For `FloatingShapes`, add `three`, `@react-three/fiber`, `@react-three/drei`, `maath`.
4. Ensure your Tailwind (or CSS) includes the classes used by the component (or replace with your own styles).

**Example – using only the Skills block:**  
Copy `Skills.jsx` and the `SKILLS` export from `constants.js`; render `<Skills />` where you need it and style the container as needed.

**Example – using Hero without 3D:**  
Copy `Hero.jsx`, remove the `<FloatingShapes />` import and usage, and keep the rest (motion, `USER_DETAILS`, `Link` from `react-scroll`).

---

## Data and “routes”

- **Data:** All copy and links come from `src/data/constants.js`:
  - `USER_DETAILS`: name (or names), title, bio, email, profileImage, socialMatches (id, link, icon, label). Navbar, Footer, and About use `USER_DETAILS.name` for display—ensure the object has a `name` property (e.g. add `name: "John Doe"` or alias `names` as `name`).
  - `PROJECTS`: id, title, description, tech[], liveLink, image.
  - `SKILLS`: array of `{ category, items[] }`.

- **“Routes”:** There are no URL routes. The app is one page; “navigation” is scroll-to-section via `react-scroll` and section IDs. For deployment, `vercel.json` rewrites all paths to `index.html` so the SPA works on static hosts.

---

## Environment variables (.env)

This project **does not use any environment variables** in the application code. Build and run work without a `.env` file.

If you later add features that need env vars (e.g. analytics ID, feature flags):

1. **Create `.env` in the project root** (and add `.env` to `.gitignore` if it isn’t already).
2. **Expose to Vite with the `VITE_` prefix** so they are available as `import.meta.env.VITE_*` in the client.

   Example `.env`:

   ```env
   VITE_APP_TITLE=John Doe's Portfolio
   VITE_CONTACT_EMAIL=contact@example.com
   ```

3. **Use in code:**  
   `const title = import.meta.env.VITE_APP_TITLE;`
4. **Production (e.g. Vercel):** Add the same keys in the hosting dashboard (e.g. Vercel → Project → Settings → Environment Variables).

Never commit secrets; use env vars only for non-sensitive or build-time configuration.

---

## API and backend

There is **no backend and no API**. All content is static: constants and imported images. Forms do not submit to a server; “Contact” uses `mailto:` and social links. To add a contact form or dynamic data, you would integrate your own backend or serverless functions and call them from the React app (e.g. `fetch` or a client SDK).

---

## Code snippets

**Using data in a component**

```jsx
import { USER_DETAILS } from "../data/constants";

export default function MyComponent() {
  return <h1>{USER_DETAILS.name || USER_DETAILS.names}</h1>;
}
```

**Smooth scroll to a section**

```jsx
import { Link } from "react-scroll";

<Link to="projects" smooth duration={500}>
  View Projects
</Link>;
```

**Scroll-triggered animation with Framer Motion**

```jsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>;
```

**Adding a new project in constants**

```js
// In src/data/constants.js, add to PROJECTS array:
{
  id: 4,
  title: "My New Project",
  description: "Short description.",
  tech: ["React", "Node.js"],
  liveLink: "https://example.com",
  image: myImage,  // import at top: import myImage from "../assets/my.png";
},
```

---

## Keywords

Portfolio, React, Vite, TailwindCSS, Framer Motion, single-page application, SPA, frontend, demo, learning, education, MERN, full stack developer, Three.js, react-three-fiber, responsive, components, reuse, open source, MIT.

---

## Conclusion

Portfolio Landing Page 15 is a frontend-only, single-page portfolio template. You can run it with `npm run dev`, build with `npm run build`, and customize or reuse its sections by editing `src/data/constants.js` and the components under `src/components/`. It uses no env vars or backend by default; you can extend it with your own APIs or environment configuration as needed.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

---

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊
