import { describe, it, expect, beforeEach } from 'vitest'

import { useKingdomStore } from '@/stores/kingdom'
import { useMinersStore } from '@/stores/miners'
import { getMiner } from '@/core/kingdom'
import { setupKingdom } from './helpers/setupKingdom'

describe('Miner', () => {
  let kingdomStore: ReturnType<typeof useKingdomStore>
  let minersStore: ReturnType<typeof useMinersStore>

  beforeEach(() => {
    const result = setupKingdom()
    kingdomStore = result.kingdomStore
    minersStore = result.minersStore
  })

  it('produce hierro según cantidad de mineros', () => {
    expect(kingdomStore.iron).toBe(0)
    expect(minersStore.count).toBe(0)

    getMiner().mine({ resource: 'iron' })
    expect(kingdomStore.iron).toBe(0)

    // Primer minero: 50 oro, 50 madera
    kingdomStore.$patch({ gold: 50, wood: 50 })
    getMiner().hire()
    expect(minersStore.count).toBe(1)
    expect(kingdomStore.gold).toBe(0)
    expect(kingdomStore.wood).toBe(0)

    getMiner().mine({ resource: 'iron' })
    expect(kingdomStore.iron).toBe(1)

    // Segundo minero: 50 oro, 50 madera, 200 hierro; tercero: 100 oro, 100 madera, 400 hierro
    kingdomStore.$patch({ gold: 150, wood: 150, iron: 600 })
    getMiner().hire()
    getMiner().hire()
    getMiner().mine({ resource: 'iron' })
    expect(kingdomStore.iron).toBe(3) // 600 - 200 - 400 + 3 (2º y 3º minero)
  })

  it('produce 1 hierro por minero por click', () => {
    const miner = getMiner()
    expect(miner.productionPerMiner).toBe(1)
  })
})
