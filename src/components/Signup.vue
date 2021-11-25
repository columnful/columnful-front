<template>   
  <div class="login">
    <div v-if="signupCompleted"> Completed! </div>
    <div v-else>
      <form class="justify-content-center mt-10" @submit.prevent="signup">
        
        <input class="form-control mb-4 mr-sm-2" style="width: 100%; height: 45px; padding: 10px;" placeholder="USERNAME" type="text" id="username" v-model="credentials.username">
        <input class="form-control mb-2 mr-sm-2" style="width: 100%; height: 45px; padding: 10px;" placeholder="PASSWORD" type="password" id="password" v-model="credentials.password">
        <input class="form-control mr-sm-2" style="width: 100%; height: 45px; padding: 10px;" placeholder="CONFIRM PASSWORD" type="password" id="passwordConfirm" v-model="credentials.passwordConfirm" @keypress.enter="signup">
        <button @click="signup" type="button" class="btn btn-danger mt-3" style="width: 100%;">SIGN UP</button>
      
      </form>
    </div>
  
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Signup',
  data: function () {
    return {
      credentials: {
        username: '',
        password: '',
        passwordConfirm: '',
      },
      error: false,
      signupCompleted: false,
    }
  },
  methods: {
    signup: function () {
      axios.post('http://127.0.0.1:8000/accounts/signup/', this.credentials,)
        .then(() => {
          // this.$router.push({ name: 'Home' })
          this.signupCompleted=true
          // showLogin=true
        })
        .catch(err => {
          console.log(err)
          // const errorMessage = err.message
          // if (errorMessage[errorMessage.length-3, errorMessage.length-1] === '6') {
          //   this.newAlert("비밀번호가 틀립니다!")
          // }
          // else {
          //   this.newAlert("이미 존재하는 아이디입니다!")
          // }
        })
    },
    // newAlert: function (data) {
    //   this.$fire({
    //     title: data,
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
.login {
  color: #000000;
  /* #f4f4f4; */
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