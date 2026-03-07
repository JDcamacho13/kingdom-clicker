import { RESOURCE_CONFIG } from '@/core/resources'

export interface Cost {
  gold: number
  wood: number
  iron: number
  stone: number
}

export interface ResourceAmounts {
  gold: number
  wood: number
  iron: number
  stone: number
}

/**
 * Comprueba si hay suficientes recursos para pagar el coste.
 */
export function canAfford(cost: Cost, resources: ResourceAmounts): boolean {
  return (
    resources.gold >= cost.gold &&
    resources.wood >= cost.wood &&
    resources.iron >= cost.iron &&
    resources.stone >= cost.stone
  )
}

/**
 * Formatea el coste para mostrar en UI con iconos.
 */
export function formatCost(cost: Cost): string {
  const config = RESOURCE_CONFIG
  return [
    cost.gold > 0 && `${config.gold.icon} ${cost.gold}`,
    cost.wood > 0 && `${config.wood.icon} ${cost.wood}`,
    cost.iron > 0 && `${config.iron.icon} ${cost.iron}`,
    cost.stone > 0 && `${config.stone.icon} ${cost.stone}`,
  ]
    .filter(Boolean)
    .join(' ')
}
