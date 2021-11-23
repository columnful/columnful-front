<template>
  <div> 
    <div class="video-container">
      <iframe :src="youtubeURL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div> 
</template>

<script>
import axios from "axios"

const TMDB_API_KEY = process.env.VUE_APP_TMDB_API_KEY

export default {
  name: "MovieDetail",
  data() {
    return {
      movie: [],
      actors: [],
      backdrop_path: "",
    }
  },
  created() {
    const {id} = this.$route.params
    axios.get(`http://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: "ko-KR"
      }
    })
    .then((res) =>{
      this.movie = res.data
      console.log(res.data)
      this.backdrop_path = `http://image.tmdb.org/t/p/original${this.movie.backdrop_path}`
    })
  }
}
</script>

<style>

</style>