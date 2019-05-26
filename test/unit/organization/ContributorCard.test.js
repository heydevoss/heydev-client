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
    },
    stubs: {
      'el-card': true,
      'el-row': true,
      'el-col': true
    }
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders the table ', () => {
    expect(wrapper.html()).toContain('<table>')
  })

  it('should have the contributor login ', () => {
    expect(wrapper.html()).toContain('test')
  })

  it('should have the contributor bio ', () => {
    expect(wrapper.html()).toContain('hey thats my test')
  })

  it('should render avatar', () => {
    expect(wrapper.html()).toContain('<img')
  })

  test('should have the labels info (Issues)', () => {
    expect(wrapper.html().includes('Issues')).toBe(true)
    expect(wrapper.html().includes('10')).toBe(true)
  })

  test('should have the labels info (Commit)', () => {
    expect(wrapper.html().includes('Commit')).toBe(true)
    expect(wrapper.html().includes('3')).toBe(true)
  })

  test('should have the labels info (Pull Requests)', () => {
    expect(wrapper.html().includes('Pull Requests')).toBe(true)
    expect(wrapper.html().includes('2')).toBe(true)
  })
})
