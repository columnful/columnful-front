<template>
  <div class="header d-flex justify-between">
    <div class="header__link d-flex ">
      <router-link class="header__link-menu ml-12" to="/about">ABOUT</router-link> 
      <router-link class="header__link-menu ml-7" to="/about">CONTACT</router-link> 
    </div>

    <div class="header__status d-flex justify-content-right">
      <p class="mr-7">26 NOVEMBER, FRI</p> 
      <p class="mr-9">LIGHT MODE</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style>
  .header {
    background-color: rgb(34, 34, 34);
    color: whitesmoke;
    width: 100%;
    height: 30px;
    align-items: center;
  }
  .header__link-menu {
    padding-left: 20;
  }
</style>