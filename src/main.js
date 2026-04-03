import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes, setupRouterGuards } from './router'

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
    scrollBehavior() {
      return { left: 0, top: 0, behavior: 'auto' }
    },
  },
  ({ app, router, isClient }) => {
    app.provide('baseUrl', import.meta.env.BASE_URL || './')
    setupRouterGuards(router)

    if (isClient) {
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
      window.scrollTo(0, 0)
    }
  },
)
