import { mount } from '@vue/test-utils'
import CompareChart from '@/components/user/CompareChart.vue'

describe('CompareChart', () => {
  const wrapper = mount(CompareChart)

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders the chartjs-bar', () => {
    expect(wrapper.html()).toContain('<chartjs-bar')
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
