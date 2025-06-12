<template>
  <div class="projects-page">
    <!-- Hero Section -->
    <section class="projects-hero">
      <div class="container">
        <h1 class="hero-title">My Projects</h1>
        <p class="hero-subtitle">
          A collection of technical and creative work spanning audio software, 
          systems programming, and innovative web experiences
        </p>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-controls">
          <button 
            v-for="tag in uniqueTags" 
            :key="tag"
            @click="toggleFilter(tag)"
            :class="{ active: selectedTags.includes(tag) }"
            class="filter-tag"
          >
            {{ tag }}
          </button>
          <button 
            v-if="selectedTags.length > 0"
            @click="clearFilters"
            class="clear-filters"
          >
            Clear All
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects-section">
      <div class="container">
        <div v-if="filteredProjects.length" class="projects-grid">
          <div
            v-for="project in filteredProjects"
            :key="project.title"
            class="project-card"
            :class="{ featured: project.featured }"
          >
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <div class="project-links" v-if="project.githubUrl || project.demoUrl">
                  <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener" class="project-link github">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener" class="project-link demo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-tags">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag" 
                  class="tag"
                  :class="getTagVariant(tag)"
                >
                  {{ tag }}
                </span>
              </div>
              
              <div v-if="project.featured" class="featured-badge">
                <span>✨ Featured</span>
              </div>
            </div>
          </div>
        </div>
        
        <div v-else class="no-projects">
          <p>No projects match your current filters.</p>
          <button @click="clearFilters" class="cta-button outline">Show All Projects</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Project {
  title: string
  description: string
  tags: string[]
  featured?: boolean
  githubUrl?: string
  demoUrl?: string
}

const projects = ref<Project[]>([])
const selectedTags = ref<string[]>([])

const uniqueTags = computed(() => {
  const tags = new Set<string>()
  projects.value.forEach(project => {
    project.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
})

const filteredProjects = computed(() => {
  if (selectedTags.value.length === 0) {
    return projects.value.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
  }
  return projects.value.filter(project => 
    selectedTags.value.some(tag => project.tags.includes(tag))
  ).sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
})

const toggleFilter = (tag: string) => {
  const index = selectedTags.value.indexOf(tag)
  if (index > -1) {
    selectedTags.value.splice(index, 1)
  } else {
    selectedTags.value.push(tag)
  }
}

const clearFilters = () => {
  selectedTags.value = []
}

const getTagVariant = (tag: string) => {
  if (['C++', 'C', 'Assembly', 'Operating Systems', 'Kernel', 'Low-level', 'OpenGL', 'Systems'].some(t => tag.includes(t))) {
    return 'systems'
  }
  if (['Audio', 'DSP', 'JUCE', 'Plugins', 'Music Production', 'FL Studio', 'Ableton', 'EDM', 'Creative'].some(t => tag.includes(t))) {
    return 'audio'
  }
  if (['Vue.js', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Frontend', 'UI/UX', 'Vite'].some(t => tag.includes(t))) {
    return 'web'
  }
  if (['Python', 'FastAPI', 'Electron', 'CMake', 'CLI', 'Desktop'].some(t => tag.includes(t))) {
    return 'tools'
  }
  return 'default'
}

onMounted(async () => {
  try {
    const res = await fetch('/projects.json')
    projects.value = await res.json()
  } catch (error) {
    console.error('Failed to load projects:', error)
  }
})
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
}

.projects-hero {
  background: var(--gradient-tertiary);
  color: white;
  padding: 6rem 0 4rem 0;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.filter-section {
  background: var(--secondary-bg);
  border-bottom: 1px solid var(--border-color);
  padding: 2rem 0;
  position: sticky;
  top: 80px;
  z-index: 50;
}

.filter-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
}

.filter-tag {
  padding: 0.5rem 1rem;
  border: 2px solid var(--border-color);
  background: var(--primary-bg);
  color: var(--text-secondary);
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-tag:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

.filter-tag.active {
  background: var(--accent-color);
  color: white;
  border-color: var(--accent-color);
}

.clear-filters {
  padding: 0.5rem 1rem;
  background: var(--accent-pink);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-filters:hover {
  background: #db2777;
  transform: translateY(-1px);
}

.projects-section {
  padding: 4rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--secondary-bg);
  border-radius: 16px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}

.project-card.featured {
  border: 2px solid var(--accent-color);
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%);
}

.project-content {
  padding: 2.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  flex: 1;
  line-height: 1.3;
}

.project-links {
  display: flex;
  gap: 0.75rem;
  margin-left: 1rem;
  flex-shrink: 0;
}

.project-link {
  color: var(--text-secondary);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--primary-bg);
}

.project-link.github:hover {
  color: #333;
  background: #f6f8fa;
  transform: scale(1.1);
}

.project-link.demo:hover {
  color: var(--accent-color);
  background: rgba(99, 102, 241, 0.1);
  transform: scale(1.1);
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
  flex: 1;
  font-size: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  display: inline-block;
  border-radius: 6px;
  padding: 0.4rem 0.8rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.tag.default {
  background: rgba(99, 102, 241, 0.1);
  color: var(--accent-color);
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.tag.systems {
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  border: 1px solid rgba(139, 92, 246, 0.2);
}

.tag.audio {
  background: rgba(236, 72, 153, 0.1);
  color: var(--accent-pink);
  border: 1px solid rgba(236, 72, 153, 0.2);
}

.tag.web {
  background: rgba(245, 158, 11, 0.1);
  color: var(--accent-tertiary);
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.tag.tools {
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent-secondary);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.featured-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--gradient-secondary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
}

.no-projects {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--text-secondary);
}

.no-projects p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
}

.cta-button.outline {
  background: transparent;
  color: var(--accent-color);
  border-color: var(--accent-color);
}

.cta-button.outline:hover {
  background: var(--accent-color);
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .project-header {
    flex-direction: column;
    gap: 1rem;
  }
  
  .project-links {
    margin-left: 0;
    align-self: flex-start;
  }
  
  .filter-controls {
    justify-content: flex-start;
  }
  
  .filter-section {
    position: static;
  }
}
</style>
