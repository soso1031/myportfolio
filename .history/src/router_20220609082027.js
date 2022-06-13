import { createRouter, createWebHistory } from 'vue-router'
import WorkAll from './views/WorkAll.vue'
import Oneroute from './views/Oneroute.vue'
import Test from './views/Test.vue'

// export default createRouter({
//   history: createWebHistory(),
//   routes: [
//     {path: "/" , component: WorkAll},
//     {path: "/works/oneroute" , component: Oneroute},
//     {path: "/test" , component: Test}
//   ],
//   scrollBehavior (to, from, savedPosition) {
//     if (savedPosition) {
//       return savedPosition
//     } else {
//       return { x: 0, y: 0 }
//     }
//   }
// })

const routes = [
    {path: "/" , component: WorkAll},
    {path: "/works/oneroute" , component: Oneroute},
    {path: "/test" , component: Test}
]
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { top: 0 }
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
})

export default router