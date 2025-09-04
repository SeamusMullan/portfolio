<template>
  <Card
    class="w-full flex flex-col shadow-sm hover:shadow-lg hover:shadow-amber-200/50 dark:hover:shadow-amber-900/20 transition-all duration-300 ease-in-out border-amber-100 dark:border-amber-800 relative"
  >
    <template v-if="featured">
      <div class="absolute top-0 left-0 w-full z-10">
        <Badge
          variant="secondary"
          class="rounded-none w-full flex justify-center items-center py-2 text-xs"
          >✨ Featured</Badge
        >
      </div>
    </template>
    <CardHeader
      :class="['flex flex-col items-start gap-1 pb-1', featured ? 'pt-8' : '']"
    >
      <div class="flex items-center w-full">
        <CardTitle class="text-lg font-semibold">{{ title }}</CardTitle>
      </div>
      <div class="flex gap-2 w-full" v-if="githubUrl">
        <Button
          asChild
          variant="ghost"
          size="icon"
          :aria-label="`GitHub for ${title}`"
        >
          <a :href="githubUrl" target="_blank" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
        </Button>
      </div>
    </CardHeader>
    <CardContent class="py-2">
      <p class="text-muted-foreground mb-3">{{ description }}</p>
      
      <!-- Tags -->
      <div v-if="tags && tags.length" class="flex flex-wrap gap-2 mb-3">
        <Badge v-for="tag in tags" :key="tag" variant="outline">{{
          tag
        }}</Badge>
      </div>

      <!-- Repository Statistics -->
      <div v-if="githubUrl && (stars !== undefined || forks !== undefined || language || size)" class="flex flex-wrap gap-4 mb-3 text-sm text-muted-foreground">
        <div v-if="stars !== undefined" class="flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          {{ stars }}
        </div>
        <div v-if="size" class="flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
          </svg>
          {{ formatSize(size) }}
        </div>
        <Badge variant="secondary" class="text-xs">
          {{ license }}
        </Badge>
      </div>
      
      <!-- Demo Links -->
      <div v-if="demoUrl_1 || demoUrl_2" class="flex gap-2 mb-3">
        <Button v-if="demoUrl_1" asChild variant="secondary" size="sm">
          <a :href="demoUrl_1" target="_blank" rel="noopener" class="text-black dark:text-white">{{
            demoUrl_1_title || 'Demo 1'
          }}</a>
        </Button>
        <Button v-if="demoUrl_2" asChild variant="secondary" size="sm">
          <a :href="demoUrl_2" target="_blank" rel="noopener" class="text-black dark:text-white">{{
            demoUrl_2_title || 'Demo 2'
          }}</a>
        </Button>
      </div>

      <!-- Dates -->
      <div v-if="createdAt || updatedAt" class="flex flex-wrap gap-4 text-xs text-muted-foreground">
        <div v-if="createdAt" class="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
          </svg>
          Created {{ formatDate(createdAt) }}
        </div>
        <div v-if="updatedAt" class="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          Updated {{ formatDate(updatedAt) }}
        </div>
      </div>
    </CardContent>
    <div v-if="demoUrl" class="flex justify-center mt-auto pb-4">
      <Button asChild variant="outline" class="w-2/3 text-base py-3">
        <a
          :href="demoUrl"
          target="_blank"
          rel="noopener"
          class="text-black dark:text-white"
          >Demo</a
        >
      </Button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Helper function to format dates
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Helper function to format file size
const formatSize = (sizeInKB: number) => {
  if (sizeInKB < 1024) {
    return `${sizeInKB} KB`;
  } else {
    return `${(sizeInKB / 1024).toFixed(1)} MB`;
  }
};

defineProps<{
  title: string;
  description: string;
  tags?: string[];
  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
  demoUrl_1?: string;
  demoUrl_2?: string;
  demoUrl_1_title?: string;
  demoUrl_2_title?: string;
  createdAt?: string;
  updatedAt?: string;
  stars?: number;
  language?: string;
  license?: string;
  forks?: number;
  size?: number;
}>();

const showModal = ref(false);
const maxLength = 180;
const isTruncated = computed(
  () => props.description && props.description.length > maxLength,
);
const truncatedDescription = computed(() =>
  isTruncated.value ? props.description.slice(0, maxLength) : props.description,
);
</script>

<style></style>
