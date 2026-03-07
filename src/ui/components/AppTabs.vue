<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t } = useI18n()

const tabs = [
  { path: '/', nameKey: 'tabs.taxes', icon: '🪙' },
  { path: '/leñadores', nameKey: 'tabs.lumberjacks', icon: '🪵' },
  { path: '/mineros', nameKey: 'tabs.miners', icon: '⛏️' },
]
</script>

<template>
  <nav class="flex gap-2 py-2 border-b-2 border-neutral-800">
    <RouterLink
      v-for="tab in tabs"
      :key="tab.path"
      :to="tab.path"
      class="px-4 py-2 no-underline text-neutral-400 rounded-md transition-all duration-200 hover:text-white hover:bg-neutral-700"
      :class="route.path === tab.path ? 'text-white bg-neutral-600 font-semibold' : ''"
    >
      <span class="mr-1">{{ tab.icon }}</span>
      {{ t(tab.nameKey) }}
    </RouterLink>
  </nav>
</template>
