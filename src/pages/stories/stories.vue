<template>
  <div class="wrapper">
    <header class="header">
      <div class="x-container">
        <button class="logo">
          <logo white />
        </button>
        <button class="close" @click="$router.push('/')">
          <icon name="close" />
        </button>
      </div>
    </header>
    <div class="content">
      <storiesSlider :initialSlide="Number($route.params.initialSlide)" />
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
  }
}
</script>

<style lang="scss" src="./stories.scss" scoped></style>
