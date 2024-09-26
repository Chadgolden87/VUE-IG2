import { createRouter, createWebHistory } from 'vue-router'
// import App from '@/App.vue'
import NewPost from '@/views/NewPost.vue'
// import Instagram from '@/components/icons/Instagram.vue'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/newPost',
    name: 'newPost',
    component: NewPost

   }

]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/newPost',
      name: 'newPost',
      component: NewPost
  
     }
   
  ]
})

export default router
