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
  created: function () {
    if (localStorage.getItem('jwt')) {
      this.getReviews()
    } else {
      this.$router.push({name: 'Login'})
    }
  }

}
</script>

<style>

</style>