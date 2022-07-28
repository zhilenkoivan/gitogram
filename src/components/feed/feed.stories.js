import feed from './feed.vue'

export default {
  title: 'feed',
  component: { feed },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    }
  }
}

const template = () => ({
  components: { feed },
  template: `
    <feed />
  `
})

export const Default = template.bind({})
