import { shallowMount } from '@vue/test-utils'
import OrganizationCounts from '@/components/organization/OrganizationCounts.vue'

describe('<OrganizationCounts/>', () => {
  const wrapper = shallowMount(OrganizationCounts, {
    propsData: {
      totalPullRequests: 13,
      totalCommits: 2,
      totalIssues: 4
    }
  })

  it('should be a Vue instance and renders correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render counts', () => {
    expect(wrapper.html()).toContain('13')
    expect(wrapper.html()).toContain('2')
    expect(wrapper.html()).toContain('4')
  })

  it('should render labels', () => {
    expect(wrapper.html()).toContain('Issues')
    expect(wrapper.html()).toContain('Pull Requests')
    expect(wrapper.html()).toContain('Commits')
  })

  it('should set values to 0 when its not passed the counts', () => {
    const wrapperNew = shallowMount(OrganizationCounts)
    expect(wrapperNew.html().includes('span class="value">0</span>'))
    expect(wrapper.html()).toContain('Issues')
    expect(wrapperNew.html()).toContain('Pull Requests')
    expect(wrapperNew.html()).toContain('Commits')
  })
})
