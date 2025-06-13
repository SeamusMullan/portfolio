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

    <!-- Main Content -->
    <section class="projects-section">
      <div class="container">
        <div class="projects-layout">
          <!-- Sidebar -->
          <aside class="sidebar">
            <!-- Search Bar -->
            <div class="search-section">
              <div class="search-wrapper">
                <svg class="search-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search projects..."
                  class="search-input"
                />
                <button v-if="searchQuery" @click="searchQuery = ''" class="clear-search">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Filters Section -->
            <div class="filters-section">
              <div class="filters-header">
                <h3>Filter by Technology</h3>
                <button
                  v-if="selectedTags.length > 0"
                  @click="clearFilters"
                  class="clear-filters-btn"
                >
                  Clear All ({{ selectedTags.length }})
                </button>
              </div>

              <!-- Filter Categories -->
              <div class="filter-categories">
                <!-- Programming Languages -->
                <div class="filter-category">
                  <button 
                    class="category-header"
                    @click="toggleCategory('languages')"
                    :class="{ expanded: openCategories.includes('languages') }"
                  >
                    <span class="category-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span class="category-name">Programming Languages</span>
                    <svg class="chevron" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <div v-show="openCategories.includes('languages')" class="category-filters">
                    <label
                      v-for="tag in getTagsByCategory('languages')"
                      :key="tag"
                      class="filter-option"
                    >
                      <input
                        type="checkbox"
                        :checked="selectedTags.includes(tag)"
                        @change="toggleFilter(tag)"
                        class="filter-checkbox"
                      />
                      <span class="filter-label">{{ tag }}</span>
                      <span class="filter-count">{{ getTagCount(tag) }}</span>
                    </label>
                  </div>
                </div>

                <!-- Audio & Music -->
                <div class="filter-category">
                  <button 
                    class="category-header"
                    @click="toggleCategory('audio')"
                    :class="{ expanded: openCategories.includes('audio') }"
                  >
                    <span class="category-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                      </svg>
                    </span>
                    <span class="category-name">Audio & Music</span>
                    <svg class="chevron" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <div v-show="openCategories.includes('audio')" class="category-filters">
                    <label
                      v-for="tag in getTagsByCategory('audio')"
                      :key="tag"
                      class="filter-option"
                    >
                      <input
                        type="checkbox"
                        :checked="selectedTags.includes(tag)"
                        @change="toggleFilter(tag)"
                        class="filter-checkbox"
                      />
                      <span class="filter-label">{{ tag }}</span>
                      <span class="filter-count">{{ getTagCount(tag) }}</span>
                    </label>
                  </div>
                </div>

                <!-- Web Technologies -->
                <div class="filter-category">
                  <button 
                    class="category-header"
                    @click="toggleCategory('web')"
                    :class="{ expanded: openCategories.includes('web') }"
                  >
                    <span class="category-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zM9.954 4.569C9.548 5.718 9.2 7.226 9.089 9H7.054c.2-2.413.887-4.44 1.9-5.431zm0 10.862c-.413-1.15-.761-2.657-.871-4.431h2.034c-.11 1.774-.458 3.281-.871 4.431zM10 18a6.004 6.004 0 003.134-15.118c.454 1.147.748 2.572.837 4.118h1.946a6.004 6.004 0 010 2h-1.946c-.089 1.546-.383 2.97-.837 4.118A6.004 6.004 0 0010 18zm.046-13.431C10.459 5.718 10.807 7.226 10.917 9h2.029c-.2-2.413-.887-4.44-1.9-5.431z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span class="category-name">Web Technologies</span>
                    <svg class="chevron" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <div v-show="openCategories.includes('web')" class="category-filters">
                    <label
                      v-for="tag in getTagsByCategory('web')"
                      :key="tag"
                      class="filter-option"
                    >
                      <input
                        type="checkbox"
                        :checked="selectedTags.includes(tag)"
                        @change="toggleFilter(tag)"
                        class="filter-checkbox"
                      />
                      <span class="filter-label">{{ tag }}</span>
                      <span class="filter-count">{{ getTagCount(tag) }}</span>
                    </label>
                  </div>
                </div>

                <!-- Tools & Frameworks -->
                <div class="filter-category">
                  <button 
                    class="category-header"
                    @click="toggleCategory('tools')"
                    :class="{ expanded: openCategories.includes('tools') }"
                  >
                    <span class="category-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span class="category-name">Tools & Frameworks</span>
                    <svg class="chevron" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <div v-show="openCategories.includes('tools')" class="category-filters">
                    <label
                      v-for="tag in getTagsByCategory('tools')"
                      :key="tag"
                      class="filter-option"
                    >
                      <input
                        type="checkbox"
                        :checked="selectedTags.includes(tag)"
                        @change="toggleFilter(tag)"
                        class="filter-checkbox"
                      />
                      <span class="filter-label">{{ tag }}</span>
                      <span class="filter-count">{{ getTagCount(tag) }}</span>
                    </label>
                  </div>
                </div>

                <!-- Other -->
                <div class="filter-category" v-if="getTagsByCategory('default').length > 0">
                  <button 
                    class="category-header"
                    @click="toggleCategory('other')"
                    :class="{ expanded: openCategories.includes('other') }"
                  >
                    <span class="category-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 00-2 2v6a2 2 0 002 2h2a1 1 0 100 2H6a4 4 0 01-4-4V7a4 4 0 014-4h5.5a1 1 0 110 2H6zm9.5 0a1 1 0 100 2H14a2 2 0 012 2v6a2 2 0 01-2 2h-2a1 1 0 100 2h2a4 4 0 004-4V7a4 4 0 00-4-4h-5.5a1 1 0 110-2H14z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span class="category-name">Other</span>
                    <svg class="chevron" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                  <div v-show="openCategories.includes('other')" class="category-filters">
                    <label
                      v-for="tag in getTagsByCategory('default')"
                      :key="tag"
                      class="filter-option"
                    >
                      <input
                        type="checkbox"
                        :checked="selectedTags.includes(tag)"
                        @change="toggleFilter(tag)"
                        class="filter-checkbox"
                      />
                      <span class="filter-label">{{ tag }}</span>
                      <span class="filter-count">{{ getTagCount(tag) }}</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <!-- Main Content Area -->
          <main class="main-content">
            <!-- Results Header -->
            <div class="results-header">
              <h2 class="results-title">
                {{ filteredProjects.length }} Project{{ filteredProjects.length !== 1 ? 's' : '' }}
                <span v-if="selectedTags.length > 0 || searchQuery" class="results-subtitle">
                  (filtered)
                </span>
              </h2>
              <div class="active-filters" v-if="selectedTags.length > 0">
                <span class="active-filter-label">Active filters:</span>
                <div class="active-filter-tags">
                  <button
                    v-for="tag in selectedTags"
                    :key="tag"
                    @click="toggleFilter(tag)"
                    class="active-filter-tag"
                  >
                    {{ tag }}
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Projects Grid -->
            <div v-if="filteredProjects.length" class="projects-grid">
              <ProjectCard
                v-for="project in filteredProjects"
                :key="project.title"
                :title="project.title"
                :description="project.description"
                :tags="project.tags"
                :githubUrl="project.githubUrl"
                :demoUrl="project.demoUrl"
                :demoUrl_1="project.demoUrl_1"
                :demoUrl_2="project.demoUrl_2"
                :featured="project.featured"
              />
            </div>

            <!-- No Results -->
            <div v-else class="no-results">
              <svg viewBox="0 0 20 20" fill="currentColor" class="no-results-icon">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
              <h3>No projects found</h3>
              <p>Try adjusting your filters or search query</p>
              <button @click="resetFilters" class="reset-button">
                Reset All Filters
              </button>
            </div>
          </main>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

