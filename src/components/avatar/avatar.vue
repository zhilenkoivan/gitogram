<template>
  <div class="component-avatar">
    <div class="img">
      <img :src="source">
    </div>
    <div class="username">{{ username }}</div>
  </div>
</template>

<script>

export default {
  props: {
    source: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}

</script>

<style src="./avatar.scss" lang="scss" scoped></style>
