<template>
  <div class="c-postUser">
    <div class="postHead">
      <slot name="postHead"></slot>
    </div>
    <div class="postContent">
      <slot name="postContent"></slot>
    </div>
    <div class="postToggle">
      <slot name="postToggle"></slot>
    </div>
    <div class="postDate">
      <slot name="postDate"></slot>
    </div>
  </div>
</template>

<style lang="scss" src="./postUser.scss" scoped></style>
