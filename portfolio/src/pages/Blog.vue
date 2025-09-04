<template>
  <div>
    <h1>Blog / Devlog</h1>
    <router-link to="/blog/welcome">Welcome to My Devlog</router-link>
    <p style="margin-top: 2em; color: #888">
      (Blog index will be dynamic soon.)
    </p>
  </div>
</template>

<script setup lang="ts">
// Dynamically render all the saved blog posts (available in blogs_data.json)
// see Projects.vue for implementation of dynamic project rendering stuff.
// Difference is i need to make blog PAGES for each entry of data.. Maybe i can pretend its a page and just use a big ol modal...?
</script>
