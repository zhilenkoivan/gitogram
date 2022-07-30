<template>
  <div class="post-user">
    <div class="post-head">
      <slot name="postHead"></slot>
    </div>
    <div class="post-content">
      <slot name="postContent"></slot>
    </div>
    <div class="post-toggle">
      <div class="toggler__wrap mt-18">
        <toggler @onToggle="toggle"></toggler>
      </div>
      <div class="content-loader" v-if="loading">
        <content-loader></content-loader>
      </div>
      <div class="comments" v-if="shown">
        <ul v-if="issues.length" class="comments__list">
          <li
            class="comments__item"
            v-for="issue in issues" :key="issue.id"
          >
            <comment
              :text="issue.title"
              :username="issue.user.login"
            ></comment>
          </li>
        </ul>
        <div v-else class="no-comments">No comments</div>
      </div>
    </div>
  </div>
</template>

<script>
import { comment } from '../comment'
import { toggler } from '../toggler'
import { contentLoader } from '../contentLoader'

export default {
  name: 'feed',
  data () {
    return {
      shown: false
    }
  },
  components: {
    comment,
    toggler,
    contentLoader
  },
  props: {
    avatarUrl: {
      type: String,
      default: 'https://picsum.photos/300/300'
    },
    username: {
      type: String,
      default: 'User Loft',
      required: true
    },
    loading: {
      type: Boolean
    },
    issues: {
      type: Array,
      default: () => []
    },
    date: {
      type: Date,
      required: true
    }
  },
  computed: {
    normalDate () {
      const date = new Date(this.date)
      return date.toLocaleString('en-EN', { month: 'short', day: 'numeric' })
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
      if (isOpened && this.issues.length === 0) {
        this.$emit('loadContent')
      }
    }
  }
}
</script>

<style src="./feed.scss" lang="scss" scoped></style>
