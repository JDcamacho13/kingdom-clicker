import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { createRouter, createMemoryHistory } from 'vue-router'
import { i18n } from '@/i18n'
import App from '../App.vue'
import TaxesView from '@/ui/views/TaxesView.vue'
import LumberjacksView from '@/ui/views/LumberjacksView.vue'
import MinersView from '@/ui/views/MinersView.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: TaxesView },
    { path: '/leñadores', component: LumberjacksView },
    { path: '/mineros', component: MinersView },
  ],
})

describe('App', () => {
  it('mounts renders properly', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [createPinia(), router, i18n],
      },
    })
    await router.isReady()
    expect(wrapper.text()).toContain('Kingdom Clicker')
  })
})
