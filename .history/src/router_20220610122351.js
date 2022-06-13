import { createRouter, createWebHistory } from 'vue-router'
import WorkAll from './views/WorkAll.vue'
import Oneroute from './views/Oneroute.vue'



const routes = [
    {path: "/" , name:"Work", component: WorkAll},
    {path: "/works/oneroute" , name:"Oneroute", component: Oneroute},
]
const scrollBehavior = (to, from, savedPosition) => {
   return { x: 0, y: 0 }
};

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
})

export default router