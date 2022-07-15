<template>
  <div class="topline">
    <div class="x-container">
      <topline>
        <template #headline>
          <div class="logo">
            <logo />
          </div>
          <div class="icon__wrapper">
            <div class="icon">
              <icon name="home" />
            </div>
            <div class="icon">
              <icon name="avatar" />
            </div>
            <div class="icon">
              <icon name="exit" />
            </div>
          </div>
        </template>
        <template #content>
          <ul class="stories">
            <li class="stories-item" v-for="{ id, owner, name } in trendings" :key="id">
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
    <post-user>
      <template #postHead>
        <story-user-item
        :avatar="avatar"
        :username="nameU"
        class="avatar-block"
        />
      </template>
      <template #postContent>
        <postContent :title="title[0]" :text="text[0]" />
        <user-buttons />
      </template>
      <template #postToggle>
        <comments-block />
      </template>
      <template #postDate>
        <strong class="date">15 may</strong>
      </template>
    </post-user>
    <post-user>
      <template #postHead>
        <story-user-item
        :avatar="avatar"
        :username="nameU"
        class="avatar-block"
        />
      </template>
      <template #postContent>
        <postContent :title="title[1]" :text="text[1]" />
        <user-buttons />
      </template>
      <template #postToggle>
        <comments-block />
      </template>
      <template #postDate>
        <strong class="date">15 may</strong>
      </template>
    </post-user>
  </main>
</template>

<script>
import { topline } from '../../components/topline/'
import { storyUserItem } from '../../components/storyUserItem'
import { icon } from '../../icons/'
import { postUser } from '../../components/postUser'
import { userButtons } from '../../components/userButtons'
import { commentsBlock } from '../../components/commentsBlock'
import { postContent } from '../../components/postContent'
import { logo } from '../../components/logo'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'feeds',
  components: {
    topline,
    storyUserItem,
    icon,
    postUser,
    userButtons,
    commentsBlock,
    logo,
    postContent
  },
  data () {
    return {
      avatar: 'https://picsum.photos/300/300',
      nameU: 'Camilla',
      title: ['Vue.js', 'React.js'],
      text: ['JavaScript framework for building interactive web applications ⚡', 'Open source JavaScript library used for designing user interfaces']
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings'
    })
  },
  async created () {
    await this.fetchTrendings()
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
