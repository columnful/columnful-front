<template>
  <div>
    비평가 <b>{{ username }}</b>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data: function() {
    return {
      username: '',
    }
  },
  methods: {
    getUsername: function () {
      const username = localStorage.getItem('username')
      this.username = username
    },
  },
  created: function () {
    this.getUsername()
  },
}
</script>

<style>

</style>