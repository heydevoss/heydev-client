import { shallowMount } from '@vue/test-utils'
import UserStats from '@/components/user/UserStats'

describe('<UserStats/> Component', () => {
  const wrapper = shallowMount(UserStats, {
    propsData: {
      totalPullRequests: 5,
      totalCommits: 34,
      totalIssues: 21,
      firstContributionDate: '2018-04-04'
    }
  })

  it('should be a Vue instance and renders correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render the stats labels', () => {
    expect(wrapper.html()).toContain('Pull Requests')
    expect(wrapper.html()).toContain('Issues')
    expect(wrapper.html()).toContain('Commits')
  })

  it('should render the stats values', () => {
    expect(wrapper.html()).toContain('5')
    expect(wrapper.html()).toContain('34')
    expect(wrapper.html()).toContain('21')
    expect(wrapper.html()).toContain('2018-04-04')
  })

  it('should render without errors when no prop is passed', () => {
    wrapper.setProps({
      totalPullRequests: null,
      totalCommits: null,
      totalIssues: null,
      firstContributionDate: null
    })
    expect(wrapper.isEmpty()).toBeFalsy()
  })
})
