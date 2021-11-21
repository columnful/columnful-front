<template>
  <div>
    <b>비평 목록</b>
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