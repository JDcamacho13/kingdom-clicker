import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaxCollectorsStore = defineStore('taxCollectors', () => {
  const count = ref(1)
  return { count }
})
