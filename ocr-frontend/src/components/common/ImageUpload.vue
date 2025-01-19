<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button, Card } from '@/components/ui'
import { useDragAndDrop, useFileReader, useImageUploader } from '@/composables/components'

const { isDragging, handleDragOver, handleDragLeave, handleDrop } = useDragAndDrop()
const { imageUrl, file, readFile, handleFileChange, removeImage } = useFileReader()
const { uploadImage } = useImageUploader()


const onDrop = (event: DragEvent) => {
  handleDrop(event, readFile)
}
</script>

<template>
  <Card :class="{ dragging: isDragging }" class="border-0" @dragover="handleDragOver" @dragleave="handleDragLeave"
    @drop="onDrop">
    <div v-if="imageUrl">
      <img :src="imageUrl" alt="Dropped Image" class="dropped-image rounded-md" />
      <div v-if="file" class="grid grid-cols-2 gap-4 mt-4">
        <Button @click="uploadImage(file)">
          <Icon icon="jam:upload" width="1.5rem" />
          Upload
        </Button>
        <Button @click="removeImage()" variant="outline">
          Remove
        </Button>
      </div>
    </div>
    <div v-else class="flex flex-col space-y-2 text-center">
      <h1 class="text-2xl font-semibold">Upload image</h1>
      <p class="text-sm text-muted-foreground">
        Drag & Drop your image here or click to upload
      </p>
      <div class="relative inline-block">
        <img src="@/assets/images/placeholder.svg" alt="Upload" class="cursor-pointer" />
        <input type="file" @change="handleFileChange" accept="image/*"
          class="absolute inset-0 opacity-0 cursor-pointer" />
      </div>
    </div>
  </Card>
</template>

<style scoped>
.dragging {
  border-color: #000;
}

.dropped-image {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}
</style>