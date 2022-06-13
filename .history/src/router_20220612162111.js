import { createRouter, createWebHistory } from 'vue-router'
import WorkAll from './views/WorkAll.vue'
import Oneroute from './views/Oneroute.vue'
import Cubi from './views/Cubi.vue'
import Trim from './views/Trim.vue'
import Tsugitasu from './views/Tsugitasu.vue'
import About from './views/About.vue'




const routes = [
  { path: "/", name: "Work", component: WorkAll },
  { path: "/works/oneroute", name: "Oneroute", component: Oneroute },
  { path: "/works/cubi", name: "Cubi", component: Cubi },
  { path: "/works/trim", name: "trim", component: Trim },
  { path: "/works/tsugitasu", name: "tsugitasu", component: Tsugitasu },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({ top: 0 }), 300)
    })
  }
})

export default router