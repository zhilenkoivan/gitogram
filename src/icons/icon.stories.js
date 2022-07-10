import icon from './icon.vue'

export default {
  title: 'icon',
  component: { icon },
  argTypes: {
    name: {
      control: { type: 'text' }
    }
  }
}

const template = (args) => ({
  components: { icon },
  data () {
    return {
      args
    }
  },
  template: `
    <icon :name="args.name" />
  `
})

export const Default = template.bind({})

Default.args = {
  name: 'triangle'
}
