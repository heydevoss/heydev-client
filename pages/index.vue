<template>
  <div class="container">
    <div class="organizationInfo">
      <Avatar :avatar-url="organization.avatarUrl" />
      <h1>{{ organizationInfo.name }}</h1>
      <h2>
        <a
          v-if="organizationInfo.websiteUrl != null"
          :href="'' + organizationInfo.websiteUrl + ''"
        >
          Site
        </a>
      </h2>
      <GitHubButton :url="organizationInfo.url" />
    </div>
  </div>
</template>

<script>
import GitHubButton from '@/components/organization/GitHubButton'
import getOrganization from '@/apollo/queries/getOrganization.gql'
import getRepositories from '@/apollo/queries/getRepositories.gql'
import getContributors from '@/apollo/queries/getRepositories.gql'

import Avatar from '@/components/commons/Avatar'

export default {
  name: 'Organization',
  components: {
    GitHubButton,
    Avatar
  },

  data() {
    return {
      organizationInfo: {}
    }
  },

  apollo: {
    organizationInfo: {
      query: getOrganization
    },
    repositories: {
      query: getRepositories,
      variables: {
        quantity: 10
      }
    },
    contributors: {
      query: getContributors,
      variables: {
        quantity: 10
      }
    }

  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

a {
  text-decoration: none;
}

.organizationInfo {
  display: grid;
  grid-gap: 20px 20px;
}
</style>
