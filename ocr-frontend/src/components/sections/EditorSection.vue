<script setup lang="ts">
import { EditorComponent } from '@/components/editor'
</script>
<template>
    <div class="grid w-full items-start gap-6 p-4 pt-0">
        <fieldset class="grid gap-6 rounded-lg border p-4">
            <legend class="px-2 text-2xl font-medium">Text editor</legend>
            <EditorComponent />
        </fieldset>
    </div>
</template>
