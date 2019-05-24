import { mount } from '@vue/test-utils'
import ProfileCard from '@/components/organization/ProfileCard.vue'

describe('ProfileCard', () => {
  const wrapper = mount(ProfileCard)

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders the table ', () => {
    expect(wrapper.html()).toContain('<table>')
  })

  it('renders img', () => {
    expect(wrapper.html()).toContain('<img')
  })

  test('have the labels info (Issues)', () => {
    expect(wrapper.html().includes('Issues')).toBe(true)
  })

  test('have the labels info (Commit)', () => {
    expect(wrapper.html().includes('Commit')).toBe(true)
  })

  test('have the labels info (Pull Requests)', () => {
    expect(wrapper.html().includes('Pull Requests')).toBe(true)
  })
})
