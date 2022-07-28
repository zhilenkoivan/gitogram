<template>
  <div class="card">
    <div class="card__title_wrap mb-16">
      <h2 class="card__title mb-16">{{ title }}</h2>
    </div>
    <div class="card__desc mb-32">
      {{ description }}
    </div>
    <div class="card__stats">
      <stats :stars="stars" :forks="forks"></stats>
    </div>
  </div>
</template>

<script>
import { stats } from '../stats'
export default {
  name: 'Card',
  components: {
    stats
  },
  props: {
    title: {
      type: String,
      default: 'default title'
    },
    description: {
      type: String,
      default: 'Some feed description'
    },
    stars: {
      type: Number,
      default: 0,
      required: true
    },
    forks: {
      type: Number,
      default: 0,
      required: true
    }
  }
}
</script>

<style src="./card.scss" lang="scss" scoped></style>
