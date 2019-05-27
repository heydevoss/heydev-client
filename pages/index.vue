<template>
  <div class="container">
    <div class="info">
      <Avatar :avatar-url="organization.avatarUrl" class="org--avatar" />
      <div>
        <span class="org--name">{{ organization.name }}</span>
        <button class="org-info--github" @click="redirectToOrgSite" />
        <organization-counts
          :total-pull-requests="organization.totalPullRequests"
          :total-issues="organization.totalIssues"
          :total-commits="organization.totalCommits"
          class="org-info--counts"
        />
      </div>
    </div>
    <section class="contributors">
      <span class="section--title">Contributors</span>
      <contributorsList />
    </section>
    <section class="repositories">
      <span class="section--title">Repositories</span>
      <repositoriesList />
    </section>
  </div>
</template>

<script>
import ContributorsList from '@/components/organization/ContributorsList'
import RepositoriesList from '@/components/organization/RepositoriesList'
import OrganizationCounts from '@/components/organization/OrganizationCounts'
import getOrganization from '@/apollo/queries/getOrganization.gql'
import Avatar from '@/components/commons/Avatar'

export default {
  name: 'Organization',
  components: {
    Avatar,
    ContributorsList,
    RepositoriesList,
    OrganizationCounts
  },
  data() {
    return {
      organization: {}
    }
  },
  methods: {
    redirectToOrgSite() {
      window.location = `https://github.com/${this.organization.login}`
    }
  },
  apollo: {
    organization: {
      query: getOrganization
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 5% 20%;
  color: #47525e;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10%;
}

.section--title {
  font-size: calc(1.5em + 1vw);
  margin-bottom: 20px;
  display: block;
}

.org--name {
  font-size: calc(3em + 1vw);
}
.org-info--counts {
  margin-top: 20%;
}

.org-info--github {
  background: url('~@/assets/githubIcon.svg');
  width: 30px;
  height: 30px;
  border: none !important;
  cursor: pointer;
}

section {
  margin-top: 40px;
}
@media screen and (max-width: 820px) {
  .container {
    margin: 0;
  }
  section {
    margin-top: 10px;
  }
}
</style>
