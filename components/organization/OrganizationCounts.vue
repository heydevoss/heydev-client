<template>
  <div class="organization-counts">
    <div v-for="count in counts" :key="count.label" class="org-count">
      <div class="org-count--item">
        <span class="value">
          {{ count.value }}
        </span>
        <span class="label">
          {{ count.label }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrganizationCounts',
  props: {
    totalPullRequests: Number,
    totalCommits: Number,
    totalIssues: Number,
  },
  data() {
    return {
      counts: [
        { label: 'Issues', value: this.totalIssues },
        { label: 'Pull Requests', value: this.totalPullRequests },
        { label: 'Commits', value: this.totalCommits },
      ]
    }
  }
}
</script>

<style lang="scss">
.organization-counts {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.org-count {
  display: flex;
  flex-direction: column;
}
.org-count--item {
  display: flex;
  flex-direction: column;
}

.value {
  font-size: calc(2.0em + 1vw);
  color: #FFA600;
}

.label {
  margin-top: 4px;
  font-size: calc(0.2em + 1vw);
}

@media screen and (max-width: 820px) {
  .organization-counts {
    flex-direction: column;
    justify-content: space-between;
  }  
  .label {
    font-size: calc(1em + 1vw);
  }
}
</style>
