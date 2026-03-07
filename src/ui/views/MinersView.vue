<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useKingdomStore } from '@/stores/kingdom'

const { t } = useI18n()
const kingdom = useKingdomStore()
</script>

<template>
  <div class="p-6 text-center">
    <h2>{{ t('miners.title') }}</h2>
    <p class="text-neutral-500 mb-4">
      {{ t('miners.description', { amount: kingdom.miner.productionPerClick }) }}
    </p>
    <button
      type="button"
      class="px-6 py-3 text-base bg-slate-600 text-white border-none rounded-lg cursor-pointer font-semibold hover:bg-slate-500"
      @click="kingdom.mineIron"
    >
      {{ t('miners.mineBtn') }}
    </button>
    <p class="mt-4 text-xl">
      {{ kingdom.resources.iron.icon }} {{ t('miners.iron') }}: {{ kingdom.iron }}
    </p>
  </div>
</template>
