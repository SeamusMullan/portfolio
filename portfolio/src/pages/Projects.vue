<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-yellow-300 via-orange-300 to-amber-600 dark:from-yellow-400 dark:via-orange-600 dark:to-amber-600 text-white overflow-hidden rounded-lg">
      <div class="absolute inset-0 bg-black/5 dark:bg-black/20"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5"></div>
      <div class="relative max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
          My <span class="bg-gradient-to-r from-red-200 via-rose-200 to-pink-200 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p class="text-xl md:text-2xl lg:text-3xl opacity-90 max-w-4xl mx-auto leading-relaxed font-light">
          A collection of my technical / creative work.
        </p>
        <p class="mt-4 text-lg md:text-xl lg:text-2xl font-light opacity-80">
          Use filters to find specific languages, technologies, or types of projects.
        </p>
        <div class="mt-12 flex flex-wrap gap-4 justify-center">
          <div class="h-1 w-20 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="w-full min-h-screen py-12 px-4">
      <div class="flex flex-col lg:flex-row gap-8 w-full">
        <!-- Sidebar -->
        <aside class="w-full lg:w-80 flex-shrink-0 space-y-6">
          <!-- Search Bar -->
          <div class="bg-card rounded-xl border border-amber-100 dark:border-amber-800 p-4 shadow-sm hover:shadow-lg hover:shadow-amber-200/50 dark:hover:shadow-amber-900/20 transition-all duration-300 ease-in-out">
            <div class="relative flex items-center">
              <svg class="absolute left-3 w-5 h-5 text-muted-foreground" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
              <Input
                v-model="searchQuery"
                placeholder="Search projects..."
                class="pl-10 pr-10 py-2 text-base"
              />
              <Button v-if="searchQuery" variant="ghost" size="icon" class="absolute right-2" @click="searchQuery = ''" :aria-label="'Clear search'">
                <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </Button>
            </div>
          </div>

          <!-- Filters Section -->
          <div class="bg-card rounded-xl border border-amber-100 dark:border-amber-800 p-4 shadow-sm hover:shadow-lg hover:shadow-amber-200/50 dark:hover:shadow-amber-900/20 transition-all duration-300 ease-in-out">
            <div class="flex items-center justify-between mb-4 border-b pb-2">
              <h3 class="font-semibold text-base">Filter by Technology</h3>
              <Button v-if="selectedTags.length > 0" variant="outline" size="sm" @click="clearFilters">
                Clear All ({{ selectedTags.length }})
              </Button>
            </div>
            <Accordion type="multiple" :default-value="openCategories">
              <AccordionItem v-for="cat in filterCategories" :key="cat.key" :value="cat.key">
                <AccordionTrigger class="text-sm">
                  <span class="flex items-center gap-2">
                    <span v-if="cat.icon" class="w-5 h-5"> <component :is="cat.icon" /> </span>
                    {{ cat.label }}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div class="space-y-1 pt-2">
                    <div v-for="tag in getTagsByCategory(cat.key)" :key="tag" class="flex items-center gap-2 py-1">
                      <Checkbox 
                        :id="`checkbox-${tag}`"
                        :checked="selectedTags.includes(tag)"
                        @click="() => toggleFilter(tag)"
                      />
                      <label :for="`checkbox-${tag}`" class="flex-1 text-sm cursor-pointer">{{ tag }}</label>
                      <span class="text-xs text-muted-foreground bg-muted rounded px-2 py-0.5">{{ getTagCount(tag) }}</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </aside>

        <!-- Main Content Area -->
        <main class="flex-1 min-w-0">
          <!-- Results Header -->
          <div class="mb-8 text-center lg:text-left">
            <h2 class="text-3xl font-bold mb-4">
              {{ filteredProjects.length }} Project{{ filteredProjects.length !== 1 ? 's' : '' }}
              <span v-if="selectedTags.length > 0 || searchQuery" class="text-muted-foreground text-xl font-normal">(filtered)</span>
            </h2>
            <div v-if="selectedTags.length > 0" class="flex items-center justify-center lg:justify-start gap-2 flex-wrap mb-4">
              <span class="text-sm text-muted-foreground font-medium">Active filters:</span>
              <div class="flex gap-2 flex-wrap">
                <Button
                  v-for="tag in selectedTags"
                  :key="tag"
                  variant="secondary"
                  size="sm"
                  class="rounded-full px-3 py-1 text-xs"
                  @click="toggleFilter(tag)"
                >
                  {{ tag }}
                  <svg class="w-3.5 h-3.5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          <!-- Projects Container -->
          <div class="w-full">
            <!-- Projects Grid -->
            <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
                :demoUrl_1_title="project.demoUrl_1_title"
                :demoUrl_2_title="project.demoUrl_2_title"
                :featured="project.featured"
                :createdAt="project.createdAt"
                :updatedAt="project.updatedAt"
                :stars="project.stars"
                :language="project.language"
                :license="project.license"
                :forks="project.forks"
                :size="project.size"
              />
            </div>

            <!-- No Results -->
            <div v-else class="flex flex-col items-center justify-center bg-muted/30 border rounded-xl py-20 px-6 text-center" style="width: 100%;">
              <svg viewBox="0 0 20 20" fill="currentColor" class="w-16 h-16 text-muted-foreground mb-4">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
              <h3 class="text-2xl font-semibold mb-2">No projects found</h3>
              <p class="text-base text-muted-foreground mb-6">Try adjusting your filters or search query</p>
              <Button variant="secondary" size="lg" @click="resetFilters">Reset All Filters</Button>
            </div>
          </div>
        </main>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import ProjectCard from "../components/ProjectCard.vue";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';

