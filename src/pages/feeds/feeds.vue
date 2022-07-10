<template>
  <div class="topline">
    <topline>
        <template #headline>
          <div class="logo">
            <img src="../../assets/Gitogram.svg" alt="logo">
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
  <div class="container">
    <post-user>
      <template #postHead>
        <story-user-item
        :avatar="avatar"
        :username="nameU"
        class="avatar-block"
        />
      </template>
      <template #postContent>
        <h2 class="post-title">Vue.js</h2>
        <p class="post-text">JavaScript framework for building interactive web applications ⚡</p>
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
        <h2 class="post-title">Vue.js</h2>
        <p class="post-text">JavaScript framework for building interactive web applications ⚡</p>
        <user-buttons />
      </template>
      <template #postToggle>
        <comments-block />
      </template>
      <template #postDate>
        <strong class="date">15 may</strong>
      </template>
    </post-user>
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

export default {
  name: 'feeds',
  components: {
    topline,
    storyUserItem,
    icon,
    postUser,
    userButtons,
    commentsBlock
  },
  data () {
    return {
      stories,
      avatar: 'https://picsum.photos/300/300',
      nameU: 'Camilla'
    }
  }
}
</script>

<style lang="scss" src="./feeds.scss" scoped></style>
