<template>
  <div>
    <!-- @click="$refs.modalName.openModal() -->
    <modal v-model="showDetail" class="datail__modal">
      <div class="modal__dialog rounded">
        <MovieModal 
        :selectedMovieID="selectedmovie_id"
        :backdrop_path="selectedMovie.backdrop_path"
        :genres="selectedMovie.genres"
        :original_title="selectedMovie.original_title"
        :overview="selectedMovie.overview"
        :release_date="selectedMovie.release_date"
        :runtime="selectedMovie.runtime"
        :vote_average="selectedMovie.vote_average"
         />
        <!-- <p> {{ selectedMovie.original_title }} </p>
        <br><br><br><br><br><br><br><br><br><br><br><br> -->
      </div>


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
        @selectedMovie="selectedMovieDetail"
      />
      <br><br>

      <MovieCarousel
        :movies="toprated_movies"
        group_title="TOP RATED"
        class="mt-5"
        @selectedMovie="selectedMovieDetail"
      />
      <br><br>

      <MovieCarousel
        :movies="nowplaying_movies"
        group_title="NOW PLAYING"
        class="mt-5"
        @selectedMovie="selectedMovieDetail"
      />

    </div>
  </div>
</template>

<script>
require('dotenv').config()
import { Carousel, Slide } from "vue-carousel"
import MovieCarousel from '@/components/MovieCarousel'
import MovieModal from '@/components/MovieModal'

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
      showDetail: false,
      selectedMovie: [],
      selectedmovie_id: "",
    }
  },
  props: {
    isLogin: {
      type: Boolean
    },
  },
  components: {
    MovieCarousel,
    Carousel,
    Slide,
    MovieModal,
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
  methods: {
    selectedMovieDetail(movie_id) {
      this.selectedmovie_id = movie_id
      this.showDetail=true
      console.log(this.selectedmovie_id)
      axios.get('https://api.themoviedb.org/3/movie/' + movie_id, {
        params: {
          api_key: TMDB_API_KEY,
          language: "ko-KR",
          region: "kr"
        }
      })
      .then((res) =>{
        this.selectedMovie = res.data
        console.log(res.data)
        this.showDetail=true
      })
      .catch(err => console.log(err))
      }
  }
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
  .detail__modal {
    width:80% !important ;
  }
  modal__dialog {
    position: relative;
    width: 80% !important;
    height: 90% !important;
    background-color: #ffffff;
    border-radius: 5px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
</style>