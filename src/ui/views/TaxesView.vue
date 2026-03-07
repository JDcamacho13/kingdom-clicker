<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useKingdom } from '@/composables/useKingdom'

const { t } = useI18n()
const { gold, resources, taxCollector } = useKingdom()
</script>

<template>
  <div class="p-6 text-center">
    <h2>{{ t('taxes.title') }}</h2>
    <p class="text-neutral-500 mb-4">
      {{ t('taxes.description', { amount: taxCollector.totalProductionPerClick }) }}
    </p>
    <button
      type="button"
      class="px-6 py-3 text-base bg-amber-500 text-neutral-900 border-none rounded-lg cursor-pointer font-semibold hover:bg-amber-400"
      @click="taxCollector.collect()"
    >
      {{ t('taxes.collectBtn') }}
    </button>
    <p class="mt-4 text-xl">{{ resources.gold.icon }} {{ t('taxes.gold') }}: {{ gold }}</p>
  </div>
</template>
