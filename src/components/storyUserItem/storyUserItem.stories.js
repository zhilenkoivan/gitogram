import storyUserItem from './storyUserItem.vue'

export default {
  title: 'storyUserItem',
  components: { storyUserItem },
  argTypes: {
    username: {
      control: { type: 'text' }
    },
    avatar: {
      control: { type: 'text' }
    }
  }
}

const template = (args) => ({
  components: { storyUserItem },
  data () {
    return {
      args
    }
  },
  template: `
    <story-user-item :avatar="args.avatar" :username="args.username"/>
  `
})
const templateBordered = (args) => ({
  components: { storyUserItem },
  data () {
    return {
      args
    }
  },
  template: `
    <story-user-item :avatar="args.avatar" :username="args.username" active/>
  `
})

export const Bordered = templateBordered.bind({})
export const Default = template.bind({})

Default.args = {
  username: 'username',
  avatar: 'https://picsum.photos/300/300'
}
Bordered.args = {
  username: 'username',
  avatar: 'https://picsum.photos/300/300'
}
