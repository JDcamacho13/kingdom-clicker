<script setup lang="ts">
import { useKingdomStore } from '@/stores/kingdom'

const kingdom = useKingdomStore()
</script>

<template>
  <div class="flex gap-6 px-4 py-3 bg-neutral-800 text-white rounded-lg text-lg font-semibold">
    <span>{{ kingdom.resources.gold.icon }} {{ kingdom.gold }}</span>
    <span>{{ kingdom.resources.wood.icon }} {{ kingdom.wood }}</span>
    <span>{{ kingdom.resources.iron.icon }} {{ kingdom.iron }}</span>
  </div>
</template>
