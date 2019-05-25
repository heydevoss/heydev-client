<template>
  <div class="card">
    <el-card shadow="hover">
      <div slot="header" class="card--header">
        <span class="repository--name">{{ repository.name }}</span>
      </div>
      <div class="repository--counters">
        <i class="el-icon-star-on">{{ repository.totalStars }}</i>
        <i class="el-icon-warning">{{ repository.totalOpenIssues }}</i>
        <img width="15px" height="15px" src="/fork.png" />
        {{ repository.totalForks }}
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Repository',
  props: {
    repository: Object
  }
}
</script>

<style lang="scss">
.card {
  min-width: 200px;
  min-height: 200px;
}
</style>
