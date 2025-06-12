# Portfolio Website AI Build Prompt

This document describes the goals, context, and technical requirements for generating a personal portfolio website using Vue 3, TypeScript, Vite, and npm.

---

## ❖ About Me

I'm Seamus Mullan, a computer science student and creative developer from Ireland. My interests span audio software development (especially DSP and plugins via C++ and JUCE), operating systems (I'm writing my own from scratch), game dev (Unity, web-based), and music production (FL Studio, Ableton).

I want my website to reflect both the technical and creative aspects of who I am.

---

## ❖ Goals for the Site

- Clean, expressive UI (personal yet professional)
- Showcase technical projects with tags (tech used, domain, vibe)
- Section for **DirektDSP**, my audio plugin brand
- Option to embed or link music projects
- Blog-style updates or devlog (prefer markdown support)
- Responsive and fast
- Optional: subtle animations and aesthetic shifts per project (i.e., different visual themes like retro, pastel, dark-tech)

---

## ❖ Tech Constraints & Preferences

- Stack: **Vue 3 + TypeScript + Vite + npm**
- Styling: TailwindCSS or CSS Modules preferred
- Content structure should be **flexible and extendable**
- Prefer file-based routing (Vue Router 4)
- Markdown blog support (consider using a Vue-compatible plugin or system)
- Optional SSR or pre-rendering is okay but not essential now

---

## ❖ What I Need Help With

Please guide me through and/or generate code for:

### 1. Project Structure

- Suggested directory layout for clean separation of components, routes, assets, etc.
- Integration of Vue Router with dynamic routing for projects/blog posts

### 2. Component System

- Core layout: Header, Footer, Navigation, Hero section
- Reusable components for "ProjectCard", "Tag", "MediaEmbed", etc.
- Dark/light mode toggle (bonus if per-project themes are easy to support)

### 3. Projects Page

- JSON or markdown-driven project entries
- Ability to tag/filter projects
- Optional visual themes per project (e.g., retro, minimal, dark)

### 4. Blog/Devlog

- Support for Markdown posts (e.g., using `vite-plugin-md` or `vue-markdown`)
- Blog index and post page
- Syntax highlighting for code snippets

### 5. DirektDSP Section

- Separate layout for branding and product info
- Placeholder for future shop integration

### 6. Visual Design

- Suggestions or implementation of subtle animations (Framer Motion for Vue, or CSS-based)
- Theming architecture for aesthetic switching
- Responsive grid layouts

### 7. Content Management

- Should I use a local Markdown approach, headless CMS, or simple JSON files?
- Prefer low-friction editing, since I’ll manage content myself

### 8. Deployment

- Best practices for deploying with npm
- Static vs dynamic considerations
- Suggestions for hosting (e.g., Vercel, Netlify, npm on VPS)

---

Please write clean, modular, and well-commented code. Prioritize developer ergonomics—I want to be able to expand this myself. When applicable, explain decisions briefly (e.g., file structure choices, plugin selection).
