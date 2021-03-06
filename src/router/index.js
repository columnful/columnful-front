import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Movie  from '@/views/Movie'
import Reviews from '@/views/Reviews'
import Profile from '@/views/Profile'
import CreateReview from '@/views/CreateReview'
import UpdateReview from '@/views/UpdateReview'
import ReviewDetail from '@/views/ReviewDetail'
import MovieDetail from '@/views/MovieDetail'
import Contact from '@/views/Contact'

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
    path: `/profile/:profileUsername`,
    name: 'Profile',
    component: Profile,
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
    path: '/movie/detail',
    name: 'MovieDetail',
    component: MovieDetail,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
