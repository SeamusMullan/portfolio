<template>
  <span class="tag" :class="variant">{{ text }}</span>
</template>

<script setup lang="ts">
defineProps<{ 
  text: string
  variant?: 'default' | 'tech' | 'creative' | 'tools'
}>()
</script>

<style scoped>
.tag {
  display: inline-block;
  border-radius: 6px;
  padding: 0.4rem 0.8rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: default;
}

.tag.default,
.tag:not(.tech):not(.creative):not(.tools) {
  background: rgba(99, 102, 241, 0.1);
  color: var(--accent-color);
  border: 1px solid rgba(99, 102, 241, 0.2);
}

.tag.tech {
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent-secondary);
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.tag.creative {
  background: rgba(236, 72, 153, 0.1);
  color: var(--accent-pink);
  border: 1px solid rgba(236, 72, 153, 0.2);
}

.tag.tools {
  background: rgba(245, 158, 11, 0.1);
  color: var(--accent-tertiary);
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
