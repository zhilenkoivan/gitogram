<template>
  <div class="c-git-data">
    <h1>title: {{ gitData.title }}</h1>
    <h2>owner: {{ gitData.username }}</h2>
    <h3>stars: {{ gitData.stars }}</h3>
    <p v-if="gitData.description">description: {{ gitData.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'gitData',
  props: {
    gitData: Object
  }
}
</script>

<style src="./gitData.scss" lang="scss" scoped></style>
