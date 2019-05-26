import { shallowMount } from '@vue/test-utils'
import ContributionTimeLineChart from '@/components/user/ContributionTimeLineChart.vue'

describe('<ContributionTimeLineChart/>', () => {
  const wrapper = shallowMount(ContributionTimeLineChart, {
    stubs: {
      'chartjs-line': '<div class="chartjs-line-test"></div>'
    }
  })

  test('should be a Vue instance and render correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render the chartjs-line', () => {
    expect(wrapper.html().includes('<div class="chartjs-line-test"></div>'))
  })
  it('should contain label contain Commits', () => {
    expect(wrapper.vm.dataLabel).toBe('Commits')
  })
})
