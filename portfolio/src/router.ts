import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: () => import('./pages/Home.vue') },
  { path: '/contact', name: 'Contact', component: () => import('./pages/Contact.vue') },
  { path: '/projects', name: 'Projects', component: () => import('./pages/Projects.vue') },
  { path: '/experience', name: 'Experience', component: () => import('./pages/Experience.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('./pages/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
  // Always scroll to top on route change
  return { top: 0 }
  },
})

export default router
