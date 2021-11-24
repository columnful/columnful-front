<template>
  <div id="app">
      <Header/>
      <Navbar/>

    <router-view @login="isLogin=true"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Navbar,
    Header
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

  /* #nav {
    padding: 15px;
  } */

</style>
