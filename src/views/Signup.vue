<template>   
  <div class="login">
    
    <div class="d-flex justify-content-between align-items-stretch mb-2" style="width: 100%;">
      <h5 class="mb-0">회원가입</h5>
    </div>
    
    <form class="justify-content-center mt-1" @submit.prevent="signup">
      
      <input class="form-control mr-sm-2" style="width: 100%; height: 45px; padding: 10px;" placeholder="아이디를 입력해주세요" type="text" id="username" v-model="credentials.username">
      <input class="form-control mr-sm-2" style="width: 100%; height: 45px; padding: 10px;" placeholder="비밀번호를 입력해주세요" type="password" id="password" v-model="credentials.password">
      <input class="form-control mr-sm-2" style="width: 100%; height: 45px; padding: 10px;" placeholder="비밀번호를 한 번 더 입력해주세요" type="password" id="passwordConfirm" v-model="credentials.passwordConfirm" @keypress.enter="signup">
      <button @click="signup" type="button" class="btn btn-danger mt-3" style="width: 100%;">회원가입</button>
    
    </form>
  
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
export default {
  name: 'Signup',
  data: function () {
    return {
      credentials: {
        username: '',
        password: '',
        passwrodConfirm: '',
      },
      error: false,
    }
  },
  methods: {
    signup: function () {
      axios.post('http://127.0.0.1:8000/accounts/signup/', this.credentials,)
        .then(() => {
          this.$router.push({ name: 'Login' })
        })
        .catch(err => {
          const errorMessage = err.message
          if (errorMessage[errorMessage.length-3, errorMessage.length-1] === '6') {
            this.newAlert("비밀번호가 틀립니다!")
          }
          else {
            this.newAlert("이미 존재하는 아이디입니다!")
          }
        })
    },
    newAlert: function (data) {
      this.$fire({
        title: data,
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