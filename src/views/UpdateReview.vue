<template>
  <div>
    <br>
    <h1 class="font-weight-bolder text-center mb-0">Update Review</h1>
    <br>
    <form class="container" @submit.prevent>
      <div class="form-group">
        <ul>
          <li>
            <label for="exampleInputEmail1">Title</label>
            <input type="text" class="form-control name2" id="exampleInputEmail1" aria-describedby="emailHelp"  v-model.trim="review.title">
          </li>
        </ul>
      </div>
      <!--  -->
      <div>
        <ul>
          <li>
            <label for="movie-title">Movie_Title</label>
            <i class="fas fa-search">
              <input class="form-control movie-title" id="movie-title" v-model.trim="review.movie_title" @input="submitAutoComplete" type="text" style="margin-bottom : 15px;">
            </i>
          </li>
        </ul>
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
      </div>
      <!--  --> 
      <div class="form-group">
        <ul>
          <li>
            <label for="exampleFormControlTextarea1">Content</label>
            <textarea class="form-control message2" id="exampleFormControlTextarea1" rows="15"  v-model.trim="review.content"></textarea>
          </li>
        </ul>
      </div>
      <button id="input-submit" class="w3-bar-item w3-button tablink " @click="forUpdate"><i class="fa fa-plane w3-margin-right"></i>퇴고하기</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'UpdateReview',
  data: function () {
    return {
      reviewId: '',
      review: '',
      // title: '',
      // content: '',
      // reviewComment: '', 
      // newRank: 5.0,
      // 
      movieInput: null,
      result: null,
      isActive: false,
      searchQuery: '',
      // names: names,
      // 
    }
  },
  mounted: function () {
    // this.reviewComment = this.updateReview.comment
    // this.newRank = this.updateReview.rank/2
  },
  props: {
    updateReview: {
      type: Object
    },
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

    forUpdate: function () {
      const config = this.setToken()
      const isExist = this.$store.state.movies_title.includes(this.review.movie_title)
      if (isExist) {
        axios.put(`http://127.0.0.1:8000/reviews/reviews/${this.reviewId}/`, {'title': this.review.title, 'movie_title': this.review.movie_title, 'content': this.review.content}, config)
          .then((res) => {
            console.log(res)
            this.$router.push({name: 'ReviewDetail', params: {'review_id': this.review.id }})
          })
          .catch(err => console.log(err))
      } else {
        console.log('영화를 선택하세요')
      }
    },
    // 
    submitAutoComplete() {
      const autocomplete = document.querySelector(".autocomplete");
      if (this.review.movie_title) {
        autocomplete.classList.remove("disabled");
        autocomplete.style.display = 'block';
        this.result = this.$store.state.movies_title.filter((movie) => {
          return movie.match(new RegExp("^" + this.review.movie_title, "i"));
        });
      } else {
        autocomplete.classList.add("disabled");
      }
    },
    searchMovieAdd() {
      console.log(this.i)
      this.movieTitle = this.res
      this.review.movie_title = this.movieTitle
    },
    changeValue(str) {
      const autocomplete = document.querySelector(".autocomplete");
      console.log(`change value: ${str}`);
      this.isActive = false;
      this.review.movie_title = str;
      console.log(autocomplete)
      autocomplete.classList.add("disabled");
      autocomplete.style.display = 'none';

    },
    selectValue(keycode, str) {
      console.log(keycode, str)
      console.log('이거')
      // 현재 쓰이지 않고 있음
      // console.log(this.$store.state.popular_movies[0])
    },
    // 


    // submitReview: function () {
    //   const config = this.setToken()
    //   const data = {
    //     'comment': this.reviewComment,
    //     'rank': this.newRank*2
    //   }
    //   axios.put(`http:///127.0.0.1:8000/movies/${this.updateReview.movie_id}/review/${this.updateReview.id}/`, data, config)
    //     .then((res) => {
    //       this.$emit('update-review',res.data)
    //     })
    //     .catch(err => console.log(err))
    // },
  },

  created: function () {
    this.reviewId = this.$route.params.reviewId
    this.review = this.$route.params.review
    // this.title = this.$route.params.review.title
    // this.content = this.$route.params.review.content
    console.log(this.review)
    this.$store.commit('removeMoviesTitle')
    this.$store.commit('getMoviesTitle', this.$store.state.popular_movies)
    // this.forUpdate()
  },
}
</script>

<style scoped>
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

</style>