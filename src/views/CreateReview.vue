<template>
  <div id="createReview" >
    <div>
      <br>
      <h1 class="font-weight-bolder text-center mb-0">New Review</h1>
      <br>
    </div>
    <form class="container" @submit.prevent>
      <div class="form-group">
        <ul>
          <li>
            <label for="title1">Title</label>
            <input type="text" class="form-control title" id="title1" aria-describedby="emailHelp" v-model.trim="title">
          </li>
        </ul>
      </div>
      <!-- <div class="form-group">
        <ul>
          <li>
            <input type="text" class="form-control title" id="movie-title" aria-describedby="emailHelp" v-model.trim="movieTitle">
          </li>
        </ul>
      </div> -->
      <!--  -->
      <div>
        <ul>
          <li>
            <label for="movie-title">Movie_Title</label>
            <i class="fas fa-search">
              <input class="form-control movie-title" id="movie-title" v-model.trim="movieInput" @input="submitAutoComplete" type="text" style="margin-bottom : 15px;" />
              <div class="autocomplete disabled">
                  <!-- @click="searchSkillAdd" -->
                <div
                  style="cursor: pointer"
                  v-for="(res,i) in result"
                  :key="i"
                  v-on:click="changeValue(res)"
                  v-on:keyup.enter="selectValue('enter', res)"
                >{{ res }}</div>
              </div>
            </i>
          </li>
        </ul>
      </div>
      <!--  -->
      <div class="form-group">
        <ul>
          <li>
            <label for="Textarea1">Content</label>
            <textarea class="form-control content" id="Textarea1" rows="15" v-model.trim="content"></textarea>
            <!-- <input contentEditable="true" class="form-control content" id="Textarea1" line-height="500px" v-model.trim="content"> -->
          </li>
        </ul>
      </div>
      <button id="input-submit" class="w3-bar-item w3-button tablink " @click="createReview"><i class="fa fa-plane w3-margin-right"></i>투고하기</button>
    </form>
  </div>
</template>

<script>
import axios from'axios'
// import skills from "../../skills.js";
export default {
  name: 'CreateReview',
  data: function () {
    return {
      content: '',
      title: '',
      movieTitle: '',
      // 
      movieInput: null,
      result: null,
      isActive: false,
      searchQuery: '',
      // names: names,
      // 
    }
  },
  methods: {
    setToken: function () {
      const token = localStorage.getItem('jwt')
      const config = {
        headers: {
          Authorization: `JWT ${token}`
        }
      }
      return config
    },
    createReview: function () {
      const config = this.setToken()
      const ReviewItem = {
        content: this.content,
        title: this.title,
        movie_title: this.movieInput,
      }
      const isExist = this.$store.state.movies_title.includes(this.movieInput)
      if (isExist) {
        console.log(ReviewItem)
        if (ReviewItem.title) {
          axios.post(`http://127.0.0.1:8000/reviews/reviews/`, ReviewItem, config)
            .then((res) => {
              console.log(res)
              this.$router.push({ name: 'Reviews' })
              this.title = ''
            })
            .catch((err) => {
              console.log(err)
            })
            // this.content = null,
        }
      } else {
        console.log('영화를 선택하세요')
      }
    },
    // 
    submitAutoComplete() {
      const autocomplete = document.querySelector(".autocomplete");
      if (this.movieInput) {
        autocomplete.classList.remove("disabled");
        autocomplete.style.display = 'block';
        this.result = this.$store.state.movies_title.filter((movie) => {
          return movie.match(new RegExp("^" + this.movieInput, "i"));
        });
      } else {
        autocomplete.classList.add("disabled");
      }
    },
    searchMovieAdd() {
      console.log(this.i)
      this.movieTitle = this.res
      this.movieInput = this.movieTitle
    },
    changeValue(str) {
      const autocomplete = document.querySelector(".autocomplete");
      console.log(`change value: ${str}`);
      this.isActive = false;
      this.movieInput = str;
      console.log(autocomplete)
      autocomplete.style.display = 'none';
    },
    selectValue(keycode, str) {
      console.log(keycode, str)
      console.log('이거')
      // 현재 쓰이지 않고 있음
      // console.log(this.$store.state.popular_movies[0])
    },
    // 
  },
  created: function() {
    this.$store.commit('removeMoviesTitle')
    this.$store.commit('getMoviesTitle', this.$store.state.popular_movies)
    // console.log(this.$store.state.movies_title)
    // console.log(this.$store.state.popular_movies)
    // console.log(this.$store.state.movies_title)
  }
  // 
  
  // 
}
</script>

<style scoped>
  /* #createReview {
    padding-top: 1rem;
    position: absolute;
    width: 100%;
    height: 100%;
  } */
  #title1 {
    /* background: rgba(255, 255, 255, 0.4) url(http://luismruiz.com/img/gemicon_name.png) no-repeat scroll 16px 16px;  */
    /* padding-left:10px;
    padding-right:10px; */
    width: 800px;
  }
  #Textarea1 {
    /* background: rgba(255, 255, 255, 0.4) url(http://luismruiz.com/img/gemicon_message.png) no-repeat scroll 500px 500px; */
    /* padding-left:10px;
    padding-right:10px; */
    width: 100%;
    /* height: 400px; */
  }
  .background {
    z-index: 1;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 120px 100px 250px #000000, inset -120px -100px 250px #000000;
    /* background-image: url("../../assets/bg-7.jpg"); */
    min-height: 100%;
    background-position: center;
    background-size: cover;
  }
  label, input, textarea {
	transition: color 0.4s ease, background-color 0.1s ease-in-out;
  }
  label {
    color: lighten(#888888, 15);
    font-size: 70%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    position: absolute;
    top: 10px;
    left: 10px;
    /* input:focus+& {
      color: darken(#0074D9, 10);
      font-weight: bold;
      letter-spacing: -0.01em;
    } */
  }
  input, textarea {
    background-color: transparent;
    border: none;
    color: darken(#888888, 15);
    font-size: 18px;
    margin: 9px 0 7px 0;
    margin: 0;
    padding: 2em 10px 10px 10px;
    outline: none;
    width: 100%;
      /* &:focus {
        color: #000;
        background-color: lighten(#888888, 40);
        box-shadow: 0px 3px 4px -2px rgba(0,0,115,0.25) inset;
      } */
  }
  ul {
    background-color: #fffdfa;
    border: 5px solid #888888;
    list-style-type: none;
    margin: 1em auto;
    padding: 0;
    width: 800px;
  }
  li {
    border-bottom: 1px solid lighten(#888888, 25);
    margin-top: -1px;
    position: relative;
  }
  h1 {
    margin: 0;
  }
</style>