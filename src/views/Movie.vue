<template>
  <div>
    <!-- @click="$refs.modalName.openModal() -->
    <modal ref="modalName" :backdrop_path="selectedMovie.backdrop_path">
      <template v-slot:header>
        <h1 class="modalheader__title">{{selectedMovie.original_title}}</h1>
      </template>

      <template v-slot:body>
        <MovieModal 
        :selectedMovieID="selectedmovie_id"
        :title="selectedMovie.title"
        :backdrop_path="selectedMovie.backdrop_path"
        :genres="genres"
        :original_title="selectedMovie.original_title"
        :overview="selectedMovie.overview"
        :release_date="selectedMovie.release_date"
        :runtime="selectedMovie.runtime"
        :vote_average="selectedMovie.vote_average"
        :youtubeURL="youtubeURL"
        :youtubeThumbnails="youtubeThumbnails"
        :recommendations="recommendations"
         />
      </template>

      <template v-slot:footer>
      </template>
    </modal>


    <swiper class="swiper m-5 mb-20" :options="swiperOption"> 
      <swiper-slide>
        <img class="home_banner-img" src="../assets/homebanner/BANNER03.png" style="width:100%">
      </swiper-slide> 
      <!-- <swiper-slide>
        <img class="home_banner-img" src="../assets/homebanner/male.jpeg" style="width:100%">
      </swiper-slide>  -->
      <swiper-slide>
        <img class="home_banner-img" src="../assets/homebanner/BANNER01.png" style="width:100%">
      </swiper-slide> 
      <!-- <div class="swiper-pagination" slot="pagination"></div>  -->
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> 
      <div class="swiper-button-next" slot="button-next"></div>  -->
    </swiper>
    
      
    <div id="movies__carousel">
      
      <MovieCarousel
        :movies="popular_movies"
        group_title="POPULAR"
        class="mt-5 mb-20"
        @selectedMovie="selectedMovieDetail"
        @showMovieModal="$refs.modalName.openModal()"
      />


      <MovieCarousel
        :movies="toprated_movies"
        group_title="TOP RATED"
        class="mt-5 mb-20"
        @selectedMovie="selectedMovieDetail"
        @showMovieModal="$refs.modalName.openModal()"
      />


      <MovieCarousel
        :movies="nowplaying_movies"
        group_title="NOW PLAYING"
        class="mt-5"
        @selectedMovie="selectedMovieDetail"
        @showMovieModal="$refs.modalName.openModal()"
      />

    </div>
  </div>
</template>

<script>
require('dotenv').config()
import MovieCarousel from '@/components/MovieCarousel'
import MovieModal from '@/components/MovieModal'
import Modal from '@/components/Modal'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'

import axios from 'axios'

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'
const YOUTUBE_API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
// const YOUTUBE_API_KEY = 'AIzaSyBnvny6WLsXZc0r8jDIg6qvl-WkPmsGvn8'
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
      videos: [],
      youtubeURL: "",
      youtubeThumbnails: "",
      genres: [],
      recommendations: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 2,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      }
    }
  },
  props: {
    isLogin: {
      type: Boolean
    },
  },
  components: {
    MovieCarousel,
    MovieModal,
    Modal,
    swiper,
    swiperSlide,
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
  },
  methods: {
    selectedMovieDetail(movie_id) {
      this.selectedmovie_id = movie_id
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
        const query = this.selectedMovie.original_title + ' trailer'
        axios.get(YOUTUBE_API_URL, {
          params: {
            key: YOUTUBE_API_KEY,
            part: 'snippet',
            type: 'video',
            q: query,
            maxResults: 1,
          }
        })
        .then((res) => {
          this.youtubeURL = `https://www.youtube.com/embed/${res.data.items[0].id.videoId}`
        })
        .catch(err => console.log(err))
      })
      .catch(err => console.log(err))

      axios.get('https://api.themoviedb.org/3/movie/' + movie_id, {
        params: {
          api_key: TMDB_API_KEY,
        }
      })
      .then((res) =>{
        this.genres = res.data.genres
      })
      .catch(err => console.log(err))

      axios.get('https://api.themoviedb.org/3/movie/' + movie_id +'/recommendations', {
        params: {
          api_key: TMDB_API_KEY,
          language: "ko-KR",
        }
      })
      .then((res) =>{
        this.recommendations = res.data.results
        console.log(this.recommendations)
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
  .banner_img {
    opacity: 0.77;
  }
  .movies__group__title {
    /* float: left; */
    font: bold;
    text-align: left;
  }
  .modalheader__title {
    color: whitesmoke;
  }
  .swiper { 
    /* height: 350px;  */
    width: 96%; 
  }
    
  .swiper-slide { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    text-align: center;  
  } 
</style>