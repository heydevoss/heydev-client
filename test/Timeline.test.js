import { shallowMount } from '@vue/test-utils'
import Timeline from '@/components/user/Timeline'

describe('<Timeline/> Component', () => {
  const wrapper = shallowMount(Timeline)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
