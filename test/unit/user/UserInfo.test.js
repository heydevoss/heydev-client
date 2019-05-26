import { shallowMount } from '@vue/test-utils'
import UserInfo from '@/components/user/UserInfo'
import Avatar from '@/components/commons/Avatar'

describe('<UserInfo/> Component', () => {
  function factory(props) {
    return shallowMount(UserInfo, {
      ...props
    })
  }
  const user = {
    name: 'UserTest',
    bio: 'Hey thats my test',
    location: 'Campina Grande',
    avatarUrl: '~/assets/avatar/default.png'
  }

  const wrapper = shallowMount(UserInfo, {
    propsData: {
      ...user
    },
    stubs: {
      avatar: Avatar
    }
  })

  it('is a Vue instance and renders correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should contain user data', () => {
    expect(wrapper.html()).toContain(user.name)
    expect(wrapper.html()).toContain(user.bio)
    expect(wrapper.html()).toContain(user.location)
    expect(wrapper.html()).toContain(user.avatarUrl)
  })

  it('should render correctly when no props are passed', () => {
    const wrapperWithoutProps = factory()
    expect(wrapperWithoutProps.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toContain(
      '<span class="user--location"><i class="el-icon-location"></i>'
    )
  })

  it('should set default avatar when its not passed', () => {
    wrapper.setProps({ avatarUrl: null })
    expect(wrapper.html()).toContain('<img src="" class="user--avatar">')
  })
})
