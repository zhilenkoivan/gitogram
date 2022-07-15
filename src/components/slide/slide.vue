<template>
  <div class="c-container" :class="{ active }">
    <div class="header">
      <x-progress @onFinish="$emit('onProgressFinish')" :active="active" />
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
      <x-button>Follow</x-button>
    </div>
    <template v-if="active">
      <button v-if="btnsShown.includes('next')" class="btn btn-next" @click="$emit('onNextSlide')">
        <span class="icon">
          <icon name="arrow" />
        </span>
      </button>
      <button v-if="btnsShown.includes('prev')" class="btn btn-prev" @click="$emit('onPrevSlide')">
        <span class="icon">
          <icon name="arrow" />
        </span>
      </button>
    </template>
  </div>
</template>

<script>
import { xProgress } from '../progress'
import { storyUserItem } from '../storyUserItem'
import { xButton } from '../xButton'
import { placeholder } from '../placeholder'
import { spinner } from '../spinner'
import { icon } from '../../icons'
export default {
  name: 'slide',
  components: {
    xProgress,
    storyUserItem,
    placeholder,
    xButton,
    icon,
    spinner
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish'],
  data () {
    return {
      avatar: 'https://picsum.photos/300/300',
      nameU: 'Camilla'
    }
  },
  props: {
    active: Boolean,
    loading: Boolean,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every(item => item === 'next' || item === 'prev')
      }
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  methods: {
    progressEnd () {
      console.log('Finish')
    }
  }
}

</script>

<style src="./slide.scss" lang="scss" scoped></style>
