<template>
  <div class="c-stories-slider">
    <div class="stories-container">
      <ul class="stories" ref="slider">
        <li id="item" class="stories-item" v-for="(trending, ndx) in trendings"
        :key="trending.id" ref="item"
        >
          <slide
          :data="getStoryData(trending)"
          :active="slideNdx === ndx"
          :loading="slideNdx === ndx && loading"
          @onProgressFinish="handleSlide(ndx + 1)"
          />
          <div class="buttons" v-if="slideNdx === ndx">
            <button v-if="hasHext" class="btn btn-next" @click="handleSlide(ndx + 1)">
              <span class="icon">
                <icon name="arrow" />
              </span>
            </button>
            <button v-if="hasPrev" class="btn btn-prev" @click="handleSlide(ndx - 1)">
              <span class="icon">
                <icon name="arrow" />
              </span>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { slide } from '../slide'
import { mapState, mapActions } from 'vuex'
import { icon } from '../../icons'
export default {
  components: {
    slide,
    icon
  },
  props: {
    initialSlide: {
      type: Number
    }
  },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      btnsShown: true
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data
    }),
    hasHext () {
      return this.slideNdx !== this.trendings.length - 1
    },
    hasPrev () {
      return this.slideNdx !== 0
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme'
    }),
    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.trendings[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    getStoryData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.owner?.avatar_url,
        username: obj.owner?.login,
        content: obj.readme
      }
    },
    moveSlider (slideNdx) {
      const { slider } = this.$refs
      const item = document.getElementById('item')
      const slideWidth = parseInt(
        getComputedStyle(item).getPropertyValue('width'),
        10
      )
      this.slideNdx = slideNdx
      this.sliderPosition = -(slideWidth * slideNdx)

      slider.style.transform = `translateX(${this.sliderPosition}px)`
    },
    async loadReadme () {
      this.loading = true
      this.btnsShown = false
      try {
        await this.fetchReadmeForActiveSlide()
      } catch (e) {
        console.log(e)
        throw e
      } finally {
        this.loading = false
        this.btnsShown = true
      }
    },
    async handleSlide (slideNdx) {
      this.moveSlider(slideNdx)
      console.log(slideNdx)
      await this.loadReadme()
    }
  },
  async mounted () {
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex((item) => item.id === this.initialSlide)
      await this.handleSlide(ndx)
    }
    await this.fetchTrendings()
    await this.loadReadme()
  }
}
</script>
<style src="./storiesSlider.scss" lang="scss" scoped></style>
