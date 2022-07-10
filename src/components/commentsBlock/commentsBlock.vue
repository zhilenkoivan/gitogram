<template>
  <div class="toggle-block">
    <toggler @onToggle="toggle" />
      <div class="comments" v-if="shown">
        <ul class="comments-list">
          <li class="comments-item">
            <comment username="joshua_l" text="Enable performance measuring in production, at the user's request" />
          </li>
          <li class="comments-item">
            <comment username="Camille" text="It's Impossible to Rename an Inherited Slot" />
          </li>
          <li class="comments-item">
            <comment username="Marselle" text="transition-group with flex parent causes removed items to fly" />
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { toggler } from '../../components/toggler'
import { comment } from '../../components/comment'

export default {
  name: 'commentsBlock',
  components: {
    toggler,
    comment
  },
  data () {
    return {
      shown: false
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}

</script>

<style src="./commentsBlock.scss" lang="scss" scoped></style>
