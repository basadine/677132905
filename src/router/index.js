import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// ไม่มีการใช้ Vue จาก 'vue' เลย ไม่จำเป็นต้อง import 
// import Vue from 'vue'; // ลบออก

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Product',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/addpd',
    name: 'AddProduct',
    component: () => import('../views/AddProduct.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: '/login',
    component: () => import( '../views/login.vue')
  },
  {
    path: '/reg',
    name: '/singup',
    component: () => import( '../views/singup.vue')
  },
  {
    path: '/grade',
    name: '/grade',
    component: () => import( '../views/grade.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
