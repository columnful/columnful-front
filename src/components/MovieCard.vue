<template>
  <div>
     <swiper class="swiper" :options="swiperOption"> 
        <swiper-slide v-for="(recommendation,idx) in recommendations" :key="idx">
          <MovieCardItem :recommendation="recommendation"/>
        </swiper-slide> 
        <!-- <div class="swiper-pagination" slot="pagination"></div>  -->
        <div class="swiper-button-prev" slot="button-prev"> 
          <span>&lt;</span></div> 
        <div class="swiper-button-next" slot="button-next"> <span>&gt;</span></div> 
      </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
import MovieCardItem from '@/components/MovieCardItem'

export default {
  name: "MovieCard",
  props: {
    recommendations: [],
    similars: [],
  },
  components:{
    swiper,
    swiperSlide,
    MovieCardItem
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 25,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      }
    }
  },
}
</script>

<style>
  .swiper-slide { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    text-align: center;  
  } 
  .swiper-button-prev {
    background-image: none;
    color: white;
  }
  .swiper-button-next {
    background-image: none;
    color: white;
  }
</style>