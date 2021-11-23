<template>
  <div id="movie_card">
    <h2>MOVIE</h2>
    <MovieCard
      :movies="popular_movies"
      @click.native="newAlert"
      group_title="POPULAR"
      class="mt-5"
    />
  </div>

</template>

<script>
import MovieCard from '@/components/MovieCard'
import axios from 'axios'

const TMDB_API_URL_POPULAR = 'https://api.themoviedb.org/3/movie/popular'
const TMDB_API_URL_TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated'
const TMDB_API_KEY = process.env.VUE_APP_TMDB_API_KEY

export default {
  name: 'MovieIndex',
  data: function () {
    return {
      popular_movies: [],
      toprated_movies: [],
      recommend_movie_user: [],
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