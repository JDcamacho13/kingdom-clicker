/**
 * Entidad: Leñador.
 * Produce madera al hacer click.
 */

import type { Cost } from '@/core/utils/cost'
import { canAfford } from '@/core/utils/cost'

export interface LumberjackDeps {
  getWood: () => number
  addWood: (amount: number) => void
  getLumberjackCount: () => number
  addLumberjack: () => void
  getResources: () => { gold: number; wood: number; iron: number; stone: number }
  payCost: (cost: Cost) => void
}

export class Lumberjack {
  constructor(private deps: LumberjackDeps) {}

  /** Cantidad de madera que produce cada leñador por click */
  get productionLumberjack(): number {
    return 1
  }

  /** Producción total por click (leñadores × producción por leñador) */
  get totalProductionPerClick(): number {
    return this.deps.getLumberjackCount() * this.productionLumberjack
  }

  /** Coste para contratar al siguiente leñador */
  getCostForNext(): Cost {
    const count = this.deps.getLumberjackCount()
    if (count === 0) {
      return { gold: 100, wood: 0, iron: 0, stone: 0 }
    }
    return {
      gold: 100 * count,
      wood: 0,
      iron: 100 * count,
      stone: 0,
    }
  }

  /** Indica si hay suficientes recursos para contratar */
  canAfford(): boolean {
    return canAfford(this.getCostForNext(), this.deps.getResources())
  }

  /** Ejecuta la acción de talar */
  chop(): void {
    this.deps.addWood(this.totalProductionPerClick)
  }

  /** Contrata un nuevo leñador */
  hire(): void {
    if (!this.canAfford()) return
    const cost = this.getCostForNext()
    this.deps.payCost(cost)
    this.deps.addLumberjack()
  }
}
