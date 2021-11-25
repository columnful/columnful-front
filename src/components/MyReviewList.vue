<template>
  <div>
    <b>비평 목록</b>
    <br>
    <span
      v-for="review in reviews" 
      :key="review.id"
      :review="review"
    >
      <router-link :to="{name: 'ReviewDetail', params: { reviewId: review.id }}">{{ review.movie_title }} | </router-link>
    </span>
    <div>
      <my-review-list-item>
      </my-review-list-item>
    </div>
  </div>
</template>

<script>
import MyReviewListItem from '@/components/MyReviewListItem'

export default {
  name: 'MyReviewList',
  data: function() {
    return{
      // Reviews_movieTitle: [],
    }
  },
  props: [
    'reviews',
    'reviewsMovieTitle',
    ],
  components: {
    MyReviewListItem
  },
  created: function() {
    // console.log(this.reviews)
    // console.log(this.Reviews_movieTitle)
    // console.log(this.reviewsMovieTitle)
  },
  updated: function() {
    // this.Reviews_movieTitle = this.reviewsMovieTitle
    // console.log(this.Reviews_movieTitle)
  }
}
</script>

<style>

</style>