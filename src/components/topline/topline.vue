<template>
  <div class="c-topline">
    <div class="x-container">
      <header class="headline">
        <slot name="headline"></slot>
      </header>
      <div class="content" v-if="$slots.content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./topline.scss" scoped></style>
