<template>
  <div id="app" sticky-container>
    <Header/>
    <Navbar/>

    <router-view @login="isLogin=true"/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    Footer,
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
    background-color: whitesmoke;
    width: 100% ;
    /* height: 100% ; */
  }

  /* #nav {
    padding: 15px;
  } */

</style>