interface Project {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
  demoUrl_1?: string;
  demoUrl_2?: string;
  demoUrl_1_title?: string;
  demoUrl_2_title?: string;
  createdAt?: string;
  updatedAt?: string;
  stars?: number;
  language?: string;
  license?: string;
  forks?: number;
  size?: number;
}

const projects = ref<Project[]>([]);
const selectedTags = ref<string[]>([]);
const searchQuery = ref("");
const openCategories = ref<string[]>(['languages']);

const filterCategories = [
  { key: 'languages', label: 'Programming Languages', icon: undefined },
  { key: 'audio', label: 'Audio & Music', icon: undefined },
  { key: 'web', label: 'Web Technologies', icon: undefined },
  { key: 'tools', label: 'Tools & Frameworks', icon: undefined },
  { key: 'default', label: 'Other', icon: undefined },
];

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

const filteredProjects = computed(() => {
  let filtered = [...projects.value];
  
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
      selectedTags.value.every((tag) => project.tags.includes(tag))
    );
  }
  
  // Sort by featured status
  return filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
});

const toggleFilter = (tag: string) => {
  const index = selectedTags.value.indexOf(tag);
  if (index > -1) {
    // Remove tag
    selectedTags.value = selectedTags.value.filter(t => t !== tag);
    // console.log(`Checkbox for tag '${tag}' unchecked.`);
  } else {
    // Add tag
    selectedTags.value = [...selectedTags.value, tag];
    // console.log(`Checkbox for tag '${tag}' checked.`);
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
  if (["C++", "C", "Assembly", "Python", "TypeScript", "JavaScript", "Rust", "Java", "Go"].some((t) => tag.includes(t))) return "languages";
  if (["Audio", "DSP", "Music Production", "FL Studio", "Ableton", "EDM", "Creative", "Real-time Audio", "VST", "AU", "Plugins", "JUCE"].some((t) => tag.includes(t))) return "audio";
  if (["Vue.js", "React", "Next.js", "Frontend", "UI/UX", "Vite", "Electron", "HTML", "CSS", "Web", "Node.js", "FastAPI"].some((t) => tag.includes(t))) return "web";
  if (["CMake", "npm", "bun", "Git", "Docker", "CLI", "Desktop", "Build Tools", "Development Tools", "Systems", "Fintech", "Algorithms"].some((t) => tag.includes(t))) return "tools";
  return "default";
};

onMounted(async () => {
  try {
    const res = await fetch("/projects_data.json");
    projects.value = await res.json();
  } catch (error) {
    console.error("Failed to load projects:", error);
  }
});
</script>