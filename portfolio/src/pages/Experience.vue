<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-800 dark:from-emerald-900 dark:via-teal-900 dark:to-cyan-950 text-white overflow-hidden rounded-lg">
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

        <!-- Work Experience Section -->
        <div class="w-full">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 pt-12">Work Experience</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            <Card v-for="job in workExperience" :key="job.position" class="flex flex-col justtify-between hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <CardHeader class="flex flex-col items-center gap-4 pb-2">
                <component :is="job.icon" class="w-8 h-8 text-emerald-500" />
                <CardTitle class="text-xl font-semibold">{{ job.company }}</CardTitle>
                <span class="text-sm text-muted-foreground">{{ job.position }}</span>
                <span>{{ job.duration }}</span>
              </CardHeader>
              <CardContent class="flex-1 flex flex-col justify-between">
                <!-- Description -->
                <div class="mb-4">
                  <p class="text-sm text-muted-foreground" v-html="job.description"></p>
                </div>

                <!-- Skills -->
                <div class="mb-4">
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="skill in job.skills"
                      :key="skill"
                      class="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                    >
                      {{ skill }}
                    </span>
                  </div>
                </div>

                <!-- References & Links -->
                <div class="grid grid-cols-1 gap-4 text-sm text-muted-foreground">

                  
                  <!-- Links -->
                  <div class="flex justify-between items-center">
                    
                    <!-- References - if no info, show default text -->
                    <div class="flex items-center gap-2 mb-2">
                      <span v-if="job.referenceInfo">Reference Info: {{ job.referenceInfo }}</span>
                      <span v-else>References available upon request.</span>
                    </div>
                    <div class="flex items-center gap-2">
                    <Button
                      v-if="job.link"
                      asChild
                      variant="link"
                      class="px-0 h-auto text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                    >
                      <a
                        :href="job.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-black dark:text-white"
                      >
                        {{ job.linkText || 'Learn More' }}
                        <ArrowUpRight class="w-4 h-4 ml-1" />
                      </a>
                    </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

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
                <p class="text-sm text-muted-foreground" v-html="skill.description"></p>
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
                  <CardTitle class="text-2xl font-bold text-gray-900 dark:text-white">BSc Computer Science & Software Engineering</CardTitle>
                  <p class="text-lg text-gray-700 dark:text-gray-300">Maynooth University</p>
                </div>
              </div>
            </div>
            <CardContent class="p-6 space-y-3">
              <div class="flex items-center justify-between text-sm text-muted-foreground">
                <span>Expected Graduation: May 2027</span>
                <span>Kildare, Ireland</span>
              </div>
              <p class="text-base">
                Currently pursuing a degree in Computer Science & Software Engineering.
              </p>
              <div class="text-sm">
                <span class="font-semibold">Completed Modules:</span> Software Testing, DSA, Web Development, Computer Architecture, Operating Systems, Databases  
              </div>
              <div class="text-sm">
                <span class="font-semibold">Some Title:</span> Some Description
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
                  <a :href="achievement.link" target="_blank" rel="noopener noreferrer" class="text-black dark:text-white">
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
import { GraduationCap, Briefcase, Award, Code, Cpu, Users, Palette, ArrowUpRight, Gamepad2, ScrollText, Cog, Music, GraduationCapIcon} from 'lucide-vue-next'; // Assuming lucide-vue-next for icons
import { ref } from 'vue';

const icons = {
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Cpu,
  Users,
  Palette,
  ArrowUpRight,
  Gamepad2,
  ScrollText,
  Cog,
  Music,
  GraduationCapIcon
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

interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  description: string;
  icon: any;
  skills?: string[]; // Optional skills related to the job
  link?: string;
  linkText?: string;
  reference?: string;
  referenceInfo?: string;
}

