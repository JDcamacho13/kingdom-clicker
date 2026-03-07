import { createApp } from 'vue'
import { createPinia, storeToRefs } from 'pinia'

import './ui/assets/styles/main.css'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import { useKingdomStore } from '@/stores/kingdom'
import { useMinersStore } from '@/stores/miners'
import { useLumberjacksStore } from '@/stores/lumberjacks'
import { useTaxCollectorsStore } from '@/stores/taxCollectors'
import { initKingdom } from '@/core/kingdom'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(i18n)

const kingdomStore = useKingdomStore(pinia)
const minersStore = useMinersStore(pinia)
const lumberjacksStore = useLumberjacksStore(pinia)
const taxCollectorsStore = useTaxCollectorsStore(pinia)

initKingdom({
  kingdom: storeToRefs(kingdomStore),
  miners: {
    getCount: () => minersStore.count,
    addCount: () => minersStore.$patch({ count: minersStore.count + 1 }),
  },
  lumberjacks: {
    getCount: () => lumberjacksStore.count,
    addCount: () => lumberjacksStore.$patch({ count: lumberjacksStore.count + 1 }),
  },
  taxCollectors: {
    getCount: () => taxCollectorsStore.count,
    addCount: () => taxCollectorsStore.$patch({ count: taxCollectorsStore.count + 1 }),
  },
})

app.mount('#app')
