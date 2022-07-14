<template>
  <div class="wrapper">
    <header class="header">
      <div class="x-container">
        <button class="logo">
          <logo white />
        </button>
        <button class="close" @click="trigger">
          <icon name="close" />
        </button>
      </div>
    </header>
    <div class="content">
      <storiesSlider />
    </div>
  </div>
</template>

<script>
import { logo } from '../../components/logo'
import { icon } from '../../icons/'
import { storiesSlider } from '../../components/storiesSlider'
export default {
  name: 'stories',
  components: {
    logo,
    icon,
    storiesSlider
  },
  methods: {
    trigger () {
      this.$store.dispatch('fetchTrendings')
    }
  }
}
</script>

<style lang="scss" src="./stories.scss" scoped></style>
