# azul-rossini-profile

A personal profile website built with [Astro](https://astro.build), React and MUI.

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed (v18.14.1 or higher). You can download it from [nodejs.org](https://nodejs.org/), or see `INSTALL_NVM.md` for a Windows/nvm walkthrough.

### Installation

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

Build the site for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Lint & type-check

```bash
npm run lint        # ESLint (TS, TSX, and .astro files)
npm run astro check # Type-checks .astro files and their props
```

## 📁 Project Structure

```
/
├── public/                      # Static assets served as-is (favicon, etc.)
├── src/
│   ├── components/
│   │   ├── layout/              # Page shell: ties everything together
│   │   │   ├── ProfileApp.tsx   #   single React root (theme + Sidebar + sections)
│   │   │   ├── GitHubIcon.tsx
│   │   │   └── Sidebar/
│   │   ├── sections/            # One folder per page section (content + its .css)
│   │   │   ├── AboutSection/
│   │   │   ├── ExperienceSection/
│   │   │   ├── EducationSection/
│   │   │   └── ContactSection/
│   │   └── ui/                  # Small reusable building blocks
│   │       └── DetailCard/      #   used by both Experience and Education
│   ├── data/
│   │   └── profile.ts           # All profile content (the thing you edit)
│   ├── types/
│   │   └── profile.ts           # Shared TypeScript types for that content
│   ├── theme/
│   │   └── theme.ts             # Single MUI theme, shared by the whole app
│   ├── utils/
│   │   └── formatDate.ts        # Date formatting shared by Experience/Education
│   ├── styles/
│   │   └── global.css           # Page-level layout & resets
│   ├── pages/
│   │   └── index.astro          # Renders <ProfileApp> with data from src/data
│   └── env.d.ts                 # TypeScript environment definitions
├── astro.config.mjs             # Astro configuration
├── eslint.config.mjs            # ESLint (flat config)
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies
```

**To update your info** (jobs, skills, education, contact details), you only need to edit `src/data/profile.ts` — everything else reads from there.

## 🛠️ Tech Stack

- [Astro](https://astro.build) - The web framework for content-driven websites
- React + [MUI](https://mui.com) - For the interactive, styled UI
- TypeScript - For type safety
