import button from './button.vue'

export default {
  title: "button",
  component: { button },
  argTypes: {
    hoverText: {
      control: {type: 'text'}
    }
  }
}

const template = (args) => ({
  components: {xButton: button},
  data () {
    return { args }
  },
  template: `
    <x-button v-bind="args">Following</x-button>
  `
})


export const Default = template.bind({})

Default.args = {
  hoverText: "Unfollow"
}
