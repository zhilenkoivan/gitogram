<template>
  <div class="avatar" :class="size">
    <img :src="avatarUrl" :username="username" class="img" alt="avatar">
  </div>
</template>

<script>

export default {
  name: 'Avatar',
  data () {
    return {
      avatar_s: 'avatar_s',
      avatar_m: 'avatar_m',
      avatar_l: 'avatar_l'
    }
  },
  props: {
    avatarUrl: {
      type: String,
      default: 'https://picsum.photos/300/300',
      required: true
    },
    username: {
      type: String
    },
    size: {
      type: String,
      required: true
    }
  }
}
</script>

<style src="./avatar.scss" scoped lang="scss"></style>
