<script setup lang="ts">
import { Button, HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/'
import { Icon } from '@iconify/vue'
import type { Tool } from '@/interfaces'

const data: Tool[] = [
  {
    name: 'Vue.js',
    icon: 'logos:vue'
  },
  {
    name: 'Pinia',
    icon: 'logos:pinia'
  },
  {
    name: 'Go',
    icon: 'logos:go'
  },
  {
    name: 'Azure',
    icon: 'devicon:azure'
  }
]
</script>

<template>
  <HoverCard>
    <HoverCardTrigger as-child>
      <Button variant="ghost">
        <Icon icon="material-symbols-light:info-outline" width="1.2rem" height="1.2rem" />
      </Button>
    </HoverCardTrigger>
    <HoverCardContent class="w-40">
      <h4 class="font-semibold">Made with</h4>
      <div v-for="tool in data" :key="tool.name" class="flex gap-2 space-y-1">
        <Icon :icon="tool.icon" width="1.2rem" height="1.2rem" />
        <h4 class="text-sm">{{ tool.name }}</h4>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>
