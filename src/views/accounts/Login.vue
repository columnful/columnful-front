<template>
  <div class="login">
      
    <div class="d-flex justify-content-between align-items-stretch mb-2" style="width: 100%;">
      
      <h5 class="mb-0">로그인</h5>
      <p style="color: rgba(213,213,213,0.7); font-size: 14px" class="mb-0">아직 저희 회원이 아니신가요?</p>
    
    </div>
    
    <form class="justify-content-center mt-1" @submit.prevent="login">
      
      <input class="form-control mr-sm-2" style="width: 100%; height: 45px; padding: 10px;" placeholder="아이디를 입력해주세요" type="text" id="username" v-model="credentials.username">
      <input class="form-control mr-sm-2" style="width: 100%; height: 45px; padding: 10px;" placeholder="비밀번호를 입력해주세요" type="password" id="password" v-model="credentials.password" @keypress.enter="login">
      
      <button @click="login" type="button" class="btn btn-danger mt-3" style="width: 100%;">로그인</button>
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
          const username = res.config.data.split('"')[3]
          localStorage.setItem('jwt', res.data.token)
          localStorage.setItem('username', username)
          
          this.$emit('login')
          this.$router.push({ name: 'Home' })
        })
        .catch(err => {
          console.log(err)
          this.newAlert()
        })
    },

    newAlert: function () {
      this.$fire({
        title: "아이디나 비밀번호를 확인해주세요.",
        text: "",
        type: "error",
      }).then(r => {
        console.log(r.value);
      });
    }
  },
}
</script>

<style>
.login {
  color: #f4f4f4;
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
}
input::placeholder {
  color: lightgrey !important;
}
</style>