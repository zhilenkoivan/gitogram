<template>
  <div class="c-container" :class="{ active }">
    <div class="header">
      <x-progress v-on:onFinish="progressEnd" :active="active" />
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
      <button class="btn btn-next">
        <span class="icon">
          <icon name="arrow" />
        </span>
      </button>
      <button class="btn btn-prev">
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
  data () {
    return {
      avatar: 'https://picsum.photos/300/300',
      nameU: 'Camilla'
    }
  },
  props: {
    active: Boolean,
    loading: Boolean,
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
