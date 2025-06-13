<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            Hi, I'm <span class="gradient-text">Seamus Mullan</span>
          </h1>
          <p class="hero-subtitle">
            Computer Science Student / Software Developer
          </p>
          <p class="hero-location">Dublin, Ireland</p>

          <p class="hero-description">
            I make audio software with C++, CMake and JUCE. <br />
            I use design tools like Photoshop, Illustrator and Figma.
          </p>
          <div class="hero-actions">
            <router-link to="/projects" class="cta-button primary">
              View My Work
            </router-link>
            <a
              href="https://direktdsp.com"
              target="_blank"
              rel="noopener"
              class="cta-button secondary"
            >
              Explore DirektDSP
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills/Interests Section -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">My Skills and Experience</h2>
        <div class="skills-grid grid grid-3">
          <div class="skill-card card">
            <div class="skill-icon">🎵</div>
            <h3>
              Real-Time Audio <br />
              Signal Processing
            </h3>
            <p>I develop real-time audio plugins using JUCE, C++ and CMake.</p>
            <br />
            <p>
              Have a look at
              <a href="https://direktdsp.com" target="_blank">DirektDSP</a>, my
              own audio software company.
            </p>
          </div>
          <div class="skill-card card">
            <div class="skill-icon">💻</div>
            <h3>
              Low Level Coding <br />
              Systems Programming
            </h3>
            <p>I work with C and C++ for my low-level programming projects.</p>
            <br />
            <p>
              Check out
              <a
                href="https://github.com/seamusmullan/serotonin"
                target="_blank"
                >Serotonin</a
              >, a custom operating system I'm making with others.
            </p>
          </div>
          <div class="skill-card card">
            <div class="skill-icon">🎮</div>
            <h3>
              3D Modelling <br />
              Design Tools
            </h3>
            <p>
              I've worked with Adobe Illustrator, Photoshop, Figma, Blender, and
              other design tools.
            </p>
            <br />
            <p>
              Look at the UI in my
              <a href="https://direktdsp.com" target="_blank">audio plugins</a>.
              That's all me!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="section featured-projects">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid grid grid-2">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.title"
            :title="project.title"
            :description="project.description"
            :tags="project.tags"
          />
        </div>
        <div class="section-action">
          <router-link to="/projects" class="cta-button outline">
            View All Projects
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Let's Build Something Amazing</h2>
          <p>
            Interested in collaborating or learning more about my work? I'm
            always excited to discuss new projects and opportunities.
          </p>
          <div class="cta-actions">
            <a
              href="mailto:seamusmullan2023@gmail.com"
              class="cta-button primary"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/seamusmullan"
              target="_blank"
              class="cta-button outline"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ProjectCard from "../components/ProjectCard.vue";

interface Project {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

const featuredProjects = ref<Project[]>([]);
onMounted(async () => {
  const res = await fetch("/projects.json");
  const all = await res.json();
  featuredProjects.value = all.filter((p: Project) => p.featured);
});
</script>

<style scoped>
.hero-section {
  background: var(--gradient-hero);
  color: white;
  padding: 8rem 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
}

.hero-subtitle {
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
  opacity: 0.95;
  font-weight: 500;
  color: white;
}

.hero-location {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
}

.hero-description {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  line-height: 1.6;
  color: white;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.cta-button.primary {
  background: white;
  color: var(--accent-color);
}

.cta-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
}

.cta-button.secondary {
  background: transparent;
  color: white;
  border-color: white;
}

.cta-button.secondary:hover {
  background: white;
  color: var(--accent-color);
}

.cta-button.outline {
  background: transparent;
  color: var(--accent-color);
  border-color: var(--accent-color);
}

.cta-button.outline:hover {
  background: var(--accent-color);
  color: white;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  font-weight: 700;
}

.skills-grid {
  margin-bottom: 2rem;
}

.skill-card {
  text-align: center;
  padding: 2.5rem 2rem;
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.skill-card h3 {
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.skill-card p {
  color: var(--text-secondary);
}

.featured-projects {
  background: var(--secondary-bg);
}

.projects-grid {
  margin-bottom: 3rem;
}

.section-action {
  text-align: center;
}

.cta-section {
  background: var(--gradient-secondary);
  color: white;
  text-align: center;
  padding: 5rem 0;
}

.cta-content h2 {
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}
</style>
