<template>
  <div class="movies">
    <div class="movies__slide">
      <carousel
        :navigationEnabled="true"
        :navigation-next-label="nextLabel"
        :navigation-prev-label="prevLabel"
        :paginationEnabled="false"
        :perPageCustom="[[0, 1],[650,2],[1020,3],[1340,4],[1660,5],[2000,6],[2350,7],[2800, 8]]">

        <slide
          class="mt-3"
          v-for="movie in movies"
          :key="movie.id"> 
        
          <div v-b-modal.modal-scrollable @click="selectMovie(movie.id)">
            <template v-if="movie.poster_path.slice(0,4) == 'http'">
              <img width="100%" class="movie__poster" :src="movie.poster_path" alt="">
            </template>

            <template v-else>
              <img width="100%" class="movie__poster" :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path" alt="">
            </template>
          </div>

        </slide>
        
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel"
import axios from "axios"

const URL_PREFIX = 'https://image.tmdb.org/t/p/w500'

export default {
  name: "MovieCarousel",
  components: {
    Carousel,
    Slide,
  },
  props: {
    movies: {
      type: Array
    },
  },
  data () {
    return {
      showModal: false,
      prevLabel: '<i class="fas fa-angle-left" style="color:#ffffff;"></i>',
      nextLabel: '<i class="fas fa-angle-right" style="color:#ffffff;"></i>',
      URL_PREFIX,
      showLoading: true,
      movieDetail: Object,
    }
  },
  methods: {
    getMovieData: function () {
      axios.get(`http://127.0.0.1:8000/movies/${this.movie.movie_id}`)
        .then((res) => {
          console.log(res.data)
          this.movieDetail = res.data
        })
        .catch(err => console.log(err))
    },
    trueModal: function () {
      if (this.isLogin === true) {
        this.$store.dispatch('trueModal')
      }
    },
    selectMovie: function (movieId) {
      this.$store.dispatch('selectMovie', movieId)
    },
  },
}
</script>

<style>
  .movie__poster:hover {
  transform: scale(1.1);
  cursor: pointer;
  }
  .movies__slide {
    width: 90%;
    height: 100%;
    text-align: center;
    margin: auto;
  }
  .movies {
    width: 100%;
    text-align: center;
    margin: auto;
  }
  .movie__poster {
    border-radius: 15px;
    transition: 0.5s;
    height: 409.55px;
    margin-bottom: 20px;
    width: 286px;
  }
  .movie__poster:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
</style>