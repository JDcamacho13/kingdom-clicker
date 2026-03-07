<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useKingdom } from '@/composables/useKingdom'
import { formatCost } from '@/core/utils/cost'

const { t } = useI18n()
const { lumberjack, miner, taxCollector } = useKingdom()

const upgrades = [
  {
    id: 'hire-lumberjack',
    icon: '🪵',
    worker: lumberjack,
  },
  {
    id: 'hire-miner',
    icon: '⛏️',
    worker: miner,
  },
  {
    id: 'hire-tax-collector',
    icon: '🏠',
    worker: taxCollector,
  },
]
</script>

<template>
  <div class="d-flex flex-col">
    <button
      v-for="upgrade in upgrades"
      :key="upgrade.id"
      type="button"
      class="flex mb-4 w-full min-h-[120px] cursor-pointer flex-col items-start gap-2 rounded-xl border border-neutral-600 bg-neutral-800 p-4 text-left transition-colors hover:border-neutral-500 hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-50"
      :disabled="!upgrade.worker.canAfford()"
      @click="upgrade.worker.hire()"
    >
      <span class="text-2xl">{{ upgrade.icon }}</span>
      <div class="flex flex-1 flex-col gap-1">
        <span class="font-semibold text-white">{{ t('upgrades.' + upgrade.id + '.name') }}</span>
        <p class="text-sm text-neutral-400">{{ t('upgrades.' + upgrade.id + '.description') }}</p>
        <p v-if="formatCost(upgrade.worker.getCostForNext())" class="text-xs text-amber-400">
          {{ formatCost(upgrade.worker.getCostForNext()) }}
        </p>
      </div>
    </button>
  </div>
</template>
