import { shallowMount } from '@vue/test-utils'
import toggler from './toggler'

describe('toggler component', () => {
  it('change text on click', async () => {
    const wrapper = shallowMount(toggler)

    expect(wrapper.find('.text').text()).toBe('Show issues')

    await wrapper.find('button').trigger('click')

    expect(wrapper.find('.text').text()).toBe('Hide issues')
  })
})
