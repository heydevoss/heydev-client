import { shallowMount } from '@vue/test-utils'
import ContributorTimeline from '@/components/user/ContributorTimeline'

describe('<Timeline/> Component', () => {
  const wrapper = shallowMount(ContributorTimeline)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
