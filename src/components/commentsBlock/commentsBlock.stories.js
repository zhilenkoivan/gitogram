import commentsBlock from './commentsBlock.vue'
export default {
  title: 'commentsBlock',
  components: { commentsBlock }
}

const template = () => ({
  components: {
    commentsBlock
  },
  template: `
    <comments-block />
  `
})

export const Default = template.bind({})
