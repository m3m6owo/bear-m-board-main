import { createRouter, createWebHashHistory } from 'vue-router'

//首頁
import HomeView from '@/views/home/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
