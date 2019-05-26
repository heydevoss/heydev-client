import { shallowMount } from '@vue/test-utils'
import CompareChart from '@/components/user/CompareChart.vue'

describe('<CompareChart/>', () => {
  const contributor = {
    pr: 20,
    issues: 13,
    commits: 5
  }
  const org = {
    pr: 20,
    issues: 13,
    commits: 5
  }

  const factory = props =>
    shallowMount(CompareChart, {
      propsData: {
        ...props
      },
      stubs: {
        'chartjs-bar': '<div class="chartjs-bar-test"></div>',
        'vue-no-ssr': true
      }
    })

  const wrapper = factory({
    prContributor: contributor.pr,
    issuesContributor: contributor.issues,
    commitsContributor: contributor.commits,
    prOrganization: org.pr,
    issuesOrganization: org.issues,
    commitsOrganization: org.commits
  })

  test('should be a Vue instance and render correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render the chartjs-bar', () => {
    expect(wrapper.html().includes('<div class="chartjs-bar-test"></div>'))
  })

  it('should contain contributor data', () => {
    expect(wrapper.vm.prContributor).toBe(contributor.pr)
    expect(wrapper.vm.issuesContributor).toBe(contributor.issues)
    expect(wrapper.vm.commitsContributor).toBe(contributor.commits)
  })

  it('should contain organization data', () => {
    expect(wrapper.vm.prOrganization).toBe(org.pr)
    expect(wrapper.vm.issuesOrganization).toBe(org.issues)
    expect(wrapper.vm.commitsOrganization).toBe(org.commits)
  })
  it('should contain Pull Requests, Issues and Commits labels', () => {
    expect(wrapper.vm.labels.includes('Pull Requests'))
    expect(wrapper.vm.labels.includes('Issues'))
    expect(wrapper.vm.labels.includes('Commits'))
  })
  it('should render when no props are passed', () => {
    const emptyWrapper = factory()
    expect(emptyWrapper.isVueInstance()).toBeTruthy()
  })
})
