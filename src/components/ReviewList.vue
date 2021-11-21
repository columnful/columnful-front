<template>
  <div>
    <body
      v-for="review in reviews"
      :key="review.id"
      :review="review">
      {{ review.title }}
    </body>
  </div>
</template>

<script>
import axios from'axios'
// import { mapState } from 'vuex'
// // import ReviewListItem from '@/components/ReviewListItem'

export default {
  name: 'ReviewList',
  // components: {
  //   ReviewListItem,
  // },
  // data () {}
  // computed: {
  //   ...mapState([
  //     'reviews'
  //   ])
  // }
  data() {
    return {
      reviews: []
    }
  },
  methods: {
    setToken: function () {
      const token = localStorage.getItem('jwt')
      const config = {
          Authorization: `JWT ${token}`
      }
      return config
    },
    getReviews: function () {
      axios({
        method:'get',
        url: 'http://127.0.0.1:8000/reviews/reviews/',
        headers:this.setToken()
      })
        .then(res => {
          console.log(res)
          this.reviews = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  /* 
  login 해야만 review 게시판을 접근할 수 있는 기능을 주석 처리한 이유
  : 실제 우리 서비스에서 로그인 해야만 보여주는게 이익이 될지, 로그인 없이 보여주는 게 이익이 될지 모르고 
    개발 단게에서는 불편할 수 있어 주석 처리 하였습니다.   
  */
  created: function () {
    this.getReviews()
    // if (localStorage.getItem('jwt')) {
    //   this.getReviews()
    // } else {
    //   this.$router.push({name: 'Login'})
    // }
  }

}
</script>

<style>

</style>