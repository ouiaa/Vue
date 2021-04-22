import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/home/Home.vue'
Vue.use(Router)

const Home = () => import('../views/home/Home.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Category = () => import('../views/category/Category.vue')
const Profile = () => import('../views/profile/Profile.vue')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  }
]

export default new Router({
  routes,
  mode: 'history'
})

