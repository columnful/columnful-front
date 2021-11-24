<template>
  <div>

  <div class="detail__bg-img" :style="{'background-image': 'url(https://image.tmdb.org/t/p/original' + backdrop_path + ')'}">
    {{backdrop_path}}
  </div>
  </div>
</template>

<script>

export default {
  name: "MovieModal",
  props: {
    selectedMovieID: [],
    backdrop_path: [],
    genres: [],
    original_title: [],
    overview: [],
    release_date: [],
    runtime: [],
    vote_average: [],
  },
}
</script>

<style>
  .detail__bg-img {
    width: 100%;
    /* height: 700px !important; */
  }
</style>