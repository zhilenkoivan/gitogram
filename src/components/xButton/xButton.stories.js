import xButton from './xButton.vue'

export default {
  title: 'xButton',
  component: { xButton },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    }
  }
}

const template = (args) => ({
  components: { xButton },
  data () {
    return { args }
  },
  template: `
    <x-button v-bind="args">Following</x-button>
  `
})
const templateDisabled = (args) => ({
  components: { xButton },
  data () {
    return { args }
  },
  template: `
    <x-button v-bind="args" disabled>Following</x-button>
  `
})
const templateLoading = () => ({
  components: { xButton },
  template: `
    <x-button loading></x-button>
  `
})

export const Default = template.bind({})
export const Loading = templateLoading.bind({})
export const Disabled = templateDisabled.bind({})

Default.args = {
  hoverText: 'Unfollow'
}
