# Migration Plan: Hugo (Blowfish) Portfolio → Vue.js Modular Portfolio

## 1. Project Overview

You currently have a Hugo-based portfolio using the Blowfish theme. The content is organized into modular markdown files for projects and user showcases, with configuration in TOML files. You want to migrate to a Vue.js-based portfolio for greater modularity and customizability.

---

## 2. Existing Content Structure

### Projects (from `content/projects/`)

Each project has:

- `title`, `date`, `description`, `tags`, `draft`
- Rich markdown content (overview, technical details, challenges, value, etc.)

**Current Projects:**

- **DirektDSP**: Audio software company, VST/AU plugins, DSP, C++, JUCE
- **Portfolio Websites**: Modern frontend, React, Next.js, Hugo, UI/UX, SEO
- **Juno**: Desktop app for generating JUCE projects (Python, Electron, CMake)
- **candlz**: Trading simulation platform, fintech, real-time, algorithms, Electron, FastAPI, Python
- **Ampere**: Electron/Vite + Python/FastAPI app template, cross-platform, CLI, npm package

### User Showcases (from `content/users/`)

Each user entry has:

- `title`, `tags`, `externalUrl`, `weight`, and display toggles
- Used for portfolio/case study links

### Author Info (from `config/_default/languages.en.toml`)

- Name: Seamus Mullan
- Bio: Passionate developer with interests in Signal Processing, Algorithmic Trading, Music Production and Game Development
- Social: GitHub, LinkedIn

### Menus & Footer Links

- Projects, Contact, GitHub, DirektDSP, etc.

---

## 3. Vue.js Portfolio Structure Proposal

### A. Data Model

- **projects.json**: All project metadata and content (or markdown/MDX for rich content)
- **users.json**: User showcase entries
- **author.json**: Main profile info, bio, social links

### B. Vue Components

- `<ProjectCard />`: Project summary (title, tags, description)
- `<ProjectDetail />`: Full project page (markdown/MDX rendering)
- `<UserShowcase />`: List of user/case study cards
- `<UserCard />`: Individual user/case study
- `<AuthorProfile />`: Main profile, bio, social links
- `<NavBar />`, `<Footer />`, `<ContactForm />`, etc.

### C. Pages

- **Home**: Author profile, featured projects, user showcases
- **Projects**: All projects, filterable by tag/tech
- **Project Detail**: Full writeup for each project
- **Showcase**: User/case study gallery
- **Contact**: Contact form or info
- **Resume/CV**: (Optional) Dedicated page for education, experience, skills

---

## 4. CV/Resume Information to Include

- **Profile**: Name, bio, photo, contact, location
- **Skills**: Programming languages, frameworks, tools
- **Experience**: Work history, freelance, open source
- **Education**: Degrees, certifications
- **Projects**: (see above)
- **Achievements**: Awards, publications, talks
- **Social Links**: GitHub, LinkedIn, etc.

---

## 5. Migration Checklist

- [ ] Export all project and user data to JSON/MDX
- [ ] Design Vue component structure (see above)
- [ ] Set up Vue project (Vite, Nuxt, or Vue CLI)
- [ ] Implement data-driven pages and routing
- [ ] Style with CSS framework (Tailwind, Vuetify, etc.)
- [ ] Add markdown/MDX rendering for project details
- [ ] Implement filtering/search for projects
- [ ] Add contact and resume/CV sections
- [ ] Test and deploy

---

## 6. Next Steps

1. Choose Vue stack (Vite, Nuxt, etc.)
2. Export all content (projects, users, author info) to JSON/MDX
3. Scaffold Vue components and pages
4. Migrate content and test rendering
5. Iterate on design and features

---

**This plan provides a roadmap for converting your Hugo portfolio to a modular, extensible Vue.js site, preserving all current content and adding flexibility for future growth.**
