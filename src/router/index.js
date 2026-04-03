import Projet from '../views/Projet.vue'
import Situation from '../views/Situation.vue'
import Apartments from '../views/Apartments.vue'
import Galerie from '../views/Galerie.vue'
import Plans from '../views/Plans.vue'
import Telechargements from '../views/Telechargements.vue'
import Contact from '../views/Contact.vue'

export const routes = [
  { path: '/', redirect: '/projet' },
  { path: '/projet', component: Projet },
  { path: '/situation', component: Situation },
  { path: '/appartements', component: Apartments },
  { path: '/galerie', component: Galerie },
  { path: '/plans', component: Plans },
  { path: '/telechargements', component: Telechargements },
  { path: '/contact', component: Contact },
]

export function setupRouterGuards(router) {
  router.beforeEach((to, from, next) => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
    next()
  })

  router.afterEach(() => {
    if (typeof window !== 'undefined') {
      requestAnimationFrame(() => window.scrollTo(0, 0))
    }
  })
}
