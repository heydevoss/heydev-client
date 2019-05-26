import { shallowMount } from '@vue/test-utils'
import RepositoryCard from '@/components/organization/RepositoryCard.vue'

describe('<RepositoryCard/>', () => {
  const wrapper = shallowMount(RepositoryCard, {
    stubs: {
      'el-card': true
    },
    propsData: {
      repository: {
        name: 'MyTestRepository',
        totalStars: 20,
        totalForks: 10,
        totalOpenIssues: 3
      }
    }
  })

  it('should be a Vue instance and renders correctly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should render repository props', () => {
    expect(wrapper.html()).toContain('MyTestRepository')
    expect(wrapper.html()).toContain('20')
    expect(wrapper.html()).toContain('10')
    expect(wrapper.html()).toContain('3')
  })

  it('It should render repository correctly when props are not passed', () => {
    wrapper.setProps({
      repository: {
        name: 'MyTestRepository'
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.html()).toContain('MyTestRepository')
    wrapper.setProps({})
  })
})