interface Project {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
  demoUrl_1?: string;
  demoUrl_2?: string;
}

const projects = ref<Project[]>([]);
const selectedTags = ref<string[]>([]);
const searchQuery = ref("");
const openCategories = ref<string[]>(['languages']); // Start with languages category open

const uniqueTags = computed(() => {
  const tags = new Set<string>();
  projects.value.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
});

const getTagsByCategory = (category: string) => {
  return uniqueTags.value.filter(tag => getTagVariant(tag) === category).sort();
};

const getTagCount = (tag: string) => {
  return projects.value.filter(project => project.tags.includes(tag)).length;
};

const toggleCategory = (category: string) => {
  const index = openCategories.value.indexOf(category);
  if (index > -1) {
    openCategories.value.splice(index, 1);
  } else {
    openCategories.value.push(category);
  }
};

const filteredProjects = computed(() => {
  let filtered = projects.value;

  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(project => 
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  // Apply tag filters
  if (selectedTags.value.length > 0) {
    filtered = filtered.filter((project) =>
      selectedTags.value.some((tag) => project.tags.includes(tag))
    );
  }

  // Sort by featured status
  return filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
});

const toggleFilter = (tag: string) => {
  const index = selectedTags.value.indexOf(tag);
  if (index > -1) {
    selectedTags.value.splice(index, 1);
  } else {
    selectedTags.value.push(tag);
  }
};

const clearFilters = () => {
  selectedTags.value = [];
};

const resetFilters = () => {
  selectedTags.value = [];
  searchQuery.value = "";
};

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
};

