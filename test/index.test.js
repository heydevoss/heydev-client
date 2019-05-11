//testar se nome aparece
//se botao de login aparece
//se botao de logout aparece
import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'
import LoginButton from '@/components/commons/LoginButton.vue'
import LogoutButton from '@/components/commons/LogoutButton.vue'

describe('Index', () => {
  const getToken = jest.fn()
  const wrapper = mount(Index, {
    mocks: {
      $apolloHelpers: {
        getToken
      }
    }
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('isAuthenticated is false when is not logged', () => {
    expect(wrapper.vm.isAuthenticated).toBe(false)
  })

  test('Login button appear when is not logged', () => {
    expect(wrapper.contains(LoginButton)).toBe(true)
  })

  test('Logout button not appear when is not logged', () => {
    expect(wrapper.contains(LogoutButton)).toBe(false)
  })

  test('Login button not appear when is logged', () => {
    wrapper.find(LoginButton).trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.contains(LoginButton)).toBe(false)
      done()
    })
  })


})

