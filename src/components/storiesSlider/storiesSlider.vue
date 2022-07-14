<template>
  <div class="c-stories-slider">
    <div class="stories-container">
      <ul class="stories">
        <li class="stories-item" v-for="(trending) in trendings"
        :key="trending.id"
        >
          <slide
          :data="getStoryData(trending)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { slide } from '../slide'
import { mapState, mapActions } from 'vuex'
export default {
  components: { slide },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'fetchTrendings'
    }),
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar.url,
        username: obj.owner?.login,
        content: obj.readme
      }
    }
  },
  async created () {
    await this.fetchTrendings()
  }
}
</script>
<style src="./storiesSlider.scss" lang="scss" scoped></style>
