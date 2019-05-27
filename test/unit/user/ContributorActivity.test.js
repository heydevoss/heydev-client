import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import ContributorActivity from '@/components/user/ContributorActivity'
import { Timeline, TimelineItem } from 'element-ui'

Vue.use(Timeline)

describe('<ContributorActivity/> Component', () => {
  const wrapper = shallowMount(ContributorActivity, {
    stubs: {
      'el-timeline': Timeline,
      'el-timeline-item': TimelineItem
    }
  })

  it('should be a Vue instance and render correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should contain timeline', () => {
    expect(wrapper.contains(Timeline)).toBe(true)
  })

  it('should contain an array of activities', () => {
    expect(wrapper.vm.activities)
  })
})
