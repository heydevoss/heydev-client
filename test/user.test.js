import { mount } from '@vue/test-utils'

import User from '@/pages/user.vue'

describe('User Page', () => {
  const getToken = jest.fn()
  const wrapper = mount(User, {
    mocks: {
      $apolloHelpers: {
        getToken
      }
    }
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
