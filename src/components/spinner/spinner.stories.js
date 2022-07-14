import spinner from './spinner.vue'

export default {
  title: 'spinner',
  components: {
    spinner
  }
}
const template = () => ({
  components: {
    spinner
  },
  template: `
    <spinner />
  `
})

export const Default = template.bind({})
