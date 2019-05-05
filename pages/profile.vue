<template>
  <div>
    <ApolloQuery :query="require('@/apollo/queries/getUserInfo.gql')">
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occured</div>

        <!-- Result -->
        <div v-else-if="data" class="result">
          <h1>
            Hey {{ data.me.login }} :)
          </h1>
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
export default {
  middleware: ['authenticated']
}
</script>

<style lang="scss" scoped>
.result {
  display: flex;
  align-items: center;
  align-content: center;
  min-height: 80vh;
  justify-content: center;
}
</style>

