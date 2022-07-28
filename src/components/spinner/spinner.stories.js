import spinner from './spinner.vue'

export default {
  title: 'spinner',
  component: { spinner }
}

const template = () => ({
  components: {
    spinner
  },
  template: `
    <spinner></spinner>
  `
})

export const Default = template.bind({})
