import stats from './stats.vue'
import { icon } from '../../icons'

export default {
  title: 'stats',
  component: { stats },
  subcomponents: {
    icon
  }
}

const template = (args) => ({
  components: {
    stats,
    icon
  },
  data () {
    return {
      args
    }
  },
  template: `
    <stats :stars="args.stars" :forks="args.forks"></stats>
  `
})

export const Default = template.bind({})
Default.args = {
  stars: 16,
  forks: 10
}
