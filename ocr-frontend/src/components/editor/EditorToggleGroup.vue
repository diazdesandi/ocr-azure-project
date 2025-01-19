<script setup lang="ts">
import { defineProps } from 'vue'
import { Icon } from '@iconify/vue'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui'
import type { Action } from '@/interfaces';

const props = defineProps<{
    actions: Action[]
}>()
</script>

<template>
    <ToggleGroup type="multiple" class="bg-muted rounded-md">
        <ToggleGroupItem v-for="action in props.actions" :value="action.value" :key="action.icon" @click="action.action"
            :disabled="action.isDisabled()" :class="{ 'is-active': action.isActive() }">
            <Icon :icon="action.icon" width="1.5rem" />
        </ToggleGroupItem>
    </ToggleGroup>
</template>