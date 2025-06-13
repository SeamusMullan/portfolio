
<template>
  <div class="space-y-0">
    <!-- Hero Section -->
    <section class="w-full bg-gradient-to-br from-primary to-secondary text-white py-16 px-4 text-center shadow-xl mb-10">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-5xl font-extrabold mb-2">DirektDSP</h1>
        <h2 class="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide">Accelerate Your Production</h2>
        <p class="text-lg md:text-xl opacity-90 mb-6">
          Welcome to DirektDSP, your go-to solution for high-performance audio software.<br />Professional-grade VST/AU plugins designed for modern music production.
        </p>
        <div class="flex flex-wrap gap-3 justify-center">
          <Button asChild variant="secondary" size="lg">
            <a href="https://direktdsp.itch.io/" target="_blank" rel="noopener">Get Our Plugins</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com/DirektDSP" target="_blank" rel="noopener">View on GitHub</a>
          </Button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="w-full max-w-5xl mx-auto px-2 md:px-6 mb-12">
      <h2 class="text-3xl font-bold text-center mb-10">Why Choose DirektDSP?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card class="text-center">
          <CardHeader>
            <div class="text-4xl mb-2">⚡</div>
            <CardTitle class="text-xl font-semibold mb-1">High Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-muted-foreground mb-2">Optimized algorithms for real-time processing with minimal CPU usage and ultra-low latency.</div>
          </CardContent>
        </Card>
        <Card class="text-center">
          <CardHeader>
            <div class="text-4xl mb-2">🎛️</div>
            <CardTitle class="text-xl font-semibold mb-1">Professional Quality</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-muted-foreground mb-2">Studio-grade sound processing with precision controls and transparent audio quality.</div>
          </CardContent>
        </Card>
        <Card class="text-center">
          <CardHeader>
            <div class="text-4xl mb-2">🔧</div>
            <CardTitle class="text-xl font-semibold mb-1">Easy Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="text-muted-foreground mb-2">Seamless compatibility with all major DAWs and plugin formats (VST3, AU, AAX).</div>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- DAW Compatibility Section -->
    <section class="w-full max-w-5xl mx-auto px-2 md:px-6 mb-12">
      <h2 class="text-3xl font-bold text-center mb-10">DAW Compatibility</h2>
      <Card>
        <CardContent class="flex flex-col md:flex-row gap-8 items-center py-8">
          <div class="flex-1">
            <h3 class="text-xl font-semibold mb-2">Works Seamlessly Across Popular DAWs</h3>
            <div class="text-muted-foreground mb-4">DirektDSP plugins integrate smoothly with major audio workstations including Logic Pro, Ableton Live, Pro Tools, FL Studio, Cubase, Studio One, and more.</div>
            <ul class="list-disc pl-6 text-left text-base text-muted-foreground space-y-1">
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
          <div class="flex flex-col gap-4 items-center">
            <div class="text-5xl">🎹</div>
            <div class="text-5xl">🎵</div>
            <div class="text-5xl">🎚️</div>
            <div class="text-5xl">🎧</div>
          </div>
        </CardContent>
      </Card>
    </section>

    <!-- Testimonials Section -->
    <section class="w-full max-w-5xl mx-auto px-2 md:px-6 mb-12">
      <h2 class="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card class="text-center">
          <CardContent class="py-8">
            <div class="italic text-base text-muted-foreground mb-4">"DirektDSP plugins have revolutionized my workflow. The performance gains are unreal."</div>
            <div class="text-xs text-muted-foreground font-semibold">- John D., Producer</div>
          </CardContent>
        </Card>
        <Card class="text-center">
          <CardContent class="py-8">
            <div class="italic text-base text-muted-foreground mb-4">"The integration with my DAW was seamless, and the sound quality is top-notch."</div>
            <div class="text-xs text-muted-foreground font-semibold">- Sarah G., Audio Engineer</div>
          </CardContent>
        </Card>
        <Card class="text-center">
          <CardContent class="py-8">
            <div class="italic text-base text-muted-foreground mb-4">"I'm amazed at how easy it was to get started. My productivity has skyrocketed!"</div>
            <div class="text-xs text-muted-foreground font-semibold">- Mike R., Musician</div>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- CTA Section -->
    <Card class="bg-gradient-to-br from-secondary to-primary text-white py-12 px-4 text-center shadow-xl mt-8">
      <CardHeader>
        <CardTitle class="text-3xl md:text-4xl font-bold mb-2">Ready to Accelerate Your Production?</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="mb-6 text-lg opacity-90">Join thousands of producers and musicians who trust DirektDSP for their audio processing needs.</div>
        <div class="flex flex-wrap gap-3 justify-center">
          <Button asChild variant="secondary" size="lg">
            <a href="https://direktdsp.itch.io/" target="_blank" rel="noopener">Download Now</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:direktdsp@gmail.com">Contact Us</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
</script>


<style>
</style>
