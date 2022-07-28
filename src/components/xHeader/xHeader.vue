<template>
  <header class="c-header">
    <logo class="logo" @click="$router.push({ name: 'feeds' })"
    ></logo>
    <div class="buttons">
      <button class="icon"
              @click="$router.push({ name: 'feeds' })">
        <icon name="home"></icon>
      </button>
      <button class="avatar icon"
              @click="$router.push({ name: 'repos' })">
        <avatar
          :avatarUrl="user.avatar_url"
          :username="user.login"
          :size="avatar_s"
          ></avatar>
      </button>
      <button class="icon icon_logout"
              @click="logout">
        <icon name="exit"></icon>
      </button>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { icon } from '../../icons'
import { logo } from '../logo'
import { avatar } from '../avatar'
export default {
  name: 'xHeader',
  components: {
    icon,
    logo,
    avatar
  },
  data () {
    return {
      avatar_s: 'avatar_s',
      avatar_m: 'avatar_m',
      avatar_l: 'avatar_l',
      logo_white: 'logo_white',
      logo_black: 'logo_black'
    }
  },
  computed: {
    ...mapState({
      user: (state) => state.user.data
    }),
    ...mapGetters({
      hasUser: 'user/hasUser'
    })
  },
  methods: {
    ...mapActions({
      logoutAction: 'auth/logout',
      getUser: 'user/getUser'
    }),
    logout () {
      localStorage.removeItem('token')
      this.$router.replace({ name: 'authPage' })
      window.location.reload()
    }
  },
  created () {
    this.getUser()
  }
}
</script>

<style lang="scss" scoped src="./xHeader.scss"></style>
