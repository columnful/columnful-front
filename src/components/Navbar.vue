<template>
  <div data-v-sticky-container>

  <div 
    v-vue-sticky-directive="{topSpacing:0}"
    class="sticky nav d-flex justify-between">

    <div class="nav__logo d-flex ml-10">
      <img class="nav__logo-img" src="../assets/images/logo/clarity_star-solid.png">
    </div>

    <div class="nav__menu d-flex justify-between align-center">
      <router-link to="/">HOME</router-link> 
      <router-link to="/about">ABOUT</router-link> 
      <router-link :to="{name: 'Movie'}">MOVIE</router-link> 
      <router-link :to="{name: 'Reviews'}">REVIEWS</router-link> 
    </div>

    <div class="nav__account d-flex">
      <span class="d-flex" v-if="isLogin">

        <t-dropdown class="mr-9">
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
              class="flex items-center pr-3 text-sm text-gray-700 transition duration-150 ease-in-out border-2 border-gray-200 rounded-full focus:outline-none focus:shadow-solid"
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
        <router-link :to="{name: 'Signup'}">Signup</router-link> 
      
        <t-modal v-model="showModal">
          <template v-slot:header>
            <p class="p-5">Welcome to Columnful World!</p>
            <hr>

          </template>
          <div class="content">
            <br><br><br><br><br><br><br><br><br><br><br><br>
            <div class="d-flex">
              <Login/>
            </div>
          </div>

          <template v-slot:footer>
            <hr>
            <p class="p-5">Don't you have an account?</p>
          </template>
        </t-modal>
        <button class="mr-10 ml-5" @click="showModal=true" type="button">Login</button>
      </span>
    </div>
  </div>
  </div>
  
</template>

<script>
import Login from '@/components/Login'
// import LoginModal from '@/components/LoginModal'
import VueStickyDirective from 'vue-sticky-directive'

export default {
  name: "Navbar",
  directives: {
    VueStickyDirective
  },
  components: {
    Login,
    // LoginModal,
  },
  data: function () {
    return {
      isLogin: false,
      username: '',
      showModal: false
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
  #user-menu {
    background-color: whitesmoke;
  }
  .nav {
    background-color: rgba(219, 219, 219, 0.7);
    width: 100%;
    height: 54px;
  }
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
    margin-left: 20px
  }
  .nav__menu {
    width: 20%;
    align-items: center;
  }
  .nav__account {
    align-items: center;
    /* margin-right: 20px; */
  }
  .content {
    background-color: whitesmoke;
  }
</style>