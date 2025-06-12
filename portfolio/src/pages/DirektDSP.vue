<template>
  <div class="direktdsp-page">
    <!-- Hero Section -->
    <section class="direktdsp-hero">
      <div class="container">
        <div class="hero-content">
          <div class="brand-logo">
            <h1 class="brand-title">DirektDSP</h1>
          </div>
          <h2 class="tagline">Accelerate Your Production</h2>
          <p class="description">
            Welcome to DirektDSP, your go-to solution for high-performance audio software.
            Professional-grade VST/AU plugins designed for modern music production.
          </p>
          <div class="hero-actions">
            <a href="https://direktdsp.itch.io/" target="_blank" rel="noopener" class="cta-button primary">
              Get Our Plugins
            </a>
            <a href="https://github.com/DirektDSP" target="_blank" rel="noopener" class="cta-button secondary">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section features">
      <div class="container">
        <h2 class="section-title">Why Choose DirektDSP?</h2>
        <div class="features-grid grid grid-3">
          <div class="feature-card card">
            <div class="feature-icon">⚡</div>
            <h3>High Performance</h3>
            <p>Optimized algorithms for real-time processing with minimal CPU usage and ultra-low latency.</p>
          </div>
          <div class="feature-card card">
            <div class="feature-icon">🎛️</div>
            <h3>Professional Quality</h3>
            <p>Studio-grade sound processing with precision controls and transparent audio quality.</p>
          </div>
          <div class="feature-card card">
            <div class="feature-icon">🔧</div>
            <h3>Easy Integration</h3>
            <p>Seamless compatibility with all major DAWs and plugin formats (VST3, AU, AAX).</p>
          </div>
        </div>
      </div>
    </section>

    <!-- DAW Compatibility Section -->
    <section class="section compatibility">
      <div class="container">
        <h2 class="section-title">DAW Compatibility</h2>
        <div class="compatibility-card card">
          <div class="compatibility-content">
            <div class="compatibility-text">
              <h3>Works Seamlessly Across Popular DAWs</h3>
              <p>
                DirektDSP plugins integrate smoothly with major audio workstations including 
                Logic Pro, Ableton Live, Pro Tools, FL Studio, Cubase, Studio One, and more.
              </p>
              <ul class="daw-list">
                <li>Logic Pro X & Logic Pro</li>
                <li>Ableton Live</li>
                <li>Pro Tools</li>
                <li>FL Studio</li>
                <li>Cubase & Nuendo</li>
                <li>Studio One</li>
                <li>Reaper</li>
                <li>Bitwig Studio</li>
              </ul>
            </div>
            <div class="compatibility-visual">
              <div class="daw-icons">
                <div class="daw-icon">🎹</div>
                <div class="daw-icon">🎵</div>
                <div class="daw-icon">🎚️</div>
                <div class="daw-icon">🎧</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="section testimonials">
      <div class="container">
        <h2 class="section-title">What Our Users Say</h2>
        <div class="testimonials-grid grid grid-3">
          <div class="testimonial card">
            <p class="quote">
              "DirektDSP plugins have revolutionized my workflow. The performance gains are unreal."
            </p>
            <span class="author">- John D., Producer</span>
          </div>
          <div class="testimonial card">
            <p class="quote">
              "The integration with my DAW was seamless, and the sound quality is top-notch."
            </p>
            <span class="author">- Sarah G., Audio Engineer</span>
          </div>
          <div class="testimonial card">
            <p class="quote">
              "I'm amazed at how easy it was to get started. My productivity has skyrocketed!"
            </p>
            <span class="author">- Mike R., Musician</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Accelerate Your Production?</h2>
          <p>
            Join thousands of producers and musicians who trust DirektDSP for their audio processing needs.
          </p>
          <div class="cta-actions">
            <a href="https://direktdsp.itch.io/" target="_blank" rel="noopener" class="cta-button primary">
              Download Now
            </a>
            <a href="mailto:direktdsp@gmail.com" class="cta-button outline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// DirektDSP brand page
</script>

<style scoped>
.direktdsp-page {
  /* DirektDSP specific styling */
}

.direktdsp-hero {
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
  color: white;
  padding: 8rem 0;
  text-align: center;
}

.brand-logo {
  margin-bottom: 2rem;
}

.brand-title {
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: -0.02em;
  margin: 0;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tagline {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.description {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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
  background: #fa1b3f;
  color: white;
}

.cta-button.primary:hover {
  background: #7b0d1f;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(250, 27, 63, 0.3);
}

.cta-button.secondary {
  background: #64c22e;
  color: white;
}

.cta-button.secondary:hover {
  background: #346717;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(100, 194, 46, 0.3);
}

.cta-button.outline {
  background: transparent;
  color: white;
  border-color: white;
}

.cta-button.outline:hover {
  background: white;
  color: var(--text-primary);
}

.features {
  background: var(--primary-bg);
}

.features-grid {
  margin-bottom: 2rem;
}

.feature-card {
  text-align: center;
  padding: 3rem 2rem;
}

.feature-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--text-primary);
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.compatibility {
  background: var(--secondary-bg);
}

.compatibility-card {
  padding: 3rem;
}

.compatibility-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: center;
}

.compatibility-text h3 {
  margin-bottom: 1rem;
  font-size: 1.8rem;
  color: var(--text-primary);
}

.compatibility-text p {
  margin-bottom: 2rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.daw-list {
  list-style: none;
  padding: 0;
}

.daw-list li {
  padding: 0.5rem 0;
  color: var(--text-secondary);
  position: relative;
  padding-left: 1.5rem;
}

.daw-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #64c22e;
  font-weight: bold;
}

.compatibility-visual {
  text-align: center;
}

.daw-icons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.daw-icon {
  font-size: 3rem;
  padding: 1.5rem;
  background: var(--primary-bg);
  border-radius: 12px;
  border: 2px solid var(--border-color);
}

.testimonials {
  background: var(--primary-bg);
}

.testimonials-grid {
  gap: 2rem;
}

.testimonial {
  text-align: center;
  padding: 2.5rem 2rem;
}

.quote {
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.author {
  font-size: 0.9rem;
  color: var(--text-muted);
  font-weight: 500;
}

.cta-section {
  background: linear-gradient(135deg, #232526 0%, #414345 100%);
  color: white;
  text-align: center;
  padding: 5rem 0;
}

.cta-content h2 {
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
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
  .brand-title {
    font-size: 2.5rem;
  }
  
  .tagline {
    font-size: 1.8rem;
  }
  
  .compatibility-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .daw-icons {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}
</style>
