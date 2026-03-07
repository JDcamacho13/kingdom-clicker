<script setup lang="ts">
import { unref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useKingdom } from '@/composables/useKingdom'
import type { ResourceId } from '@/core/resources/types'

const { t } = useI18n()
const { iron, stone, resources, miners, miner } = useKingdom()

const resourcesToMine: ResourceId[] = ['iron', 'stone']
</script>

<template>
  <div class="p-6 text-center">
    <h2>{{ t('miners.title') }}</h2>
    <p class="text-neutral-500 mb-4">
      {{ t('miners.description', { amount: miner.totalProductionPerClick }) }}
    </p>
    <div class="flex justify-center gap-4">
      <button
        v-for="resource in resourcesToMine"
        :key="resource"
        type="button"
        class="px-6 py-3 text-base bg-slate-600 text-white border-none rounded-lg cursor-pointer font-semibold hover:bg-slate-500"
        @click="miner.mine({ resource })"
      >
        {{ t('miners.mineBtn.' + resource) }}
        {{ resources[resource].icon }}
      </button>
    </div>
    <p class="mt-4 text-xl">{{ resources.iron.icon }} {{ t('miners.iron') }}: {{ iron }}</p>
    <p class="mt-4 text-xl">{{ resources.stone.icon }} {{ t('miners.stone') }}: {{ stone }}</p>
    <p class="text-neutral-500">{{ t('miners.minersCount', { count: unref(miners.count) }) }}</p>
  </div>
</template>
