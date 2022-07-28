<template>
  <div class="c-content-loader">
    <div class="item" v-for="n in 3" :key="n"></div>
  </div>
</template>

<script>
export default {
  name: 'ContentLoader'
}
</script>

<style lang="scss" scoped src="./contentLoader.scss"></style>
