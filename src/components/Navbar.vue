<template>
  <div class="nav d-flex justify-between">

    <div class="nav__logo d-flex">
      <img class="nav__logo-img" src="../assets/images/logo/clarity_star-solid.png">
    </div>

    <div class="nav__menu montserrat d-flex justify-between align-center">
      <router-link to="/">HOME</router-link> 
      <router-link to="/about">ABOUT</router-link> 
      <router-link :to="{name: 'Movie'}">MOVIE</router-link> 
      <router-link :to="{name: 'Reviews'}">REVIEWS</router-link> 
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
              class="flex items-center pr-3 text-sm text-gray-700 transition duration-150 ease-in-out bg-gray-200 border-2 border-gray-200 rounded-full focus:outline-none focus:shadow-solid"
              :class="{ 'border-gray-300 bg-gray-300 text-white ': isShown }"
              aria-label="User menu"
              aria-haspopup="true"
              @mousedown="mousedownHandler"
              @focus="focusHandler"
              @blur="blurHandler"
              @keydown="keydownHandler"
            >
              <img class="w-8 h-8 mr-2 rounded-full" src="../assets/icon/iconoir_profile-circled.png">
              Hi, {{username}}!
            </button>
          </div>
          
          <div class="nav__account-menu" slot-scope="{ hide, blurHandler }">
            <router-link
              @click="hide"
              :to="{name: 'Profile', params: { profileUsername: username }}"
              class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              role="menuitem"
              @blur="blurHandler"
            >
              Profile
            </router-link>
            <router-link
              to='#'
              class="block w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              role="menuitem"
              @blur="blurHandler"
              @click.native="logout"
            >
              Logout
            </router-link>

            <button
              class="block w-full px-4 py-2 text-sm leading-5 text-red-500 transition duration-150 ease-in-out border-t hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              @click="hide"
            >
              Close me
            </button>
          </div>
        </t-dropdown>
      </span>

      <span class="nav__account-none d-flex justify-between" v-else>
        <router-link class="mr-5" :to="{name: 'Signup'}">Signup</router-link> 
        <t-modal ref="modal">
          <Login/>
        </t-modal>
        <button @click="$refs.modal.show()" type="button">Login</button>
        <!-- <router-link class="mr-5" :to="{name: 'Login'}">Login</router-link> -->
      </span>
    </div>
    <!-- <router-view @login="isLogin=true"/> -->
  </div>
  
</template>

<script>
import Login from '@/components/Login'

export default {
  name: "Navbar",
  components: {
    Login,
  },
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
  .nav__menu a {
    align-items: center;
    /* font-weight: bold; */
    color: #2c3e50;
  }
  .nav__account a {
    color: #2c3e50;
  }
  .nav__account a.router-link-exact-active {
    color: #2c3e50 !important;
    font-weight: bold;
  }
  .nav__menu a.router-link-exact-active {
    color: #E2AE7F !important;
    /* font-weight: bold; */
  }
  .nav__logo {
    align-items: center;
  }
  .nav__menu {
    width: 20%;
    align-items: center;
  }
</style>