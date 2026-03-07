<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useKingdomStore } from '@/stores/kingdom'

const { t } = useI18n()
const kingdom = useKingdomStore()
</script>

<template>
  <div class="p-6 text-center">
    <h2>{{ t('lumberjacks.title') }}</h2>
    <p class="text-neutral-500 mb-4">
      {{ t('lumberjacks.description', { amount: kingdom.lumberjack.productionPerClick }) }}
    </p>
    <button
      type="button"
      class="px-6 py-3 text-base bg-amber-800 text-white border-none rounded-lg cursor-pointer font-semibold hover:bg-amber-700"
      @click="kingdom.chopWood"
    >
      {{ t('lumberjacks.chopBtn') }}
    </button>
    <p class="mt-4 text-xl">
      {{ kingdom.resources.wood.icon }} {{ t('lumberjacks.wood') }}: {{ kingdom.wood }}
    </p>
  </div>
</template>
