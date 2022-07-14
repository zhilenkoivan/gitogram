<template>
  <div class="post-content">
    <h2 class="post-title">{{ title }}</h2>
    <p class="post-text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'postContent',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./postContent.scss" lang="scss" scoped></style>
