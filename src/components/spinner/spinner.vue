<template>
  <div class="c-spinner" :class="color"></div>
</template>

<script>
export default {
  name: 'Spinner',
  props: {
    color: {
      type: String
    }
  }
}
</script>

<style src="./spinner.scss" scoped lang="scss"></style>
