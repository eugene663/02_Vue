import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import Electronics from '@/pages/Electronics.vue';
import Jewelery from '@/pages/Jewelery.vue';
import MensClothing from '@/pages/MensClothing.vue';
import WomensClothing from '@/pages/WomensClothing.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/electronics', component: Electronics },
    { path: '/jewelery', component: Jewelery },
    { path: '/mensclothing', component: MensClothing },
    { path: '/womensclothing', component: WomensClothing },
  ],
});
export default router;
