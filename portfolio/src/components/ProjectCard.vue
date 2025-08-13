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
    <CardContent class="pt-1 pb-2">
      <div v-if="tags && tags.length" class="flex flex-wrap gap-2 mb-2">
        <Badge v-for="tag in tags" :key="tag" variant="outline">{{
          tag
        }}</Badge>
      </div>
      <p class="text-muted-foreground mb-2">
        {{ truncatedDescription }}
        <span v-if="isTruncated">
          ...
          <Button
            variant="link"
            size="sm"
            class="px-1 py-0 h-auto align-baseline"
            @click="showModal = true"
            >Read More</Button
          >
        </span>
      </p>
      <AlertDialog v-model:open="showModal">
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{{ title }}</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            <div class="mb-2">{{ description }}</div>
            <div v-if="tags && tags.length" class="flex flex-wrap gap-2 mb-2">
              <Badge v-for="tag in tags" :key="tag" variant="outline">{{
                tag
              }}</Badge>
            </div>
            <div class="flex flex-col gap-2 mt-4">
              <a
                v-if="githubUrl"
                :href="githubUrl"
                target="_blank"
                rel="noopener"
                class="flex items-center gap-2 px-4 py-2 rounded bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium hover:bg-blue-100 transition"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                v-if="demoUrl"
                :href="demoUrl"
                target="_blank"
                rel="noopener"
                class="flex items-center gap-2 px-4 py-2 rounded bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 font-medium hover:bg-green-100 transition"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="8,5 20,12 8,19" />
                </svg>
                <span>Demo</span>
              </a>
            </div>
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div v-if="demoUrl_1 || demoUrl_2" class="flex gap-2 mt-4">
        <Button v-if="demoUrl_1" asChild variant="secondary" size="sm">
          <a
            :href="demoUrl_1"
            target="_blank"
            rel="noopener"
            class="text-black dark:text-white"
            >{{ demoUrl_1_title }}</a
          >
        </Button>
        <Button v-if="demoUrl_2" asChild variant="secondary" size="sm">
          <a
            :href="demoUrl_2"
            target="_blank"
            rel="noopener"
            class="text-black dark:text-white"
            >{{ demoUrl_2_title }}</a
          >
        </Button>
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
import { ref, computed } from "vue";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

const props = defineProps<{
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
