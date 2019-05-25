import { shallowMount } from '@vue/test-utils'
import RepositoryCard from '@/components/organization/RepositoryCard.vue'

describe('<RepositoryCard/>', () => {
  const wrapper = shallowMount(RepositoryCard, {
    propsData: {
      repository: {
        name: 'Repository',
        totalStars: 20,
        totalForks: 10,
        totalOpenIssues: 3
      }
    }
  })

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('displays repository name ', () => {
    expect(wrapper.html()).toContain('Repository')
  })

  it('displays total stars', () => {
    expect(wrapper.html()).toContain('<i class="el-icon-star-on">20</i>')
  })

  // test('have the labels info (Issues)', () => {
  //   expect(wrapper.html().includes('Issues')).toBe(true)
  // })

  // test('have the labels info (Commit)', () => {
  //   expect(wrapper.html().includes('Commit')).toBe(true)
  // })

  // test('have the labels info (Pull Requests)', () => {
  //   expect(wrapper.html().includes('Pull Requests')).toBe(true)
  // })
})
