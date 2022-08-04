<template>
  <div class="c-container" :class="{ active }">
    <div class="header">
      <x-progress @onFinish="$emit('onProgressFinish')" :active="localActive" />
      <story-user-item
      :avatar="data.userAvatar"
      :username="data.username"
      class="avatar"
      />
    </div>
    <div class="content">
      <div class="loader"  v-if="loading">
        <spinner />
      </div>
      <div class="info" v-else>
        <div v-if="data.content?.length" class="content-text" v-html="data.content"></div>
        <placeholder v-else />
      </div>
    </div>
    <div class="footer">
      <x-button
        :size="size_s"
        :theme="data.following.status ? 'theme_grey' : 'theme_green'"
        :hoverText="data.following.status ? 'Unfollowed' : 'Following'"
        :loading="data.following.loading"
        @click="$emit(data.following.status ? 'onUnFollow' : 'onFollow', data.id)"
        class="btn-following"
      >
        {{data.following.status ? "Unfollowing" : "Followed"}}
      </x-button>
    </div>
  </div>
</template>

<script>
import { xProgress } from '../progress'
import { storyUserItem } from '../storyUserItem'
import { xButton } from '../xButton'
import { placeholder } from '../placeholder'
import { spinner } from '../spinner'
export default {
  name: 'slide',
  components: {
    xProgress,
    storyUserItem,
    placeholder,
    xButton,
    spinner
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish', 'OnFollow', 'onUnfollow'],
  props: {
    active: Boolean,
    loading: Boolean,
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  data () {
    return {
      hoverText: 'Unfollow',
      size_s: 'size_s',
      theme_grey: 'theme_grey',
      theme_green: 'theme_green',
      localActive: false
    }
  },
  mounted () {
    if (this.active) {
      setTimeout(() => {
        this.localActive = true
      }, 0)
    } else {
      this.localActive = false
    }
  },
  watch: {
    active () {
      this.localActive = this.active
    }
  }
}

</script>

<style src="./slide.scss" lang="scss" scoped></style>