const workExperience = ref<WorkExperience[]>([
  {
    company: 'Maynooth University',
    position: 'Summer Camp Demonstrator 2024',
    duration: 'Jul 2024 · 1 mo',
    description: 'Created and ran a session teaching Blender (3D modelling).<br>Assisted other demonstrators in the running of their sessions.<br>Assisted the kids with any issues or questions they had in relation to the session.<br>Ensured that kids were behaving throughout the camp.<br><br>',
    skills: ['Blender', '3D Modeling', 'Teaching'],
    icon: icons.GraduationCap,
    reference: 'Coordinator',
    referenceInfo: 'Available on request'
  },
  {
  company: 'Kirby Group Engineering',
  position: 'BIM Student Placement',
  duration: 'Jul 2024 - Aug 2024 · 2 mos',
  description: '6 Week Student Placement.<br>Creating 2D Drawings packs for Tool Install in Autodesk Revit.<br>Finding and fixing clashes in Autodesk Navisworks. <br>Developing Automation scripts for Excel (Typescript / ExcelScript). <br>Collaborating with others on BIM Team with Autodesk Vault & BIM360.',
  skills: ["Revit", "Autodesk Software", "Building Information Modeling", "Microsoft Office", "Teamwork", "Navisworks", "Microsoft Excel", "TypeScript", "Autodesk Revit"],
  icon: icons.Cog,
  reference: 'Supervisor',
  referenceInfo: 'Available on request'
  },
  {
    company: 'DirektDSP',
    position: 'Founder',
    duration: 'Jan 2023 - Present · 2 yrs 6 mos',
    description: 'Independently started an Audio Software Company with the goal of creating easy-to-use and modern music production software. We currently have 3 released products with more on the way and have amassed over 10,000 downloads on all of our products combined.',
    skills: ["C++", "Digital Signal Processing", "Initiative", "Start-up Leadership", "Adobe Photoshop", "Digital Audio", "Git", "GitHub"],
    icon: icons.Music,
    link: 'https://direktdsp.com',
    linkText: 'Visit DirektDSP'
  },
]);

const skills = ref<Skill[]>([
  { name: 'C / C++', description: 'Real-time audio processsing in JUCE, VST3 / AU Plugin Development. Have a look at DirektDSP', icon: icons.Cpu },
  { name: 'JavaScript / TypeScript', description: 'Full-stack web development with Electron and Vite. See my project Juno!', icon: icons.Code },
  { name: 'Python', description: 'Scripting and backend development with FastAPI. Used in my game candlz!', icon: icons.ScrollText },
  { name: 'Version Control (Git)', description: 'Proficient with Git workflows and collaboration on GitHub/GitLab.', icon: icons.Briefcase },
  { name: 'UI/UX Design', description: 'Figma, Adobe Photoshop and Illustrator. In depth understanding of music producer-centred software', icon: icons.Palette },
  { name: 'CMake & Build Systems', description: 'Managing complex C++ projects and dependencies using CMake.', icon: icons.Cog },
  { name: 'Game Development', description: 'Experience with tools like Blender and Unity (incl. C#).', icon: icons.Gamepad2 },
  { name: 'Problem Solving', description: 'Analytical thinking and creative solutions for complex technical challenges.', icon: icons.Award },
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
    title: 'Serotonin Operating System (Currently Closed Source)',
    date: '2023 - Present',
    description: 'A simple Operating System written for i686. Hobby project I\'m working on with another friend. Currently working on implementing paging and file reading / writing.',
    icon: icons.Cpu,
    link: 'https://github.com/seamusmullan/serotonin',
    linkText: 'View on GitHub'
  },
  {
    title: 'Portfolio Website (This one!)',
    date: '2024',
    description: 'Designed and developed this portfolio using Vue.js, TypeScript, shadcn and Tailwind CSS. Deployed on my own webserver (DNS w/Cloudflare).',
    icon: icons.Palette,
    link: 'https://github.com/seamusmullan/portfolio',
    linkText: 'View Source Code'
  },
]);

</script>

<style scoped>
/* Scoped styles if needed */
</style>
