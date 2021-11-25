<template>
  <div id="app" class="min-h-screen flex justify-center items-center">
    <StarRating v-model="rating"/>
  </div>
</template>

<script>
import StarRating from "@/components/StarRating";

export default {
  name: "About",
  components: {
    StarRating
  },
  data: () => ({
    rating: 3,
  })
}
</script>

<style lang="scss">
.btn {
  padding: 8px 16px;
  border-radius: 5px;
  &--primary {
    background-color: green;
    color: #fff;
  }
  &--secondary {
    background-color: #dddd;
    color: #000;
  }
}

// utilities
.overflow-hidden {
  overflow: hidden;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.d-flex {
  display: flex;
}
.align-items-center {
  align-items: center;
}
.justify-content-between {
  justify-content: space-between;
}
// reset
button {
  background: none;
  border: none;
  outline: inherit;
  cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
</style>
