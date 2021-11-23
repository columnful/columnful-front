<template>
  <div>
    <h1>Movie</h1>
      <movie-card></movie-card>
      <div id="movie_cards">

      <Movies
        :movies="toprated_movies"
        @click.native="newAlert"
        group_title="TOP RANKED"
        class="mt-5"
      />

      <Movies
        :movies="popular_movies"
        @click.native="newAlert"
        group_title="POPULAR"
        class="mt-5"
      />

      <Movies
        :isLogin="isLogin"
        :movies="nowplaying_movies"
        @click.native="newAlert"
        group_title="RECOMMENDATION"
        class="mt-5"
      />

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MovieCard from '@/components/MovieCard'
const MOVIE_DB_API_URL_POPULAR = 'https://api.themoviedb.org/3/movie/popular'
const MOVIE_DB_API_URL_TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated'
const MOVIE_DB_API_KEY = 'd96fad9400bff08e7653e874066ac99b'
export default {
  name: 'Movie',
  data: function () {
    return {
      popular_movies: [],
      toprated_movies: [],
    }
  },
  props: {
    isLogin: {
      type: Boolean
    },
  },
  components: {
    MovieCard,
  },
  created: function () {
    axios.get(MOVIE_DB_API_URL_POPULAR, {
      params: {
        api_key: MOVIE_DB_API_KEY,
        language: "ko-KR",
        page: 1,
        region: 'kr'
      }
    })
    .then((res) =>{
      this.popular_movies = res.data.results
    })
    .catch(err => console.log(err))
    axios.get(MOVIE_DB_API_URL_TOP_RATED, {
      params: {
        api_key: MOVIE_DB_API_KEY,
        language: "ko-KR",
        page: 1,
        region: 'kr'
      }
    })
    .then((res) =>{
      this.toprated_movies = res.data.results
    })
    .catch(err => console.log(err))
  },
  methods: {
    newAlert: function () {
      if (this.isLogin === false) {
      this.$fire({
        title: "로그인을 해주세요!",
        text: "",
        type: "error",
      }).then(r => {
        console.log(r.value);
      });
      }
    },
  }
}
</script>

<style>

</style>