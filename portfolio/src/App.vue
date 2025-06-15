<script setup lang="ts">
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarTrigger } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/ThemeToggle.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <SidebarProvider>
    <div class="flex min-h-screen bg-background w-full min-w-0">
      <Sidebar collapsible="icon" class="border-r">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <router-link to="/" class="font-bold text-lg tracking-tight">Seamus Mullan</router-link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                
                <!-- Home -->
                <SidebarMenuItem>
                  <SidebarMenuButton asChild :isActive="route.path === '/'">
                    <router-link to="/" class="fancy-underline underline-home">Home</router-link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <!-- Contact -->
                <SidebarMenuItem>
                  <SidebarMenuButton asChild :isActive="route.path === '/contact'">
                    <router-link to="/contact" class="fancy-underline underline-contact">Contact</router-link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <!-- Projects -->
                <SidebarMenuItem>
                  <SidebarMenuButton asChild :isActive="route.path.startsWith('/projects')">
                    <router-link to="/projects" class="fancy-underline underline-projects">Projects</router-link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <!-- Experience -->
                <SidebarMenuItem>
                  <SidebarMenuButton asChild :isActive="route.path.startsWith('/experience')">
                    <router-link to="/experience" class="fancy-underline underline-experience">Experience</router-link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <!-- DirektDSP -->
                <SidebarMenuItem>
                  <SidebarMenuButton asChild class="bg-gradient-to-br from-slate-600 via-gray-700 to-zinc-700 text-white hover:text-white">
                  <a href="https://direktdsp.com" target="_blank" rel="noopener" class="flex flex-row justify-between fancy-underline underline-direktdsp">
                    <p class="">DirektDSP</p>
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Interface / External_Link">
                      <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                    </svg>
                  </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>

              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <!-- <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="mailto:seamusmullan2023@gmail.com" class="w-full">Contact</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu> -->
        </SidebarFooter>
      </Sidebar>
      <div class="flex-1 w-full min-w-0 flex flex-col min-h-screen">
        <header class="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur">
          <div class="flex items-center justify-between px-6 py-3">
            <SidebarTrigger class="md:hidden" />
            <div class="flex items-center gap-2">
              <ThemeToggle />
              <Button asChild variant="ghost" size="sm">
                <a href="https://github.com/seamusmullan" target="_blank" rel="noopener" class="fancy-underline underline-github text-black dark:text-white">GitHub</a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="https://linkedin.com/in/seamusmullan" target="_blank" rel="noopener" class="fancy-underline underline-linkedin text-black dark:text-white">LinkedIn</a>
              </Button>
            </div>
          </div>
        </header>
        <main class="flex-1 w-full min-w-0 px-4 md:px-8 py-8">
          <router-view />
        </main>
        <footer class="border-t bg-background/95 px-4 md:px-8 py-6">
          <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <span class="font-semibold">Seamus Mullan</span> &mdash; Computer Science Student & Creative Developer
            </div>
            <div class="flex gap-4">
              <a href="https://github.com/seamusmullan" target="_blank" rel="noopener" class="fancy-underline underline-github text-muted-foreground hover:text-foreground">GitHub</a>
              <a href="https://linkedin.com/in/seamusmullan" target="_blank" rel="noopener" class="fancy-underline underline-linkedin text-muted-foreground hover:text-foreground">LinkedIn</a>
              <a href="mailto:seamusmullan2023@gmail.com" class="fancy-underline underline-email text-muted-foreground hover:text-foreground">Email</a>
            </div>
            <div class="text-xs text-muted-foreground">© {{ new Date().getFullYear() }} Seamus Mullan. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </div>
  </SidebarProvider>
</template>

<style>
.fancy-underline {
  position: relative;
}
.fancy-underline::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  border-radius: 9999px;
  z-index: 10;
  transition: width 0.3s;
}
.fancy-underline:hover::after {
  width: 100%;
}
.underline-home::after {
  background: linear-gradient(to right, #2563eb, #7c3aed, #6d28d9);
}
.dark .underline-home::after {
  background: linear-gradient(to right, #1e3a8a, #6d28d9, #4c1d95);
}
.underline-contact::after {
  background: linear-gradient(to right, #fb7185, #f472b6, #fb923c);
}
.dark .underline-contact::after {
  background: linear-gradient(to right, #be185d, #db2777, #ea580c);
}
.underline-projects::after {
  background: linear-gradient(to right, #fde047, #fdba74, #f59e42);
}
.dark .underline-projects::after {
  background: linear-gradient(to right, #fde68a, #fdba74, #f59e42);
}
.underline-experience::after {
  background: linear-gradient(to right, #34d399, #06b6d4, #38bdf8);
}
.dark .underline-experience::after {
  background: linear-gradient(to right, #6ee7b7, #67e8f9, #a5f3fc);
}
.underline-direktdsp::after {
  background: #0077cf;
  height: 3px;
}
.dark .underline-direktdsp::after {
  background: #fff;
  height: 2px;
}
.underline-github::after {
  background: linear-gradient(to right, #374151, #111827);
}
.dark .underline-github::after {
  background: linear-gradient(to right, #d1d5db, #9ca3af);
}
.underline-linkedin::after {
  background: linear-gradient(to right, #0ea5e9, #1d4ed8);
}
.dark .underline-linkedin::after {
  background: linear-gradient(to right, #38bdf8, #60a5fa);
}
.underline-email::after {
  background: linear-gradient(to right, #fb7185, #fb923c);
}
.dark .underline-email::after {
  background: linear-gradient(to right, #be185d, #ea580c);
}
</style>
