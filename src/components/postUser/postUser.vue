<template>
  <div class="c-postUser">
    <div class="postHead">
      <slot name="postHead"></slot>
    </div>
    <slot></slot>
    <div class="postToggle">
      <slot name="postToggle"></slot>
    </div>
    <div class="postDate">
      <slot name="postDate"></slot>
    </div>
  </div>
</template>

<style lang="scss" src="./postUser.scss" scoped></style>
