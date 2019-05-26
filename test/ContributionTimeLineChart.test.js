import { mount } from '@vue/test-utils'
import ContributionTimeLineChart from '@/components/user/ContributionTimeLineChart.vue'

describe('ContributionTimeLineChart', () => {
  const wrapper = mount(ContributionTimeLineChart)

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders the chartjs-line', () => {
    expect(wrapper.html()).toContain('<chartjs-line')
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
