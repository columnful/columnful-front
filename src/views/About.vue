<template>
  <div id="app">
    <div> 
      <t-modal ref="modal">hello world</t-modal>
      <button @click="$refs.modal.show()" type="button">Show modal</button>
      <button @click="$refs.modal.hide()" type="button">Hide modal</button>
    </div>
    <button class="btn btn--primary mx-auto" @click="$refs.modalName.openModal()">Open modal</button>
    
    <modal ref="modalName">
      <template v-slot:header>
        <h1>DETAILS</h1>
      </template>

      <template v-slot:body>
        <Content/>
        <Login/>
      </template>

      <template v-slot:footer>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal"
import Content from "@/components/Content"
import Login from '@/components/Login'
// import axios from 'axios'

// const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'
// const YOUTUBE_API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
// const MOVIE_DB_API_URL_SIMILAR = `https://api.themoviedb.org/3/movie`
// const TMDB_API_KEY = process.env.VUE_APP_TMDB_API_KEY

export default {
  name: "About",
  components: {
    Modal,
    Content,
    Login
  },
  // data: function() {
  //   return {
  //     movieDetail: {},
  //     youtubeURL: 'https://www.youtube.com/embed/',
  //     similar_movies: [],
  //   }
  // },
  // computed: {
  //   modalMovieId: function () {
  //     return this.$store.state.selectedMovie
  //   },
  //   voteAverage: function () {
  //     return this.movieDetail.vote_average/2
  //   },
  // },
  // created: function () {
  //   axios.get('https://api.themoviedb.org/3/movie/popular', {
  //     params: {
  //       api_key: TMDB_API_KEY,
  //       language: "ko-KR",
  //       region: "kr"
  //     }
  //   })
  //   .then((res) =>{
  //     this.popular_movies = res.data.results
  //     console.log(res.data)
  //   })
  //   .catch(err => console.log(err))
  // }
  // watch: {
  //   modalMovieId: function (newVal) {
  //     this.youtubeURL = 'https://www.youtube.com/embed/'
  //     axios.get(`http://127.0.0.1:8000/movies/${newVal}`)
  //       .then((res) => {
  //         this.movieDetail = res.data
  //         axios.get(MOVIE_DB_API_URL_SIMILAR+'/'+newVal+'/similar', {
  //           params: {
  //             api_key: MOVIE_DB_API_KEY,
  //             language: 'ko-KR',
  //             page: 1
  //           }
  //         })
  //           .then((res) => {
  //             this.similar_movies = res.data.results
  //           })
  //           .catch(err => console.log(err))
  //         const query = this.movieDetail.original_title + ' trailer'
  //         axios.get(YOUTUBE_API_URL, {
  //           params: {
  //             key: YOUTUBE_API_KEY,
  //             part: 'snippet',
  //             type: 'video',
  //             q: query,
  //             maxResults: 1,
  //           }
  //         })
  //           .then((res) => {
  //             this.youtubeURL = `https://www.youtube.com/embed/${res.data.items[0].id.videoId}`
  //           })
  //           .catch(err => console.log(err))
  //       })
  //       .catch(err => console.log(err))
  //     // this.$store.dispatch('selectMovie', 0)
  //   },
  // },
  // methods: {
  //   selectMovie: function (data) {
  //     this.$store.dispatch('selectMovie', data)
  //   },
  // },
  // filters: {
  //   findGenre: function (value) {
  //     if (value === 12) {
  //       return '모험'
  //     } else if (value === 14) {
  //       return '판타지'
  //     } else if (value === 14) {
  //       return '애니메이션'
  //     } else if (value === 16) {
  //       return '드라마'
  //     } else if (value === 18) {
  //       return '공포'
  //     } else if (value === 27) {
  //       return '액션'
  //     } else if (value === 28) {
  //       return '코미디'
  //     } else if (value === 35) {
  //       return '역사'
  //     } else if (value === 36) {
  //       return '서부'
  //     } else if (value === 53) {
  //       return '스릴러'
  //     } else if (value === 80) {
  //       return '범죄'
  //     } else if (value === 99) {
  //       return '다큐멘터리'
  //     } else if (value === 878) {
  //       return 'SF'
  //     } else if (value === 9648) {
  //       return '미스터리'
  //     } else if (value === 10402) {
  //       return '음악'
  //     } else if (value === 10749) {
  //       return '로맨스'
  //     } else if (value === 10751) {
  //       return '가족'
  //     } else if (value === 10752) {
  //       return '전쟁'
  //     } else if (value === 10770) {
  //       return 'TV 영화'
  //     }
  //   },
  // },
}
</script>

<style lang="scss">
.btn {
  padding: 8px 16px;
  border-radius: 5px;
  &--primary {
    background-color: green;
    color: #fff;
  }
  &--secondary {
    background-color: #dddd;
    color: #000;
  }
}

// utilities
.overflow-hidden {
  overflow: hidden;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.d-flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}
.justify-content-between {
  justify-content: space-between;
}
// reset
button {
  background: none;
  border: none;
  outline: inherit;
  cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
</style>
