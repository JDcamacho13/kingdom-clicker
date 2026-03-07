import { createPinia, storeToRefs } from 'pinia'
import { useKingdomStore } from '@/stores/kingdom'
import { useMinersStore } from '@/stores/miners'
import { useLumberjacksStore } from '@/stores/lumberjacks'
import { useTaxCollectorsStore } from '@/stores/taxCollectors'
import { initKingdom } from '@/core/kingdom'

/**
 * Configura un store de kingdom fresco para cada test.
 * Cada llamada crea una nueva instancia de Pinia y stores (sin estado compartido).
 */
export function setupKingdom() {
  const pinia = createPinia()
  const kingdomStore = useKingdomStore(pinia)
  const minersStore = useMinersStore(pinia)
  const lumberjacksStore = useLumberjacksStore(pinia)
  const taxCollectorsStore = useTaxCollectorsStore(pinia)

  initKingdom({
    kingdom: storeToRefs(kingdomStore),
    miners: {
      getCount: () => minersStore.count,
      addCount: () => minersStore.$patch({ count: minersStore.count + 1 }),
    },
    lumberjacks: {
      getCount: () => lumberjacksStore.count,
      addCount: () => lumberjacksStore.$patch({ count: lumberjacksStore.count + 1 }),
    },
    taxCollectors: {
      getCount: () => taxCollectorsStore.count,
      addCount: () => taxCollectorsStore.$patch({ count: taxCollectorsStore.count + 1 }),
    },
  })

  return {
    pinia,
    kingdomStore,
    minersStore,
    lumberjacksStore,
    taxCollectorsStore,
    store: kingdomStore,
  }
}
