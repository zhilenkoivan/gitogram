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
      <xButton :hoverText="hText" @click="getCode">Authorize with github</xButton>
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
import env from '../../../env'
export default {
  components: {
    logo,
    xButton
  },
  data () {
    return {
      hText: 'Github'
    }
  },
  methods: {
    getCode () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()

      params.append('client_id', env.clientId)
      params.append('scope', 'repo,user')

      window.location.href = `${githubAuthApi}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      try {
        const response = await fetch('http://localhost:8000/github', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            clientId: env.clientId,
            code,
            clientSecret: env.clientSecret
          })
        })
        const { token } = await response.json()

        localStorage.setItem('token', token)
        this.$router.replace({ name: 'feeds' })

        console.log(token)
      } catch (e) {
      }
    }
  }
}
</script>
<style src="./auth.scss" lang="scss" scoped></style>
