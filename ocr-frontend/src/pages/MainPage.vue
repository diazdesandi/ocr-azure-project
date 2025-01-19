<script setup lang="ts">
import { ImageSection, EditorSection } from '@/components/sections'
</script>

<template>
  <main class="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
    <div class="relative hidden flex-col items-start gap-8 md:flex">
      <ImageSection />
    </div>
    <div class="relative items-start gap-8 md:flex">
      <EditorSection />
    </div>
  </main>
</template>