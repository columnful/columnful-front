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


    <carousel :per-page="1" class="banner_list"
      paginationActiveColor="#e01a31"
      paginationColor="#999"
      :paginationPadding=3>
      <slide class="slide_item">
        <img class="banner_img" src="../assets/images/banner/about_time_cropped 2.jpg" style="width:100%">
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
        @showMovieModal="$refs.modalName.openModal()"
      />
      <br><br>

      <MovieCarousel
        :movies="toprated_movies"
        group_title="TOP RATED"
        class="mt-5"
        @selectedMovie="selectedMovieDetail"
        @showMovieModal="$refs.modalName.openModal()"
      />
      <br><br>

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
import { Carousel, Slide } from "vue-carousel"
import MovieCarousel from '@/components/MovieCarousel'
import MovieModal from '@/components/MovieModal'
import Modal from '@/components/Modal'

import axios from 'axios'

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'
// const YOUTUBE_API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const YOUTUBE_API_KEY = 'AIzaSyBnvny6WLsXZc0r8jDIg6qvl-WkPmsGvn8'
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
    Modal,
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
          this.youtubeThumbnails = res.data.items[0].snippet.thumbnails.high.url
          console.log(res.data.items[0].snippet.thumbnails.high.url)
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
  .modalheader__title {
    color: whitesmoke;
  }
</style>