import { describe, it, expect, beforeEach } from 'vitest'

import { useKingdomStore } from '@/stores/kingdom'
import { getTaxCollector } from '@/core/kingdom'
import { setupKingdom } from './helpers/setupKingdom'

describe('TaxCollector', () => {
  let store: ReturnType<typeof useKingdomStore>

  beforeEach(() => {
    const result = setupKingdom()
    store = result.store
  })

  it('aumenta el oro al recaudar impuestos', () => {
    expect(store.gold).toBe(0)

    getTaxCollector().collect()
    expect(store.gold).toBe(1)

    getTaxCollector().collect()
    getTaxCollector().collect()
    expect(store.gold).toBe(3)
  })

  it('produce 1 oro por click', () => {
    const taxCollector = getTaxCollector()
    expect(taxCollector.totalProductionPerClick).toBe(1)
  })
})
