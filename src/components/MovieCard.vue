<template>
  <div class="card">
    <router-link :to="``">
      <img 
        class="card_image" 
        :src="'https://image.tmdb.org/t/p/'+movie.poster_path">
      
      <div class="card_content">
        <p class="card_content_title">
          {{movie.title}}
        </p>
      </div>

    </router-link>

  </div>

</template>

<script>
// import { Carousel, Slide } from "vue-carousel"
// import axios from "axios"

// const URL_PREFIX = 'https://image.tmdb.org/t/p/w500'

export default {
  name:"MovieCard",
  components: {
    // Carousel,
    // Slide,
  },
  props: {
    movie: {
      type: Array
    },
    isLogin: {
      type: Boolean
    }
  },

}
</script>

<style>

</style>