
<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-800 dark:from-emerald-900 dark:via-teal-900 dark:to-cyan-950 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
      <div class="relative max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
          Skills & <span class="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">Experience</span>
        </h1>
        <p class="text-xl md:text-2xl lg:text-3xl opacity-90 max-w-4xl mx-auto leading-relaxed font-light">
          A comprehensive overview of my technical expertise and professional development
        </p>
        <div class="mt-12 flex flex-wrap gap-4 justify-center">
          <div class="h-1 w-20 bg-gradient-to-r from-emerald-300 to-cyan-300 rounded-full"></div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="w-full min-h-screen flex items-center justify-center py-12">
      <div class="max-w-6xl mx-auto px-4 md:px-6 w-full">
        <div class="flex flex-col gap-16">
          <!-- Technical Skills -->
          <div>
            <h2 class="text-4xl font-bold text-center mb-12">Technical Skills</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle class="text-xl font-semibold mb-2">Programming Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div class="flex flex-wrap gap-2">
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">C</Badge>
                    <Badge variant="outline">Assembly</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle class="text-xl font-semibold mb-2">Audio & DSP</CardTitle>
                </CardHeader>
                <CardContent>
                  <div class="flex flex-wrap gap-2">
                    <Badge variant="secondary">JUCE</Badge>
                    <Badge variant="secondary">Digital Signal Processing</Badge>
                    <Badge variant="secondary">VST/AU Plugins</Badge>
                    <Badge variant="secondary">Real-time Audio</Badge>
                    <Badge variant="secondary">FL Studio</Badge>
                    <Badge variant="secondary">Ableton Live</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle class="text-xl font-semibold mb-2">Web Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div class="flex flex-wrap gap-2">
                    <Badge variant="secondary">Vue.js</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Vite</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">FastAPI</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle class="text-xl font-semibold mb-2">Systems & Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div class="flex flex-wrap gap-2">
                    <Badge variant="secondary">Operating Systems</Badge>
                    <Badge variant="secondary">Kernel Development</Badge>
                    <Badge variant="secondary">CMake</Badge>
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">OpenGL</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <!-- Education -->
          <div>
            <h2 class="text-4xl font-bold text-center mb-12">Education</h2>
            <Card class="max-w-3xl mx-auto">
              <CardHeader class="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle class="text-xl font-semibold">Computer Science (B.Sc.)</CardTitle>
                  <div class="text-muted-foreground text-base">Ireland</div>
                </div>
                <Badge variant="secondary" class="text-base">2022 - 2026</Badge>
              </CardHeader>
              <CardContent>
                <div class="text-muted-foreground mb-2">
                  Currently in third year, focusing on systems programming, digital signal processing, and software engineering. Active in audio software development and creative technology projects.
                </div>
              </CardContent>
            </Card>
          </div>

          <!-- Key Achievements -->
          <div>
            <h2 class="text-4xl font-bold text-center mb-12">Key Achievements</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card class="text-center">
                <CardHeader>
                  <div class="text-5xl mb-4">🎵</div>
                  <CardTitle class="text-xl font-semibold mb-1">DirektDSP</CardTitle>
                </CardHeader>
                <CardContent>
                  <div class="text-muted-foreground mb-2">Founded audio software company developing professional VST/AU plugins with focus on real-time DSP</div>
                </CardContent>
              </Card>
              <Card class="text-center">
                <CardHeader>
                  <div class="text-5xl mb-4">🖥️</div>
                  <CardTitle class="text-xl font-semibold mb-1">Operating System</CardTitle>
                </CardHeader>
                <CardContent>
                  <div class="text-muted-foreground mb-2">Built custom OS from scratch with kernel, memory management, and system calls in C and Assembly</div>
                </CardContent>
              </Card>
              <Card class="text-center">
                <CardHeader>
                  <div class="text-5xl mb-4">⚡</div>
                  <CardTitle class="text-xl font-semibold mb-1">Performance Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <div class="text-muted-foreground mb-2">Specialized in real-time systems, low-latency audio processing, and performance-critical applications</div>
                </CardContent>
              </Card>
              <Card class="text-center">
                <CardHeader>
                  <div class="text-5xl mb-4">🎮</div>
                  <CardTitle class="text-xl font-semibold mb-1">Creative Tech</CardTitle>
                </CardHeader>
                <CardContent>
                  <div class="text-muted-foreground mb-2">Experience in game development, music production, and interactive media combining technical and creative skills</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <!-- Call to Action -->
          <Card class="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-12 px-8 text-center shadow-xl">
            <CardHeader>
              <CardTitle class="text-4xl md:text-5xl font-bold mb-4">Let's Collaborate</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="mb-8 text-xl opacity-90 max-w-2xl mx-auto">Interested in working together? I'm always open to discussing new opportunities, whether it's audio software development, systems programming, or creative technology projects.</div>
              <div class="flex flex-wrap gap-4 justify-center">
                <Button asChild variant="secondary" size="lg" class="text-lg px-8 py-3">
                  <a href="mailto:seamusmullan2023@gmail.com">Get In Touch</a>
                </Button>
                <Button asChild variant="outline" size="lg" class="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-emerald-700">
                  <a href="https://github.com/seamusmullan" target="_blank" rel="noopener">View GitHub</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
</script>


<style>
</style>
