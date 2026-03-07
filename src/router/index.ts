import { createRouter, createWebHistory } from 'vue-router'
import TaxesView from '@/ui/views/TaxesView.vue'
import LumberjacksView from '@/ui/views/LumberjacksView.vue'
import MinersView from '@/ui/views/MinersView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'taxes', component: TaxesView },
    { path: '/leñadores', name: 'lumberjacks', component: LumberjacksView },
    { path: '/mineros', name: 'miners', component: MinersView },
  ],
})

export default router
