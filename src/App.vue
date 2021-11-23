<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{name: 'Movie'}">Movie</router-link> |
      <router-link :to="{name: 'Reviews'}">Reviews</router-link> |
      <span v-if="isLogin">
        <router-link :to="{name: 'Profile'}">Profile</router-link> |
        <router-link @click.native="logout" to="#">Logout</router-link>
      </span>
      <span v-else>
        <router-link :to="{name: 'Signup'}">Signup</router-link> |
        <router-link :to="{name: 'Login'}">Login</router-link>
      </span>
    </div>
    <router-view @login="isLogin=true"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      isLogin: false,
    }
  },
  created: function () {
    const token = localStorage.getItem('jwt')
    if (token) {
      this.isLogin = true
    }
  },
  
  methods: {
    selectMovie: function (data) {
      this.selectMovieId2 = data
    },
    logout: function () {
      this.isLogin = false
      localStorage.removeItem('jwt')
      this.$router.push({ name: 'Login' })
    }
  },
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>