<template>
  <div>
    <div class="video-container">
      <iframe :src="youtubeURL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
    youtubeURL: [],
  },

}

</script>

<style>
  .detail__bg-img {
    width: 100%;
    /* height: 700px !important; */
  }
</style>