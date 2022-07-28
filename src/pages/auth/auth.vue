<template>
  <div class="auth">
    <div class="start-block">
      <div class="logo">
        <logo />
      </div>
      <div class="text">
        More than just one repository.
        This is our digital world.
      </div>
      <xButton :size="size_s" :theme="theme_green" :hoverText="hText" @click="redirectToGhAuth">Authorize with github</xButton>
    </div>
    <img src="../../assets/Device.jpg" alt="laptop" class="laptop">
  </div>
  <footer class="footer">
    <p class="footer-text">© Gitogram from Loftschool</p>
  </footer>
</template>

<script>
import { logo } from '../../components/logo'
import { xButton } from '../../components/xButton'
import { mapActions } from 'vuex'
import axios from 'axios'
export default {
  components: {
    logo,
    xButton
  },
  data () {
    return {
      hText: 'Authorize with github',
      size_s: 'size_s',
      size_m: 'size_m',
      theme_grey: 'theme_grey',
      theme_green: 'theme_green'
    }
  },
  methods: {
    ...mapActions({
      redirectToGhAuth: 'auth/getAuthCode',
      authUserByCode: 'auth/authUserByCode'
    })
  },
  async mounted () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      const token = await this.authUserByCode(code)
      localStorage.setItem('token', token)
      axios.defaults.headers.Authorization = `token ${token}`
      this.$router.replace({ name: 'feeds', query: { search: '' } })
    }
  }
}
</script>
<style src="./auth.scss" lang="scss" scoped></style>
