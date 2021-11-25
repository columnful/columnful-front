<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()"/>

      <div 
        class="modal__dialog bg-img"
        :style="{'background-image': 'url(https://image.tmdb.org/t/p/original' + backdrop_path + ')'}">
        <div class="bg__color rounded">

          <div class="modal__header">
            <slot name="header"/>
            <button type="button" class="modal__close mx-6" @click="closeModal()"> <span style="color:whitesmoke;">CLOSE</span> </button>
          </div>

          <div class="modal__body">
            <slot name="body"/>
          </div>

          <div class="modal__footer">
            <slot name="footer"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    backdrop_path: []
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      console.log('hi')
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }
};
</script>


<style lang="scss" scoped>
  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9;
    overflow-x: hidden;
    overflow-y: auto;
    &__backdrop {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.3);
      z-index: 1;
    }
    &__dialog {
      position: relative;
      width: 80%;
      height: 120%;
      background-color: #ffffff;
      border-radius: 5px;
      margin: 50px auto;
      display: flex;
      flex-direction: column;
      z-index: 2;
      @media screen and (max-width: 992px) {
        width: 90%;
      }
    }
    &__close {
      width: 30px;
      height: 30px;
    }
    &__header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 20px 20px 10px;
    }
    &__body {
      padding: 10px 20px 10px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }
    &__footer {
      padding: 10px 20px 20px;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .bg-img{
    // background: url('https://image.tmdb.org/t/p/original'+backdrop_path);
    background-size: cover;
    background-position: center;
  }
  .bg__color{
    // background-size: cover;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.8)
  }
</style>