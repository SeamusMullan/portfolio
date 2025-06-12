<script setup lang="ts">
// Removed ThemeToggle component
</script>

<template>
  <div id="app">
    <header class="header">
      <nav class="nav container">
        <div class="nav-brand">
          <router-link to="/" class="brand-link">
            <span class="brand-text gradient-text">Seamus Mullan</span>
          </router-link>
        </div>
        <div class="nav-links">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/projects" class="nav-link">Projects</router-link>
          <router-link to="/experience" class="nav-link">Experience</router-link>
          <a href="https://direktdsp.com" target="_blank" rel="noopener" class="nav-link">DirektDSP</a>
        </div>
      </nav>
    </header>
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Seamus Mullan</h3>
            <p>Computer Science Student & Creative Developer</p>
          </div>
          <div class="footer-section">
            <h4>Connect</h4>
            <div class="social-links">
              <a href="https://github.com/seamusmullan" target="_blank" rel="noopener">GitHub</a>
              <a href="https://linkedin.com/in/seamusmullan" target="_blank" rel="noopener">LinkedIn</a>
              <a href="mailto:seamusmullan2023@gmail.com">Email</a>
            </div>
          </div>
          <div class="footer-section">
            <h4>Projects</h4>
            <div class="footer-links">
              <router-link to="/projects">Portfolio</router-link>
              <a href="https://direktdsp.com" target="_blank" rel="noopener">DirektDSP</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <small>© {{ new Date().getFullYear() }} Seamus Mullan. All rights reserved.</small>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.header {
  background: rgba(255, 255, 255, 0.95);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  max-width: 1200px;
}

.nav-brand .brand-link {
  text-decoration: none;
}

.brand-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent-color), var(--accent-hover));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-weight: 500;
  color: var(--text-primary);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--accent-color);
  background: rgba(99, 102, 241, 0.1);
}

.nav-link.router-link-active {
  color: var(--accent-color);
  background: rgba(99, 102, 241, 0.1);
}

.main {
  min-height: calc(100vh - 160px);
}

.footer {
  background: var(--secondary-bg);
  border-top: 1px solid var(--border-color);
  padding: 3rem 0 1rem 0;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.footer-section h4 {
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  font-size: 1rem;
}

.footer-section p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.social-links, .footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-links a, .footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover, .footer-links a:hover {
  color: var(--accent-color);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
}

.footer-bottom small {
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
  
  .nav-links {
    gap: 1rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .social-links, .footer-links {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
