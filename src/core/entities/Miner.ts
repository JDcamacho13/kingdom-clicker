/**
 * Entidad: Minero.
 * Produce hierro y piedra según la cantidad de mineros.
 */

import type { ResourceId } from '../resources/types'
import type { Cost } from '@/core/utils/cost'
import { canAfford } from '@/core/utils/cost'

export interface MinerDeps {
  getIron: () => number
  addIron: (amount: number) => void
  addStone: (amount: number) => void
  getMinerCount: () => number
  addMiner: () => void
  getResources: () => { gold: number; wood: number; iron: number; stone: number }
  payCost: (cost: Cost) => void
}

export class Miner {
  constructor(private deps: MinerDeps) {}

  /** Cantidad que produce cada minero por click */
  get productionPerMiner(): number {
    return 1
  }

  /** Producción total por click (mineros × producción por minero) */
  get totalProductionPerClick(): number {
    return this.deps.getMinerCount() * this.productionPerMiner
  }

  /** Coste para contratar al siguiente minero */
  getCostForNext(): Cost {
    const count = this.deps.getMinerCount()
    if (count === 0) {
      return { gold: 50, wood: 50, iron: 0, stone: 0 }
    }
    return {
      gold: 50 * count,
      wood: 50 * count,
      iron: 200 * count,
      stone: 0,
    }
  }

  /** Indica si hay suficientes recursos para contratar */
  canAfford(): boolean {
    return canAfford(this.getCostForNext(), this.deps.getResources())
  }

  /** Ejecuta la acción de minar (recolecta recurso de todos los mineros) */
  mine({ resource }: { resource: ResourceId }): void {
    switch (resource) {
      case 'iron':
        this.deps.addIron(this.totalProductionPerClick)
        break
      case 'stone':
        this.deps.addStone(this.totalProductionPerClick)
        break
    }
  }

  /** Contrata un nuevo minero */
  hire(): void {
    if (!this.canAfford()) return
    const cost = this.getCostForNext()
    this.deps.payCost(cost)
    this.deps.addMiner()
  }
}
