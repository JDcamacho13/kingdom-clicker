/**
 * Tipos base para los recursos del reino.
 * Los recursos son contenedores pasivos de cantidades (oro, madera, hierro).
 */

export type ResourceId = 'gold' | 'wood' | 'iron' | 'stone'

export interface ResourceConfig {
  id: ResourceId
  name: string
  /** Emoji o icono para mostrar en UI */
  icon: string
}

export const RESOURCE_CONFIG: Record<ResourceId, ResourceConfig> = {
  gold: { id: 'gold', name: 'Oro', icon: '🪙' },
  wood: { id: 'wood', name: 'Madera', icon: '🪵' },
  iron: { id: 'iron', name: 'Hierro', icon: '🪨' },
  stone: { id: 'stone', name: 'Piedra', icon: '⛰️' },
} as const
