<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-800 dark:from-emerald-900 dark:via-teal-900 dark:to-cyan-950 text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
      <div class="relative max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
          My <span class="bg-gradient-to-r from-yellow-300 via-pink-300 to-orange-300 bg-clip-text text-transparent">Experience</span>
        </h1>
        <p class="text-xl md:text-2xl lg:text-3xl opacity-90 max-w-4xl mx-auto leading-relaxed font-light">
          A timeline of my technical skills, educational background, and key achievements in software development and beyond.
        </p>
        <div class="mt-12 flex flex-wrap gap-4 justify-center">
          <div class="h-1 w-20 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full"></div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="w-full">
      <div class="flex flex-col gap-16">
        <!-- Technical Skills Section -->
        <div class="w-full">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 pt-12">Technical Skills</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Card v-for="skill in skills" :key="skill.name" class="hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <CardHeader class="flex flex-row items-center gap-4 pb-2">
                <component :is="skill.icon" class="w-8 h-8 text-emerald-500" />
                <CardTitle class="text-xl font-semibold">{{ skill.name }}</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-sm text-muted-foreground">{{ skill.description }}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <!-- Education Section -->
        <div class="w-full max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
          <Card class="overflow-hidden shadow-lg">
            <div class="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-6">
              <div class="flex items-center gap-4">
                <div class="p-3 bg-white dark:bg-gray-950 rounded-lg shadow">
                  <component :is="icons.GraduationCap" class="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <CardTitle class="text-2xl font-bold text-gray-900 dark:text-white">BSc (Hons) Computer Science</CardTitle>
                  <p class="text-lg text-gray-700 dark:text-gray-300">Trinity College Dublin</p>
                </div>
              </div>
            </div>
            <CardContent class="p-6 space-y-3">
              <div class="flex items-center justify-between text-sm text-muted-foreground">
                <span>Expected Graduation: May 2026</span>
                <span>Dublin, Ireland</span>
              </div>
              <p class="text-base">
                Currently pursuing a degree in Computer Science & Software Engineering.
              </p>
              <div class="text-sm">
                <span class="font-semibold">Completed Modules:</span> Software Testing, DSA, Web Development, Computer Architecture, Operating Systems, Databases  
              </div>
            </CardContent>
          </Card>
        </div>

        <!-- Key Achievements Section -->
        <div class="w-full pb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Key Achievements</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card v-for="achievement in achievements" :key="achievement.title" class="hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <CardHeader class="flex items-start gap-4 pb-3">
                <div class="p-2 bg-emerald-100 dark:bg-emerald-900/50 rounded-md mt-1">
                  <component :is="achievement.icon" class="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <CardTitle class="text-xl font-semibold mb-1">{{ achievement.title }}</CardTitle>
                  <p class="text-sm text-muted-foreground">{{ achievement.date }}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p class="text-base">{{ achievement.description }}</p>
                <Button v-if="achievement.link" asChild variant="link" class="px-0 h-auto mt-2 text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300">
                  <a :href="achievement.link" target="_blank" rel="noopener noreferrer">
                    {{ achievement.linkText || 'Learn More' }}
                    <ArrowUpRight class="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Briefcase, Award, Code, Cpu, Users, Palette, ArrowUpRight } from 'lucide-vue-next'; // Assuming lucide-vue-next for icons
import { ref } from 'vue';

const icons = {
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Cpu,
  Users,
  Palette,
  ArrowUpRight
};

interface Skill {
  name: string;
  description: string;
  icon: any; // Using 'any' for simplicity with dynamic components
}

interface Achievement {
  title: string;
  date: string;
  description: string;
  icon: any;
  link?: string;
  linkText?: string;
}

const skills = ref<Skill[]>([
  { name: 'C / C++', description: 'Low-level systems programming, real-time audio (JUCE), performance optimization.', icon: icons.Cpu },
  { name: 'JavaScript / TypeScript', description: 'Full-stack web development, Vue.js, Node.js, modern frontend frameworks.', icon: icons.Code },
  { name: 'Python', description: 'Scripting, automation, data analysis, and backend development with FastAPI.', icon: icons.Code },
  { name: 'Version Control (Git)', description: 'Proficient with Git workflows, branching, merging, and collaboration on GitHub/GitLab.', icon: icons.Briefcase },
  { name: 'UI/UX Design', description: 'Figma, Adobe XD, Photoshop. Creating intuitive and visually appealing user interfaces.', icon: icons.Palette },
  { name: 'Agile Methodologies', description: 'Experience with Scrum and Kanban, iterative development, and collaborative teamwork.', icon: icons.Users },
  { name: 'Problem Solving', description: 'Analytical thinking and creative solutions for complex technical challenges.', icon: icons.Award },
  { name: 'CMake & Build Systems', description: 'Managing complex C++ projects and dependencies using CMake.', icon: icons.Cpu },
]);

const achievements = ref<Achievement[]>([
  {
    title: 'Founded DirektDSP',
    date: '2023 - Present',
    description: 'Established an audio software company, developing and marketing VST/AU plugins for music producers. Responsible for all aspects from coding to UI design and web development.',
    icon: icons.Briefcase,
    link: 'https://direktdsp.com',
    linkText: 'Visit DirektDSP'
  },
  {
    title: 'Serotonin Operating System',
    date: '2023 - Present',
    description: 'Core contributor to a custom x86-64 operating system built from scratch in C and Assembly. Focusing on kernel development, memory management, and system calls.',
    icon: icons.Cpu,
    link: 'https://github.com/seamusmullan/serotonin',
    linkText: 'View on GitHub'
  },
  {
    title: 'Portfolio Website (This one!)',
    date: '2024',
    description: 'Designed and developed this portfolio using Vue.js, TypeScript, and Tailwind CSS, showcasing my projects and skills. Deployed with Vercel.',
    icon: icons.Palette,
    link: 'https://github.com/seamusmullan/portfolio',
    linkText: 'View Source Code'
  },
]);

</script>

<style scoped>
/* Scoped styles if needed */
</style>
