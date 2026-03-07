import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMinersStore = defineStore('miners', () => {
  const count = ref(0)
  return { count }
})
