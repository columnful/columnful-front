<template>
  <div>
    <modal ref="modalName">
      <template v-slot:header>
        <h1>DETAILS</h1>
      </template>

      <template v-slot:body>
        <Content/>
      </template>

      <template v-slot:footer>
      </template>
    </modal>
    <carousel :per-page="1" class="banner_list"
      paginationActiveColor="#e01a31"
      paginationColor="#999"
      :paginationPadding=3>
      <slide class="slide_item">
        <img class="banner_img" src="../assets/images/banner/about_time_cropped.jpg" style="width:100%">
      </slide>
    </carousel>
    <br><br>
      
    <div id="movies__carousel">
      <!-- <router-link to="/movie/index">LOAD MORE</router-link> -->
      <MovieCarousel
        :movies="popular_movies"
        group_title="POPULAR"
        class="mt-5"
      />
      <br><br>

      <MovieCarousel
        :movies="toprated_movies"
        group_title="TOP RATED"
        class="mt-5"
      />
      <br><br>

      <MovieCarousel
        :movies="nowplaying_movies"
        group_title="NOW PLAYING"
        class="mt-5"
      />

    </div>
  </div>
</template>

<script>
require('dotenv').config()
import { Carousel, Slide } from "vue-carousel"
import MovieCarousel from '@/components/MovieCarousel'
import Modal from "@/components/Modal"
import Content from "@/components/Content"
import axios from 'axios'

const TMDB_API_KEY = process.env.VUE_APP_TMDB_API_KEY

export default {
  name: 'Movie',
  data: function () {
    return {
      popular_movies: [],
      toprated_movies: [],
      nowplaying_movies: [],
      upcoming_movies: [],
      recommend_movie_user: [],
    }
  },
  props: {
    isLogin: {
      type: Boolean
    },
  },
  components: {
    Modal,
    Content,
    MovieCarousel,
    Carousel,
    Slide,
  },
  created: function () {
    axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: TMDB_API_KEY,
        language: "ko-KR",
        region: "kr"
      }
    })
    .then((res) =>{
      this.popular_movies = res.data.results
      // console.log(res.data)
    })
    .catch(err => console.log(err))

    axios.get('https://api.themoviedb.org/3/movie/top_rated', {
      params: {
        api_key: TMDB_API_KEY,
        language: "ko-KR",
        region: "kr"
      }
    })
    .then((res) =>{
      this.toprated_movies = res.data.results
    })
    .catch(err => console.log(err))

    axios.get('https://api.themoviedb.org/3/movie/now_playing', {
      params: {
        api_key: TMDB_API_KEY,
        language: "ko-KR",
        region: "kr"
      }
    })
    .then((res) =>{
      this.nowplaying_movies = res.data.results
    })
    .catch(err => console.log(err))

    axios.get('https://api.themoviedb.org/3/movie/upcoming', {
      params: {
        api_key: TMDB_API_KEY,
        language: "ko-KR",
        region: "kr"
      }
    })
    .then((res) =>{
      this.upcoming_movies = res.data.results
      // console.log(res.data)
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
  .movies__group__title {
    /* float: left; */
    font: bold;
    text-align: left;
  }

</style>