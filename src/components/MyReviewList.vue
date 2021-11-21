<template>
  <div>
    <b>나의 비평</b>
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
  components: {
    MyReviewListItem
  },
}
</script>

<style>

</style>