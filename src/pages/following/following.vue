<template>
  <div class="c-following">
    <div class="loader" v-if="loading">
      <spinner></spinner>
    </div>
    <div class="error" v-else-if="error">{{error}}</div>
    <template v-else>
      <div class="c-following__header">
        <div class="title">Following</div>
        <div class="count">{{starred.length}}</div>
      </div>
<!--          <pre>{{starred}}</pre>-->
      <ul class="following__list">
        <li
          class="following__item"
          v-for="{ id, owner, following} in starred"
          :key="id"
        >
          <subscription
            :username="owner.login"
            :avatarUrl="owner.avatar_url"
            :following="following"
            :type="owner.type"
            :id="id"
            @onFollow="starRepo(id)"
            @onUnFollow="unStarRepo(id)"
          ></subscription>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { spinner } from '../../components/spinner'
import { subscription } from '../../components/subscription'

export default {
  name: 'Following',
  components: {
    spinner,
    subscription
  },
  data () {
    return {
      loading: false,
      error: null
    }
  },
  computed: {
    ...mapState({
      starred: (state) => state.starred.data
    })
  },
  methods: {
    ...mapActions({
      fetchStarred: 'starred/fetchStarred',
      starRepo: 'starred/starRepo',
      unStarRepo: 'starred/unStarRepo'
    })
  },
  async created () {
    this.loading = true
    try {
      await this.fetchStarred()
    } catch (e) {
      this.error = e.message
    } finally {
      this.loading = false
    }
  }
}
</script>

<style src="./following.scss" scoped lang="scss"></style>
