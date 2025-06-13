<template>
  <article class="project-card card">
    <!-- Featured banner spans full width at the top -->
    <div v-if="featured" class="featured-banner">
      <span>✨ Featured</span>
    </div>
    
    <div class="project-content">
      <div class="project-header">
        <h3 class="project-title">{{ title }}</h3>
        <div class="project-links" v-if="githubUrl || demoUrl">
          <a v-if="githubUrl" :href="githubUrl" target="_blank" rel="noopener" class="project-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a v-if="demoUrl" :href="demoUrl" target="_blank" rel="noopener" class="project-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <p class="project-description">{{ description }}</p>
      <div class="project-tags">
        <Tag v-for="tag in tags" :key="tag" :text="tag" :variant="getTagVariant(tag)" />
      </div>
      
      <!-- Extra Demo Links -->
      <div v-if="demoUrl_1 || demoUrl_2" class="project-extra-demos">
        <span v-if="demoUrl_1">
          <a :href="demoUrl_1" target="_blank" rel="noopener" class="project-link demo">
            Demo 1
          </a>
        </span>
        <span v-if="demoUrl_2">
          <a :href="demoUrl_2" target="_blank" rel="noopener" class="project-link demo">
            Demo 2
          </a>
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import Tag from './Tag.vue'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  demoUrl_1?: string
  demoUrl_2?: string
  featured?: boolean
}

const props = defineProps<ProjectCardProps>()
const { title, description, tags, githubUrl, demoUrl, demoUrl_1, demoUrl_2, featured } = props

const getTagVariant = (tag: string) => {
  // Languages (purple)
  if (
    [
      "C++",
      "C",
      "Assembly",
      "Python",
      "TypeScript",
      "JavaScript",
      "Rust",
      "Java",
      "Go",
    ].some((t) => tag.includes(t))
  ) {
    return "languages";
  }
  // Audio (pink)
  if (
    [
      "Audio",
      "DSP",
      "Music Production",
      "FL Studio",
      "Ableton",
      "EDM",
      "Creative",
      "Real-time Audio",
      "VST",
      "AU",
      "Plugins",
    ].some((t) => tag.includes(t))
  ) {
    return "audio";
  }
  // Web (orange)
  if (
    [
      "Vue.js",
      "React",
      "Next.js",
      "Frontend",
      "UI/UX",
      "Vite",
      "Electron",
      "HTML",
      "CSS",
      "Web",
      "Node.js",
      "FastAPI",
    ].some((t) => tag.includes(t))
  ) {
    return "web";
  }
  // Tools (green)
  if (
    [
      "CMake",
      "JUCE",
      "npm",
      "bun",
      "Git",
      "Docker",
      "CLI",
      "Desktop",
      "Build Tools",
      "Development Tools",
    ].some((t) => tag.includes(t))
  ) {
    return "tools";
  }
  // Default (blue) for everything else
  return "default";
}
</script>

<style scoped>
.project-card {
  height: 100%;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.project-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 0;
}

.project-card:has(.featured-banner) .project-content {
  padding-top: 3rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  flex: 1;
}

.project-links {
  display: flex;
  gap: 0.5rem;
  margin-left: 1rem;
}

.project-link {
  color: var(--text-secondary);
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  background: var(--primary-bg);
}

.project-link:hover {
  color: var(--accent-color);
  background: rgba(99, 102, 241, 0.1);
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.project-extra-demos {
  margin-top: 1.5rem;
  display: flex;
  gap: 0.75rem;
}

.project-link.demo {
  background: var(--card-bg);
  color: var(--text-secondary);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  width: auto;
  height: auto;
}

.project-link.demo:hover {
  color: var(--accent-color);
  background: rgba(99, 102, 241, 0.1);
  border-color: var(--accent-color);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
}

.featured-banner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: var(--gradient-secondary);
  color: white;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 2px 8px rgba(236, 72, 153, 0.3);
  z-index: 2;
  border-radius: 12px 12px 0 0;
}

.featured-banner span {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
</style>
