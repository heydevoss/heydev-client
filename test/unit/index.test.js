import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Index from '@/pages/index.vue'
import ContributorsList from '@/components/organization/ContributorsList'
import RepositoriesList from '@/components/organization/RepositoriesList'
import OrganizationCounts from '@/components/organization/OrganizationCounts'
import Avatar from '@/components/commons/Avatar'
import { Button } from 'element-ui'

Vue.use(Button)

describe('<Index/> Page', () => {
  const wrapper = shallowMount(Index, {
    data: () => ({
      organization: {
        name: 'Test',
        avatarUrl: '@/assets/avatar/default.png',
        url: 'www.github.com/testorg',
        login: 'testorg',
        websiteUrl: 'www.urltest.com',
        totalPullRequests: 50,
        totalCommits: 200,
        totalIssues: 1000
      }
    }),
    stubs: {
      Avatar,
      ContributorsList,
      RepositoriesList,
      OrganizationCounts,
      ApolloQuery: true,
      'el-button': Button
    }
  })

  it('should be a Vue instance and renders correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should contain organization avatar', () => {
    expect(wrapper.contains(Avatar)).toBe(true)
  })

  it('should contain organization name', () => {
    expect(
      wrapper.html().includes('<span class="org--name">Test</span>')
    ).toBeTruthy()
  })

  it('should contain organization counts data', () => {
    expect(wrapper.contains(OrganizationCounts)).toBeTruthy()
  })

  it('should contain organization repositories', () => {
    expect(wrapper.contains(RepositoriesList)).toBeTruthy()
  })

  it('should contain organization contributors', () => {
    expect(wrapper.contains(ContributorsList)).toBeTruthy()
  })

  it('should contain contributors section title', () => {
    expect(wrapper.html().includes('Contributors')).toBeTruthy()
  })

  it('should contain repositories section title', () => {
    expect(wrapper.html().includes('Repositories')).toBeTruthy()
  })
})
