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
      :loading="data.following.loading"
      :hoverText="hText"
      @click="$emit('OnFollow', data.id)">Follow</x-button>
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
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish', 'OnFollow'],
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
      hText: 'Unfollow',
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
