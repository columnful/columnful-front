import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reviews: [],
    username: '',
    selectedMovie: 0
  },
  mutations: {
    getUsername (state, username) {
      state.username = username
    },
    SELECT_MOVIE: function (state, payload) {
      state.selectedMovie = payload
    }
  },
  actions: {
    selectMovie: function ({commit}, movieId) {
      commit('SELECT_MOVIE', movieId)
    }
  },
  modules: {
  },
  plugins: [
    createPersistedState()
  ],
})
