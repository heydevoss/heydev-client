import { shallowMount } from '@vue/test-utils'
import LoginButton from '@/components/commons/LoginButton.vue'

describe('LoginButton', () => {
  const wrapper = shallowMount(LoginButton, {
    stubs: {
      'el-button': '<button></button>'
    }
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should redirect when clicked', () => {
    wrapper.trigger('click')
    expect(window.location.href).toBe('http://localhost/')
  })
})
