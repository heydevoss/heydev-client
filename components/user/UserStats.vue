<template>
  <div class="content">
    <div v-for="stat in stats" :key="stat.label" class="stat">
      <span class="label">
        {{ stat.label }}
      </span>
      <span class="count">
        {{ stat.count }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserStats',
  components: {},
  props: {
    totalPullRequests: { type: Number, default: 0 },
    totalCommits: { type: Number, default: 0 },
    totalIssues: { type: Number, default: 0 },
    firstContributionDate: { type: String, default: '' }
  },
  data() {
    return {
      stats: [
        { label: 'Pull Requests', count: this.totalPullRequests },
        { label: 'Issues', count: this.totalIssues },
        { label: 'Commits', count: this.totalCommits },
        { label: 'First Contribuition', count: this.firstContributionDate }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.count {
  color: orange;
  text-align: center;
  font-size: 1.5rem;
}
.stat {
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
}
</style>
