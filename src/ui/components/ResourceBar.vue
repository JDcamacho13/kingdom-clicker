<script setup lang="ts">
import { useKingdom } from '@/composables/useKingdom'
import ResourceWithPop from './ResourceWithPop.vue'

const { gold, wood, iron, stone, resources } = useKingdom()
</script>

<template>
  <div class="flex gap-6 px-4 py-3 bg-neutral-800 text-white rounded-lg text-lg font-semibold">
    <ResourceWithPop :value="gold" :icon="resources.gold.icon" />
    <ResourceWithPop :value="wood" :icon="resources.wood.icon" />
    <ResourceWithPop :value="iron" :icon="resources.iron.icon" />
    <ResourceWithPop :value="stone" :icon="resources.stone.icon" />
  </div>
</template>
