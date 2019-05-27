import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import LoginButton from '@/components/commons/LoginButton.vue'
import { Button } from 'element-ui'

Vue.use(Button)

describe('LoginButton', () => {
  const wrapper = shallowMount(LoginButton, {
    stubs: {
      'el-button': Button
    }
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should contain button', () => {
    expect(wrapper.html()).toContain('Login')
    expect(wrapper.html().includes('<button>'))
  })

  it('should redirect when clicked', () => {
    const button = wrapper.find('button')
    button.trigger('click')
    expect(window.location.href).toBe('http://localhost/')
  })
})
