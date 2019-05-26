import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import AccountSection from '@/components/navbar/AccountSection.vue'
import LogoutButton from '@/components/commons/LogoutButton.vue'
import LoginButton from '@/components/commons/LoginButton.vue'
import { Button } from 'element-ui'

Vue.use(Button)

describe('<AccountSection/>', () => {
  delete window.location
  window.location = { reload: jest.fn() }
  const onLogout = jest.fn()
  const getToken = jest.fn()
  const wrapper = shallowMount(AccountSection, {
    mocks: {
      $apolloHelpers: {
        onLogout,
        getToken
      }
    },
    stubs: {
      'el-button': Button,
      'login-button': LoginButton,
      'logout-button': LogoutButton
    }
  })

  it('shoulbe be a Vue instance and render correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })
})
