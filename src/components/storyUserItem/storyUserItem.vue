<template>
  <button class="c-story-user-item" type="button" @click="$emit('storyPress')">
      <div :class="['avatar', {'bordered' : active}]">
        <img :src="avatar" alt="username avatar" class="img" />
      </div>
      <div class="username">{{ username }}</div>
  </button>
</template>

<script>
export default {
  name: 'storyUserItem',
  props: {
    avatar: {
      type: String,
      required: true,
      default: 'https://picsum.photos/300/300'
    },
    username: {
      type: String
    },
    active: Boolean
  },
  emits: ['storyPress']
}
</script>

<style src="./storyUserItem.scss" lang="scss" scoped></style>
