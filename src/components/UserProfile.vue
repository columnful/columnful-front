<template>
  <div>
    비평가 <b>{{ getUsername() }}</b>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  methods: {
    getUsername: function () {
      const username = localStorage.getItem('username')
      return username
    },
  }
}
</script>

<style>

</style>