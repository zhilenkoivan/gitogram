<template>
  <div class="c-user">
    <div class="avatar">
      <avatar
        :avatarUrl="avatarUrl"
        :username="userNickname"
        :size="size"
      />
    </div>
    <div class="info">
      <div class="header">
        <div class="username">{{userNickname}}</div>
        <ul class="stats">
          <li class="stats-item">
            <router-link :to="{name: 'repos'}" class="reposts">
              <span class="stats-int">{{repos}}</span>
              <span class="stats-title">repositories</span>
            </router-link>
          </li>
          <li class="stats-item">
            <router-link :to="{name: 'following'}" class="watchers">
              <span class="stats-int">{{following}}</span>
              <span class="stats-title">following</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="data">
        <p>
          {{username}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { avatar } from '../avatar'

export default {
  name: 'About',
  components: {
    avatar
  },
  props: {
    userNickname: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    avatarUrl: {
      type: String,
      required: true
    },
    following: {
      type: Number,
      required: true
    },
    repos: {
      type: Number,
      required: true
    },
    size: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped src="./about.scss"></style>
