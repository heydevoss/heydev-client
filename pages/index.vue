<template>
  <div class="container">
    <div class="info">
      <Avatar :avatar-url="organization.avatarUrl" class="org--avatar" />
      <div>
        <span class="org--name">{{ organization.name }}</span>
        <img
          width="30px"
          heigth="30px"
          :src="require('@/assets/githubIcon.svg')"
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
import getOrganization from '@/apollo/queries/getOrganization.gql'

import Avatar from '@/components/commons/Avatar'

export default {
  name: 'Organization',
  components: {
    Avatar,
    ContributorsList,
    RepositoriesList
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
