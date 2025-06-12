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
  background: rgba(100, 108, 255, 0.1);
  color: var(--accent-color);
  border: 1px solid rgba(100, 108, 255, 0.2);
}

.tag.tech {
  background: rgba(34, 197, 94, 0.1);
  color: #16a34a;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.tag.creative {
  background: rgba(236, 72, 153, 0.1);
  color: #db2777;
  border: 1px solid rgba(236, 72, 153, 0.2);
}

.tag.tools {
  background: rgba(245, 158, 11, 0.1);
  color: #d97706;
  border: 1px solid rgba(245, 158, 11, 0.2);
}

.tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .tag.default,
[data-theme="dark"] .tag:not(.tech):not(.creative):not(.tools) {
  background: rgba(100, 108, 255, 0.15);
  color: #818cf8;
}

[data-theme="dark"] .tag.tech {
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
}

[data-theme="dark"] .tag.creative {
  background: rgba(236, 72, 153, 0.15);
  color: #f472b6;
}

[data-theme="dark"] .tag.tools {
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
}
</style>
