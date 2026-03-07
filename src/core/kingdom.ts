import type { Ref } from 'vue'
import { TaxCollector, Lumberjack, Miner } from './entities'
import type { Cost } from './utils/cost'

export interface WorkerStoreRefs {
  getCount: () => number
  addCount: () => void
}

export interface KingdomInitState {
  kingdom: {
    gold: Ref<number>
    wood: Ref<number>
    iron: Ref<number>
    stone: Ref<number>
  }
  miners: WorkerStoreRefs
  lumberjacks: WorkerStoreRefs
  taxCollectors: WorkerStoreRefs
}

function createPayCost(state: KingdomInitState['kingdom']): (cost: Cost) => void {
  return (cost: Cost) => {
    state.gold.value -= cost.gold
    state.wood.value -= cost.wood
    state.iron.value -= cost.iron
    state.stone.value -= cost.stone
  }
}

function createGetResources(state: KingdomInitState['kingdom']) {
  return () => ({
    gold: state.gold.value,
    wood: state.wood.value,
    iron: state.iron.value,
    stone: state.stone.value,
  })
}

let taxCollector: TaxCollector | null = null
let lumberjack: Lumberjack | null = null
let miner: Miner | null = null

export function initKingdom(state: KingdomInitState): void {
  const getResources = createGetResources(state.kingdom)
  const payCost = createPayCost(state.kingdom)

  taxCollector = new TaxCollector({
    getGold: () => state.kingdom.gold.value,
    addGold: (amount) => {
      state.kingdom.gold.value += amount
    },
    getTaxCollectorCount: () => state.taxCollectors.getCount(),
    addTaxCollector: () => state.taxCollectors.addCount(),
    getResources,
    payCost,
  })

  lumberjack = new Lumberjack({
    getWood: () => state.kingdom.wood.value,
    addWood: (amount) => {
      state.kingdom.wood.value += amount
    },
    getLumberjackCount: () => state.lumberjacks.getCount(),
    addLumberjack: () => state.lumberjacks.addCount(),
    getResources,
    payCost,
  })

  miner = new Miner({
    getIron: () => state.kingdom.iron.value,
    addIron: (amount) => {
      state.kingdom.iron.value += amount
    },
    addStone: (amount) => {
      state.kingdom.stone.value += amount
    },
    getMinerCount: () => state.miners.getCount(),
    addMiner: () => state.miners.addCount(),
    getResources,
    payCost,
  })
}

export function getTaxCollector(): TaxCollector {
  if (!taxCollector) throw new Error('Kingdom not initialized. Call initKingdom() first.')
  return taxCollector
}

export function getLumberjack(): Lumberjack {
  if (!lumberjack) throw new Error('Kingdom not initialized. Call initKingdom() first.')
  return lumberjack
}

export function getMiner(): Miner {
  if (!miner) throw new Error('Kingdom not initialized. Call initKingdom() first.')
  return miner
}
