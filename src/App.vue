<template>
  <feeds />
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
import { feeds } from './pages/feeds'
import { gitData } from './components/gitData'
import * as api from './api'

export default {
  name: 'App',
  components: {
    feeds,
    gitData
  },
  data () {
    return {
      items: []
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

<style src="./global.scss" lang="scss"></style>
