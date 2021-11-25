<template>
  <div>
    <b>비평 목록</b>
    <br>
    <!--  -->
    <div class="movies">
      <div class="movies__slide">
        <h3 class="d-flex justify-content-start font-weight-bold" style="color: black">비평목록</h3>
        <carousel
          :navigationEnabled="true"
          :navigation-next-label="nextLabel"
          :navigation-prev-label="prevLabel"
          :paginationEnabled="false"
          :perPageCustom="[[0, 1],[650,2],[1020,3],[1340,4],[1660,5],[2000,6],[2350,7],[2800, 8]]">

          <!-- <button class="btn btn--primary mx-auto" @click="$refs.modalName.openModal()">Open modal</button> -->
          <slide
            class="mt-3"
            v-for="review in reviews"
            :key="review.id"
            > 

            <!-- modal 연결 방법 다시 생각하기 -->
            <div @click="[selectMovie(movie.id), showMovieModal()]">
              <template v-if="review.poster_path.slice(0,4) == 'http'" style="text-align: center;">
                <router-link :to="{name: 'ReviewDetail', params: { reviewId: review.id }}">
                  <img width="100%" class="movie__poster" :src="review.poster_path" alt="">
                  {{ review.movie_title }}
                </router-link>
              </template>

              <template v-else style="text-align: center;">
                <router-link :to="{name: 'ReviewDetail', params: { reviewId: review.id }}">
                  <img width="100%" class="movie__poster" :src="'https://image.tmdb.org/t/p/w500'+review.poster_path" alt="">
                  {{ review.movie_title }}
                </router-link>
              </template>
            </div>

          </slide>

        </carousel>
      </div>
    </div>
    <!--  -->
    <!-- <span
      v-for="review in reviews" 
      :key="review.id"
      :review="review"
    >
      <router-link :to="{name: 'ReviewDetail', params: { reviewId: review.id }}">{{ review.movie_title }} | </router-link>
    </span> -->
    <div>
      <my-review-list-item>
      </my-review-list-item>
    </div>
  </div>
</template>

<script>
import MyReviewListItem from '@/components/MyReviewListItem'
import { Carousel, Slide } from "vue-carousel"

const URL_PREFIX = 'https://image.tmdb.org/t/p/w500'


export default {
  name: 'MyReviewList',
  data: function() {
    return{
      prevLabel: '<i class="fas fa-angle-left" style="color:#ffffff;"></i>',
      nextLabel: '<i class="fas fa-angle-right" style="color:#ffffff;"></i>',
      URL_PREFIX,
    }
  },
  props: [
    'reviews',
    'reviewsMovieTitle',
    'reviewsMoviePoster',
    ],
  components: {
    MyReviewListItem,
    Carousel,
    Slide,
  },
  created: function() {
    // console.log(this.reviews)
    // console.log(this.Reviews_movieTitle)
    // console.log(this.reviewsMovieTitle)
  },
  updated: function() {
    // this.Reviews_movieTitle = this.reviewsMovieTitle
    // console.log(this.Reviews_movieTitle)
  }
}
</script>

<style>

</style>