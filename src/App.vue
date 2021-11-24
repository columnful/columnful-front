<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
    </div>
    <router-view @login="isLogin=true"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  data: function () {
    return {
      isLogin: false,
      username: '',
    }
  },
  created: function () {
    const token = localStorage.getItem('jwt')
    if (token) {
      this.isLogin = true
      this.username = localStorage.getItem('username')
      console.log(localStorage)
    }
  },
  
  methods: {
    logout: function () {
      this.isLogin = false
      localStorage.removeItem('jwt')
      this.$router.push({ name: 'Login' })
    },
  },
  components: {
    Navbar
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
    padding: 15px;
  }

</style>