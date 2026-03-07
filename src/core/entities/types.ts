import type { Cost } from '@/core/utils/cost'

/**
 * Interfaz para entidades que se pueden contratar (workers).
 * Expone coste, comprobación de recursos y acción de contratar.
 */
export interface HireableWorker {
  /** Coste para contratar al siguiente worker */
  getCostForNext(): Cost

  /** Indica si hay suficientes recursos para contratar */
  canAfford(): boolean

  /** Ejecuta la contratación (descuenta recursos y añade worker) */
  hire(): void
}
