<template>
  <button
  type="button"
    :class="[
      'c-button', 'theme-green',
      {'hover-text': withHoverText},
      {'btn-loading': loading},
      {'btn-disabled': disabled}
    ]"
    :data-hover-text="hoverText">
    <span class="btn-text">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'xButton',
  props: {
    hoverText: {
      type: String
    },
    loading: Boolean,
    disabled: Boolean
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }
}
</script>
<style src="./xButton.scss" lang="scss" scoped></style>
