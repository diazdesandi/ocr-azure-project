<script setup lang="ts">
import { watch } from 'vue'
import { EditorContent } from '@tiptap/vue-3'
import { useImageStore } from '@/store/image.store'
import { ActionTabs, ActionToggleGroup } from '@/components/editor'
import { useEditorActions, useEditorLifecycle } from '@/composables/editor'
import { Button } from '@/components/ui'

const imageStore = useImageStore()

const { editor, updateEditor, exportDoc } = useEditorLifecycle()

const { textStyleActions, alignActions, headingActions, blockActions, historyActions } =
  useEditorActions(editor)

watch(imageStore, updateEditor)
</script>
<template>
  <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
    <div class="flex justify-center rounded-lg">
      <div class="flex flex-col w-full items-center">
        <div v-if="editor" class="container">
          <!-- <div class="flex justify-end">
            <Button @click="exportDoc()">Export</Button>
          </div> -->
          <div class="grid grid-rows-1">
            <div class="flex gap-2 mb-2">
              <ActionToggleGroup :actions="textStyleActions" />
              <ActionTabs :actions="alignActions" defaultValue="left" />
              <ActionTabs :actions="headingActions" />
              <ActionToggleGroup :actions="blockActions" />
              <ActionToggleGroup :actions="historyActions" />
            </div>
          </div>
          <EditorContent :editor="editor" class="border rounded-lg" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.tiptap p {
  margin: 1em 0;
}

.button-group {
  display: flex;
  gap: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
}

button.is-active {
  background-color: #000;
  color: white;
}

button:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}

/* List styles */
ul,
ol {
  padding: 0 1rem;
  margin: 1.25rem 1rem 1.25rem 0.4rem;

  li p {
    margin-top: 0.25em;
    margin-bottom: 0.25em;
  }
}

/* Heading styles */
h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.1;
  margin-top: 2.5rem;
  text-wrap: pretty;
}

h1,
h2 {
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
}

h1 {
  font-size: 1.4rem;
}

h2 {
  font-size: 1.2rem;
}

h3 {
  font-size: 1.1rem;
}

h4,
h5,
h6 {
  font-size: 1rem;
}

/* Code and preformatted text styles */
code {
  background-color: var(--purple-light);
  border-radius: 0.4rem;
  color: var(--black);
  font-size: 0.85rem;
  padding: 0.25em 0.3em;
}

pre {
  background: var(--black);
  border-radius: 0.5rem;
  color: var(--white);
  font-family: 'JetBrainsMono', monospace;
  margin: 1.5rem 0;
  padding: 0.75rem 1rem;

  code {
    background: none;
    color: inherit;
    font-size: 0.8rem;
    padding: 0;
  }
}

blockquote {
  border-left: 3px solid var(--gray-3);
  margin: 1.5rem 0;
  padding-left: 1rem;
}

hr {
  border: none;
  border-top: 1px solid var(--gray-2);
  margin: 2rem 0;
}
</style>
