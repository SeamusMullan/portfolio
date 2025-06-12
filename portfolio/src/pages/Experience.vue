<template>
  <div class="experience-page">
    <!-- Skills Section -->
    <section class="section">
      <div class="container">
        <h1 class="page-title">Skills & Experience</h1>
        <p class="page-subtitle">
          A comprehensive overview of my technical expertise and professional development
        </p>

        <!-- Technical Skills -->
        <div class="skills-section">
          <h2 class="section-title">Technical Skills</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h3 class="category-title">Programming Languages</h3>
              <div class="skill-tags">
                <span class="skill-tag cpp">C++</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">C</span>
                <span class="skill-tag">Assembly</span>
              </div>
            </div>

            <div class="skill-category">
              <h3 class="category-title">Audio & DSP</h3>
              <div class="skill-tags">
                <span class="skill-tag audio">JUCE</span>
                <span class="skill-tag audio">Digital Signal Processing</span>
                <span class="skill-tag audio">VST/AU Plugins</span>
                <span class="skill-tag audio">Real-time Audio</span>
                <span class="skill-tag audio">FL Studio</span>
                <span class="skill-tag audio">Ableton Live</span>
              </div>
            </div>

            <div class="skill-category">
              <h3 class="category-title">Web Technologies</h3>
              <div class="skill-tags">
                <span class="skill-tag web">Vue.js</span>
                <span class="skill-tag web">React</span>
                <span class="skill-tag web">Node.js</span>
                <span class="skill-tag web">Vite</span>
                <span class="skill-tag web">Next.js</span>
                <span class="skill-tag web">FastAPI</span>
              </div>
            </div>

            <div class="skill-category">
              <h3 class="category-title">Systems & Tools</h3>
              <div class="skill-tags">
                <span class="skill-tag systems">Operating Systems</span>
                <span class="skill-tag systems">Kernel Development</span>
                <span class="skill-tag systems">CMake</span>
                <span class="skill-tag systems">Git</span>
                <span class="skill-tag systems">Docker</span>
                <span class="skill-tag systems">OpenGL</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="education-section">
          <h2 class="section-title">Education</h2>
          <div class="education-card">
            <div class="education-header">
              <h3>Computer Science (B.Sc.)</h3>
              <span class="education-year">2022 - 2026</span>
            </div>
            <p class="education-institution">Ireland</p>
            <p class="education-description">
              Currently in third year, focusing on systems programming, digital signal processing, 
              and software engineering. Active in audio software development and creative technology projects.
            </p>
          </div>
        </div>

        <!-- Key Projects Overview -->
        <div class="achievements-section">
          <h2 class="section-title">Key Achievements</h2>
          <div class="achievements-grid">
            <div class="achievement-card">
              <div class="achievement-icon">🎵</div>
              <h3>DirektDSP</h3>
              <p>Founded audio software company developing professional VST/AU plugins with focus on real-time DSP</p>
            </div>
            
            <div class="achievement-card">
              <div class="achievement-icon">🖥️</div>
              <h3>Operating System</h3>
              <p>Built custom OS from scratch with kernel, memory management, and system calls in C and Assembly</p>
            </div>
            
            <div class="achievement-card">
              <div class="achievement-icon">⚡</div>
              <h3>Performance Focus</h3>
              <p>Specialized in real-time systems, low-latency audio processing, and performance-critical applications</p>
            </div>
            
            <div class="achievement-card">
              <div class="achievement-icon">🎮</div>
              <h3>Creative Tech</h3>
              <p>Experience in game development, music production, and interactive media combining technical and creative skills</p>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="cta-section">
          <h2>Let's Collaborate</h2>
          <p>
            Interested in working together? I'm always open to discussing new opportunities, 
            whether it's audio software development, systems programming, or creative technology projects.
          </p>
          <div class="cta-actions">
            <a href="mailto:seamusmullan2023@gmail.com" class="cta-button primary">
              Get In Touch
            </a>
            <a href="https://github.com/seamusmullan" target="_blank" rel="noopener" class="cta-button outline">
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Experience page showcasing skills, education, and achievements
</script>

<style scoped>
.experience-page {
  min-height: 100vh;
}

.page-title {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: 800;
  background: var(--gradient-hero);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-subtitle {
  text-align: center;
  margin-bottom: 4rem;
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.skills-section,
.education-section,
.achievements-section {
  margin-bottom: 5rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-primary);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.skill-category {
  background: var(--secondary-bg);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  background: rgba(99, 102, 241, 0.1);
  color: var(--accent-color);
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: all 0.3s ease;
}

.skill-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
}

.skill-tag.cpp {
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent-secondary);
  border-color: rgba(16, 185, 129, 0.2);
}

.skill-tag.audio {
  background: rgba(236, 72, 153, 0.1);
  color: var(--accent-pink);
  border-color: rgba(236, 72, 153, 0.2);
}

.skill-tag.web {
  background: rgba(245, 158, 11, 0.1);
  color: var(--accent-tertiary);
  border-color: rgba(245, 158, 11, 0.2);
}

.skill-tag.systems {
  background: rgba(139, 92, 246, 0.1);
  color: #8b5cf6;
  border-color: rgba(139, 92, 246, 0.2);
}

.education-card {
  background: var(--secondary-bg);
  border-radius: 16px;
  padding: 3rem;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
  max-width: 800px;
  margin: 0 auto;
}

.education-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.education-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
}

.education-year {
  font-size: 1rem;
  font-weight: 500;
  color: var(--accent-color);
  background: rgba(99, 102, 241, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.education-institution {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.education-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.achievement-card {
  background: var(--secondary-bg);
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: var(--shadow);
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.achievement-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.achievement-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.achievement-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.achievement-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.cta-section {
  background: var(--gradient-secondary);
  color: white;
  text-align: center;
  padding: 4rem 3rem;
  border-radius: 20px;
  margin-top: 4rem;
}

.cta-section h2 {
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
}

.cta-section p {
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

.cta-button.outline {
  background: transparent;
  color: white;
  border-color: white;
}

.cta-button.outline:hover {
  background: white;
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.2rem;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .education-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .achievements-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}
</style>
