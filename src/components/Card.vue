<template>
  <div class="card rounded">
    <div class="card-image">
      <slot name="image"></slot>
    </div>
    <div class="card-header">
      <div class="card-title">
        <slot name="title"></slot>
      </div>
    </div>
    <div class="card-body">
      <slot name="body"></slot>
    </div>
    <div class="card-footer">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style>

</style>