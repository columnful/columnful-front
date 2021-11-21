import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Movie  from '@/views/Movie.vue'
import Reviews from '@/views/Reviews.vue'
import Signup from '@/views/accounts/Signup'
import Login from '@/views/accounts/Login'
import CreateReview from '@/views/CreateReview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Movie,
  },
  {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews,
  },
  {
    path: '/accouts/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/accouts/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/reviews/create',
    name: 'CreateReview',
    component: CreateReview,
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
