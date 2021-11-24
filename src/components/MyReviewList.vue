<template>
  <div>
    <b>비평 목록</b>
    <br>
    <span
      v-for="Review in Reviews" 
      :key="Review.id"
      :Review="Review"
    >
      <span>{{ Review }} | </span>
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
      Reviews_movieTitle: [],
    }
  },
  props: ['Reviews'],
  components: {
    MyReviewListItem
  },
  created: function() {
    console.log(this.Reviews)
    console.log(this.Reviews_movieTitle)
  },
  updated: function() {
    this.Reviews_movieTitle = this.Reviews
    // console.log(this.Reviews_movieTitle)
  }
}
</script>

<style>

</style>