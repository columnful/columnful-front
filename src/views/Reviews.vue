<template>
  <div>
    <h1>reviews</h1>
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
    <router-link to="/reviews/create/">Create</router-link>
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
  getReviews: function () {
      const config = this.setToken()
      axios.get(`http://127.0.0.1:8000/reviews/create`, config)
        .then((res) => {
          this.reviews = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
  created: function () {
    if (localStorage.getItem('jwt')) {
      console.log('hi')
    } else {
      this.$router.push({ name: 'Login' })
    }
  },


}
</script>

<style>

#app > div > div > div > ul > li.page-item.active > button {
  background-color: #1f1f1f;
  border-color: #1f1f1f;
  color: #ffffff;
}
#app > div > div > div > ul > li > button {
  color: #1f1f1f;
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
.bgimg {
  width: 100%;
  height: 100%;
  position: relative;
  background: no-repeat center center/cover;
}
.bgimg::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.9);
  box-shadow: 120px 100px 250px #000000, inset -120px -100px 250px #000000;
}

</style>