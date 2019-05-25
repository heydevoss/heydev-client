import { shallowMount } from '@vue/test-utils'
import ContributorCard from '@/components/organization/ContributorCard.vue'

describe('<ContributorCard/>', () => {
  const wrapper = shallowMount(ContributorCard, {
    propsData: {
      contributor: {
        avatarUrl: '~/assets/avatar/default.png',
        login: 'test',
        bio: 'hey thats my test',
        totalIssues: 10,
        totalPullRequests: 2,
        totalCommits: 3
      }
    }
  })

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
