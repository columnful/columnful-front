<template>
  <div>
    <b>좋아하는 영화</b>
    <div>
      <like-movie-list-item>
      </like-movie-list-item>
    </div>
  </div>
</template>

<script>
import LikeMovieListItem from '@/components/LikeMovieListItem'

export default {
  name: 'LikeMovieList',
  components: {
    LikeMovieListItem
  }
}
</script>

<style>

</style>