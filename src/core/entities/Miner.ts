/**
 * Entidad: Minero.
 * Produce hierro al hacer click.
 */

export interface MinerDeps {
  getIron: () => number
  addIron: (amount: number) => void
}

export class Miner {
  constructor(private deps: MinerDeps) {}

  /** Cantidad de hierro que produce cada click */
  get productionPerClick(): number {
    return 1
  }

  /** Descripción para la UI */
  get description(): string {
    return `Extraer hierro (+${this.productionPerClick} hierro)`
  }

  /** Ejecuta la acción de minar */
  mine(): void {
    this.deps.addIron(this.productionPerClick)
  }
}
