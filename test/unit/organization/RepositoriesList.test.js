import { mount } from '@vue/test-utils'
import RepositoriesList from '@/components/organization/RepositoriesList.vue'
import RepositoryCard from '@/components/organization/RepositoryCard.vue'

describe('<RepositoriesList/>', () => {
  const wrapper = mount(RepositoriesList, {
    propsData: {
      quantity: 1
    },
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
      'el-button': '<button></button>',
      'repository-card': RepositoryCard,
      ApolloQuery: true
    }
  })

  it('should be a Vue instance and renders correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })
})
