<template>
  <div>
    <h1>This is profile</h1>
    <div>
      <user-profile v-bind:userData="UserData">
      </user-profile>
      <div v-if="profileUsername != this.$store.state.username">
        <!-- <button @click="followUser" v-text="ButtonText"></button> -->
        <button v-if="Follow" @click="followUser"> 언팔하기 </button>
        <button v-else @click="followUser"> 팔로우하기 </button>
      </div>
    </div>
    <hr>
    <div>
      <like-genre>
      </like-genre>
    </div>
    <hr>
    <div>
      <my-review-list v-bind:reviews="Reviews">
      </my-review-list>
    </div>
    <hr>
    <div>
      <like-movie-list>
      </like-movie-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import UserProfile from '@/components/UserProfile'
import LikeGenre from '@/components/LikeGenre'
import MyReviewList from '@/components/MyReviewList'
import LikeMovieList from '@/components/LikeMovieList'

export default {
  name: 'Profile',
  components: {
    UserProfile,
    LikeGenre,
    MyReviewList,
    LikeMovieList,
  },

  data: function() {
    return {
      UserData: '',
      Follow: '',
      profileUsername: '',
      Reviews: [],
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

    getUser: function () {
      const config = this.setToken()
      axios.get(`http://127.0.0.1:8000/accounts/profile/${this.profileUsername}/`, config)
        .then((res) => {
          this.UserData = res.data
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    followUser: function () {
      const config = this.setToken()
      axios.get(`http://127.0.0.1:8000/accounts/profile/${this.profileUsername}/follow/`, config)
        .then((res) => {
          this.Follow = res.data
          this.isFollowing
          // console.log(this.Follow)

          // if (this.Follow) {
          //   this.ButtonText = '언팔로우하기'
          // } else {
          //   this.ButtonText = '팔로우하기'
          // }
          // console.log(this.ButtonText)
        })
        .catch(err => {
          console.log(err)
        })
    },

    getReviews: function () {
      const config = this.setToken()
      axios.get(`http://127.0.0.1:8000/reviews/reviews/get/${this.profileUsername}/`, config)
        .then((res) => {
          // console.log(res.data)
          // console.log(this.Reviews)
          res.data.forEach((review) => {
            this.Reviews.push(review.movie_title)
            // console.log(this.Reviews)
          })
          
        })
        .then((res) => {
          console.log(res)
          this.Reviews.forEach((movie_title) => {
            axios.get(`http://127.0.0.1:8000/movies/movie_poster/${movie_title}/`, config)
              .then((res) => {
                console.log(res.data)
              })

          })
        })

        .catch(err => {
          console.log(err)
        })
    },

    isFollowing: function () {
      return this.Follow
    },

  },
  // computed: {
  //   isFollowing: function () {
  //     return this.Follow
  //   },
  // },
  created: function () {
    if (localStorage.getItem('jwt')) {
      this.profileUsername = this.$route.params.profileUsername
      this.getUser()
      this.isFollowing()
      this.getReviews()
      if (this.profileUsername !== this.$store.state.username) {
        this.followUser()
        this.followUser()
      }

    } else {
      this.$router.push({name: 'Login'})
    }
  },
}
</script>

<style>

</style>