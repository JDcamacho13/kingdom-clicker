import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { RESOURCE_CONFIG } from '@/core/resources'

export const useKingdomStore = defineStore('kingdom', () => {
  const gold = ref(0)
  const wood = ref(0)
  const iron = ref(0)
  const stone = ref(0)

  const resources = computed(() => ({
    gold: { ...RESOURCE_CONFIG.gold, amount: gold.value },
    wood: { ...RESOURCE_CONFIG.wood, amount: wood.value },
    iron: { ...RESOURCE_CONFIG.iron, amount: iron.value },
    stone: { ...RESOURCE_CONFIG.stone, amount: stone.value },
  }))

  return {
    gold,
    wood,
    iron,
    stone,
    resources,
  }
})
