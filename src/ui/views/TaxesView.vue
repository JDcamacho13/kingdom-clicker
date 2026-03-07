<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useKingdomStore } from '@/stores/kingdom'

const { t } = useI18n()
const kingdom = useKingdomStore()
</script>

<template>
  <div class="p-6 text-center">
    <h2>{{ t('taxes.title') }}</h2>
    <p class="text-neutral-500 mb-4">
      {{ t('taxes.description', { amount: kingdom.taxCollector.productionPerClick }) }}
    </p>
    <button
      type="button"
      class="px-6 py-3 text-base bg-amber-500 text-neutral-900 border-none rounded-lg cursor-pointer font-semibold hover:bg-amber-400"
      @click="kingdom.collectTax"
    >
      {{ t('taxes.collectBtn') }}
    </button>
    <p class="mt-4 text-xl">
      {{ kingdom.resources.gold.icon }} {{ t('taxes.gold') }}: {{ kingdom.gold }}
    </p>
  </div>
</template>
