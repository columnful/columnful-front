<template>
  <div>
    <div :username="userData.username">
      <h1>비평가 <b>{{ username }}</b> 의 프로필</h1>
    </div>

  </div>
</template>

<script>

export default {
  name: 'UserProfile',
  props: ['userData'],
  data: function() {
    return {
      profile: '',
      username: '',
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

  },
  //  Profile 페이지 접근 시 바로 적용 가능하도록 updated 사용
  updated: function () {
    this.profile= this.userData
    this.username = this.profile.username
    // console.log(this.userData)

  },
}
</script>

<style>

</style>