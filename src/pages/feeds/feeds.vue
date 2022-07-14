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
            <li class="stories-item" v-for="story in stories" :key="story.id">
              <story-user-item
              :avatar="story.avatar"
              :username="story.username"
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
    <div class="x-container">
    <ul class="list">
      <li class="item" v-for="item in items" :key="item.id">
        <git-data
        :gitData="getData(item)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { topline } from '../../components/topline/'
import { storyUserItem } from '../../components/storyUserItem'
import stories from './data.json'
import { icon } from '../../icons/'
import { postUser } from '../../components/postUser'
import { userButtons } from '../../components/userButtons'
import { commentsBlock } from '../../components/commentsBlock'
import { postContent } from '../../components/postContent'
import { logo } from '../../components/logo'
import { gitData } from '../../components/gitData'
import * as api from '../../api'

export default {
  name: 'feeds',
  components: {
    topline,
    storyUserItem,
    icon,
    postUser,
    userButtons,
    commentsBlock,
    gitData,
    logo,
    postContent
  },
  data () {
    return {
      stories,
      avatar: 'https://picsum.photos/300/300',
      nameU: 'Camilla',
      items: [],
      title: ['Vue.js', 'React.js'],
      text: ['JavaScript framework for building interactive web applications ⚡', 'Open source JavaScript library used for designing user interfaces']
    }
  },
  methods: {
    getData (item) {
      return {
        title: item.name,
        description: item.description,
        username: item.owner.login,
        stars: item.stargazers_count
      }
    }
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
