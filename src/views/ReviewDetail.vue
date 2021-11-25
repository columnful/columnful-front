<template>
  <div>
    <body
      :key="review.id"
      :review="review">
      <ul>
        <li>
          <div style="white-space: pre-line; text-align: left; margin-left: 10px; font-size: 18px; padding-top: 20px; line-height: 2;">
            <div style="line-height: 1;">
              <p class="text-xs">{{ review.movie_title }}</p>
              <p class="text-left text-m mt-1 mb-2" style="font-weight:bold;">{{ review.title }}</p>
              <div class="mb-3 written"><I>written by. {{review.username}}</I></div>
            </div>
            <!-- 비평가 : <router-link :to="{name: 'Profile', params: { profileUsername: review.username }}">{{ review.username }}</router-link>  -->
            <hr>
            <div class="my-3">
              <!-- <template v-if="review.poster_path == 'http'" style="text-align: center;">
                <router-link :to="{name: 'ReviewDetail', params: { reviewId: review.id }}">
                  <img width="100%" class="movie__poster" :src="review.poster_path" alt="">
                </router-link>
              </template>
              <template v-else style="text-align: center;">
                <router-link :to="{name: 'ReviewDetail', params: { reviewId: review.id }}">
                  <img width="100%" class="movie__poster" :src="'https://image.tmdb.org/t/p/w500'+review.poster_path" alt="">
                </router-link>
              </template> -->
            {{ review.content }}
            </div>
            <hr>
              <div class="content-center">
                <div class="d-flex mt-3 mb-2 review-ud justify-end" v-if="review.username === this.username" style="text-align: right; width: 800px">
                  <button class="mr-5" @click="updateReview">UPDATE  </button>
                  <button on id="delete-review" class="mr-10" @click="deleteReview"><i class="fa fa-plane w3-margin-right"></i>DELETE</button>
                </div>
              </div>
            <div class="reviewdetail_footer d-flex ">
            </div>
          </div>
        </li>
      </ul>
    </body>
    <hr>
    <comment-list
      :reviewId="reviewId"
      :newComment="newComment"
    />
    <!-- <ul>
      <li>
        <form id="comment" @submit.prevent="createComment">
          <input id="commentForm" class="form-control form-control-sm" v-model="commentContent" type="text" placeholder="댓글을 입력해주세요.">
          <button>댓글 달기</button>
        </form>
      </li>
    </ul> -->
  </div>
</template>

<script>
import CommentList from '@/components/CommentList'
// import moment from 'moment'
import axios from 'axios'
export default {
  name: 'ReviewDetail',
  data: function () {
    return {
      reviewId: '',
      review: '',
      commentContent: '',
      newComment:   {},
      username: '',
    }
  },
  // filters: {
  //   formatDate: function(value) {
  //     if (value) {
  //       return moment(String(value)).format('YY.MM.DD hh:mm')
  //     }
  //   }
  // },
  computed: {

  },
  components: {
    CommentList
  },
  created: function () {
    this.username = localStorage.getItem('username')
    this.reviewId = this.$route.params.reviewId
    this.getReview()
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
    getReview: function () {
      const config = this.setToken()
      axios.get(`http://127.0.0.1:8000/reviews/reviews/${this.reviewId}`, config)
        .then((res) => {
          this.review = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },

    deleteReview: function () {
      const config = this.setToken()
      axios.delete(`http://127.0.0.1:8000/reviews/reviews/${this.reviewId}/`, config)
        .then(() => {
          this.$router.push({name: 'Reviews'})
        })
        .catch(err => console.log(err))
    },

    updateReview: function () {
      this.$router.push({name: 'UpdateReview',
      params: { review: this.review }})
    },
    // updateArticle: function (article) {
    //   this.$router.push({name: 'UpdateArticle',
    //   params: { article }})
    // },
    // createComment: function () {
    //   const config = this.setToken()
    //   axios.post(`http://127.0.0.1:8000/reviews/reviews/${this.reviewId}/comment/`,{ content: this.commentContent },config)
    //     .then((res) => {
    //       this.newComment = res.data
    //       this.commentContent = ''
    //     })
    //     .catch(err => { 
    //       console.log(err)
    //     })
    // },
  }
}
</script>

<style scoped>
  #app > div {
    color: black;
  }
  .bgimg {
    width: 100%;
    height: 100%;
    position: relative;
    background: no-repeat center center/cover;
  }
  .bgimg::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 120px 100px 250px #000000, inset -120px -100px 250px #000000;
  }
  .article {
    color: #f4f4f4;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    padding-top: 8rem;
    position: relative;
    z-index: 2;
  }
  label, input, textarea, #text {
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
  input, textarea, #text {
    background-color: transparent;
    border: none;
    color: darken(#888888, 15);
    font-size: 14px;
    /* margin: 9px 0 7px 0; */
    margin: 0;
    padding: 5px 5px 5px 5px;
    outline: none;
    width: 100%;

      /* &:focus {
        color: #000;
        background-color: lighten(#888888, 40);
        box-shadow: 0px 3px 4px -2px rgba(0,0,115,0.25) inset;
      } */
  }

  form {
    background-color: transparent;
    border: none;
    color: darken(#888888, 10);
    font-size: 18px;
    /* margin: 9px 0 7px 0; */
    margin: 0;
    padding: 5px 0px 5px 0px;
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
    border: 2px solid #888888;
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
  #comment {
    display: inline-block;
    width: 100%;
  }
  #commentForm {
    width: 85%;
  }
  .review-ud {
    color: rgb(80, 80, 80) !important;
  }
  .written {
    font-family: 'Times New Roman W05 Italic', Times, serif;
  }
</style>