<template>
  <div class="login">

    <form class="justify-content-center mt-12" @submit.prevent="login">
      <input class="form-control mb-2 mr-sm-2" style="width: 100%; height: 45px; padding: 10px;" placeholder="USERNAME" type="text" id="username" v-model="credentials.username">
      <input class="form-control mr-sm-2" style="width: 100%; height: 45px; padding: 10px;" placeholder="PASSWORD" type="password" id="password" v-model="credentials.password" @keypress.enter="login">
      
      <button @click="login" type="button" class="btn btn-danger mt-3" style="width: 100%;">LOG IN</button>
    </form>

  </div>
</template>

<script>
import axios from 'axios'
// import _ from 'lodash'
export default {
  name: 'Login',
  data: function () {
    return {
      credentials: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    login: function () {
      axios.post('http://127.0.0.1:8000/accounts/api-token-auth/', this.credentials,)
        .then((res) => {
          // username을 localStorage에 저장하여 profile에서 사용하기 위함임
          const username = res.config.data.split('"')[3]
          localStorage.setItem('jwt', res.data.token)
          localStorage.setItem('username', username)
          // vuex store 사용하여 로그인한 username을 전역에서 사용할 수 있도록 함 
          this.$store.commit('getUsername', username)
          this.$store.dispatch('getMoviesMove')
          this.$emit('login')
          this.$router.push({ name: 'Home' })
          this.$router.go()
        })
        .catch(err => {
          console.log(err)
          // this.newAlert()
        })
    },

    // newAlert: function () {
    //   this.$fire({
    //     title: "아이디나 비밀번호를 확인해주세요.",
    //     text: "",
    //     type: "error",
    //   }).then(r => {
    //     console.log(r.value);
    //   });
    // }
  },
}
</script>

<style>
/* .login {
  color: #000000;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  width: 300px;
  margin: 0;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
} */

input::placeholder {
  color: lightgrey !important;
}
</style>