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
                <SidebarMenuItem>
                  <SidebarMenuButton asChild :isActive="route.path === '/'">
                    <router-link to="/">Home</router-link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild :isActive="route.path.startsWith('/projects')">
                    <router-link to="/projects">Projects</router-link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild :isActive="route.path.startsWith('/experience')">
                    <router-link to="/experience">Experience</router-link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="https://direktdsp.com" target="_blank" rel="noopener" class="text-black dark:text-white">DirektDSP</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="mailto:seamusmullan2023@gmail.com" class="w-full">Contact</a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <div class="flex-1 w-full min-w-0 flex flex-col min-h-screen">
        <header class="sticky top-0 z-30 w-full border-b bg-background/95 backdrop-blur">
          <div class="flex items-center justify-between px-6 py-3">
            <SidebarTrigger class="md:hidden" />
            <div class="flex items-center gap-2">
              <ThemeToggle />
              <Button asChild variant="ghost" size="sm">
                <a href="https://github.com/seamusmullan" target="_blank" rel="noopener" class="text-black dark:text-white">GitHub</a>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <a href="https://linkedin.com/in/seamusmullan" target="_blank" rel="noopener" class="text-black dark:text-white">LinkedIn</a>
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
              <a href="https://github.com/seamusmullan" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground">GitHub</a>
              <a href="https://linkedin.com/in/seamusmullan" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground">LinkedIn</a>
              <a href="mailto:seamusmullan2023@gmail.com" class="text-muted-foreground hover:text-foreground">Email</a>
            </div>
            <div class="text-xs text-muted-foreground">© {{ new Date().getFullYear() }} Seamus Mullan. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </div>
  </SidebarProvider>
</template>

<style>
</style>
