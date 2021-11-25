<template>
  <div class="home">
    <div class="home_banner pt-5">
      <swiper class="swiper" :options="swiperOption"> 
        <swiper-slide>
          <img class="home_banner-img" src="../assets/homebanner/BANNER01.png" style="width:100%">
        </swiper-slide> 
        <swiper-slide>
          <img class="home_banner-img" src="../assets/homebanner/BANNER02.png" style="width:100%">
        </swiper-slide> 
        <swiper-slide>
          <img class="home_banner-img" src="../assets/homebanner/BANNER03.png" style="width:100%">
        </swiper-slide> 
        <!-- <div class="swiper-pagination" slot="pagination"></div>  -->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div> 
        <div class="swiper-button-next" slot="button-next"></div>  -->
      </swiper>
    </div>

    <div class="home__latest-posts">

    </div>

    <div class="home__hall-of-fame">
      
    </div>
    
    
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'Home',
  components: {
    swiper,
    swiperSlide,
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 2,
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

<style scoped>
  .swiper { 
    /* height: 350px;  */
    width: 96%; 
  }
    
  .swiper-slide { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    text-align: center;  
  } 

</style>
