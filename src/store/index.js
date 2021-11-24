import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'


Vue.use(Vuex)
const TMDB_API_URL_POPULAR = 'https://api.themoviedb.org/3/movie/popular'
// const TMDB_API_URL_TOP_RATED = 'https://api.themoviedb.org/3/movie/top_rated'
const TMDB_API_KEY = process.env.VUE_APP_TMDB_API_KEY

export default new Vuex.Store({
  state: {
    reviews: [],
    username: '',
    popular_movies: [],
    movies_title: [],
  },
  mutations: {
    getUsername (state, username) {
      state.username = username
    },
    getMovies (state, popular_movies) {
      state.popular_movies = popular_movies
    },
    getMoviesTitle (state, popular_movies) {
      popular_movies.forEach(function (movie) {
        state.movies_title.push(movie.title)
      });
    },
    removeMoviesTitle (state) {
      state.movies_title = []
    }
  },
  actions: {
    getMoviesMove (context) {
      axios.get(TMDB_API_URL_POPULAR, {
        params: {
          api_key: TMDB_API_KEY,
          language: "ko-KR",
          page: 1,
          region: 'kr'
        }
      })
      .then((res) =>{
        context.commit('getMovies', res.data.results)
        console.log(res.data.results)
      })
      .catch(err => console.log(err))
    }

  },
  modules: {
  },
  plugins: [
    createPersistedState({
      paths: ["username","popular_movies"],
    })
  ],
})
