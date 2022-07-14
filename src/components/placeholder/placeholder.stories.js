import placeholder from './placeholder.vue'

export default {
  title: 'placeholder',
  components: { placeholder }
}

const template = () => ({
  components: {
    placeholder
  },
  template: `
    <placeholder />
  `
})

export const Default = template.bind({})
