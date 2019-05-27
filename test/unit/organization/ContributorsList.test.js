import Vue from 'vue'
import { mount } from '@vue/test-utils'
import ContributorsList from '@/components/organization/ContributorsList.vue'
import ContributorCard from '@/components/organization/ContributorCard.vue'
import { Button, Card } from 'element-ui'

Vue.use(Button)
Vue.use(Card)

describe('<ContributorsList/>', () => {
  const wrapper = mount(ContributorsList, {
    data: () => ({
      getRepositories: {
        organization: {
          contributors: [
            {
              login: 'user',
              name: 'User M',
              avatarUrl: '@/assets/avatar/default.ong',
              bio: 'Hey thats my test',
              websiteUrl: 'www.website.com',
              totalIssues: 12,
              totalCommits: 4,
              totalPullRequests: 3
            }
          ]
        }
      }
    }),
    stubs: {
      'el-card': Card,
      'el-button': Button,
      'contributor-card': ContributorCard,
      ApolloQuery: true
    }
  })

  it('should be a Vue instance and renders correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should contain button', () => {
    expect(wrapper.contains(Button)).toBe(true)
  })

  it('should increase quantity of contributors when button is clicked', () => {
    expect(wrapper.vm.quantity).toBe(6)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.quantity).toBe(9)
  })
})
