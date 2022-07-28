<template>
  <button
    :class="[
      'c-button', `${theme}`, `${size}`,
      {'hover-text': withHoverText}
    ]"
    :data-hover-text="hoverText"
  >
    <div class="c-button__loader" v-if="loading">
      <spinner :color="spinner_white"></spinner>
    </div>
    <span class="btn-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { spinner } from '../spinner'
export default {
  name: 'XButton',
  components: {
    spinner
  },
  data () {
    return {
      size_s: 'size_s',
      size_m: 'size_m',
      theme_grey: 'theme_grey',
      theme_green: 'theme_green',
      spinner_white: 'white'
    }
  },
  props: {
    size: {
      type: String,
      default: 'size_s'
    },
    theme: {
      type: String,
      default: 'theme_white'
    },
    hoverText: {
      type: String,
      default: 'default hoverText'
    },
    loading: {
      type: Boolean
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }
}
</script>
<style src="./xButton.scss" scoped lang="scss"></style>
