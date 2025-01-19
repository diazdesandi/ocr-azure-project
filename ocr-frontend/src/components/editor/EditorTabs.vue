<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { Icon } from '@iconify/vue'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui'
import type { Action } from '@/interfaces';

const props = defineProps<{
    actions: Action[]
    defaultValue?: string
}>()

const column = computed(() => {
    return `grid-cols-${props.actions.length}`
})

</script>

<template>
    <Tabs :default-value="props.defaultValue">
        <TabsList :class="column">
            <TabsTrigger v-for="action in props.actions" :value="action.value" :key="action.icon" @click="action.action"
                :disabled="action.isDisabled()" :class="{ 'is-active': action.isActive() }">
                <Icon :icon="action.icon" width="1.5rem" class="h-[20px]" />
            </TabsTrigger>
        </TabsList>
    </Tabs>
</template>
