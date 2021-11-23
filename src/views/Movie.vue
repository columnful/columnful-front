<template>
  <div>
      <carousel v-model=index :per-page="1" class="banner_list"
        paginationActiveColor="#e01a31"
        paginationColor="#999"
        :paginationPadding=3>
        <slide class="slide_item">
          <img class="banner_img" src="../images/banner/about_time_cropped.jpg" style="width:100%">
        </slide>
      </carousel>
      
      <div id="movie_card">
      <router-link to="/movie/index">LOAD MORE</router-link>
      <h2>POPULAR</h2>
      <MovieCarousel
        :movies="popular_movies"
        group_title="POPULAR"
        class="mt-5"
      />

      <h2>TOP RATED</h2>
      <MovieCarousel
        :movies="toprated_movies"
        group_title="TOP RANKED"
        class="mt-5"
      />

      <!-- <MovieCard
        :isLogin="isLogin"
        :movies="recommend_movie_user"
        @click.native="newAlert"
        group_title="RECOMMENDATION"
        class="mt-5"
      /> -->

    </div>
  </div>
</template>

<script>
require('dotenv').config()
import { Carousel, Slide } from "vue-carousel"
// import MovieCard from '@/components/MovieCard'
import MovieCarousel from '@/components/MovieCarousel'
import axios from 'axios'

const TMDB_API_URL_POPULAR = 'https://api.themoviedb.org/3/movie/popular'
const TMDB_API_URL_TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated'
const TMDB_API_KEY = process.env.VUE_APP_TMDB_API_KEY

export default {
  name: 'Movie',
  data: function () {
    return {
      popular_movies: [],
      toprated_movies: [],
      recommend_movie_user: [],
      movie_detail: []
    }
  },
  props: {
    isLogin: {
      type: Boolean
    },
  },
  components: {
    // MovieCard,
    MovieCarousel,
    Carousel,
    Slide
  },
  created: function () {
    axios.get(TMDB_API_URL_POPULAR, {
      params: {
        api_key: TMDB_API_KEY,
        language: "ko-KR",
        page: 1,
        region: 'kr'
      }
    })
    .then((res) =>{
      this.popular_movies = res.data.results
      console.log(res.data.results)
    })
    .catch(err => console.log(err))
    axios.get(TMDB_API_URL_TOP_RATED, {
      params: {
        api_key: TMDB_API_KEY,
        language: "ko-KR",
        page: 1,
        region: 'kr'
      }
    })
    .then((res) =>{
      this.toprated_movies = res.data.results
    })
    .catch(err => console.log(err))

    // const token = localStorage.getItem('jwt')
    // const config = {
    //   headers: {
    //     Authorization: `JWT ${token}`
    //   }
    // }
    // 영화추천
    // axios.get('http://127.0.0.1:8000/movies/recommend_movie_user/', config)
    //   .then((res) => {
    //     console.log(res)
    //     this.recommend_movie_user = res.data
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  },
  // methods: {
  //   newAlert: function () {
  //     if (this.isLogin === false) {
  //     this.$fire({
  //       title: "로그인을 해주세요!",
  //       text: "",
  //       type: "error",
  //     }).then(r => {
  //       console.log(r.value);
  //     });
  //     }
  //   },
  // }
}
</script>

<style>
  .banner_img {
    opacity: 0.77;
  }

</style>