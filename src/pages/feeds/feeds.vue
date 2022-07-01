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
              />
            </li>
          </ul>
        </template>
    </topline>
  </div>
  <div class="container">
    <post-user>
      <template #postHead>
        <div class="avatar">
          <img src="../../assets/faceUser/ProfilePic.svg" alt="profile picture" class="img">
        </div>
        <div class="username">joshua_l</div>
      </template>
      <template #postContent>
        <h2 class="post-title">Vue.js</h2>
        <p class="post-text">JavaScript framework for building interactive web applications ⚡</p>
        <user-buttons />
      </template>
      <template #postToggle>
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
      <template #postDate>
        <strong class="date">15 may</strong>
      </template>
    </post-user>
    <post-user>
      <template #postHead>
        <div class="avatar">
          <img src="../../assets/faceUser/ProfilePic2.svg" alt="profile picture" class="img">
        </div>
        <div class="username">Camille</div>
      </template>
      <template #postContent>
        <h2 class="post-title">Vue.js</h2>
        <p class="post-text">JavaScript framework for building interactive web applications ⚡</p>
        <user-buttons />
      </template>
      <template #postToggle>
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
import { toggler } from '../../components/toggler'
import { comment } from '../../components/comment'
export default {
  name: 'feeds',
  components: {
    topline,
    storyUserItem,
    icon,
    postUser,
    userButtons,
    toggler,
    comment
  },
  data () {
    return {
      stories,
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

<style lang="scss" src="./feeds.scss" scoped></style>
