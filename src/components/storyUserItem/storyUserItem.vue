<template>
  <button class="c-story-user-item">
      <div :class="['avatar', {'bordered' : active}]">
        <img :src="avatar" alt="username avatar" class="img" />
      </div>
      <div class="username">{{ username }}</div>
  </button>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    active: Boolean
  }
}
</script>

<style src="./storyUserItem.scss" lang="scss" scoped></style>
