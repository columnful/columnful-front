<template>
  <div>
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
      <p class="release text-left ml-1"> {{ release_date }} </p>
      <p class="detail__title text-left"> {{ title }} </p>
      <div class="detail__release d-flex">
        <!-- <p class="runtime"> {{ runtime }} mins</p> -->
      </div>

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
      <div class="datail__buttons d-flex pt-5">
        <img class="mr-4" src="../assets/icon/movie/TRAILER.png">
        <img class="button_like mr-4" src="../assets/icon/movie/LIKE_BTN2.png">
        <router-link to="/reviews/create/">
          <img class="button_write mr-2" src="../assets/icon/movie/WRITE.png">
        </router-link>
        
      </div>
    </div>
    </div>

    <div class="deatail__recommendation p-10 ml-10 mt-10">
      <p class="detail__recommendation-text text-left mb-4">MORE LIKE THIS</p>
      <MovieCard class="mb-20" :recommendations="recommendations" />
      
      <MovieCard :recommendations="similars" />
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'
import axios from 'axios'

const TMDB_API_KEY = process.env.VUE_APP_TMDB_API_KEY

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
    recommendations: [],
  },
  data () {
    return {
      similars: [],
    }
  },
  components: {
    // MovieCardItem,
    MovieCard
  },
  created: function() {
    axios.get('https://api.themoviedb.org/3/movie/' + this.selectedMovieID + '/similar', {
        params: {
          api_key: TMDB_API_KEY,
          language: "ko-KR"
        }
      })
      .then((res) =>{
        this.similars = res.data.results
        console.log(this.similars)
      })
      .catch(err => console.log(err))
  }

}

</script>

<style>

  .youtube_frame {
    padding: 20;
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
  .detail__recommendation-text {
    color: rgb(194, 194, 194);
    font-weight: bold;
    font-size: 22px;
    font-family: Montserrat, sans-serif;
  }
  .detail__release {
    color: rgb(194, 194, 194);
  }
  .release {
    color: rgb(194, 194, 194);
  }
</style>