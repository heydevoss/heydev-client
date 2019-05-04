import { mount } from '@vue/test-utils'
import LoginButton from '@/components/commons/LoginButton.vue'

describe('LoginButton', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LoginButton)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
