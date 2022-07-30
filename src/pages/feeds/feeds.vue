<template>
  <div class="topline">
    <div class="x-container">
      <topline>
        <template #headline>
          <x-header />
        </template>
        <template #content>
          <ul class="stories">
            <li class="stories-item" v-for="{ id, owner, name } in getUnstarredOnly" :key="id">
              <story-user-item
              :avatar="owner.avatar_url"
              :username="name"
              @storyPress="$router.push({name: 'stories', params: {initialSlide: id}})"
              active
              class="stories-item-name"
              />
            </li>
          </ul>
        </template>
      </topline>
    </div>
  </div>
  <main class="container">
    <ul class="post">
      <li class="post-item" v-for="{ id, owner, name, description, stargazers_count, forks_count, issues, created_at } in starred"
        :key="id">
        <feed
          :issues="issues?.data"
          :date="new Date(created_at)"
          :loading="issues?.loading"
          @loadContent="loadIssues({ id, owner: owner.login, repo: name })"
        >
          <template #postHead>
            <story-user-item
            :avatar="owner.avatar_url"
            :username="owner.login"
            class="post-head"
            />
          </template>
          <template #postContent>
            <card
              :title="name"
              :description="description"
              :stars="stargazers_count"
              :forks="forks_count"
            ></card>
          </template>
        </feed>
      </li>
    </ul>
  </main>
</template>

<script>
import { topline } from '../../components/topline/'
import { storyUserItem } from '../../components/storyUserItem'
import { feed } from '../../components/feed'
import { card } from '../../components/card'
import { xHeader } from '../../components/xHeader'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'feeds',
  components: {
    topline,
    storyUserItem,
    feed,
    card,
    xHeader
  },
  data () {
    return {
      items: []
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data,
      starred: (state) => state.starred.data
    }),
    ...mapGetters(['getUnstarredOnly'])
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchStarred: 'starred/fetchStarred',
      fetchIssuesForRepo: 'starred/fetchIssuesForRepo'
    }),
    loadIssues ({ id, owner, repo }) {
      this.fetchIssuesForRepo({ id, owner, repo })
    }
  },
  async created () {
    await this.fetchTrendings()
    await this.fetchStarred({ limit: 10 })
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
