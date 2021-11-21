<template>
  <div>
    <h1>This is profile</h1>
    <div>
      <user-profile>
      </user-profile>
    </div>
    <hr>
    <div>
      <like-genre>
      </like-genre>
    </div>
    <hr>
    <div>
      <my-review-list>
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

  methods: {

    created: function () {
      if (localStorage.getItem('jwt')) {
        this.getReviews()
      } else {
        this.$router.push({name: 'Login'})
      }
    },
  },
}
</script>

<style>

</style>