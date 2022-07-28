import card from './card.vue'
import { stats } from '../stats'

export default {
  title: 'card',
  component: { card },
  subcomponents: {
    stats
  },
  argTypes: {
    title: { type: 'text' },
    description: { type: 'text' },
    stars: { type: Number },
    forks: { type: Number }
  }
}

const template = (args) => ({
  components: {
    card,
    stats
  },
  data () {
    return {
      args
    }
  },
  template: `
    <card :title="args.title" :description="args.description" :stars="args.stars" :forks="args.forks"></card>
  `
})

export const Default = template.bind({})
Default.args = {
  title: 'Default Title',
  description: 'Default descr',
  stars: 16,
  forks: 10
}
