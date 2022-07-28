<template>
  <div class="c-comment">
    <p>
      <span class="username">{{ username }}</span>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    username: {
      type: String,
      required: true,
      default: 'Default User'
    },
    text: {
      type: String,
      required: true,
      default: 'Default comment text'
    }
  }
}
</script>

<style src="./comment.scss" lang="scss" scoped></style>
