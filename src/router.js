import { createRouter, createWebHistory } from 'vue-router';
import Works from './views/Works.vue';
import WorkAll from './views/WorkAll.vue';
import WorksAll from './views/WorksAll.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {path: "/" , component: Works},
    {path: "/all" , component: WorkAll},
    {path: "/alls" , component:WorksAll}
  ]
})