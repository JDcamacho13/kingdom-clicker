import { markRaw } from 'vue'
import { storeToRefs } from 'pinia'
import { useKingdomStore } from '@/stores/kingdom'
import { useMinersStore } from '@/stores/miners'
import { useLumberjacksStore } from '@/stores/lumberjacks'
import { useTaxCollectorsStore } from '@/stores/taxCollectors'
import { getTaxCollector, getLumberjack, getMiner } from '@/core/kingdom'

export function useKingdom() {
  const kingdomStore = useKingdomStore()
  const minersStore = useMinersStore()
  const lumberjacksStore = useLumberjacksStore()
  const taxCollectorsStore = useTaxCollectorsStore()

  const { gold, wood, iron, stone, resources } = storeToRefs(kingdomStore)
  const { count: minerCount } = storeToRefs(minersStore)
  const { count: lumberjackCount } = storeToRefs(lumberjacksStore)
  const { count: taxCollectorCount } = storeToRefs(taxCollectorsStore)

  return {
    gold,
    wood,
    iron,
    stone,
    resources,
    miners: { count: minerCount },
    lumberjacks: { count: lumberjackCount },
    taxCollectors: { count: taxCollectorCount },

    // Entidades (desde core) - markRaw evita que Vue las haga reactivas y previene errores de serialización
    taxCollector: markRaw(getTaxCollector()),
    lumberjack: markRaw(getLumberjack()),
    miner: markRaw(getMiner()),
  }
}
