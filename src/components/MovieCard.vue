<template>
  <div>
    <v-container>
      <div class="card" >
      <v-card 
        class="movie_card"
        width="286px" height="409.55px"
        v-for="(movie, idx) in movies"
        :key="idx">
        <div v-b-modal.modal-scrollable @click="selectMovie(movie.id)">
          <template v-if="movie.poster_path.slice(0,4) == 'http'">
            <img width="100%" :src="movie.poster_path" alt="">
          </template>

          <template v-else>
            <img width="100%" :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path" alt="">
          </template>
        </div>
      </v-card>
      </div>

      <!-- <div>
      <v-card 
        class="movie_card"
        @mouseover="active = !active"
        width="400px" height="620px"
        v-for="(movie, idx) in movies"
        :key="idx">
          <template v-if="movie.poster_path.slice(0,4) == 'http'">
            <img width="100%" :src="movie.poster_path" alt="">
          </template>

          <template v-else>
            <img width="100%" :src="'https://image.tmdb.org/t/p/w500'+movie.poster_path" alt="">
          </template>
        <v-card-text>
          <div class="content_genres">
            <span 
              class="content_genre"
              v-for="genre in movie.genre_ids"
              :key="genre.id">
              {{ genre |  findGenre}}
            </span>
          </div> 
        </v-card-text>
        <v-card-title> {{movie.title}} </v-card-title>
      </v-card>
      </div> -->
    </v-container>
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
  // data() {
  //   return {
  //     active: false
  //   }
  // },
  // data: function() {
  //   return {
  //     genres_list:{}
  //   }
  // },
  props: {
    movies: {
      type: Array
    },
    isLogin: {
      type: Boolean
    }
  },
  // created: function() {
  //   axios.get(`http://127.0.0.1:8000/genre/movie/list`)
  //     .then((res) => {
  //       this.genres_list = res.data
  //       console.log(res.data)
  //     })
  //       .catch(err => console.log(err))
  // }
  // methods: {
  //   mouseover: function () {
  //     alert('mouseover')
  //   }
  // },
  filters: {
    findGenre: function (value) {
      if (value === 12) {
        return '모험'
      } else if (value === 14) {
        return '판타지'
      } else if (value === 14) {
        return '애니메이션'
      } else if (value === 16) {
        return '드라마'
      } else if (value === 18) {
        return '공포'
      } else if (value === 27) {
        return '액션'
      } else if (value === 28) {
        return '코미디'
      } else if (value === 35) {
        return '역사'
      } else if (value === 36) {
        return '서부'
      } else if (value === 53) {
        return '스릴러'
      } else if (value === 80) {
        return '범죄'
      } else if (value === 99) {
        return '다큐멘터리'
      } else if (value === 878) {
        return 'SF'
      } else if (value === 9648) {
        return '미스터리'
      } else if (value === 10402) {
        return '음악'
      } else if (value === 10749) {
        return '로맨스'
      } else if (value === 10751) {
        return '가족'
      } else if (value === 10752) {
        return '전쟁'
      } else if (value === 10770) {
        return 'TV 영화'
      }
    },
  },
}
</script>

<style>
  .movie_card{
    box-shadow: 0px 2px 2px #F3F3F3;
  }
</style>