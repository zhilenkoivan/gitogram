<template>
  <div class="c-container">
    <div class="header">
      <x-progress v-on:onFinish="progressEnd"/>
      <story-user-item
      :avatar="avatar"
      :username="'nameU'"
      class="avatar"
      />
    </div>
    <div class="content">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius eveniet voluptas adipisci accusamus unde ea fuga quisquam maxime, dolorum, quis architecto ratione odit sit corporis, aliquid eligendi aut vel!</p>
    </div>
    <div class="footer">
      <x-button>Following</x-button>
    </div>
  </div>
</template>

<script>
import { xProgress } from '../progress'
import { storyUserItem } from '../storyUserItem'
import { xButton } from '../xButton'
export default {
  name: 'slide',
  components: {
    xProgress,
    storyUserItem,
    xButton
  },
  data () {
    return {
      avatar: 'https://picsum.photos/300/300',
      nameU: 'Camilla'
    }
  },
  methods: {
    progressEnd () {
      console.log('Finish')
    }
  }
}

</script>

<style src="./slide.scss" lang="scss" scoped></style>
