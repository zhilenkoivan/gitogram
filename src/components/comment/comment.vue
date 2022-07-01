<template>
  <p><span>{{ username }}</span>{{ text }}</p>
</template>

<script>
export default {
  props: {
    username: {
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

<style src="./comment.scss" lang="scss" scoped></style>
