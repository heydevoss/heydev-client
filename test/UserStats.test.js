import { mount } from '@vue/test-utils'
import UserStats from '@/components/user/UserStats'

describe('<UserStats/> Component', () => {
  const wrapper = mount(UserStats)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders the stats', () => {
    expect(wrapper.html()).toContain('Pull Requests')
    expect(wrapper.html()).toContain('Issues')
    expect(wrapper.html()).toContain('Commits')
  })
})
