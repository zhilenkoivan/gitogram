import comment from './comment.vue'

export default {
  title: 'comment',
  component: { comment },
  argTypes: {
    username: { type: 'text' },
    text: { type: 'text' }
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
    <comment :username="args.username" :text="args.text"></comment>
  `
})

export const Default = template.bind({})
Default.args = {
  username: 'Default Name',
  text: 'Default text'
}
