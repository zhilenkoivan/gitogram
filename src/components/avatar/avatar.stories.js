import avatar from './avatar.vue'

export default {
  title: 'avatar',
  components: {
    avatar
  },
  argTypes: {
    avatarUrl: { type: 'text' },
    size: {
      control: { type: 'select' },
      options: ['avatar_s', 'avatar_m', 'avatar_l']
    }
  }
}

const template = (args) => ({
  props: Object.keys(args),
  components: {
    avatar
  },
  data () {
    return {
      args
    }
  },
  template: '<avatar :avatarUrl="args.avatarUrl" :size="args.size"></avatar>'
})

export const Default = template.bind({})
Default.args = {
  avatarUrl: 'https://picsum.photos/300/300',
  size: 'avatar_s'
}
