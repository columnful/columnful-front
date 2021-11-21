<template>
  <div>
    <body
      :key="review.id"
      :review="review">
      <div>
        {{ review.title }}
      </div>
      {{ review.id }} 번째 글, 비평가 : {{ review.username }}
      <hr>
      {{ review.content }}
      <hr>
      <div v-if="review.username === this.username">
        <button on id="delete-review" class="w3-bar-item w3-button tablink" @click="deleteReview"><i class="fa fa-plane w3-margin-right"></i>Delete</button>
      </div>
    </body>
  </div>
</template>

<script>
// import CommentList from '@/components/CommentList'
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
    // CommentList
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
    // updateArticle: function (article) {
    //   this.$router.push({name: 'UpdateArticle',
    //   params: { article }})
    // },
    // createComment: function () {
    //   const config = this.setToken()
    //   axios.post(`http://127.0.0.1:8000/community/${this.category}/article/${this.articleId}/comment/`,{ content: this.commentContent },config)
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
</style>