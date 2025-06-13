<template>
  <span class="tag" :class="variant">{{ text }}</span>
</template>

<script setup lang="ts">
defineProps<{ 
  text: string
  variant?: 'default' | 'languages' | 'audio' | 'web' | 'tools'
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
.tag:not(.languages):not(.audio):not(.web):not(.tools) {
  background: rgba(59, 130, 246, 0.15);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.tag.languages {
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

.tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
