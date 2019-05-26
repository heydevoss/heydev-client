import { mount } from '@vue/test-utils'
import ContributionChart from '@/components/user/ContributionChart.vue'

describe('ContributionChart', () => {
  const wrapper = mount(ContributionChart)

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders the chartjs-doughnut ', () => {
    expect(wrapper.html()).toContain('<chartjs-doughnut')
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
