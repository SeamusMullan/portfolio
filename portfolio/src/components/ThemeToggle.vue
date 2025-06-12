<template>
  <button @click="toggleTheme" class="theme-toggle" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
    <div class="toggle-container">
      <div class="toggle-track" :class="{ active: isDark }">
        <div class="toggle-thumb" :class="{ active: isDark }">
          <span class="toggle-icon">{{ isDark ? '🌙' : '☀️' }}</span>
        </div>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const isDark = ref(false)

function toggleTheme() {
  isDark.value = !isDark.value
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  document.documentElement.setAttribute('data-theme', isDark.value ? 'dark' : 'light')
})
</script>

<style scoped>
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.theme-toggle:hover {
  background: rgba(100, 108, 255, 0.1);
}

.toggle-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-track {
  width: 50px;
  height: 26px;
  background: var(--border-color);
  border-radius: 13px;
  position: relative;
  transition: background-color 0.3s ease;
}

.toggle-track.active {
  background: var(--accent-color);
}

.toggle-thumb {
  width: 22px;
  height: 22px;
  background: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.toggle-thumb.active {
  transform: translateX(24px);
}

.toggle-icon {
  font-size: 0.75rem;
  line-height: 1;
}

[data-theme="dark"] .toggle-thumb {
  background: var(--secondary-bg);
}
</style>
