import Vue from 'vue'
import { mount } from '@vue/test-utils'
import RepositoriesList from '@/components/organization/RepositoriesList.vue'
import RepositoryCard from '@/components/organization/RepositoryCard.vue'
import { Button } from 'element-ui'

Vue.component(Button.name, Button)

describe('<RepositoriesList/>', () => {
  const wrapper = mount(RepositoriesList, {
    data: () => ({
      getRepositories: {
        organization: {
          repositories: [
            {
              name: 'MyTestRepository',
              totalStars: 20,
              totalForks: 10,
              totalOpenIssues: 3
            }
          ]
        }
      }
    }),
    stubs: {
      'el-card': true,
      'el-button': Button,
      'repository-card': RepositoryCard,
      ApolloQuery: true
    }
  })

  it('should be a Vue instance and renders correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })
  it('should increase quantity of contributors when button is clicked', () => {
    expect(wrapper.vm.quantity).toBe(6)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.quantity).toBe(9)
  })
})
