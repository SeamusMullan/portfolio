<template>
  <div class="min-h-screen space-y-16">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 dark:from-blue-900 dark:via-purple-900 dark:to-purple-950 text-white overflow-hidden rounded-lg">
      <div class="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
      <div class="relative max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
          Hi, I'm <span class="bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-300 bg-clip-text text-transparent">Seamus Mullan</span>
        </h1>
        <div class="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 opacity-90">Computer Science Student / Software Developer</div>
        <div class="text-lg md:text-xl lg:text-2xl mb-4 opacity-80">Dublin, Ireland</div>
        <div class="text-xl md:text-2xl lg:text-3xl mb-12 opacity-90 max-w-5xl mx-auto leading-relaxed font-light">
          I make audio software with C++, CMake and JUCE.<br />
          I use design tools like Photoshop, Illustrator and Figma.
        </div>
        <div class="flex flex-wrap gap-6 justify-center">
          <Button asChild variant="secondary" size="lg" class="text-lg px-8 py-4 shadow-xl">
            <router-link to="/projects" class="text-black dark:text-white">View My Work</router-link>
          </Button>

          <Button asChild variant="secondary" size="lg" class="text-lg px-8 py-4 shadow-xl">
            <p class="line-through">Download my CV</p>
          </Button>
          
          <Button asChild variant="outline" size="lg" class="text-lg px-8 py-4 border-white/30 hover:bg-white/10 shadow-xl">
            <a href="https://direktdsp.com" target="_blank" rel="noopener" class="text-black dark:text-white">Explore DirektDSP</a>
          </Button>
        </div>
      </div>
    </section>

    <!-- Skills/Interests Section -->
    <section class="max-w-full mx-auto px-4 md:px-6">
      <h2 class="text-4xl font-bold text-center mb-12">My Skills and Experience</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card class="text-center hover:shadow-lg hover:shadow-purple-200/50 dark:hover:shadow-purple-900/20 transition-all duration-300 ease-in-out border-purple-100 dark:border-purple-800">
          <CardHeader class="pb-4">
            <div class="text-5xl mb-4"></div>
            <CardTitle class="text-xl font-semibold mb-2">Real-Time Audio<br />Signal Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="mb-3 text-muted-foreground">I develop real-time audio plugins using JUCE, C++ and CMake.</div>
            <div class="text-sm text-muted-foreground">Have a look at <a href="https://direktdsp.com" target="_blank" class="underline hover:no-underline">DirektDSP</a>, my own audio software company.</div>
          </CardContent>
        </Card>
        <Card class="text-center hover:shadow-lg hover:shadow-purple-200/50 dark:hover:shadow-purple-900/20 transition-all duration-300 ease-in-out border-purple-100 dark:border-purple-800">
          <CardHeader class="pb-4">
            <div class="text-5xl mb-4"></div>
            <CardTitle class="text-xl font-semibold mb-2">Low Level Coding<br />Systems Programming</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="mb-3 text-muted-foreground">I work with C and C++ for my low-level programming projects.</div>
            <div class="text-sm text-muted-foreground">Check out <a href="https://github.com/seamusmullan/serotonin" target="_blank" class="underline hover:no-underline">Serotonin</a>, a custom operating system I'm making with others.</div>
          </CardContent>
        </Card>
        <Card class="text-center hover:shadow-lg hover:shadow-purple-200/50 dark:hover:shadow-purple-900/20 transition-all duration-300 ease-in-out border-purple-100 dark:border-purple-800">
          <CardHeader class="pb-4">
            <div class="text-5xl mb-4"></div>
            <CardTitle class="text-xl font-semibold mb-2">3D Modelling<br />Design Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="mb-3 text-muted-foreground">I've worked with Adobe Illustrator, Photoshop, Figma, Blender, and other design tools.</div>
            <div class="text-sm text-muted-foreground">Look at the UI in my <a href="https://direktdsp.com" target="_blank" class="underline hover:no-underline">audio plugins</a>. That's all me!</div>
          </CardContent>
        </Card>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="max-w-full mx-auto px-4 md:px-6">
      <h2 class="text-4xl font-bold text-center mb-12">Featured Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :tags="project.tags"
          :featured="project.featured"
        />
      </div>
      <div class="flex justify-center">
        <Button asChild variant="outline" size="lg" class="text-lg px-8 py-3">
          <router-link to="/projects" class="text-black dark:text-white">View All Projects</router-link>
        </Button>
      </div>
    </section>

    <!-- CTA Section -->
    <Card class="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-12 px-8 text-center shadow-xl">
      <CardHeader>
        <CardTitle class="text-4xl md:text-5xl font-bold mb-4">Let's Collaborate</CardTitle>
      </CardHeader>
      <CardContent>
        <div class="mb-8 text-xl opacity-90 max-w-2xl mx-auto">Interested in working together? I'm always open to discussing new opportunities, whether it's audio software development, systems programming, or creative technology projects.</div>
        <div class="flex flex-wrap gap-4 justify-center">
          <Button asChild variant="secondary" size="lg" class="text-lg px-8 py-3">
            <RouterLink to="/contact" class="text-black dark:text-white">Contact Me</RouterLink>
          </Button>
          <Button asChild variant="outline" size="lg" class="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-emerald-700">
            <a href="https://github.com/seamusmullan" target="_blank" rel="noopener" class="!text-black dark:!text-white">View GitHub</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ProjectCard from "../components/ProjectCard.vue";
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Project {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

const featuredProjects = ref<Project[]>([]);
onMounted(async () => {
  const res = await fetch("/projects_data.json");
  const all = await res.json();
  featuredProjects.value = all.filter((p: Project) => p.featured);
});
</script>

<style>
</style>

