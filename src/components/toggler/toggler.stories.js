import toggler from './toggler.vue'

export default {
  title: 'toggler',
  component: { toggler }
}

const template = () => ({
  components: {
    toggler
  },
  template: `
    <toggler></toggler>
  `
})

export const Default = template.bind({})
