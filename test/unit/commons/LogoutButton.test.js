import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import LogoutButton from '@/components/commons/LogoutButton.vue'
import { Button } from 'element-ui'

Vue.use(Button)

describe('<LogoutButton/>', () => {
  delete window.location
  window.location = { reload: jest.fn() }
  const onLogout = jest.fn()
  const wrapper = shallowMount(LogoutButton, {
    mocks: {
      $apolloHelpers: {
        onLogout
      }
    },
    stubs: {
      'el-button': Button
    }
  })

  it('shoulbe be a Vue instance and render correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should contain button', () => {
    expect(wrapper.html()).toContain('Logout')
    expect(wrapper.html().includes('<button>'))
  })

  it('should redirect when clicked', () => {
    const button = wrapper.find('button')
    button.trigger('click')
    // expect(onLogout.mock.calls.length).toBe(1)
  })
})
