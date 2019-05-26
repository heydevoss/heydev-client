import { shallowMount } from '@vue/test-utils'
import Avatar from '@/components/commons/Avatar.vue'

describe('LoginButton', () => {
  const wrapper = shallowMount(Avatar)

  it('should be a Vue instance and render correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should contain <img/> with default', () => {
    expect(wrapper.html()).toContain('<img src=""')
  })
  it('should contain <img/> with src passed', () => {
    wrapper.setProps({
      avatarUrl: '@/assets/avatar/default.png'
    })
    expect(wrapper.html()).toContain('<img src="@/assets/avatar/default.png"')
  })
})
