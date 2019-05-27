import { shallowMount } from '@vue/test-utils'
import Auth from '@/pages/auth/_token.vue'

describe('<Auth/> Page', () => {
  const $route = {
    params: {
      token: 'testeteste123'
    }
  }
  const onLogin = jest.fn()
  const wrapper = shallowMount(Auth, {
    mocks: {
      $route,
      $apolloHelpers: {
        onLogin
      },
      $router: {
        replace: jest.fn()
      }
    }
  })

  it('should be a Vue instance and renders correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })
})
