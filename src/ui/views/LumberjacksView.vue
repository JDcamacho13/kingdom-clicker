<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useKingdom } from '@/composables/useKingdom'

const { t } = useI18n()
const { wood, resources, lumberjack } = useKingdom()
</script>

<template>
  <div class="p-6 text-center">
    <h2>{{ t('lumberjacks.title') }}</h2>
    <p class="text-neutral-500 mb-4">
      {{ t('lumberjacks.description', { amount: lumberjack.totalProductionPerClick }) }}
    </p>
    <button
      type="button"
      class="px-6 py-3 text-base bg-amber-800 text-white border-none rounded-lg cursor-pointer font-semibold hover:bg-amber-700"
      @click="lumberjack.chop()"
    >
      {{ t('lumberjacks.chopBtn') }}
    </button>
    <p class="mt-4 text-xl">{{ resources.wood.icon }} {{ t('lumberjacks.wood') }}: {{ wood }}</p>
  </div>
</template>
