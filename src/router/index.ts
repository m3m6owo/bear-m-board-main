import { createRouter, createWebHashHistory } from 'vue-router'

//首頁
import HomeView from '@/views/home/HomeView.vue'

//關於我
import AboutView from '@/views/about/AboutView.vue'

//作品
import ProjectView from '@/views/myproject/ProjectView.vue'

//聯絡我
import ContactView from '@/views/contact/ContactView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },

    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
