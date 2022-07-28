import xButton from './xButton.vue'
import { spinner } from '../spinner'

export default {
  title: 'xButton',
  component: { xButton },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    },
    size: {
      options: ['size_s', 'size_m'],
      control: { type: 'select' }
    },
    theme: {
      options: ['theme_grey', 'theme_green'],
      control: { type: 'select' }
    }
  }
}

const template = (args) => ({
  components: {
    xButton
  },
  subcomponents: {
    spinner
  },
  data () {
    return { args }
  },
  template: `
    <x-button v-bind="args">Following</x-button>
  `
})

export const Default = template.bind({})

Default.args = {
  hoverText: 'Unfollow',
  size: 'size_s',
  theme: 'theme_green'
}
