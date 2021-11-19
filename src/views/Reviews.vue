<template>
  <div>
    <h1>reviews</h1>
    <review-list>
    </review-list>
  </div>
</template>

<script>
import ReviewList from '@/components/ReviewList'

export default {
  name: 'Reviews',
  components: {
    ReviewList,
  },
  created: function () {
    if (localStorage.getItem('jwt')) {
      console.log('hi')
    } else {
      this.$router.push({ name: 'Login' })
    }
  },


}
</script>

<style>

</style>