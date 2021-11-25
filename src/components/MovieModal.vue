<template>
  <div>
    <!-- <div class="you_thumbnail"
      :style="{'background-image': 'url(' + youtubeThumbnails+ ')'}">
    </div> -->
<!--     
    <img
      class="youtube_trailer_thumbnail"
      :src="youtubeThumbnails" alt=""> -->
    <div class="moviedetail__top d-flex pt-10">

    <div class="youtube_frame d-flex p-10 ml-10">
      <iframe 
        class="d-flex youtube_trailer"
        width="720"
        height="405"
        :src="youtubeURL" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        ></iframe>
    </div>

    <div class="moviedetail__content p-10 mr-10 ">
      <p class="detail__title pb-3 text-left"> {{ title }} </p>

      <div class="genres_group d-flex pb-4">
        <div 
        class="detail__genres d-flex p-1"
        v-for="genre in genres"
        :key="genre.id">
          <div class="detail__genre-badge px-3 rounded-full">{{genre.name}}</div>
        </div>
        <div class="datail__vote-avg d-flex ml-10">
          <img class="datail__vote-avg-star d-flex" src="../assets/images/logo/clarity_star-solid.png">
          <div class="detail__vote-avg-num ml-1"> {{ vote_average }} </div>
        </div>
      </div>
      <div class="detail__overview text-left"> {{ overview }} </div>
    </div>
    </div>

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
    youtubeThumbnails: [],
  },

}

</script>

<style>

  .youtube_frame {
    padding: 20;
    /* position: relative; */
    /* height: 500px;
    width: 40%; */
    /* padding-top: 56.25% */
  }
  .detail__title {
    color: rgb(222, 222, 222);
    font-weight: bold;
    font-size: 300%
  }
  .detail__genre-badge {
    background-color: rgba(150, 150, 150, 0.4);
    padding-top: 0.1em; 
    padding-bottom: 0.1rem;
    color: rgb(222, 222, 222);

  }
  .moviedetail__top {
    align-items: center;
  }
  .genres_group {
      align-items: center;
  }
  .detail__vote-avg-num {
    color:rgb(222, 222, 222);
    font-size: 18px;
  }
  .detail__overview {
    color: rgb(222, 222, 222);
  }
</style>