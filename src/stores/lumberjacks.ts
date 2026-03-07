import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLumberjacksStore = defineStore('lumberjacks', () => {
  const count = ref(0)
  return { count }
})
