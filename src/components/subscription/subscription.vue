<template>
  <div class="c-subscription">
    <div class="user">
      <story-user-item
        :username="username"
        :avatar="avatarUrl"
      >
      </story-user-item>
    </div>
    <div class="button">
      <x-button
        :theme="following ? 'theme_green' : 'theme_grey'"
        :hoverText="following ? 'Unfollowed' : 'Following'"
        :size="size_s"
        @click="$emit(following ? 'onUnFollow' : 'onFollow', id)"
      >
        {{following ? "Following" : "Unfollowed"}}
      </x-button>
    </div>
  </div>
</template>

<script>
import { storyUserItem } from '../storyUserItem'
import { xButton } from '../xButton'
export default {
  name: 'Subscription',
  components: {
    storyUserItem,
    xButton
  },
  data () {
    return {
      hoverText: 'Unfollowed',
      size_s: 'size_s',
      size_m: 'size_m',
      theme_grey: 'theme_grey',
      theme_green: 'theme_green'
    }
  },
  emits: ['onFollow', 'onUnFollow'],
  props: {
    loading: {
      type: Boolean
    },
    id: {
      type: Number
    },
    type: {
      type: String,
      default: ''
    },
    username: {
      type: String,
      required: true
    },
    avatarUrl: {
      type: String,
      required: true
    },
    following: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped src="./subscription.scss"></style>
