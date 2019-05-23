import { mount } from '@vue/test-utils'
import Repository from '@/components/organization/Repository.vue'

describe('Repository', () => {
  const wrapper = mount(Repository)

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders the correct header', () => {
    expect(wrapper.html()).toContain('<header class="box-header">')
  })

  it('renders img', () => {
    expect(wrapper.html()).toContain('<img')
  })

  test('have the img info (fork)', () => {
    expect(wrapper.html().includes('fork')).toBe(true)
  })

  test('have the img info (stars)', () => {
    expect(wrapper.html().includes('star')).toBe(true)
  })
})
