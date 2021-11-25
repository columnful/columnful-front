<template>
  <div>
    <div class="video-container">
      <iframe :src="youtubeURL" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <h1 class="detail__title"> {{ title }} </h1>
    <div 
    class="detail__genres"
    v-for="genre in genres"
    :key="genre.id">
      <div style="padding-top: 0.1em; padding-bottom: 0.1rem" class="detaill__genre-badge text-xs px-3 bg-gray-200 text-gray-800 rounded-full">{{genre.name}}</div>
    </div>
    <div class="detail__vote-avg"> {{ vote_average }} </div>
    <div class="detail__overview"> {{ overview }} </div>

    <div class="deatail__recommendation">
      <p class="detail__recommendation-text">MORE LIKE THIS</p>
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
    title: [],
  },

}

</script>

<style>
  .video-container {
    position: relative;
    width: 70%
    /* padding-top: 56.25% */
  }
  .detail__title {
    color: whitesmoke;
    font-weight: bold;
    font-size: 300%
  }
</style>