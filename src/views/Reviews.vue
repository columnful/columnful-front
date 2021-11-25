<template>
  <div>
    <!-- <h2  style="color: black">reviews</h2> -->
    <div
        style="background: rgba(0, 0, 0, 0.7 ); color: white;"
        striped
        hover
        :fields="fields"
        :items="reviews"
        id="my-table"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <!-- @row-clicked="myRowClickHandler" -->
    </div>
    <ul id="btn">
      <router-link to="/reviews/create/">비평 쓰기</router-link>
    </ul>
    <review-list>
    </review-list>
  </div>
</template>

<script>
import axios from'axios'
import ReviewList from '@/components/ReviewList'

export default {
  name: 'Reviews',
  components: {
    ReviewList,
  },
  data: function () {
    return {
      perPage: 10,
      currentPage: 1,
      fields: [
        {
          key: 'id',
          sortable: true,
          label: '글번호',
        },
        {
          key: 'title',
          label: '제목',
        },
        {
          key: 'username',
          label: 'ID',
        },
      ],
      reviews: [],
      contentDetail: '',
    }
  },
  methods: {
    setToken: function () {
      const token = localStorage.getItem('jwt')
      const config = {
        headers: {
          Authorization: `JWT ${token}`
        }
      }
      return config
    },

    getReviews: function () {
      const config = this.setToken()
      axios.get(`http://127.0.0.1:8000/reviews/create`, config)
        .then((res) => {
          this.reviews = res.data
          console.log('jwt')
        })
        .catch((err) => {
          console.log(err)
        })
    },

    getReviewsMoviePoster: function () {
      const config = this.setToken()
      axios.get(`http://127.0.0.1:8000/reviews/create`, config)
        .then((res) => {
          console.log(res)
        })
    }

  },
   /* 
  login 해야만 review 게시판을 접근할 수 있는 기능을 주석 처리한 이유
  : 실제 우리 서비스에서 로그인 해야만 보여주는게 이익이 될지, 로그인 없이 보여주는 게 이익이 될지 모르고 
    개발 단게에서는 불편할 수 있어 주석 처리 하였습니다.   
  */
  // created: function () {
  //   if (localStorage.getItem('jwt')) {
  //     console.log('hi')
  //   } else {
  //     this.$router.push({ name: 'Login' })
  //   }
  // },


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

  /* input:focus+& {
    color: darken(#0074D9, 10);
    font-weight: bold;
    letter-spacing: -0.01em;
  } */
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

    /* &:focus {
      color: #000;
      background-color: lighten(#888888, 40);
      box-shadow: 0px 3px 4px -2px rgba(0,0,115,0.25) inset;
    } */
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

#btn {
  /* 합쳐서 800 */
  background-color: whitesmoke;
  padding-right: 5px;
  width: 780px;
  /* margin-left: 700px; */
  text-align: right;
  border: 0px solid #888888;
}

</style>