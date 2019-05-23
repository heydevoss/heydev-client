import { shallowMount } from '@vue/test-utils'
import UserInfo from '@/components/user/UserInfo'

describe('<UserInfo/> Component', () => {
  const wrapper = shallowMount(UserInfo)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
