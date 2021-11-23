<template>
  <div id="app">
    <div> 
      <t-modal ref="modal">hello world</t-modal>
      <button @click="$refs.modal.show()" type="button">Show modal</button>
      <button @click="$refs.modal.hide()" type="button">Hide modal</button>
   </div>


    <button class="btn btn--primary mx-auto" @click="$refs.modalName.openModal()">Open modal</button>

    <h1>Title page</h1>
    <p>I need to make the page scrollable to show multiple functionalities of this modal component that's why I'll add a lot of lorem ipsum :D</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed velit dignissim sodales ut eu sem integer vitae. Id aliquet lectus proin nibh nisl condimentum. Fringilla urna porttitor rhoncus dolor purus. Nam aliquam sem et tortor. Nisl vel pretium lectus quam id. Cras pulvinar mattis nunc sed. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Tristique magna sit amet purus. Fermentum et sollicitudin ac orci phasellus egestas tellus. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Felis eget nunc lobortis mattis aliquam faucibus. Tincidunt eget nullam non nisi est sit amet facilisis. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Nec nam aliquam sem et tortor consequat id. Commodo nulla facilisi nullam vehicula ipsum a. Elementum tempus egestas sed sed. Faucibus purus in massa tempor nec feugiat nisl pretium fusce.</p>
    <p>Arcu cursus vitae congue mauris rhoncus aenean. Tempor id eu nisl nunc mi. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Ut faucibus pulvinar elementum integer enim. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Eu non diam phasellus vestibulum lorem sed risus. Porttitor rhoncus dolor purus non enim praesent. Sit amet mauris commodo quis imperdiet. Lobortis feugiat vivamus at augue eget. Nibh tellus molestie nunc non blandit. Tellus mauris a diam maecenas sed enim ut. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Mattis aliquam faucibus purus in massa.</p>
    <p>Enim nec dui nunc mattis. Nisi lacus sed viverra tellus in. Cursus in hac habitasse platea dictumst quisque sagittis. Morbi tincidunt augue interdum velit. Sed blandit libero volutpat sed cras. A erat nam at lectus urna. Donec massa sapien faucibus et molestie. Fames ac turpis egestas sed tempus. Mauris rhoncus aenean vel elit scelerisque mauris. Vivamus at augue eget arcu dictum. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Ut consequat semper viverra nam. Ipsum dolor sit amet consectetur adipiscing elit. Donec enim diam vulputate ut pharetra sit.</p>
    <p>Arcu cursus vitae congue mauris rhoncus aenean. Tempor id eu nisl nunc mi. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Ut faucibus pulvinar elementum integer enim. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Eu non diam phasellus vestibulum lorem sed risus. Porttitor rhoncus dolor purus non enim praesent. Sit amet mauris commodo quis imperdiet. Lobortis feugiat vivamus at augue eget. Nibh tellus molestie nunc non blandit. Tellus mauris a diam maecenas sed enim ut. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Mattis aliquam faucibus purus in massa.</p>
    <p>Arcu cursus vitae congue mauris rhoncus aenean. Tempor id eu nisl nunc mi. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Ut faucibus pulvinar elementum integer enim. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Eu non diam phasellus vestibulum lorem sed risus. Porttitor rhoncus dolor purus non enim praesent. Sit amet mauris commodo quis imperdiet. Lobortis feugiat vivamus at augue eget. Nibh tellus molestie nunc non blandit. Tellus mauris a diam maecenas sed enim ut. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Mattis aliquam faucibus purus in massa.</p>
    <p>Enim nec dui nunc mattis. Nisi lacus sed viverra tellus in. Cursus in hac habitasse platea dictumst quisque sagittis. Morbi tincidunt augue interdum velit. Sed blandit libero volutpat sed cras. A erat nam at lectus urna. Donec massa sapien faucibus et molestie. Fames ac turpis egestas sed tempus. Mauris rhoncus aenean vel elit scelerisque mauris. Vivamus at augue eget arcu dictum. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Ut consequat semper viverra nam. Ipsum dolor sit amet consectetur adipiscing elit. Donec enim diam vulputate ut pharetra sit.</p>

    <modal ref="modalName">
      <template v-slot:header>
        <h1>Modal title</h1>
      </template>

      <template v-slot:body>
        <div class="video-container">
          <iframe :src="youtubeURL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <!-- <div class="descriptionsContainer">
          <p class="movieTitle"> {{ movie.original_title }} </p>
          <div class="genreNrate">
            <div class="genreBadge">
              <div 
                v-for="(genre, idx) in movieDetail.genres"
                :key="idx"
                style="padding-top: 0.1em; padding-bottom: 0.1rem; width: 100px" 
                class="space-x-2 text-xs px-3 bg-gray-200 text-gray-800 rounded-full">
                {{ genre | findGenre }}
                </div>
            </div>
          </div>
        </div> -->
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed velit dignissim sodales ut eu sem integer vitae. Id aliquet lectus proin nibh nisl condimentum. Fringilla urna porttitor rhoncus dolor purus. Nam aliquam sem et tortor. Nisl vel pretium lectus quam id. Cras pulvinar mattis nunc sed. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Tristique magna sit amet purus. Fermentum et sollicitudin ac orci phasellus egestas tellus. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Felis eget nunc lobortis mattis aliquam faucibus. Tincidunt eget nullam non nisi est sit amet facilisis. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Nec nam aliquam sem et tortor consequat id. Commodo nulla facilisi nullam vehicula ipsum a. Elementum tempus egestas sed sed. Faucibus purus in massa tempor nec feugiat nisl pretium fusce.</p>
        <p>Arcu cursus vitae congue mauris rhoncus aenean. Tempor id eu nisl nunc mi. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Ut faucibus pulvinar elementum integer enim. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Eu non diam phasellus vestibulum lorem sed risus. Porttitor rhoncus dolor purus non enim praesent. Sit amet mauris commodo quis imperdiet. Lobortis feugiat vivamus at augue eget. Nibh tellus molestie nunc non blandit. Tellus mauris a diam maecenas sed enim ut. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Mattis aliquam faucibus purus in massa.</p> -->
      </template>

      <template v-slot:footer>
        <!-- <div class="d-flex align-items-center justify-content-between">
          <button class="btn btn--secondary" @click="$refs.modalName.closeModal()">Cancel</button>
          <button class="btn btn--primary" @click="$refs.modalName.closeModal()">Save</button>
        </div> -->
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import axios from 'axios'

const TMDB_API_KEY = process.env.VUE_APP_TMDB_API_KEY

// const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'
// const YOUTUBE_API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
// const MOVIE_DB_API_URL_SIMILAR = `https://api.themoviedb.org/3/movie`
// const MOVIE_DB_API_KEY = process.env.VUE_APP_TMDB_API_KEY

export default {
  name: "About",
  components: {
    Modal
  },
  data: function() {
    return {
      movieDetail: {},
      youtubeURL: 'https://www.youtube.com/embed/',
      similar_movies: [],
    }
  },
  computed: {
    modalMovieId: function () {
      return this.$store.state.selectedMovie
    },
    voteAverage: function () {
      return this.movieDetail.vote_average/2
    },
  },
  created: function () {
    axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: TMDB_API_KEY,
        language: "ko-KR",
        region: "kr"
      }
    })
    .then((res) =>{
      this.popular_movies = res.data.results
      console.log(res.data)
    })
    .catch(err => console.log(err))
  }
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
