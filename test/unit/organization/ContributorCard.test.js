import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import ContributorCard from '@/components/organization/ContributorCard.vue'
import { Col, Row, Card } from 'element-ui'

Vue.use(Col)
Vue.use(Row)
Vue.use(Card)

describe('<ContributorCard/>', () => {
  const $router = {
    path: '/',
    replace: () => {}
  }

  const wrapper = shallowMount(ContributorCard, {
    propsData: {
      contributor: {
        avatarUrl: '~/assets/avatar/default.png',
        login: 'test',
        bio: 'hey thats my test',
        totalIssues: 10,
        totalPullRequests: 2,
        totalCommits: 3
      }
    },
    mocks: {
      $router
    },
    stubs: {
      'el-card': Card,
      'el-row': Col,
      'el-col': Row
    }
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(wrapper.element).toMatchSnapshot()
  })

  it('renders the table ', () => {
    expect(wrapper.html()).toContain('<table>')
  })

  it('should have the contributor login ', () => {
    expect(wrapper.html()).toContain('test')
  })

  it('should have the contributor bio ', () => {
    expect(wrapper.html()).toContain('hey thats my test')
  })

  it('should render avatar', () => {
    expect(wrapper.html()).toContain('<img')
  })

  it('should have the labels info (Issues)', () => {
    expect(wrapper.html().includes('Issues')).toBe(true)
    expect(wrapper.html().includes('10')).toBe(true)
  })

  it('should have the labels info (Commit)', () => {
    expect(wrapper.html().includes('Commit')).toBe(true)
    expect(wrapper.html().includes('3')).toBe(true)
  })

  it('should have the labels info (Pull Requests)', () => {
    expect(wrapper.html().includes('Pull Requests')).toBe(true)
    expect(wrapper.html().includes('2')).toBe(true)
  })

  it('should redirect when card is clicked', () => {
    wrapper.trigger('click')
    // expect(window.location.href).toBe('/user/test')
  })
})
