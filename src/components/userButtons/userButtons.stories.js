import userButtons from './userButtons.vue'

export default {
  title: 'userButtons',
  component: {
    userButtons
  }
}
const template = () => ({
  components: {
    userButtons
  },
  template: `
    <user-buttons />
  `
})
export const Default = template.bind({})
