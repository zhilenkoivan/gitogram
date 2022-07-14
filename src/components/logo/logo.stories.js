import logo from './logo.vue'

export default {
  title: 'logo',
  component: { logo }
}

const templateBlack = () => ({
  components: { logo },
  template: `
    <logo />
  `
})
const templateWhite = () => ({
  components: { logo },
  template: `
    <logo white />
  `
})

export const Default = templateBlack.bind({})
export const WhiteItem = templateWhite.bind({})
