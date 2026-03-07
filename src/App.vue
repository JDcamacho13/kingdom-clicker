<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import ResourceBar from '@/ui/components/ResourceBar.vue'
import AppTabs from '@/ui/components/AppTabs.vue'

const { t, locale } = useI18n()
</script>

<template>
  <div class="min-h-screen max-w-3xl mx-auto p-4">
    <header class="mb-6">
      <div class="flex items-center justify-between gap-4 mb-4">
        <h1 class="m-0 text-2xl">{{ t('app.title') }}</h1>
        <select
          v-model="locale"
          class="px-3 py-1.5 text-sm bg-neutral-800 text-neutral-200 border border-neutral-600 rounded-md cursor-pointer"
          :title="t('common.language')"
        >
          <option value="es">{{ t('common.spanish') }}</option>
          <option value="en">{{ t('common.english') }}</option>
        </select>
      </div>
      <ResourceBar />
      <AppTabs />
    </header>
    <main class="bg-neutral-800 rounded-xl min-h-[300px]">
      <RouterView />
    </main>
  </div>
</template>
