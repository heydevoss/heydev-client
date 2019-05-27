import Vue from 'vue'
import { mount } from '@vue/test-utils'
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
  const replace = jest.fn()

  const wrapper = mount(AccountSection, {
    mocks: {
      $apolloHelpers: {
        onLogout,
        getToken
      },
      $router: {
        replace
      }
    },
    stubs: {
      'el-button': Button,
      LoginButton,
      'logout-button': LogoutButton
    }
  })

  it('shoulbe be a Vue instance and render correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should contain button', () => {
    expect(wrapper.html().includes('<button>'))
  })

  it('should contain <LoginButton/> when not logged', () => {
    expect(wrapper.contains(LoginButton)).toBe(true)
    expect(wrapper.contains(LogoutButton)).toBe(false)
  })

  it('isAuthenticated should be false when is not logged', () => {
    expect(wrapper.vm.isAuthenticated).toBe(false)
  })

  it('isAuthenticated should be true when user log', () => {
    const loginButton = wrapper.find('button')
    loginButton.trigger('click')
  })

  it('should contain <LogoutButton/> when user is logged', () => {})
})
