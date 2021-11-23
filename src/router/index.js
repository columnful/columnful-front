import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Movie  from '@/views/Movie'
import Reviews from '@/views/Reviews'
import Signup from '@/views/accounts/Signup'
import Login from '@/views/accounts/Login'
import Profile from '@/views/Profile'
import CreateReview from '@/views/CreateReview'
import UpdateReview from '@/views/UpdateReview'
import ReviewDetail from '@/views/ReviewDetail'
import MovieIndex from '@/views/MovieIndex'

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
    path: `/profile/:profileUsername`,
    name: 'Profile',
    component: Profile,
    // props: true,
  },
  {
    path: '/reviews/create',
    name: 'CreateReview',
    component: CreateReview,
  },
  {
    path: `/reviews/reviews/:reviewId`,
    name: 'ReviewDetail',
    component: ReviewDetail,
  },
  {
    path: '/reviews/reviews/:reviewId',
    name: 'UpdateReview',
    component: UpdateReview,
  },
  {
    path: '/movie/index',
    name: 'MovieIndex',
    component: MovieIndex,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
