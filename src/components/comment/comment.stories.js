import comment from './comment.vue'

export default {
  title: 'comment',
  components: { comment },
  argTypes: {
    username: {
      control: { type: 'text' }
    },
    text: {
      control: { type: 'text' }
    }
  }
}

const template = (args) => ({
  components: {
    comment
  },
  data () {
    return {
      args
    }
  },
  template: `
    <comment :username="args.username" :text="args.text" />
  `
})

export const Default = template.bind({})

Default.args = {
  username: 'username',
  text: 'Lorem ipsum dolor sit amet.'
}
