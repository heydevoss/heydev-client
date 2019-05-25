<template>
  <div>
    <ApolloQuery
      :query="require('@/apollo/queries/getRepositories.gql')"
      :variables="{ quantity }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading" v-loading="loading" class="loading apollo" />

        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <div v-else-if="data" class="repositories">
          <div
            v-for="repository in data.organization.repositories"
            :key="repository.id"
            class="repository"
          >
            <RepositoryCard :repository="repository" />
          </div>
        </div>
        <div v-else v-loading="true" class="loading" />
      </template>
    </ApolloQuery>
    <el-button class="button--show-more" @click="showMoreRepositories"
      >Show more</el-button
    >
  </div>
</template>
<script>
import RepositoryCard from '@/components/organization/RepositoryCard'
export default {
  name: 'RepositoriesList',
  components: {
    RepositoryCard
  },
  data() {
    return {
      quantity: 6
    }
  },
  methods: {
    showMoreRepositories() {
      this.quantity += 3
    }
  }
}
</script>
<style lang="scss" scoped>
.repositories {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.repository {
  margin: 3px 3px;
  width: 300px;
}

.loading {
  display: flex;
  justify-content: center;
}
</style>
