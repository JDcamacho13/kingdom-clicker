/**
 * Entidad: Recaudador de impuestos.
 * Produce oro al hacer click.
 */

export interface TaxCollectorDeps {
  getGold: () => number
  addGold: (amount: number) => void
}

export class TaxCollector {
  constructor(private deps: TaxCollectorDeps) {}

  /** Cantidad de oro que produce cada click */
  get productionPerClick(): number {
    return 1
  }

  /** Descripción para la UI */
  get description(): string {
    return `Recaudar impuestos (+${this.productionPerClick} oro)`
  }

  /** Ejecuta la acción de recaudar */
  collect(): void {
    this.deps.addGold(this.productionPerClick)
  }
}
