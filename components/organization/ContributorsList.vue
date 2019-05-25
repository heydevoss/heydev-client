<template>
  <div>
    <ApolloQuery
      :query="require('@/apollo/queries/getContributors.gql')"
      :variables="{ quantity }"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <div v-if="loading" v-loading="loading" class="loading apollo" />

        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <div v-else-if="data" class="contributors">
          <div
            v-for="contributor in data.organization.contributors"
            :key="contributor.login"
            class="contributor"
          >
            <ContributorCard :contributor="contributor" />
          </div>
        </div>
        <div v-else v-loading="true" class="loading" />
      </template>
    </ApolloQuery>
    <el-button class="button--show-more" @click="showMoreContributors"
      >Show more</el-button
    >
  </div>
</template>
<script>
import ContributorCard from '@/components/organization/ContributorCard'
export default {
  name: 'ContributorsList',
  components: {
    ContributorCard
  },
  data() {
    return {
      quantity: 6
    }
  },
  methods: {
    showMoreContributors() {
      this.quantity += 3
    }
  }
}
</script>
<style lang="scss" scoped>
.contributors {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.contributor {
  margin: 3px 3px;
}

.loading {
  display: flex;
  justify-content: center;
}

.button--show-more {
  margin-top: 10px;
}
</style>
