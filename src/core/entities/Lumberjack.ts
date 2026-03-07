/**
 * Entidad: Leñador.
 * Produce madera al hacer click.
 */

export interface LumberjackDeps {
  getWood: () => number
  addWood: (amount: number) => void
}

export class Lumberjack {
  constructor(private deps: LumberjackDeps) {}

  /** Cantidad de madera que produce cada click */
  get productionPerClick(): number {
    return 1
  }

  /** Descripción para la UI */
  get description(): string {
    return `Cortar madera (+${this.productionPerClick} madera)`
  }

  /** Ejecuta la acción de talar */
  chop(): void {
    this.deps.addWood(this.productionPerClick)
  }
}
