<script setup lang="ts">
import { ImageUpload } from '@/components/common'
</script>

<template>
  <div class="grid w-full items-start gap-6 overflow-auto p-4 pt-0">
    <fieldset class="grid gap-6 rounded-lg border p-4">
      <legend class="px-2 text-2xl font-medium">Image</legend>
      <ImageUpload />
    </fieldset>
  </div>
</template>