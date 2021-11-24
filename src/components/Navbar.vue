<template>
  <div class="nav d-flex justify-between">

    <div class="nav__logo d-flex">
      <img src="../images/logo/clarity_star-solid.png">
      <p>방구석 평론가</p>
    </div>

    <div class="nav__menu d-flex justify-between">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link> 
      <router-link :to="{name: 'Movie'}">Movie</router-link> 
      <router-link :to="{name: 'Reviews'}">Reviews</router-link> 
    </div>

    <div class="nav__account">
      <span class="d-flex" v-if="isLogin">

        <t-dropdown>
          <div
            slot="trigger"
            slot-scope="{
              mousedownHandler,
              focusHandler,
              blurHandler,
              keydownHandler,
              isShown
            }"
          >
            <button
              id="user-menu"
              class="flex items-center pr-3 text-sm text-gray-700 transition duration-150 ease-in-out bg-gray-300 border-2 border-gray-200 rounded-full focus:outline-none focus:shadow-solid"
              :class="{ 'border-gray-300 bg-gray-500 text-white ': isShown }"
              aria-label="User menu"
              aria-haspopup="true"
              @mousedown="mousedownHandler"
              @focus="focusHandler"
              @blur="blurHandler"
              @keydown="keydownHandler"
            >
              <img class="w-8 h-8 mr-2 rounded-full" src="../icon/iconoir_profile-circled.png">
              Hi, {{ username }}!
            </button>
          </div>

          <div slot-scope="{ hide, blurHandler }">
            <button
              class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              role="menuitem"
              @blur="blurHandler"
            >
              Your Profile
            </button>
            <button
              class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              role="menuitem"
              @blur="blurHandler"
            >
              Settings
            </button>

            <button
              class="block w-full px-4 py-2 text-sm leading-5 text-red-500 transition duration-150 ease-in-out border-t hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              @click="hide"
            >
              Close me
            </button>
          </div>
        </t-dropdown>

        <router-link class="d-flex" :to="{name: 'Profile', params: { profileUsername: username }}">
          <img class="mx-3" src="../icon/iconoir_profile-circled.png">
          {{ username }}
          </router-link> 
        <router-link @click.native="logout" to="#">Logout</router-link>
        <!-- <span>{{ username }} 님, 반갑습니다.</span> -->
      </span>
      <span v-else>
        <router-link :to="{name: 'Signup'}">Signup</router-link> 
        <router-link :to="{name: 'Login'}">Login</router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: function () {
    return {
      isLogin: false,
      username: '',
    }
  },
  created: function () {
    const token = localStorage.getItem('jwt')
    if (token) {
      this.isLogin = true
      this.username = localStorage.getItem('username')
    }
  },
  
  methods: {
    logout: function () {
      this.isLogin = false
      localStorage.removeItem('jwt')
      this.$router.push({ name: 'Login' })
    }
  },
}
</script>

<style>
  .nav__menu {
    width: 20%;
  }
</style>