import { shallowMount } from '@vue/test-utils'
import ContributionChart from '@/components/user/ContributionChart.vue'

describe('ContributionChart', () => {
  const contributor = {
    openPr: 20,
    closedPr: 2,
    openIssues: 1,
    closedIssues: 13,
    commits: 5
  }
  const factory = props =>
    shallowMount(ContributionChart, {
      propsData: {
        ...props
      },
      stubs: {
        'chartjs-doughnut': '<div class="chartjs-doughnut-test"></div>',
        'vue-no-ssr': true
      }
    })

  const wrapper = factory({
    openPrContributor: contributor.openPr,
    closedPrContributor: contributor.closedPr,
    openIssuesContributor: contributor.openIssues,
    closedIssuesContributor: contributor.closedIssues,
    commitsContributor: contributor.commits
  })

  test('should be a Vue instance and render correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render the chartjs-bar', () => {
    expect(wrapper.html().includes('<div class="chartjs-doughnut-test"></div>'))
  })

  it('should contain contributor data', () => {
    expect(wrapper.vm.openPrContributor).toBe(contributor.openPr)
    expect(wrapper.vm.closedPrContributor).toBe(contributor.closedPr)
    expect(wrapper.vm.openIssuesContributor).toBe(contributor.openIssues)
    expect(wrapper.vm.closedIssuesContributor).toBe(contributor.closedIssues)
    expect(wrapper.vm.commitsContributor).toBe(contributor.commits)
  })

  it('should contain the correct labels', () => {
    expect(wrapper.vm.labels.includes('Pull Requests Open'))
    expect(wrapper.vm.labels.includes('Pull Requests Closed'))
    expect(wrapper.vm.labels.includes('Pull Requests Open'))
    expect(wrapper.vm.labels.includes('Issues Open'))
    expect(wrapper.vm.labels.includes('Issues Closed'))
    expect(wrapper.vm.labels.includes('Commits'))
  })
  it('should render when no props are passed', () => {
    const emptyWrapper = factory()
    expect(emptyWrapper.isVueInstance()).toBeTruthy()
  })
})
