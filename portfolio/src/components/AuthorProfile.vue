<template>
  <div class="author-profile">
    <h2>{{ author.name }}</h2>
    <p>{{ author.bio }}</p>
    <div class="links">
      <a :href="author.social.github" target="_blank" class="text-black dark:text-white">GitHub</a> |
      <a :href="author.social.linkedin" target="_blank" class="text-black dark:text-white">LinkedIn</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Author {
  name: string
  bio: string
  social: { github: string; linkedin: string }
}

const author = ref<Author>({ name: '', bio: '', social: { github: '', linkedin: '' } })
onMounted(async () => {
  const res = await fetch('/src/data/author.json')
  author.value = await res.json()
})
</script>

<style scoped>
.author-profile {
  margin: 2rem 0;
  text-align: center;
}
.links a {
  color: #646cff;
  margin: 0 0.5em;
  text-decoration: none;
}
</style>
