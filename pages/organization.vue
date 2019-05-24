<template>
  <div class="container">
    <div class="organizationInfo">
      <Avatar :avatar-url="organization.avatarUrl" />
      <h1>{{ organization.name }}</h1>
      <h2>
        <a
          v-if="organization.websiteUrl != null"
          :href="'' + organization.websiteUrl + ''"
        >
          Site
        </a>
      </h2>
      <GitHubButton :url="organization.url" />
    </div>
  </div>
</template>

<script>
import GitHubButton from '@/components/organization/GitHubButton'
import getOrganization from '@/apollo/queries/getOrganization.gql'
import Avatar from '@/components/commons/Avatar'

export default {
  components: {
    GitHubButton,
    Avatar
  },

  data() {
    return {
      organization: {}
    }
  },

  apollo: {
    organization: {
      query: getOrganization
    }
  }
}
</script>

<style scoped>
.container {
  /* margin: 0 auto; */
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
