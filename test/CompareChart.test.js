import { mount } from '@vue/test-utils'
import CompareChart from '@/components/user/CompareChart.vue'

describe('CompareChart', () => {
  const wrapper = mount(CompareChart)

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders the table ', () => {
    expect(wrapper.html()).toContain('<chartjs-bar')
  })
})
