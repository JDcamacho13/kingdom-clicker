/**
 * Entidad: Recaudador de impuestos.
 * Produce oro según la cantidad de recaudadores.
 */

import type { Cost } from '@/core/utils/cost'
import { canAfford } from '@/core/utils/cost'

export interface TaxCollectorDeps {
  getGold: () => number
  addGold: (amount: number) => void
  getTaxCollectorCount: () => number
  addTaxCollector: () => void
  getResources: () => { gold: number; wood: number; iron: number; stone: number }
  payCost: (cost: Cost) => void
}

export class TaxCollector {
  constructor(private deps: TaxCollectorDeps) {}

  /** Cantidad de oro que produce cada recaudador por click */
  get productionPerTaxCollector(): number {
    return 1
  }

  /** Producción total por click. Con 0 recaudadores da 1 (base), con n da n */
  get totalProductionPerClick(): number {
    const count = this.deps.getTaxCollectorCount()
    return count === 0 ? 1 : count * this.productionPerTaxCollector
  }

  /** Coste para contratar al siguiente recaudador */
  getCostForNext(): Cost {
    const count = this.deps.getTaxCollectorCount()
    if (count === 0) {
      return { gold: 0, wood: 50, iron: 0, stone: 30 }
    }
    return {
      gold: 10 * count,
      wood: 50 * count,
      iron: 100 * count,
      stone: 30 * count,
    }
  }

  /** Indica si hay suficientes recursos para contratar */
  canAfford(): boolean {
    return canAfford(this.getCostForNext(), this.deps.getResources())
  }

  /** Ejecuta la acción de recaudar */
  collect(): void {
    this.deps.addGold(this.totalProductionPerClick)
  }

  /** Contrata un nuevo recaudador */
  hire(): void {
    if (!this.canAfford()) return
    const cost = this.getCostForNext()
    this.deps.payCost(cost)
    this.deps.addTaxCollector()
  }
}
