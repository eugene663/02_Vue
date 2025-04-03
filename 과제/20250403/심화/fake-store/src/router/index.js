import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/electronics',
      name: 'electronics',
      // lazy loading
      component: () => import('../pages/ElectronicsPage.vue'),
    },
    {
      path: '/jewelery',
      name: 'jewelery',
      component: () => import('../pages/JeweleryPage.vue'),
    },
    {
      path: '/mensclothing',
      name: "men's clothing",
      component: () => import('../pages/MensClothingPage.vue'),
    },
    {
      path: '/womenclothing',
      name: "women's clothing",
      component: () => import('../pages/WomensClothingPage.vue'),
    },
    {
      path: '/product/:id',
      name: 'product/id',
      component: () => import('../components/ProductDetailPage.vue'),
    },
    {
      path: '/product/write',
      name: 'product/write',
      component: () => import('../components/ProductWritePage.vue'),
    },
    {
      path: '/product/edit',
      name: 'product/edit',
      component: () => import('../components/ProductEditPage.vue'),
    },
  ],
});

export default router;
