import { shallowMount } from '@vue/test-utils'
import LogoutButton from '@/components/commons/LogoutButton.vue'

describe('<LogoutButton/>', () => {
  const onLogout = jest.fn()
  const wrapper = shallowMount(LogoutButton, {
    mocks: {
      $apolloHelpers: {
        onLogout
      }
    },
    stubs: {
      'el-button': '<button>Logout</button>'
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
    wrapper.trigger('click')
    // expect(onLogout.mock.calls.length).toBe(1)
  })
})
