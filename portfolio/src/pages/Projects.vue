<template>
  <div>
    <h1>Projects</h1>
    <div v-if="projects.length">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :tags="project.tags"
      />
    </div>
    <p v-else>Loading projects...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'

interface Project {
  title: string
  description: string
  tags: string[]
}

const projects = ref<Project[]>([])
onMounted(async () => {
  const res = await fetch('/src/data/projects.json')
  projects.value = await res.json()
})
</script>
