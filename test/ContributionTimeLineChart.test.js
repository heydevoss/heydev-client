import { mount } from '@vue/test-utils'
import ContributionTimeLineChart from '@/components/user/ContributionTimeLineChart.vue'

describe('ContributionTimeLineChart', () => {
    const wrapper = mount(ContributionTimeLineChart)
  
    test('is a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
    })
  
    it('renders the table ', () => {
      expect(wrapper.html()).toContain('<chartjs-line')
    })
  })
  