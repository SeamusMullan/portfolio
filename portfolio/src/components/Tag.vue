<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
const props = defineProps<{ text: string; variant?: 'default' | 'languages' | 'audio' | 'web' | 'tools' }>()
</script>

<template>
  <Badge :variant="props.variant === 'default' ? 'outline' : 'secondary'">{{ props.text }}</Badge>
</template>

<style scoped>
</style>
