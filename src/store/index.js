import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reviews: [],
    username: '',
  },
  mutations: {
    getUsername (state, username) {
      state.username = username
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState()
  ],
})
