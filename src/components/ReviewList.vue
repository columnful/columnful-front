<template>
  <div>
    <ul>
      <li>
        <body
          v-for="review in reviews"
          :key="review.id"
          :review="review"
          id="list"
          >
            <router-link :to="{name: 'ReviewDetail', params: { reviewId: review.id }}">
              <!-- 번호 : <b>{{ review.id }}</b> | -->
              <b>{{ review.title }}</b>
            </router-link>
            <p></p> 
            <!-- <inline-box> -->
              <div>
                <template v-if="review.poster_path" style="text-align: center;">
                  <router-link :to="{name: 'ReviewDetail', params: { reviewId: review.id }}">
                    <img width="100%" class="movie__poster" :src="'https://image.tmdb.org/t/p/w500'+review.poster_path" alt="">
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
            <!-- </inline-box> -->
            <div>
              <router-link :to="{name: 'Profile', params: { profileUsername: review.username }}">
                <b>{{ review.username }}</b> 비평가  
              </router-link>
              <hr width=500px>
            </div>
        </body>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from'axios'
// // import ReviewListItem from '@/components/ReviewListItem'

export default {
  name: 'ReviewList',
  // components: {
  //   ReviewListItem,
  // },

  data() {
    return {
      reviews: []
    }
  },
  methods: {
    setToken: function () {
      const token = localStorage.getItem('jwt')
      const config = {
          Authorization: `JWT ${token}`
      }
      return config
    },
    getReviews: function () {
      axios({
        method:'get',
        url: 'http://127.0.0.1:8000/reviews/reviews/',
        headers:this.setToken()
      })
        .then(res => {
          this.reviews = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  /* 
  login 해야만 review 게시판을 접근할 수 있는 기능을 주석 처리한 이유
  : 실제 우리 서비스에서 로그인 해야만 보여주는게 이익이 될지, 로그인 없이 보여주는 게 이익이 될지 모르고 
    개발 단게에서는 불편할 수 있어 주석 처리 하였습니다.   
  */
  created: function () {
    this.getReviews()
    // if (localStorage.getItem('jwt')) {
    //   this.getReviews()
    // } else {
    //   this.$router.push({name: 'Login'})
    // }
  }

}
</script>

<style scoped>
  label, input, textarea {
	transition: color 0.4s ease, background-color 0.1s ease-in-out;
}

label {
  color: lighten(#888888, 15);
  font-size: 70%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  position: absolute;
  top: 10px;
  left: 10px;

}

input, textarea {
  background-color: transparent;
  border: none;
  color: darken(#888888, 15);
  font-size: 18px;
  margin: 9px 0 7px 0;
  margin: 0;
  padding: 2em 10px 10px 10px;
  outline: none;
  width: 100%;

}

ul {
  background-color: #fffdfa;
  border: 5px solid #888888;
  list-style-type: none;
  margin: 1em auto;
  padding: 0;
  width: 800px;
}

li {
  border-bottom: 1px solid lighten(#888888, 25);
  margin-top: -1px;
  position: relative;
}
  .list {
    color: #f4f4f4;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    padding-top: 8rem;
    position: relative;
    z-index: 2;
  }
  #list {
    text-align: left;
    border: none;
    color: darken(#888888, 15);
    font-size: 18px;
    margin: 0;
    padding: 1em 10px 10px 10px;
    outline: none;
    width: 100%;
  }
  hr {
    margin-left: 0;
  }
</style>