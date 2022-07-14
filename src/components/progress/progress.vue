<template>
  <div :class="['c-progress', {'is-active': active}]">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>

export default {
  props: {
    active: Boolean
  },
  emits: ['onFinish'],
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  },
  mounted () {
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style src="./progress.scss" lang="scss" scoped></style>
