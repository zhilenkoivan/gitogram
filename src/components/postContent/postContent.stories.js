import postContent from './postContent.vue'
export default {
  title: 'postContent',
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    text: {
      control: { type: 'text' }
    }
  }
}
const template = (args) => ({
  components: {
    postContent
  },
  data () {
    return {
      args
    }
  },
  template: `
    <postContent :title="args.title" :text="args.text" />
  `
})
export const Default = template.bind({})

Default.args = {
  title: 'no topic',
  text: 'no text'
}
