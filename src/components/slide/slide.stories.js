import slide from './slide.vue'

export default {
  title: 'slide',
  component: { slide },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    }
  }
}

const template = () => ({
  components: { slide },
  template: `
    <slide />
  `
})

export const Default = template.bind({})
