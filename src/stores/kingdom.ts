import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { TaxCollector, Lumberjack, Miner } from '@/core/entities'
import { RESOURCE_CONFIG } from '@/core/resources'

export const useKingdomStore = defineStore('kingdom', () => {
  // --- Recursos (estado reactivo) ---
  const gold = ref(0)
  const wood = ref(0)
  const iron = ref(0)

  // --- Entidades (lógica de negocio conectada al store) ---
  const taxCollector = new TaxCollector({
    getGold: () => gold.value,
    addGold: (amount) => { gold.value += amount },
  })

  const lumberjack = new Lumberjack({
    getWood: () => wood.value,
    addWood: (amount) => { wood.value += amount },
  })

  const miner = new Miner({
    getIron: () => iron.value,
    addIron: (amount) => { iron.value += amount },
  })

  // --- Acciones (delegan a las entidades) ---
  function collectTax() {
    taxCollector.collect()
  }

  function chopWood() {
    lumberjack.chop()
  }

  function mineIron() {
    miner.mine()
  }

  // --- Computed para la UI ---
  const resources = computed(() => ({
    gold: { ...RESOURCE_CONFIG.gold, amount: gold.value },
    wood: { ...RESOURCE_CONFIG.wood, amount: wood.value },
    iron: { ...RESOURCE_CONFIG.iron, amount: iron.value },
  }))

  return {
    // Estado
    gold,
    wood,
    iron,
    resources,

    // Entidades (para acceder a description, productionPerClick, etc.)
    taxCollector,
    lumberjack,
    miner,

    // Acciones
    collectTax,
    chopWood,
    mineIron,
  }
})