onMounted(async () => {
  try {
    const res = await fetch("/projects.json");
    projects.value = await res.json();
  } catch (error) {
    console.error("Failed to load projects:", error);
  }
});
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
  background: var(--primary-bg);
}

/* Hero Section */
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
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Main Layout */
.projects-section {
  padding: 3rem 0 5rem 0;
}

.projects-layout {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  align-items: start;
}

/* Sidebar Styles */
.sidebar {
  position: sticky;
  top: 24px;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
}

/* Search Section */
.search-section {
  background: var(--secondary-bg);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
}

.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 14px;
  width: 20px;
  height: 20px;
  color: var(--text-secondary);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 0.875rem 3rem 0.875rem 3rem;
  background: var(--primary-bg);
  border: 2px solid var(--border-color);
  border-radius: 10px;
  font-size: 0.95rem;
  color: var(--text-primary);
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.search-input::placeholder {
  color: var(--text-secondary);
}

.clear-search {
  position: absolute;
  right: 12px;
  width: 24px;
  height: 24px;
  padding: 0;
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.clear-search:hover {
  color: var(--text-primary);
  background: var(--secondary-bg);
}

.clear-search svg {
  width: 16px;
  height: 16px;
}

/* Filters Section */
.filters-section {
  background: var(--secondary-bg);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
}

.filters-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
}

.filters-header h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.clear-filters-btn {
  padding: 0.5rem 1rem;
  background: var(--accent-pink);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-filters-btn:hover {
  background: #db2777;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(236, 72, 153, 0.3);
}

/* Filter Categories */
.filter-categories {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.filter-category {
  border: 1px solid var(--border-color);
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.filter-category:hover {
  border-color: var(--accent-color);
}

.category-header {
  width: 100%;
  padding: 1rem;
  background: var(--primary-bg);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.3s ease;
  color: var(--text-secondary);
}

.category-header:hover {
  background: rgba(99, 102, 241, 0.05);
  color: var(--text-primary);
}

.category-header.expanded {
  background: rgba(99, 102, 241, 0.05);
  color: var(--accent-color);
}

.category-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-icon svg {
  width: 100%;
  height: 100%;
}

.category-name {
  flex: 1;
  text-align: left;
  font-weight: 500;
  font-size: 0.95rem;
}

.chevron {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.category-header.expanded .chevron {
  transform: rotate(180deg);
}

.category-filters {
  padding: 0.75rem;
  background: rgba(99, 102, 241, 0.02);
  border-top: 1px solid var(--border-color);
}

.filter-option {
  display: flex;
  align-items: center;
  padding: 0.75rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.filter-option:hover {
  background: rgba(99, 102, 241, 0.05);
}

.filter-checkbox {
  width: 18px;
  height: 18px;
  margin-right: 0.75rem;
  cursor: pointer;
  accent-color: var(--accent-color);
}

.filter-label {
  flex: 1;
  font-size: 0.9rem;
  color: var(--text-primary);
  font-weight: 500;
}

.filter-count {
  font-size: 0.8rem;
  color: var(--text-secondary);
  background: var(--primary-bg);
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-weight: 500;
}

/* Main Content */
.main-content {
  min-width: 0; /* Prevent grid overflow */
}

.results-header {
  margin-bottom: 2rem;
}

.results-title {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 1rem 0;
}

.results-subtitle {
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-secondary);
}

.active-filters {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.active-filter-label {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.active-filter-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.active-filter-tag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.active-filter-tag:hover {
  background: #5b21b6;
  transform: scale(1.05);
}

.active-filter-tag svg {
  width: 14px;
  height: 14px;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2rem;
}

/* No Results */
.no-results {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--secondary-bg);
  border-radius: 16px;
  border: 1px solid var(--border-color);
}

.no-results-icon {
  width: 64px;
  height: 64px;
  color: var(--text-secondary);
  margin: 0 auto 1.5rem;
  opacity: 0.5;
}

.no-results h3 {
  font-size: 1.5rem;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
}

.no-results p {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin: 0 0 2rem 0;
}

.reset-button {
  padding: 0.875rem 1.75rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-button:hover {
  background: #5b21b6;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .projects-layout {
    grid-template-columns: 260px 1fr;
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .projects-layout {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .sidebar {
    position: static;
    max-height: none;
    margin-bottom: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .results-title {
    font-size: 1.5rem;
  }
}

/* Scrollbar Styling */
.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-track {
  background: var(--secondary-bg);
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb {
  background: var(--border-color);
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: var(--text-secondary);
}
</style>